import React from "react";
import { useChannelStateContext } from "stream-chat-react";
import Card from "./card";
export default function List() {
  const { messages } = useChannelStateContext();
  console.log(messages);
  return (
    <>
      <h1 className="text-base m-3 opacity-40">In-Call Messages</h1>
      <div className="flex  align-top  h-full w-full flex-col gap-2 px-2">
        {messages?.map((ele) => (
          <Card props={ele} key={ele.id} />
        ))}
      </div>
    </>
  );
}
