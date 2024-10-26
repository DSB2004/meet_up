"use client";
import {
    StreamVideo,
    StreamVideoClient,
} from '@stream-io/video-react-sdk';

import { useUser } from '@clerk/nextjs';
import { ReactNode, useEffect, useState } from 'react';
import { tokenProvider } from '@/actions/stream.actions';

const apiKey = process.env.NEXT_PUBLIC_STREAM_APP_API_KEY as string;

const StreamProvider = ({ children }: { children: ReactNode }) => {
    const { user, isLoaded } = useUser();
    const [client, setClient] = useState<StreamVideoClient>();

    useEffect(() => {


        if (!user || !isLoaded) return;
        if (!apiKey) {
            console.error("Stream API key missing");
            throw new Error("Stream API key missing");
        }



        const newClient = new StreamVideoClient({
            apiKey,
            user: {
                id: user.id,
                name: user.fullName as string,
                image: user.imageUrl,
            },
            tokenProvider
        });



        setClient(newClient)
    }, [user, isLoaded]);

    if (!client) {
        return <>Loading...</>
    }

    return <StreamVideo client={client}>{children}</StreamVideo>;
};

export default StreamProvider;
