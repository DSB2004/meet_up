"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import Setup from "@/components/meet/setup";
import Room from "@/components/meet/room";
import { useCall } from "@/hooks/use-call";
import Joining from "@/components/loading/joining";
export default function page() {
  const id = useParams().id as string;
  const [isSetup, toggleSetup] = useState(false);
  const { call, loading } = useCall(id ? id : "");

  if (loading) {
    return <Joining />;
  }

  return (
    <StreamCall call={call}>
      <StreamTheme>
        {!isSetup ? (
          <Setup
            joinCall={async () => {
              toggleSetup((prev) => !prev);
              await call?.join();
            }}
          />
        ) : (
          <Room id={id} />
        )}
      </StreamTheme>
    </StreamCall>
  );
}
