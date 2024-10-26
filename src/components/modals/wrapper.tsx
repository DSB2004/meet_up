import React, {
    forwardRef,
    DialogHTMLAttributes,
    ForwardRefRenderFunction,
} from 'react';

interface IPROPS extends DialogHTMLAttributes<HTMLDialogElement> { }



const Wrapper: ForwardRefRenderFunction<HTMLDialogElement, IPROPS> = ({ children, className, ...props }, ref) => {

    return (
        <>
            <dialog
                {...props}
                ref={ref}
                className={`w-80 sm:w-96 md:w-112 min-h-60 bg-2 text-3 focus:outline-none z-20 rounded-lg transition-all duration-300 ${className}`}
            >
                {children}
            </dialog>
        </>
    );
};

export default forwardRef(Wrapper);
