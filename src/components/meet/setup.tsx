"use client"
import React, { useEffect, useState } from 'react'
import { useCall, VideoPreview } from '@stream-io/video-react-sdk'
import Button from '../button/simple_button'


import { FaMicrophone } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { DeviceSettings } from '@stream-io/video-react-sdk';
export default function Setup() {

    const [isVideoAllowed, setVideoAllowed] = useState(false)
    const [isAudioAllowed, setAudioAllowed] = useState(false)
    const call = useCall()

    useEffect(() => {
        if (!isVideoAllowed) {
            call?.camera.enable()
        }
        else {
            call?.camera.disable()
        }
        if (!isAudioAllowed) {
            call?.microphone.enable()
        }
        else {
            call?.microphone.disable()
        }
    }, [call, isAudioAllowed, isVideoAllowed])

    return (
        <div className='flex flex-col items-center justify-center h-screen'>


            <div className='min-w-80 w-2/5 h-96  relative m-5'>
                {
                    !isVideoAllowed ? <>
                        <VideoPreview className='w-full h-full rounded-lg' />
                    </> :
                        <>
                            <div className='rounded-lg w-full h-full bg-2 font-bold flex flex-col items-center justify-center'>
                                Video Disable
                            </div>
                        </>
                }

            </div>
            <div className='flex gap-4'>
                <Button className={`${isAudioAllowed ? 'bg-red-600' : 'bg-transparent'}`} onClick={() => setAudioAllowed(prev => !prev)}>
                    <FaMicrophone className='w-5 h-5 fill-white' />
                </Button>

                <Button className={`${isVideoAllowed ? 'bg-red-600' : 'bg-transparent'}`} onClick={() => setVideoAllowed(prev => !prev)}><CiVideoOn className='w-5 h-5 fill-white' /></Button>

                <Button className='bg-2 px-4'>Join Meeting</Button>
                <Button className='bg-red-600 px-4'>Cancel</Button>
                <DeviceSettings />

            </div>

        </div>
    )
}
