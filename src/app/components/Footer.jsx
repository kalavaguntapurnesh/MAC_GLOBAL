import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-footer">
      <footer className="text-base">
        <div className="w-full max-w-screen px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
          <div className="pb-8 mb-8 border-b border-blue-300">
            <div className="grid grid-cols-2 md:grid-cols-5 ">
              <div className="mb-12 md:mb-0 ">
                <h4 className="text-sm leading-5 font-bold tracking-wider uppercase flex justify-center items-center mt-1 text-white">
                  Services
                </h4>
                <ul className="pl-0 mt-4 space-y-3 list-none">
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                       Education Loans
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Visa Counselling
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Fees Disbursement
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      University Guidance
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      SOP's Review
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-12 md:mb-0 ">
                <h4 className="text-sm leading-5 font-bold tracking-wider uppercase flex justify-center items-center mt-1 text-white">
                  Countries
                </h4>
                <ul className="pl-0 mt-4 space-y-3 list-none">
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Study in USA
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Study in Canada
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Study in UK
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Study in France
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Study in Germany
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-12 md:mb-0">
                <h4 className="text-sm leading-5 font-bold tracking-wider uppercase flex justify-center items-center mt-1 text-white">
                  Company
                </h4>
                <ul className="pl-0 mt-4 space-y-3 list-none">
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      About MAC
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks hover:text-white transition duration-1000 ease-in-out"
                    >
                      Why MAC?
                    </a>
                  </li>
                </ul>
              </div>

              {/* <div className="mb-12 md:mb-0 ">
                <h4 className="text-sm leading-5 font-bold tracking-wider uppercase flex justify-center items-center mt-1 text-white">
                  Address
                </h4>
                <ul className="pl-0 mt-4 space-y-3 list-none">
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks"
                    >
                      10-3-206 / M4,
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks"
                    >
                      2nd Floor,KK Street,
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a
                      href=""
                      className="no-underline text-[14px] leading-6 text-footerLinks"
                    >
                      Tirupati(IN),517501
                    </a>
                  </li>
                  <li className=" flex items-center justify-center">
                    <a href="" className="no-underline text-base leading-6">
                      Andhra Pradesh
                    </a>
                  </li> 
                   <li className=" flex items-center justify-center">
                    <a href="" className="no-underline text-base leading-6">
                      Study in Germany
                    </a>
                  </li>
                </ul>
              </div> */}

              <div className="mb-12 md:mb-0 col-span-2">
                <h4 className="text-sm leading-5 font-bold tracking-wider uppercase flex justify-center items-center mt-1 text-white">
                  Contact Us
                </h4>
                <form action="">
                  <div className="mt-4 flex flex-col justify-center items-center">
                    <div className=" flex justify-center items-center w-full">
                      <input
                        type="email"
                        name="email"
                        required
                        className=" appearance-none flex md:w-9/12 w-10/12 border border-transparent px-5 py-3 text-base leading-6 rounded-md text-gray-800 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 transition duration-150 ease-in-out"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mt-4 mb-2 rounded-md flex w-full justify-center items-center">
                      <button
                        type="submit"
                        className="md:w-9/12 w-10/12 flex items-center justify-center px-5 py-3 text-base leading-6 font-medium rounded-md text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:bg-green-200 transition duration-1000 ease-in-out"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="grid grid-cols-5 justify-center items-center place-items-center">
              <Link href="/about">
                <FaLinkedin
                  size={25}
                  className="cursor-pointer"
                  color="white"
                />
              </Link>

              <Link href="/about">
                <FaInstagram
                  size={25}
                  className="cursor-pointer"
                  color="white"
                />
              </Link>

              <Link href="/about">
                <FaFacebook
                  size={25}
                  className="cursor-pointer"
                  color="white"
                />
              </Link>

              <Link href="/about">
                <FaXTwitter
                  size={25}
                  className="cursor-pointer"
                  color="white"
                />
              </Link>
              <Link href="/about">
                <FaGoogle size={25} className="cursor-pointer" color="white" />
              </Link>
            </div>
            <div className="flex justify-center items-center md:mt-0 mt-4">
              <p className="md:text-sm text-xs text-white">
                Copyright © 2024 MAC Global Services. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
