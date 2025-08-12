"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type rpc } from "@/lib/rpc";
import { type InferResponseType } from "hono";
import { Fragment } from "react";
import { Icon } from "../core/icon";
import { Dialog } from "../core/dialog";
import { Button } from "../core/button";
import { Input } from "../core/input";
import { Form } from "../core/form";
import { createHandleSchema } from "@/utils/zod/handles";
import type z from "zod/v3";

const createHandlePayload = createHandleSchema.omit({ platformId: true });

type Platform = InferResponseType<typeof rpc.api.me.platforms.$get>[number];
type CreateHandlePayload = z.infer<typeof createHandlePayload>;

export default function CreateStage({
  back,
  selectedPlatform,
  onSave,
}: {
  back: () => void;
  selectedPlatform: Platform | null;
  onSave: (platformId: string, url: CreateHandlePayload) => Promise<void>;
}) {
  const form = useForm({
    resolver: zodResolver(createHandlePayload),
    mode: "onSubmit",
    defaultValues: { url: "" },
  });

  const onSubmit = async (data: CreateHandlePayload) => {
    if (!selectedPlatform) return;
    await onSave(selectedPlatform.id, data);
    form.reset();
  };

  if (!selectedPlatform) return null;

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
          <Dialog.DialogTitle>Add {selectedPlatform.name}</Dialog.DialogTitle>
          <Dialog.DialogClose className="flex items-center justify-center rounded-lg p-2 hover:bg-neutral-800/30">
            <Icon icon="X" className="size-5" />
          </Dialog.DialogClose>
        </div>
      </Dialog.DialogHeader>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-white">
          Add your {selectedPlatform.name} profile
        </h3>
        <p className="text-sm text-neutral-400">
          Enter the URL to your {selectedPlatform.name} profile
        </p>
      </div>
      <Form.FormRoot {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <Form.FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <Form.FormItem>
                <Form.FormLabel>URL</Form.FormLabel>
                <Form.FormControl>
                  <Input {...field} />
                </Form.FormControl>
                <Form.FormMessage />
              </Form.FormItem>
            )}
          />
          <Button className="w-full">Save</Button>
        </form>
      </Form.FormRoot>
    </Fragment>
  );
}
