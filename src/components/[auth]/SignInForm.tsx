"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/utils/zod/auth";
import { Form } from "../core/form";
import { Input } from "../core/input";
import { Button } from "../core/button";
import type z from "zod/v3";
import { authClient } from "@/lib/authClient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

type SignInSchema = z.infer<typeof signInSchema>;

export default function SignInForm() {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    mode: "onSubmit",
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (fields: SignInSchema) => {
    await authClient.signIn.email({
      ...fields,
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
        },
        onResponse: () => {
          setIsPending(false);
        },
        onError: (ctx) => {
          const message = ctx.error.message || "Something went wrong";
          toast.error(message);
        },
        onSuccess: () => {
          router.push("/dashboard");
          form.reset();
        },
      },
    });
  };

  return (
    <Form.FormRoot {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full grid-cols-1 gap-4"
      >
        <Form.FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Email</Form.FormLabel>
              <Form.FormControl>
                <Input placeholder="yourname@example.com" {...field} />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Password</Form.FormLabel>
              <Form.FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  autoComplete="off"
                  {...field}
                />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Button disabled={isPending}>Login</Button>
      </form>
    </Form.FormRoot>
  );
}
