import React, { DialogHTMLAttributes, useEffect, useRef, FC } from 'react';

import Button from '../button/simple_button';
import Input from '../input/input';
import TextArea from '../input/textarea';
import { IoClose } from 'react-icons/io5';
interface IPROPS extends DialogHTMLAttributes<HTMLDialogElement> {
    isOpen: boolean
}


const ScheduleMeetModal: FC<IPROPS> = ({ isOpen, onClose, className, ...props }) => {
    const dialogRef = useRef<HTMLDialogElement>(null)
    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal()
        }
    }, [isOpen])
    return (
        <>
            {
                isOpen ? <div className='fixed bg-black top-0 left-0 z-50 w-full h-full opacity-65'></div> : <></>
            }
            <dialog {...props} ref={dialogRef} onClose={onClose} className={`w-80 sm:w-96 md:w-112 min-h-80 bg-2 text-3 focus:outline-none z-20 rounded-lg transition-all duration-300 ${className}`}>
                <div className='flex items-center justify-between px-4'>

                    <h1 className='my-4 font-semibold text-left text-white'>
                        Schedule Meet
                    </h1>

                    <IoClose className='fill-white w-5 h-5' onClick={() => dialogRef.current?.close()}></IoClose>
                </div>

                <form action="" className=' mx-auto w-11/12 min-w-80 flex flex-col '>
                    <TextArea placeholder="Meeting description..." className='bg-1 ' rows={5} label='Add a description' />
                    <Input placeholder='Timing' type="time" className='bg-1' label='Meet Timing' />
                    <Button className='bg-blue-600 w-full mx-auto justify-center font-black my-2'>
                        Create a new Meet
                    </Button>
                </form>

            </dialog>
        </>
    );
};

export default ScheduleMeetModal;
