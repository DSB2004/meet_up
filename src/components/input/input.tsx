import { FC, InputHTMLAttributes } from "react";

interface IPROPS extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}
const Input: FC<IPROPS> = ({ className, label, ...props }) => {
  return (
    <>
      <div className="relative">

        <label htmlFor="" className="text-xs">{label}</label>
        <input
          {...props}
          className={`w-full text-xs p-2 my-1 rounded-md outline-none focus:outline-none placeholder:text-white ${className}`}
        />
      </div>
    </>
  );
};
export default Input;
