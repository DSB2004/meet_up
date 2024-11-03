"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { PaginatedGridLayout, CallControls } from "@stream-io/video-react-sdk";
import Chat from "../chat";
export default function Room({ id }: { id: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const handleLeave = () => {
    sessionStorage.setItem("last-meet", pathname);
    router.replace("/meet/leave");
  };
  return (
    <div className="relative flex  h-screen">
      <div className="flex flex-col w-full h-full p-2">
        <div className="w-full h-full overflow-y-auto border-2 ">
            <PaginatedGridLayout />
               </div>
        <div className="flex flex-1 justify-center items-center mt-auto border-2 ">
          <CallControls onLeave={() => handleLeave()}></CallControls>
        </div>
      </div>
      <Chat id={id}></Chat>
    </div>
  );
}
