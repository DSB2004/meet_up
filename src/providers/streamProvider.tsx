"use client";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { useUser } from "@clerk/nextjs";
import { ReactNode, useEffect, useState } from "react";
import { tokenProvider } from "@/actions/stream.actions";
import Loading from "@/components/loading/loading";

const apiKey = process.env.NEXT_PUBLIC_STREAM_APP_API_KEY as string;

const StreamProvider = ({ children }: { children: ReactNode }) => {
  const { user, isLoaded } = useUser();
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const [chatClient, setChatClient] = useState<StreamChat | null>(null);

  useEffect(() => {
    if (!user || !isLoaded) return;

    if (!apiKey) {
      console.error("Stream API key missing");
      throw new Error("Stream API key missing");
    }

    const VideoClient = new StreamVideoClient({
      apiKey,
      user: {
        id: user.id,
        name: user.fullName as string,
        image: user.imageUrl,
      },
      tokenProvider,
    });

    const ChatClient = StreamChat.getInstance(apiKey);
    ChatClient.connectUser(
      {
        id: user.id,
        name: user.fullName as string,
        image: user.imageUrl,
      },
      tokenProvider
    );

    setVideoClient(VideoClient);
    setChatClient(ChatClient);

    return () => {
      videoClient?.disconnectUser();
      chatClient?.disconnectUser();
    };
  }, [user, isLoaded]);

  if (!videoClient || !chatClient) {
    return <Loading />;
  }

  return (
    <>
      <StreamVideo client={videoClient}>
        <Chat client={chatClient}>{children}</Chat>
      </StreamVideo>
    </>
  );
};

export default StreamProvider;
