"use client";
import { useToast } from "./use-toast";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function useMeet() {
  const router = useRouter();
  const client = useStreamVideoClient();
  const user = useUser();
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
    toast({ title: "Meeting Created" });
    router.push(`/meet/${call.id}`);
  }
  async function joinMeet(id: string) {}
  async function scheduleMeet() {}

  return { createMeet, joinMeet, scheduleMeet };
}
