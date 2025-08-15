import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export const serverSession = async () => {
  return await auth.api.getSession({
    headers: await headers(),
  });
};
