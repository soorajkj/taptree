import React from "react";
import SignInForm from "@/components/[auth]/SignInForm";
import AuthFormWrap from "@/components/[auth]/AuthFormWrap";

export default function Page() {
  return (
    <AuthFormWrap
      heading="Welcome back"
      form={<SignInForm />}
      prompt={{
        text: "Don't have an account?",
        label: "Sign up",
        url: "/signup",
      }}
    ></AuthFormWrap>
  );
}
