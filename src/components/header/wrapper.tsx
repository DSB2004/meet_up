"use client"
import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="w-full sticky top-0 z-30">
        <header className="h-14 p-3 w-full flex items-center justify-end">
          {children}
        </header>
      </div>
    </>
  );
}
