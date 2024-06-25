import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Logo.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" md:z-20 z-20 fixed w-full bg-white">
      <div className="w-full mx-auto max-w-[1400px]">
        <div className="justify-center w-full">
          <div className="text-black flex justify-between items-center md:shadow-none shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-24 w-full md:top-0 top-0 bg-white max-w-[1400px] mx-auto">
            <div className="ml-2 flex flex-row justify-center items-center">
              <img src={Logo} className="w-[86px]" alt="" />
              <h1 className="lg:block hidden text-3xl text-[#3e60e0] uppercase font-semibold">
                Vahas.
              </h1>
            </div>
            <div className="lg:ml-12">
              <ul className="hidden md:flex items-center gap-[3vw]">
                {" "}
                <li className="group cursor-pointer text-colorThree font-medium text-base tracking-wider transition duration-1000 ease-in-out">
                  <a href="/">Home</a>
                  <div className="bg-[#3e60e0] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="group cursor-pointer text-colorThree font-medium text-base tracking-wider transition duration-1000 ease-in-out">
                  <a href="/about">About Us</a>
                  <div className="bg-[#3e60e0] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="group cursor-pointer text-colorThree font-medium text-base tracking-wider transition duration-1000 ease-in-out">
                  <a href="/features">Features</a>
                  <div className="bg-[#3e60e0] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="group cursor-pointer text-colorThree font-medium text-base tracking-wider transition duration-1000 ease-in-out">
                  <a href="/services">Services</a>
                  <div className="bg-[#3e60e0] h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="group cursor-pointer text-colorThree font-medium text-base tracking-wider transition duration-1000 ease-in-out">
                  <a
                    href="/contact"
                    className="py-2 px-8 hover:border-colorOne bg-colorOne hover:bg-white hover:border-2 rounded-full font-medium text-white hover:text-black transition ease-in-out duration-1000"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div onClick={handleNav} className="block md:hidden cursor-pointer">
              {!nav ? (
                <AiOutlineMenu size={30} className=" mr-4 " />
              ) : (
                <AiOutlineClose size={30} className=" mr-4" />
              )}
            </div>

            <div
              className={
                !nav
                  ? "md:hidden fixed left-[-100%] h-[75%] ease-in-out duration-1000 "
                  : "md:hidden fixed left-0 top-0 w-[70%] border-r h-[75%] bg-white dark:bg-[#000300] ease-in-out duration-1000 rounded-b-lg z-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              }
            >
              <div className="w-full justify-start items-center mt-3">
                {/* <img src={Logo} className="w-[86px] ml-3" alt="" /> */}
                <div className="p-4">
                  <h1 className="text-2xl text-primaryColor uppercase font-semibold">
                    MAC GLOBAL.
                  </h1>
                </div>
              </div>

              <ul className=" uppercase p-4 ">
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/">Home</a>
                </li>
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/about">About Us</a>
                </li>
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/careers">Features</a>
                </li>
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/products">Services</a>
                </li>

                <li className="p-4 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
