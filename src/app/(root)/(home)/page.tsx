"use client";
import React from "react";
import Input from "@/components/input/input";
import useMeet from "@/hooks/use-meet";
import Button from "@/components/button/simple_button";

export default function Page() {
  const { createMeet, joinMeet } = useMeet();
  return (
    <>
      <section className="flex items-center justify-center border-2  h-full flex-col">
        <h1 className="text-3xl  sm:text-4xl lg:text-6xl mt-5 font-semibold text-orange-400 w-full text-center ">
          Connect and Collaborate, Anytime, Anywhere
        </h1>
        <p className="text-sm sm:text-lg lg:text-xl mt-5  text-white w-full text-center  ">
          Seamless Video Meetings for Teams, Clients, and Communities{" "}
        </p>

        <div className="flex gap-5 justify-between items-center w-fit mt-10 flex-col">
          <Button
            className="bg-4 my-5  px-4 w-fit md:w-full !justify-center "
            onClick={() => {
              createMeet();
            }}
          >
            Instant Meeting
          </Button>
          <span className="text-xs text-gray-500 mx-4">OR</span>
          <form
            onSubmit={joinMeet}
            className="flex justify-center align-middle items-center gap-2 flex-col md:flex-row"
          >
            <Input
              name="room-id"
              placeholder="Enter Code..."
              className="bg-transparent !w-80  border-4"
            />
            <Button className="bg-4 px-4">Join Meet</Button>
          </form>
        </div>
      </section>
    </>
  );
}
