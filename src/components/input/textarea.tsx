import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

interface IPROPS extends TextareaHTMLAttributes<HTMLTextAreaElement> { label: string }
const TextArea: FC<IPROPS> = ({ className, label, ...props }) => {
    return (
        <>
            <div className="relative">

                <label htmlFor={label} className="text-xs">{label}</label>
                <textarea
                    {...props}
                    className={`w-full text-xs p-2 my-1 rounded-md  outline-none focus:outline-none ${className}`}
                />
            </div>
        </>
    );
};
export default TextArea;
