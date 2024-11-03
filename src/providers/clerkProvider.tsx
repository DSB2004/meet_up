"use client";

import React, { ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";
export default function ClerkProviderWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <ClerkProvider
        appearance={{
          // layout
          variables: {
            colorBackground: "#1C1F2E",
            colorInputText: "#fff",
            colorText: "#C9DDFF",
            colorInputBackground: "#161925",
            colorPrimary: "#0E78F9",
            colorNeutral: "#fff",
            colorTextSecondary: "#fff",
          },
        }}
      >
        {children}
      </ClerkProvider>
    </>
  );
}
