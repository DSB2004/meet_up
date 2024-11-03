"use client";
import React from "react";
import { LuMenu } from "react-icons/lu";
import { useMenu } from "@/providers/menuProvider";
export default function Menu() {
  const { toggleMenu, isOpen } = useMenu();
  return (
    <button className={``} onClick={() => toggleMenu((prev) => !prev)}>
      <LuMenu className="w-6 h-6 text-white" />
    </button>
  );
}
