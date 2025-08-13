import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { admin, openAPI, username } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  advanced: {
    database: {
      generateId: false,
    },
  },
  // make sure nextCookies is the last plugin in the array
  plugins: [openAPI(), username(), admin(), nextCookies()],
});
