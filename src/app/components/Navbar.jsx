import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className="text-black flex justify-between  h-24 w-full md:shadow-xl shadow-xl md:fixed fixed md:top-0 top-0
     md:z-20 z-20 bg-white "
    >
      <div className=" flex flex-row md:ml-8 lg:block hidden ml-2">
        <Image
          src="/logo_copy.png"
          alt=""
          width={120}
          height={100}
          className=" md:pb-4 text-3xl text-red-500 font-bold  lg:pl-12 pl-6 pt-3 cursor-pointer"
        ></Image>
        <div className="absolute top-[29px] left-[163px] font-bold text-[30px] hidden xl:block">
          <h2 className="text-primaryColor">
            <span className="text-primaryColor">MAC</span>GLOBAL.
          </h2>
        </div>
      </div>

      <div className="md:ml-4 lg:hidden block ">
        <Image
          src="/logo_copy.png"
          alt=""
          width={90}
          height={90}
          className="pb-4 pl-6 pt-3.5 cursor-pointer"
        ></Image>
      </div>

      <ul className="hidden md:flex md:pt-4 md:pr-12">
        <li className="lg:p-4 p-[11px] cursor-pointer text-black font-medium uppercase text-sm tracking-wider">
          <Link href="/">Home</Link>
        </li>
        <li className="lg:p-4 p-[11px] cursor-pointer text-black font-medium uppercase text-sm tracking-wider">
          <Link href="/about">About Us</Link>
        </li>
        <li className="lg:p-4 p-[11px] cursor-pointer text-black font-medium uppercase text-sm tracking-wider">
          <Link href="/services">Services</Link>
        </li>
        {/* <li className="lg:p-4 p-[11px] cursor-pointer text-black font-medium uppercase text-sm tracking-wider">
          <Link href="/products">Services</Link>
        </li> */}
        {/* <li className="lg:p-4 p-[11px] cursor-pointer text-black font-medium hover:text-black">
          <Link href="/contact">Contact</Link>
        </li> */}
        <li className="lg:p-4 p-[11px] cursor-pointer ">
          <a
            href="/contact"
            className="bg-green-700 
        rounded-[4px] text-white px-8 py-2.5 "
          >
            Contact Us{" "}
          </a>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav ? (
          <AiOutlineMenu size={30} className=" mr-4 mt-6" />
        ) : (
          <AiOutlineClose size={30} className=" mr-4 mt-6" />
        )}
      </div>

      <div
        className={
          !nav
            ? "md:hidden fixed left-[-100%] h-[75%] ease-in-out duration-1000 "
            : "md:hidden fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-[75%] bg-[#000300] ease-in-out duration-1000 rounded-b-lg z-10"
        }
      >
        <h1 className="w-full text-2xl text-companyColor font-bold m-4 cursor-pointer">
          ALCHEMINDS.
        </h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600 text-white cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 border-b border-gray-600 text-white cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4 border-b border-gray-600 text-white cursor-pointer">
            <Link href="/services">Services</Link>
          </li>
          {/* <li className="p-4 border-b border-gray-600 text-white cursor-pointer">
            <Link href="/products">Services</Link>
          </li> */}
          <li className="p-4 text-white cursor-pointer">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
