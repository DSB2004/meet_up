"use client";

import React from 'react';
import Wrapper from '@/components/header/wrapper';
import Menu from '@/components/header/menu';
import dynamic from 'next/dynamic';


const SignedIn = dynamic(() => import('@clerk/nextjs').then(mod => mod.SignedIn), { ssr: false });
const UserButton = dynamic(() => import('@clerk/nextjs').then(mod => mod.UserButton), { ssr: false });

export default function Header() {
    return (
        <Wrapper>
            <Menu />

            <SignedIn>
                <UserButton />
            </SignedIn>

        </Wrapper>
    );
}
