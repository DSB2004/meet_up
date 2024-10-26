import React, { FC, HTMLAttributes, ReactNode } from 'react'
interface IPROPS extends HTMLAttributes<HTMLDivElement> {
    icon?: ReactNode
    title?: string
    desc?: string

}
const Card: FC<IPROPS> = ({ children, className, icon, title, desc, ...props }) => {
    return (
        <div className={`w-full h-60  lg:h-72 rounded-lg relative ${className} text-white`} {...props}>
            <div className=' shadow-lg rounded-lg absolute top-5 left-5 w-10 h-10 bg-white bg-opacity-35 flex items-center justify-center'>{icon}

            </div>
            <div className='absolute bottom-5 left-5'>
                <h1 className='font-bold text-xl'>{title}</h1>
                <p className='text-sm'>{desc}</p>
            </div>
        </div>
    )
}


export default Card;
