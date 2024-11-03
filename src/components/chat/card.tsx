import React from "react";
import { useUser } from "@clerk/nextjs";
import { StreamMessage } from "stream-chat-react";

export default function Card({ props }: { props: StreamMessage }) {
  const { user } = useUser();

  return (
    <>
      <div
        className={`flex gap-1 ${
          props.user?.id === user?.id ? "ml-auto" : "mr-auto"
        }`}
      >
        <img src={props.user?.image} className="w-4 h-4 rounded-full" />
        <div className="min-w-20 max-w-1/2  bg-2 p-1 rounded-lg flex flex-col gap-2 relative">
          <p className="text-xs p-0.5 opacity-80 flex gap-1"> {props.text}</p>
          <p className="text-xxs opacity-50 ml-auto mt-auto">
            {props.created_at
              ? new Date(props.created_at).toLocaleTimeString()
              : ""}
          </p>
        </div>
      </div>
    </>
  );
}
