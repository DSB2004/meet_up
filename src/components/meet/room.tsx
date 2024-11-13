"use client";
import React, { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { IoCopyOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import { PaginatedGridLayout, CallControls } from "@stream-io/video-react-sdk";
import useMeet from "@/hooks/use-meet";
import Chat from "../chat";
export default function Room({ id }: { id: string }) {
  const router = useRouter();

  const pathname = usePathname();
  const { RegisterMeetEvent } = useMeet();

  const handleLeave = () => {
    sessionStorage.setItem("last-meet", pathname);
    router.replace("/meet/leave");
  };

  const { toast } = useToast();
  const MeetID = () =>
    toast({
      title: "Meeting Joining",
      description: (
        <div className="mt-2">
          <p className="font-light text-sm">Share invite code with other</p>
          <div className="bg-4 flex p-2 justify-between items-center mt-2 w-full">
            <h6 className="font-normal text-xs">{id}</h6>
            <IoCopyOutline
              onClick={async () => await navigator.clipboard.writeText(id)}
              className="ml-5 w-4 h-4"
            />
          </div>
        </div>
      ),
      duration: 10000,
    });

  useEffect(() => {
    MeetID();
    RegisterMeetEvent();
  }, []);
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
