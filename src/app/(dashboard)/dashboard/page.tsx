import React from "react";
import ClientPage from "@/components/[dashboard]/ClientPage";
import { serverSession } from "@/utils/session";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await serverSession();

  if (!session) redirect("/signin");

  return <ClientPage />;
}
