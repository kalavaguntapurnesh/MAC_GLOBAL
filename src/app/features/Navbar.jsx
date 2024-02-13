import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="w-full h-[80px] bg-white ">
      <div className="md:max-w-[1400px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4 ">
        <Image
          src="/edukare.png"
          alt=""
          width={100}
          height={100}
          className="h-[25px] "
        ></Image>

        <div className="hidden md:flex items-center ">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>About</li>
          </ul>
        </div>

        <div className="hidden md:flex">
          <button className="bg-[#20B486] px-8 py-3 rounded-md text-white font-bold">
            Contact Us
          </button>
        </div>

        <div className="md:hidden" onClick={handleClick}>
          {toggle ? (
            <AiOutlineClose size={30} className="cursor-pointer" />
          ) : (
            <AiOutlineMenu size={30} className="cursor-pointer" />
          )}
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden border-b"
            : "hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100 transition duration-1000 ease-in-out">
            Home
          </li>
          <li className="p-4 hover:bg-gray-100 transition duration-1000 ease-in-out">
            About
          </li>
          <li className="p-4 hover:bg-gray-100 transition duration-1000 ease-in-out">
            Features
          </li>
          <li className="p-4 hover:bg-gray-100 transition duration-1000 ease-in-out">
            Services
          </li>

          <div className="flex flex-col my-4">
            <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
              Contact Us
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
