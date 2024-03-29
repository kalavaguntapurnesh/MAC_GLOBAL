import React from "react";
import Image from "next/image";
import Link from "next/link";

const Universities = () => {
  return (
    <div className="pt-8 pb-4 bg-gray-50">
      <div className="relative pt-8 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full text-center pb-4">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex flex-wrap flex-col items-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/left.svg"
                      alt=""
                      width={27}
                      height={52}
                    ></Image>
                    <h1 className="text-4xl font-bold tracking-normal text-primaryColor dark:text-black mx-1">
                      {" "}
                      University Admissions We Got So Far
                    </h1>
                    <Image
                      src="/right.svg"
                      alt=""
                      width={27}
                      height={52}
                    ></Image>
                  </div>
                  <div className="md:w-52 w-44 h-1 border-b-4 border-red-400 mt-2"></div>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-6 md:gap-8 gap-8 pt-8 mx-auto items-center justify-center content-center">
                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src="/FSU.png"
                      alt=""
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src="/ASU.png"
                      alt=""
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src="/USF.png"
                      alt=""
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src="/OAK.png"
                      alt=""
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src="/UNC.png"
                      alt=""
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src="/CSULos.png"
                      alt=""
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src="/HSU.png"
                      alt=""
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src="/TSUA.png"
                      alt=""
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src="/KENTSU.png"
                      alt=""
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src="/IIT.png"
                      alt=""
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src="/CASU.png"
                      alt=""
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></Image>
                  </div>

                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src="/NYU.png"
                      alt=""
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></Image>
                  </div>

                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src="/ISU.png"
                      alt=""
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></Image>
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src="/CSU.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src="/UWM.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div className=" flex flex-col items-center justify-center">
                    <Image
                      src="/MMU.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div className=" flex flex-col items-center justify-center underline">
                    <Link
                      href="/contact"
                      className="text-scrollToTop font-semibold tracking-wide hover:text-primaryColor transition duration-1000 ease-in-out"
                    >
                      <h1>Many More</h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universities;
