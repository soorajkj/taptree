"use client";

import { useCallback, type ComponentProps, type ReactNode } from "react";
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type UniqueIdentifier,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { tv, type VariantProps } from "tailwind-variants";

type SortableItemBase = { id: UniqueIdentifier };

interface SortableListProps<T extends SortableItemBase>
  extends VariantProps<typeof sortableListStyles>,
    ComponentProps<"ul"> {
  items: T[];
  onDragEventEnd: (items: T[]) => void;
  renderItem: (item: T) => ReactNode;
}

export default function SortableList<T extends SortableItemBase>({
  items,
  onDragEventEnd,
  renderItem,
  variant = "list",
  className,
}: SortableListProps<T>) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;
      const from = items.findIndex(({ id }) => id === active.id);
      const to = items.findIndex(({ id }) => id === over.id);
      const state = arrayMove(items, from, to);
      onDragEventEnd(state);
    },
    [items, onDragEventEnd]
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      modifiers={[restrictToParentElement]}
      onDragEnd={handleDragEnd}
    >
      <ul
        className={sortableListStyles({ variant, className })}
        role="application"
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item) => renderItem(item))}
        </SortableContext>
      </ul>
    </DndContext>
  );
}

const sortableListStyles = tv({
  base: ["grid w-full gap-2"],
  variants: { variant: { grid: "grid-cols-2", list: "grid-cols-1" } },
});
