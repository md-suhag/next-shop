import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <SignUp />
    </section>
  );
};

export default SignUpPage;
