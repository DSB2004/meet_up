import React, { FormEvent } from "react";
import { useChannelActionContext } from "stream-chat-react";
import { IoSend } from "react-icons/io5";
export default function Form() {
  const { sendMessage } = useChannelActionContext();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const message = formdata.get("message") as string;
    e.currentTarget.reset();
    await sendMessage({ text: message });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-auto flex justify-between gap-2 p-4"
      style={{ maxHeight: "60px" }}
    >
      <input
        name="message"
        type="text"
        placeholder="Write here..."
        className="w-full p-2 text-sm outline-none focus:outline-none bg-transparent "
      />
      <button>
        <IoSend />
      </button>
    </form>
  );
}
