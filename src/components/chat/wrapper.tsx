import React, { ReactNode, useState, useEffect } from "react";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { useToast } from "@/hooks/use-toast";
import { DefaultGenerics, Channel } from "stream-chat";
import { Event } from "stream-chat";
export default function Wrapper({
  children,
  channel,
}: {
  children: ReactNode;
  channel?: Channel<DefaultGenerics>;
}) {
  const [isOpen, toggleOpen] = useState(false);
  const { toast } = useToast();

  const handleNewMessage = (event: Event<DefaultGenerics>) => {
    toast({
      title: event.message?.user?.name || "User",
      description: event.message?.text,
    });
  };

  useEffect(() => {
    if (isOpen === false) {
      if (channel) {
        channel?.on("message.new", handleNewMessage);
      }
      return () => {
        channel?.off("message.new", handleNewMessage);
      };
    }
  }, [channel, isOpen]);

  return (
    <div
      style={{ zIndex: 500 }}
      className={`fixed top-0 right-0 lg:relative z-50  h-screen  ml-auto `}
    >
      <div className="flex justify-center gap-2 align-top h-full">
        <IoChatbubbleEllipses
          title="Open Chat"
          className="w-6 h-6 mt-2"
          onClick={() => toggleOpen((prev) => !prev)}
        />
        <div
          className={`${
            isOpen ? "w-90" : "w-0"
          } transition-all duration-500 bg-4 overflow-hidden`}
        >
          <div className="w-90 flex flex-col h-full ">{children}</div>
        </div>
      </div>
    </div>
  );
}
