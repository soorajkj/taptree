import React from "react";
import { Icon } from "@/components/core/icon";
import { type InferResponseType } from "hono";
import { type rpc } from "@/lib/rpc";
import Image from "next/image";

interface PermaLinkProps {
  user: InferResponseType<(typeof rpc.api.profile)[":username"]["$get"]>;
}

export default function PermaLink({}: PermaLinkProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center">
        <div className="size-16 overflow-clip rounded-full border-4 border-neutral-900">
          <Image
            alt=""
            height={64}
            width={64}
            src={
              "https://framerusercontent.com/images/gjhvusBEsI9hRN7i1JYLAZIMuwc.png"
            }
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-1">
            <h1 className="font-archivo text-2xl leading-none font-semibold text-white">
              Sara Green
            </h1>
            <Icon
              icon="BadgeCheck"
              className="fill-amber-500 stroke-neutral-900"
              width={24}
              height={24}
            />
          </div>
        </div>
        <p>@saragreen</p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <p>Est. 2003</p>
        <span>·</span>
        <p>NYC, USA</p>
        <span>·</span>
        <p>she/her</p>
      </div>
      <div className="flex items-center justify-center text-center">
        <p className="max-w-sm">
          Sarah is a fashion-focused content creator, brand ambassador and
          influencer based in NYC.
        </p>
      </div>
      <div className="flex items-center justify-center gap-6">
        <div className="flex items-center gap-1 leading-none">
          <Icon icon="Globe" className="size-5" />
          <p className="text-neutral-50">sarahgreen.com</p>
        </div>
        <div className="flex items-center gap-1 leading-none">
          <Icon icon="Phone" className="size-5" />
          <p className="text-neutral-50">555-123-4567</p>
        </div>
      </div>
    </div>
  );
}
