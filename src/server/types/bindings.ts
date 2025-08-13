import { type auth } from "@/lib/auth";
import type prisma from "@/lib/prisma";

type Variables = {
  db: typeof prisma;
  auth: typeof auth;
  user: typeof auth.$Infer.Session.user | null;
  session: typeof auth.$Infer.Session.session | null;
};

export interface AppBindings {
  Variables: Variables;
}
