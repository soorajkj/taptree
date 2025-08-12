"use client";

import { type rpc } from "@/lib/rpc";
import { type InferResponseType } from "hono";
import { Fragment } from "react";
import { Dialog } from "../core/dialog";
import { Icon } from "../core/icon";
import MediaIcon, { type MediaIconType } from "../MediaIcon";

type Platform = InferResponseType<typeof rpc.api.me.platforms.$get>[number];

export default function ChooseStage({
  platforms,
  setSelectedPlatform,
  back,
  onSelect,
}: {
  platforms: Platform[];
  setSelectedPlatform: (platform: Platform | null) => void;
  back: () => void;
  onSelect: () => void;
}) {
  const handlePlatformSelect = (platform: Platform) => {
    setSelectedPlatform(platform);
    onSelect();
  };

  return (
    <Fragment>
      <Dialog.DialogHeader>
        <div className="flex items-center justify-between">
          <button
            onClick={back}
            className="flex items-center justify-center rounded-lg p-2 hover:bg-neutral-800/30"
          >
            <Icon icon="ArrowLeft" className="size-5" />
          </button>
          <Dialog.DialogTitle>Add social icon</Dialog.DialogTitle>
          <Dialog.DialogClose className="flex items-center justify-center rounded-lg p-2 hover:bg-neutral-800/30">
            <Icon icon="X" className="size-5" />
          </Dialog.DialogClose>
        </div>
      </Dialog.DialogHeader>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-white">Choose a platform</h3>
        <p className="text-sm text-neutral-400">
          Select the social platform you want to add to your profile
        </p>
      </div>
      <div className="flex max-h-72 flex-col overflow-y-auto">
        {!platforms.length ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <p className="text-neutral-400">No more platforms available</p>
            <p className="text-sm text-neutral-500">
              All platforms have been added
            </p>
          </div>
        ) : (
          platforms.map((platform) => (
            <button
              key={platform.id}
              className="flex h-12 min-h-12 w-full cursor-pointer items-center justify-between overflow-clip rounded-lg px-3 py-1 transition duration-75 ease-out outline-none hover:bg-neutral-800/30 focus:bg-neutral-800/30 focus:outline-none"
              onClick={() => handlePlatformSelect(platform)}
            >
              <div className="flex items-center gap-4">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-sm text-neutral-50">
                  <MediaIcon icon={platform.icon as MediaIconType} />
                </span>
                <p className="text-left font-medium">{platform.name}</p>
              </div>
              <div className="relative shrink-0">
                <span className="size-4">
                  <Icon icon="ChevronRight" />
                </span>
              </div>
            </button>
          ))
        )}
      </div>
    </Fragment>
  );
}
