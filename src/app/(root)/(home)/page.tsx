"use client"
import React, { useEffect, useRef, useState } from 'react';
import BackgroundImage from "@/assets/background.webp";
import Timer from '@/components/timer';
import ColorCard from '@/components/card/color_card';

import { FaCalendar } from "react-icons/fa";
import { BiSolidVideoRecording } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import { RiUserAddLine } from "react-icons/ri";

import CreateMeetModal from '@/components/modals/createMeet';

export default function Page() {
    const [modalState, changeState] = useState<string>('')
    return (
        <>
            <div
                className='h-80 rounded-xl bg-cover bg-center relative'
                style={{ backgroundImage: `url(${BackgroundImage.src})` }}
            >
                <Timer></Timer>
            </div>

            <div className='my-5 pb-5 grid gap-4 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  2xl:grid-cols-4 place-items-center'>
                <ColorCard className='bg-orange-500' icon={<IoMdAdd className='w-6 h-6' />} title='New Meeting' desc="Setup a new meeting" onClick={() => changeState('CREATE_NEW_MEET')} />

                <ColorCard className='bg-blue-700' icon={<RiUserAddLine className='w-6 h-6' />} title="Join meeting" desc='Via invitation link'>
                </ColorCard>
                <ColorCard className='bg-violet-700' icon={<FaCalendar className='w-6 h-6' />}
                    title="Schedule Meeting" desc="Plan your meeting"></ColorCard>
                <ColorCard className='bg-yellow-500'
                    title='View Recording'
                    desc="Meeting recording"
                    icon={<BiSolidVideoRecording className='w-6 h-6' />}></ColorCard>
            </div>

            <CreateMeetModal isOpen={modalState === 'CREATE_NEW_MEET'} onClose={() => changeState('')} />

        </>
    );
}
