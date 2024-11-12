"use client";

import React from 'react';
import Wrapper from '@/components/header/wrapper';
import dynamic from 'next/dynamic';


const SignedIn = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignedIn), { ssr: false });
const UserButton = dynamic(() => import('@clerk/nextjs').then(mod => mod.UserButton), { ssr: false });

export default function Header() {
    return (
        <Wrapper>
            <SignedIn>
                <UserButton />
            </SignedIn>
        </Wrapper>
    );
}
