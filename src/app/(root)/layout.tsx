import React, { ReactNode } from 'react'
import StreamProvider from '@/providers/streamProvider'
export default function layout({ children }: { children: ReactNode }) {
    return (
        <>
            <StreamProvider>{children}</StreamProvider>
        </>
    )
}
