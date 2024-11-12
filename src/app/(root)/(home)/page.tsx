"use client";
import React from "react";
import Input from "@/components/input/input";
import useMeet from "@/hooks/use-meet";
import Button from "@/components/button/simple_button";
export default function Page() {
  const { createMeet, joinMeet } = useMeet();
  return (
    <>
      <div className=" ml-0 md:ml-10 mt-5 sm:mt-20">
        <h3 className="text-lg sm:text-xl lg:text-2xl mt-5 font-bold text-orange-400">Connect and Collaborate, Anytime, Anywhere</h3>
        <h1 className="text-2xl  sm:text-3xl lg:text-6xl mt-5 font-bold text-white w-full sm:w-5/6 sm:min-w-96 ">Seamless Video Meetings for Teams, Clients, and Communities</h1>
        <p className="text-xs sm:text-sm lg:text-base mt-5  text-white w-full sm:w-4/6 sm:min-w-96 ">Experience high-quality video, audio, and screen sharing with just one click. Our platform is designed for simplicity and reliability, so you can focus on what matters—whether it’s a quick catch-up, a team brainstorming session, or a large virtual event. Join or host secure meetings from any device, with tools to keep everyone engaged and connected.</p>

        <Button className="bg-4 my-5  px-4" onClick={() => { createMeet() }}>Create Instant Meeting</Button>

        <form onSubmit={joinMeet}>
          <Input name="room-id" placeholder="Enter Code..." className="bg-transparent w-72 border-4 mt-5" />
          <Button className="bg-4 my-5 px-4">Or Join Meeting</Button>
        </form>
      </div >
    </>
  );
}
