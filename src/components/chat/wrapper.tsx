import React, { ReactNode, useState } from "react";
import { LuMenu } from "react-icons/lu";
export default function Wrapper({ children }: { children: ReactNode }) {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <div style={{zIndex:500}} className={`fixed top-0 right-0 lg:relative z-50  h-screen  ml-auto `}>
      <div className="flex justify-center gap-2 align-top h-full">
        <LuMenu
        title="Open Chat"
          className="w-6 h-6 mt-2"
          onClick={() => toggleOpen((prev) => !prev)}
        ></LuMenu>
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
//
