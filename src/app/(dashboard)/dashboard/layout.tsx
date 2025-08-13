import React from "react";
import Header from "@/components/[dashboard]/Header";
import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-neutral-100 dark:bg-neutral-950">
      <Header />
      <div className="mx-auto flex w-full max-w-xl flex-1 gap-6">
        <main className="w-full flex-1">{children}</main>
      </div>
    </div>
  );
}
