"use client";

import { useForm } from "react-hook-form";
import type z from "zod/v3";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/utils/zod/auth";
import { Form } from "@/components/core/form";
import { Input } from "@/components/core/input";
import { Button } from "@/components/core/button";
import { authClient } from "@/lib/authClient";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useState } from "react";

type SignUpSchema = z.infer<typeof signUpSchema>;

export default function SignUpForm() {
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    mode: "onSubmit",
    defaultValues: { email: "", password: "", name: "", username: "" },
  });

  const onSubmit = async (fields: SignUpSchema) => {
    await authClient.signUp.email({
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
          form.reset();
          toast.success("Registration successfull");
          router.push("/signin");
        },
      },
    });
    form.reset();
  };

  return (
    <Form.FormRoot {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid w-full grid-cols-1 gap-4"
      >
        <Form.FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Name</Form.FormLabel>
              <Form.FormControl>
                <Input placeholder="Sara Jane" {...field} />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
        <Form.FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <Form.FormItem>
              <Form.FormLabel>Username</Form.FormLabel>
              <Form.FormControl>
                <Input placeholder="sarajane" {...field} />
              </Form.FormControl>
              <Form.FormMessage />
            </Form.FormItem>
          )}
        />
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
        <Button disabled={isPending}>Get started</Button>
      </form>
    </Form.FormRoot>
  );
}
