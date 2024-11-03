import { Channel } from "stream-chat-react";
import { useChat } from "@/hooks/use-chat";
import Wrapper from "./wrapper";
import Form from "./form";
import List from "./list";

export default function Chat({ id }: { id: string }) {
  const { loading, channel } = useChat(id);

  if (loading) return <>chat loading ....</>;
  return (
    <Channel channel={channel}>
      <Wrapper>
        <List />
        <Form />
      </Wrapper>
    </Channel>
  );
}
