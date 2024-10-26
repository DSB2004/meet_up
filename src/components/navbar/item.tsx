"use client"
import React, { FC, ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface IPROPS {
  children?: ReactNode;
  className?: string;
  href?: string;
}

const Item: FC<IPROPS> = ({ children, className, href = "#" }) => {
  const [isActive, setActive] = useState<boolean>(false);
  const pathname = usePathname();
  useEffect(() => {
    setActive(pathname === href);
  }, [pathname]);
  return (
    <div
      className={`relative 
        w-10/12 lg:w-4/6 cursor-pointer flex  text-3 flex-col justify-start align-middle transition-all duration-300 
        my-3  mx-4 ${className}`}
    >
      <Link
        className={`flex  items-center gap-3 text-base p-2 rounded-md font-medium ${isActive ? "bg-blue-600" : ""
          }`}
        href={href}
      >
        {children}
      </Link>
    </div>
  );
};

export default Item;
