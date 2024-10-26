import React, { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
    return (
        <main className='h-screen w-full'>
            {children}
        </main>

    )
}
