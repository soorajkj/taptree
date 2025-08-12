"use client";

import React, { useState } from "react";
import { Icon } from "../core/icon";
import { Dialog } from "../core/dialog";
import { type InferResponseType } from "hono";
import type { rpc } from "@/lib/rpc";
import ChooseStage from "./ChooseStage";
import ListStage from "./ListStage";
import CreateStage from "./CreateStage";
import UpdateStage from "./UpdateStage";
import { createHandleSchema } from "@/utils/zod/handles";
import { type z } from "zod/v3";
import { usePlatforms } from "@/hooks/usePlatforms";
import { useHandles } from "@/hooks/useHandles";
import { useHandlesMutations } from "@/hooks/useHandlesMutations";
import { type THandleWithPlatform } from "@/types/handle";

type Stage = "list" | "choose" | "add" | "update";
type Platform = InferResponseType<typeof rpc.api.me.platforms.$get>[number];

export default function ManageHandles() {
  const [stage, setStage] = useState<Stage>("list");
  const platformsQuery = usePlatforms();
  const handlesQuery = useHandles();
  const { createHandleMutation, reorderHandleMutation, updateHandleMutation } =
    useHandlesMutations();

  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [handleToUpdate, setHandleToUpdate] =
    useState<THandleWithPlatform | null>(null);

  const addedPlatformIds = new Set(
    handlesQuery.data?.map((handle) => handle.platformId) ?? []
  );

  const remainingPlatforms = platformsQuery.data?.filter(
    (p) => !addedPlatformIds.has(p.id)
  );

  const _createHandlePayloadSchema = createHandleSchema.omit({
    platformId: true,
  });
  type CreateHandlePayload = z.infer<typeof _createHandlePayloadSchema>;

  const handleAddLink = async (
    platformId: string,
    data: CreateHandlePayload
  ) => {
    await createHandleMutation.mutateAsync({ platformId, ...data });
    setStage("list");
  };

  const handleCloseDialog = () => {
    setSelectedPlatform(null);
    setStage("list");
  };

  function renderStage() {
    const stages: Record<Stage, React.ReactNode> = {
      list: (
        <ListStage
          handles={handlesQuery.data || []}
          onAdd={() => setStage("choose")}
          handleReorder={(data) => reorderHandleMutation.mutate(data)}
          onEditHandle={(handle: THandleWithPlatform) => {
            setHandleToUpdate(handle);
            setStage("update");
          }}
          onToggleArchive={async (handle: THandleWithPlatform) => {
            await updateHandleMutation.mutateAsync({
              id: handle.id,
              json: {
                url: handle.url,
              },
            });
          }}
        />
      ),
      choose: (
        <ChooseStage
          platforms={remainingPlatforms || []}
          setSelectedPlatform={setSelectedPlatform}
          back={() => setStage("list")}
          onSelect={() => setStage("add")}
        />
      ),
      add: (
        <CreateStage
          back={() => setStage("choose")}
          selectedPlatform={selectedPlatform}
          onSave={handleAddLink}
        />
      ),
      update: (
        <UpdateStage
          back={() => setStage("list")}
          handle={handleToUpdate}
          onSave={async (url: string) => {
            if (!handleToUpdate) return;
            await updateHandleMutation.mutateAsync({
              id: handleToUpdate.id,
              json: { url },
            });
            setStage("list");
          }}
        />
      ),
    };
    return stages[stage];
  }

  return (
    <div className="mx-auto grid w-full grid-cols-1 gap-2">
      <Dialog.DialogRoot
        onOpenChange={(open) => {
          if (!open) handleCloseDialog();
        }}
      >
        <Dialog.DialogTrigger asChild>
          <button className="flex min-h-16 shrink-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-neutral-800/30 px-4 py-2">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-sm text-white">
              <Icon icon="Plus" className="size-6 opacity-20" />
            </span>
            <span>Add new handle</span>
          </button>
        </Dialog.DialogTrigger>
        <Dialog.DialogContent className="max-w-md" aria-describedby={undefined}>
          {renderStage()}
        </Dialog.DialogContent>
      </Dialog.DialogRoot>
    </div>
  );
}
