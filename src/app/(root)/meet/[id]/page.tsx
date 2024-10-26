"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import Setup from '@/components/meet/setup'
import Room from '@/components/meet/room'
import { useCall } from '@/hooks/use-call'
export default function page() {
    const { id } = useParams()
    const [isSetup, toggleSetup] = useState(false)
    const { call, loading } = useCall(id ? id : "")

    if (loading) {
        return <>loading...</>
    }


    return (
        <StreamCall call={call}>
            <StreamTheme>
                {
                    !isSetup ? <Setup /> : <Room />
                }

            </StreamTheme>
        </StreamCall>
    )
}
