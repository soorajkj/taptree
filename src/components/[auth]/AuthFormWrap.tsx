import Link from "next/link";
import React, { type ComponentProps, type ReactNode } from "react";

type Prompt = {
  text: string;
  url: string;
  label: string;
};

interface AuthFormWrapProps extends ComponentProps<"div"> {
  heading: ReactNode;
  form: ReactNode;
  prompt: Prompt;
}

export default function AuthFormWrap({
  heading,
  form,
  prompt,
  ...props
}: AuthFormWrapProps) {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4" {...props}>
      <h2 className="font-archivo text-center text-2xl font-medium text-white">
        {heading}
      </h2>
      {form}
      <div className="flex items-center justify-center text-sm">
        <p>
          {prompt.text}{" "}
          <Link href={prompt.url} className="underline underline-offset-2">
            {prompt.label}
          </Link>
        </p>
      </div>
    </div>
  );
}
