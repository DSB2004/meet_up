
import React from "react";
import { FaVideo } from "react-icons/fa6";
export default function Logo() {
  return (
    <div className="flex items-center gap-3 my-5 mb-10 mx-4 text-white">
      <div className="w-8 h-8 bg-blue-600 flex rounded-md items-center justify-center">

        <FaVideo className="w-5 h-5" />
      </div>
      <h1 className="text-lg font-bold uppercase">Meet Up</h1>
    </div>
  );
}
