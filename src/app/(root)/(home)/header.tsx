"use client";

import React from "react";
import Wrapper from "@/components/header/wrapper";
import dynamic from "next/dynamic";
import { IoVideocamOutline } from "react-icons/io5";

const SignedIn = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.SignedIn),
  { ssr: false }
);
const UserButton = dynamic(
  () => import("@clerk/nextjs").then((mod) => mod.UserButton),
  { ssr: false }
);

export default function Header() {
  return (
    <Wrapper>
      <span className="font-bold uppercase flex items-center gap-2">
        <IoVideocamOutline className="w-6 h-6" /> Meet Up
      </span>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </Wrapper>
  );
}
