"use client";

import React from "react";
import { authClient } from "@/lib/authClient";
import { useRouter } from "next/navigation";

export default function SignOut() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const handleClick = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/signin");
          router.refresh();
        },
      },
    });
  };

  return (
    <button onClick={handleClick}>
      Signout <span className="text-xs">{JSON.stringify(session)}</span>
    </button>
  );
}
