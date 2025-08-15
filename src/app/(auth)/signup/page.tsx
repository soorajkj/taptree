import React from "react";
import SignUpForm from "@/components/[auth]/SignUpForm";
import AuthFormWrap from "@/components/[auth]/AuthFormWrap";

export default function Page() {
  return (
    <AuthFormWrap
      heading="Join Taptree"
      prompt={{
        text: "Already have an account?",
        label: "Login",
        url: "/signin",
      }}
      form={<SignUpForm />}
    ></AuthFormWrap>
  );
}
