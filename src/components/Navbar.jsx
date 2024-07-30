import { Dispatch, SetStateAction, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/Logo.png";
import { FiChevronDown } from "react-icons/fi";
import { LuGraduationCap } from "react-icons/lu";
import { VscSymbolMethod } from "react-icons/vsc";
import { FaIndustry } from "react-icons/fa";
import { motion } from "framer-motion";
import { AiFillCustomerService } from "react-icons/ai";
import { FaBusinessTime } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";
import { GiCrystalGrowth } from "react-icons/gi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);
  const [openTwo, setOpenTwo] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="z-20 fixed w-full bg-white">
      <div className="w-full mx-auto max-w-[1400px]">
        <div className="justify-center w-full">
          <div className="text-black flex justify-between items-center md:shadow-none shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] h-24 w-full md:top-0 top-0 bg-white max-w-[1400px] mx-auto">
            <div className="ml-2 flex justify-center items-center">
              <img src={Logo} className="w-28 overflow-hidden" alt="" />
            </div>
            <div className="lg:ml-12">
              <ul className="hidden md:flex items-center gap-[3vw]">
                {" "}
                <li className="group cursor-pointer text-colorThree font-medium text-base tracking-wider transition duration-1000 ease-in-out">
                  <a href="/">Home</a>
                  <div className="bg-colorOne h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="group cursor-pointer text-colorThree font-medium text-base tracking-wider transition duration-1000 ease-in-out">
                  <a href="/features">Features</a>
                  <div className="bg-colorOne h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="group cursor-pointer text-colorThree font-medium text-base tracking-wider transition duration-1000 ease-in-out">
                  <a href="/services">Services</a>
                  <div className="bg-colorOne h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <li className="group cursor-pointer text-colorThree font-medium text-base tracking-wider transition duration-1000 ease-in-out">
                  <a href="/about">About Us</a>
                  <div className="bg-colorOne h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </li>
                <motion.div
                  animate={openTwo ? "open" : "closed"}
                  className="relative"
                >
                  <button
                    onClick={() => setOpenTwo((pv) => !pv)}
                    className="flex items-center gap-2 rounded-md "
                  >
                    <span className="font-medium text-base text-colorThree">
                      Study Abroad
                    </span>
                    <motion.span variants={iconVariants}>
                      <FiChevronDown />
                    </motion.span>
                  </button>

                  <motion.ul
                    initial={wrapperVariants.closed}
                    variants={wrapperVariants}
                    style={{ originY: "top", translateX: "-80%" }}
                    className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[100%] w-48 overflow-hidden"
                  >
                    <a href="/services">
                      <Option
                        setOpen={setOpenTwo}
                        Icon={FaBusinessTime}
                        text="Masters"
                      />
                    </a>
                    <a href="/features">
                      <Option
                        setOpen={setOpenTwo}
                        Icon={VscSymbolMethod}
                        text="Bachelors"
                      />
                    </a>
                    <a href="/contact">
                      <Option
                        setOpen={setOpenTwo}
                        Icon={RiGovernmentFill}
                        text="Training"
                      />
                    </a>
                    <a href="/">
                      <Option
                        setOpen={setOpenTwo}
                        Icon={GiCrystalGrowth}
                        text="Scholarships"
                      />
                    </a>
                  </motion.ul>
                </motion.div>
              </ul>
            </div>

            <div className="md:flex justify-center items-center gap-4  hidden mr-6">
              <a
                href="/contact"
                className="py-2 px-8 bg-colorOne hover:bg-white hover:border-2 rounded-3xl font-medium text-white hover:text-black transition ease-in-out duration-1000 hover:border-colorOne"
              >
                Contact Us
              </a>
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
              <div className="w-full flex flex-row justify-start items-center mt-6 ml-6 ">
                <h1 className="sm:text-2xl text-xl text-colorOne uppercase font-semibold overflow-hidden">
                  MAC GLOBAL SERVICES.
                </h1>
              </div>

              <ul className=" uppercase p-4">
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/">Home</a>
                </li>
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/about">About Us</a>
                </li>
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/careers">Careers</a>
                </li>
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/products">Products</a>
                </li>
                <li className="p-4 border-b border-gray-600 text-colorThree cursor-pointer font-medium dark:text-white">
                  <a href="/solutions">Solutions</a>
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

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => setOpen(false)}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-50 text-slate-700 hover:text-colorOne transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default Navbar;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
