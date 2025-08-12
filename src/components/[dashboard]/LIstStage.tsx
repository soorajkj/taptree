"use client";

import { Fragment } from "react";
import { Dialog } from "../core/dialog";
import { Icon } from "../core/icon";
import { Button } from "../core/button";
import type { THandleWithPlatform } from "@/types/handle";

export default function ListStage({
  onAdd,
}: {
  handles: THandleWithPlatform[];
  onAdd: () => void;
  handleReorder: (data: { platformIds: string[] }) => void;
  onEditHandle: (handle: THandleWithPlatform) => void;
  onToggleArchive: (handle: THandleWithPlatform) => void;
}) {
  return (
    <Fragment>
      <Dialog.DialogHeader>
        <div className="flex items-center justify-between">
          <Dialog.DialogTitle>Social icons</Dialog.DialogTitle>
          <Dialog.DialogClose className="flex items-center justify-center rounded-lg p-2 hover:bg-neutral-800/30">
            <Icon icon="X" className="size-5" />
          </Dialog.DialogClose>
        </div>
      </Dialog.DialogHeader>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-white">Show visitors where to find you</h3>
        <p>
          Add your social profiles, email and more as linked icons on your
          Linktree.
        </p>
      </div>
      <div className="flex h-full max-h-80 flex-col gap-4 overflow-y-auto"></div>
      <Dialog.DialogFooter>
        <Button onClick={onAdd} className="w-full">
          Add new button
        </Button>
      </Dialog.DialogFooter>
    </Fragment>
  );
}
