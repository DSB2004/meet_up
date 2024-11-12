import { FC, InputHTMLAttributes } from "react";

interface IPROPS extends InputHTMLAttributes<HTMLInputElement> {
}
const Input: FC<IPROPS> = ({ className, ...props }) => {
  return (
    <>
      <div className="relative">

        <input
          {...props}
          className={`w-full text-xs p-2 my-1 rounded-md outline-none focus:outline-none placeholder:text-white ${className}`}
        />
      </div>
    </>
  );
};
export default Input;
