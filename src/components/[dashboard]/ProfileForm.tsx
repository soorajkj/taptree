"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod/v3";
import { Form } from "@/components/core/form";
import { Icon } from "@/components/core/icon";

const socialLinkCreateSchema = z.object({
  name: z.string().min(1, "Name is required"),
  biography: z.string(),
  email: z.string().email(),
  website: z.string().url(),
  phone: z.string(),
  city: z.string(),
});

type SocialLinkCreateSchema = z.infer<typeof socialLinkCreateSchema>;

export default function ProfileForm() {
  const form = useForm<SocialLinkCreateSchema>({
    resolver: zodResolver(socialLinkCreateSchema),
    mode: "onChange",
    defaultValues: {
      name: "Sarah Green",
      website: "sarahgreen.com",
      email: "sarahgreen@gmail.com",
      phone: "555-123-4567",
      city: "",
      biography:
        "Sarah is a fashion-focused content creator, brand ambassador and influencer based in NYC.",
    },
  });

  const onSubmit = async () => {
    form.reset();
  };

  return (
    <Form.FormRoot {...form}>
      <form
        className="mx-auto flex w-full max-w-sm flex-col items-center gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Form.FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormControl>
                <input
                  placeholder="Sarah Green"
                  className="flex field-sizing-content resize-none items-center gap-1 text-2xl leading-none text-white outline-none placeholder:text-neutral-700"
                  {...field}
                />
              </Form.FormControl>
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormControl>
                <input
                  placeholder="City (optional)"
                  className="field-sizing-content resize-none text-white outline-none placeholder:text-neutral-700"
                  {...field}
                />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="biography"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormControl>
                <textarea
                  placeholder="Write a short story about yourself..."
                  className="field-sizing-content resize-none text-center outline-none placeholder:text-neutral-700"
                  {...field}
                />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <Form.FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <Form.FormItem className="grid-flow-col items-center">
                <Form.FormLabel>
                  <Icon icon="Mail" className="size-5" />
                </Form.FormLabel>
                <Form.FormControl>
                  <input
                    placeholder="Email (optional)"
                    className="field-sizing-content resize-none text-white outline-none placeholder:text-neutral-700"
                    {...field}
                  />
                </Form.FormControl>
              </Form.FormItem>
            )}
          />
          <Form.FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <Form.FormItem className="grid-flow-col items-center">
                <Form.FormLabel>
                  <Icon icon="Phone" className="size-5" />
                </Form.FormLabel>
                <Form.FormControl>
                  <input
                    placeholder="Phone (optional)"
                    className="field-sizing-content resize-none text-white outline-none placeholder:text-neutral-700"
                    {...field}
                  />
                </Form.FormControl>
              </Form.FormItem>
            )}
          />
          <Form.FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <Form.FormItem className="grid-flow-col items-center">
                <Form.FormLabel>
                  <Icon icon="Globe" className="size-5" />
                </Form.FormLabel>
                <Form.FormControl>
                  <input
                    placeholder="Website (optional)"
                    className="field-sizing-content resize-none text-white outline-none placeholder:text-neutral-700"
                    {...field}
                  />
                </Form.FormControl>
              </Form.FormItem>
            )}
          />
        </div>
      </form>
      <div className="flex items-center gap-4">
        <button className="inline-flex h-10 min-h-10 w-full cursor-pointer items-center justify-center rounded-lg bg-emerald-600 text-white">
          Edit profile
        </button>
      </div>
    </Form.FormRoot>
  );
}
