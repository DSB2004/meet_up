"use client";
import React, { useCallback, useEffect, useState } from "react";
import {
  useCall,
  VideoPreview,
  DeviceSettings,
} from "@stream-io/video-react-sdk";
import Button from "../button/simple_button";

import { MdCallEnd } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { CiVideoOn } from "react-icons/ci";


export default function Setup({ joinCall }: { joinCall: Function }) {
 
  const [isVideoAllowed, setVideoAllowed] = useState(false);
  const [isAudioAllowed, setAudioAllowed] = useState(false);
  const call = useCall();

  useEffect(() => {
    try{

      if (navigator)
        if (isVideoAllowed) {
          call?.camera.enable();
      } else {
        call?.camera.disable();
      }
    if (isAudioAllowed) {
      call?.microphone.enable();
    } else {
      call?.microphone.disable();
    }
  }catch(err){
    
  }

  }, [call, isAudioAllowed, isVideoAllowed]);

  return (
    <>
      <div className="flex justify-center items-center h-screen  flex-col">
        <div className="relative h-100 w-80  sm:w-140  lg:w-200 flex items-center justify-center ">
          {!isVideoAllowed ? (
            <VideoPreview className="flex w-full h-full relative flex-col items-center justify-center mx-4 border-none outline-none"></VideoPreview>
          ) : (
            <div className="w-full h-full bg-2 flex flex-col items-center justify-center gap-3">
              <CiVideoOn className="w-16 h-16 sm:w-24 sm:h-24  lg:w-36 lg:h-36 bg-4 p-5 rounded-full" />
              <h1>Turn your camera on</h1>
            </div>
          )}
        </div>

        <div className="flex gap-4 mx-auto border-2 w-fit my-5">
          <Button
            className={`${isAudioAllowed ? "bg-red-600" : "bg-4"}`}
            onClick={() => setAudioAllowed((prev) => !prev)}
          >
            <HiOutlineMicrophone className="w-5 h-5 fill-white" />
          </Button>

          <Button
            className={`${isVideoAllowed ? "bg-red-600" : "bg-4"}`}
            onClick={() => setVideoAllowed((prev) => !prev)}
          >
            <CiVideoOn className="w-5 h-5 fill-white" />
          </Button>

          <Button
            className="bg-4 md:px-4 hover:bg-2 text-white"
            onClick={() => joinCall()}
          >
            <IoMdCall className="w-5 h-5" />
            <span className="hidden md:inline">Join Meeting</span>
          </Button>
          <Button className="bg-red-600 md:px-4 text-white">
            <MdCallEnd className="w-5 h-5" />
            <span className="hidden md:inline">Cancel</span>
          </Button>
          <DeviceSettings></DeviceSettings>
        </div>
      </div>
    </>
  );
}
