"use client";
import React from "react";
import Button from "@/components/button/simple_button";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();

  return (
    <div className="h-screen flex gap-6 items-center justify-center flex-col">
      <h1 className="text-4xl font-semibold">Your have left the call</h1>
      <div className="flex gap-3 items-center">
        <Button
          onClick={() => {
            const last_meet = sessionStorage.getItem("last-meet");
            last_meet ? router.replace(last_meet) : null;
          }}
          className="bg-4 px-3"
        >
          Rejoin Call
        </Button>
        <Button className="bg-4 px-3" onClick={() => router.replace("/")}>
          Back to Home
        </Button>
      </div>
    </div>
  );
}
