'use server';

import { currentUser } from '@clerk/nextjs/server';
import { StreamClient } from '@stream-io/node-sdk';

const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_APP_API_KEY;
const STREAM_API_SECRET = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
    const user = await currentUser();

    if (!user) throw new Error('User is not authenticated');
    if (!STREAM_API_KEY) throw new Error('Stream API key is missing');
    if (!STREAM_API_SECRET) throw new Error('Stream API secret is missing');

    const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);

    const expirationTime = Math.floor(Date.now() / 1000) + 3600;
    const issuedAt = Math.floor(Date.now() / 1000) - 10;

    const token = streamClient.generateUserToken({
        user_id: user.id,
        iat: issuedAt,
        exp: expirationTime
    });

    return token;
};

