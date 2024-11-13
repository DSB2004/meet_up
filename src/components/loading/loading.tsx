import React from "react";
import { IoVideocamOutline } from "react-icons/io5";
export default function Loading() {
  return (
    <div className="h-screen w-screen fixed z-50 bg-black bg-opacity-45 flex justify-center items-center">
      <span className="animate-pulse text-3xl text-white flex gap-5 items-center ">
        <IoVideocamOutline className="h-16 w-16" />
        Loading
      </span>
    </div>
  );
}
