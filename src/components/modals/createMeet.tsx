import React, { DialogHTMLAttributes, useEffect, useRef, FC } from 'react';

import Button from '../button/simple_button';
import { useToast } from '@/hooks/use-toast';
import { IoClose } from 'react-icons/io5';
import { useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
interface IPROPS extends DialogHTMLAttributes<HTMLDialogElement> {
    isOpen: boolean
}


const CreateMeetModal: FC<IPROPS> = ({ isOpen, onClose, className, ...props }) => {
    const router = useRouter()
    const dialogRef = useRef<HTMLDialogElement>(null)
    const { toast } = useToast()
    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal()
        }
    }, [isOpen])

    const client = useStreamVideoClient()
    const user = useUser()
    const createMeet = async () => {
        if (!client) {
            throw new Error("Client not created")
        }
        if (!user) {
            throw new Error("User not found")
        }
        const id = crypto.randomUUID()
        const call = client.call('default', id)
        if (!call) {
            throw new Error("Unable to create call")
        }
        await call.getOrCreate({ data: { starts_at: new Date(Date.now()).toISOString(), custom: { description: "New Call" } } })
        toast({ title: "Meeting Created" })
        router.push(`/meet/${call.id}`)
    }
    return (
        <>
            {
                isOpen ? <div className='fixed bg-black top-0 left-0 z-50 w-full h-full opacity-65'></div> : <></>
            }
            <dialog {...props} ref={dialogRef} onClose={onClose} className={`w-80 sm:w-96 md:w-112 min-h-72  bg-2 text-3 focus:outline-none z-20 rounded-lg transition-all duration-300 ${className}`}>
                <div className='flex items-center  justify-end  m-4 '>
                    <IoClose className='fill-white w-5 h-5 ' onClick={() => dialogRef.current?.close()}></IoClose>
                </div>

                <h1 className='my-2 mt-10 font-bold text-center text-xl text-white'>
                    Create New Meet
                </h1>


                <Button onClick={() => createMeet()} className='bg-blue-600 w-11/12 mx-auto justify-center font-black my-6 p-4'>
                    Create a new Meet
                </Button>

            </dialog>
        </>
    );
};

export default CreateMeetModal;
