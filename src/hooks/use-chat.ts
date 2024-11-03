import { useChatContext } from "stream-chat-react";
import { useEffect, useState } from "react";
import { Channel } from "stream-chat";

export function useChat(id: string | string[]) {
  const [channel, setChannel] = useState<Channel>();
  const { client } = useChatContext();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const createChannel = async () => {
      if (!client) return;
      const channelId = `meeting-${id}`;
      const chatChannel = client.channel("messaging", channelId, {
        name: `Chat for Meeting ${id}`,
      });

      await chatChannel.create();
      setChannel(chatChannel);
      setLoading(false);
    };

    createChannel();
  }, [channel, id]);

  return { channel, loading };
}
