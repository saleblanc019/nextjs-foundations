"use client";

import { useRouter } from "next/navigation";
import React from "react";

const GiveName = () => {
  const router = useRouter();

  return (
    <div>
      My name is Usama Israr Khan.
      <br />
      <button onClick={() => router.push("/name/address")}>
        Go to address page
      </button>
    </div>
  );
};

export default GiveName;
