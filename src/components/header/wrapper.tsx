"use client"
import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="w-full sticky top-0 z-30">
        <header className="bg-2  h-14 p-3 w-full flex items-center justify-between">
          {children}
        </header>
      </div>
    </>
  );
}