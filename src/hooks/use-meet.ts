"use client";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useToast } from "./use-toast";
import { FormEvent } from "react";
import { useCall } from "@stream-io/video-react-sdk";
export default function useMeet() {
  const router = useRouter();
  const client = useStreamVideoClient();
  const user = useUser();
  const call = useCall();
  const { toast } = useToast();
  async function createMeet() {
    if (!client) {
      throw new Error("Client not created");
    }
    if (!user) {
      throw new Error("User not found");
    }
    const id = crypto.randomUUID();
    const call = client.call("default", id);
    if (!call) {
      throw new Error("Unable to create call");
    }
    await call.getOrCreate({
      data: {
        starts_at: new Date(Date.now()).toISOString(),
        custom: { description: "New Call" },
      },
    });
    router.push(`/meet/${call.id}`);
  }

  async function joinMeet(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const id = formData.get("room-id") as string;
    if (!id) {
      toast({
        title: "Invalid Code",
        description: "Please enter a valid invite code",
      });
      return;
    }
    if (!client) {
      throw new Error("Client not created");
    }
    if (!user) {
      throw new Error("User not found");
    }

    try {
      client.call("default", id);
    } catch (err) {
      toast({
        title: "Invalid Code",
        description: "Please enter a valid invite code",
      });
      return;
    }
    router.push(`/meet/${id}`);
  }

  const RegisterMeetEvent = () => {
    call?.on("participantJoined", (event) => {
      console.log(event);
      toast({
        title: "New Member",
        description: event.participant?.name + " has joined the meeting",
      });
    });
    call?.on("participantLeft", (event) => {
      console.log(event);
      toast({
        title: "Member Left",
        description: event.participant?.name + " has lefted the meeting",
      });
    });
  };

  return { createMeet, joinMeet, RegisterMeetEvent };
}
