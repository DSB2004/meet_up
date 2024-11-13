import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
export function useCall(id: string | string[]) {

    const [call, setCall] = useState<Call>()
    const [loading, setLoading] = useState<boolean>(true)

    const client = useStreamVideoClient()

    useEffect(() => {
        if (!client) return;
        const loadCall = async () => {
            const { calls } = await client.queryCalls({ filter_conditions: { id } })
            if (calls.length > 0) {
                setCall(calls[0])
                setLoading(false)
            }
        }
        
        loadCall()

    }, [client, id])



    
    return { loading, call }
}