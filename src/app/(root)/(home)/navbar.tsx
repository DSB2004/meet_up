"use client"
import Wrapper from "@/components/navbar/wrapper";
import Item from "@/components/navbar/item";
import Logo from "@/components/navbar/logo";
import { IoMdHome, IoMdAdd, } from "react-icons/io";
import { PiCalendarDotsLight } from "react-icons/pi";
import { BiSolidVideoRecording } from "react-icons/bi";

const Navbar = () => {
    return <>
        <Wrapper>
            <Logo></Logo>
            <Item href="/">
                <IoMdHome className="w-6 h-6" />
                Home</Item>
            <Item href="/upcoming">
                <PiCalendarDotsLight className="w-6 h-6" />
                Upcoming</Item>
            <Item href="/previous">
                <PiCalendarDotsLight className="w-6 h-6" />
                Previous
            </Item>
            <Item href="/recording">
                <BiSolidVideoRecording className="w-6 h-6" />
                Recording</Item>
            <Item href="/create-room">
                <IoMdAdd className="w-6 h-6" />
                Create Room</Item>

        </Wrapper>
    </>
}

export default Navbar;