import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <SignIn />
    </section>
  );
};

export default SignInPage;
