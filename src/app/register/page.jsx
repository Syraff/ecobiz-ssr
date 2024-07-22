import React from "react";
import RegisterComp from "@/components/register/RegisterComp";

export async function generateMetadata({ params }) {
  if (params.category && !params.slug)
    return {
      title: "Ecobiz" + " | " + params.category,
    };

  if (params.slug && params.category)
    return {
      title: "Ecobiz" + " | " + params.slug,
    };

  return {
    title: "Ecobiz" + " | " + "Register",
  };
}

export default function RegisterPage() {
  return (
    <>
      <RegisterComp />
    </>
  );
}
