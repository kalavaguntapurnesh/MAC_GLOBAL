import React from "react";
import Image from "next/image";

const ContactOne = () => {
  return (
    <div className="bg-gray-50 ">
      <div className="relative pt-40 pb-16">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full text-center pb-14">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex flex-wrap flex-col items-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/left.svg"
                      alt=""
                      width={27}
                      height={52}
                    ></Image>
                    <h1 className="text-4xl font-bold tracking-tight text-primaryColor dark:text-black mx-1">
                      {" "}
                      Get In Touch With Us
                    </h1>
                    <Image
                      src="/right.svg"
                      alt=""
                      width={27}
                      height={52}
                    ></Image>
                  </div>
                  <div className="w-44 h-1 border-b-4 border-red-400 mt-2"></div>
                </div>
                <div className="">
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                    <div className=" flex flex-col justify-center items-center">
                      <div className=" h-20  w-full flex justify-center items-center">
                        <Image
                          src="/Location.png"
                          alt=""
                          width={60}
                          height={60}
                        ></Image>
                      </div>
                      <div className=" h-12 flex justify-center items-center">
                        <Image
                          src="/left.svg"
                          alt=""
                          width={27}
                          height={52}
                        ></Image>
                        <h1 className="tracking-wider font-bold text-xl">
                          ADDRESS
                        </h1>
                        <Image
                          src="/right.svg"
                          alt=""
                          width={26}
                          height={30}
                        ></Image>
                      </div>
                      
                      <div className="flex flex-col h-24  overflow-hidden items-center justify-center">
                        <h1 className="font-semibold tracking-normal lg:text-base text-sm">
                          10-3-206 / M4, 2nd Floor,KK Street,
                        </h1>
                        <h1 className="font-semibold tracking-normal lg:text-base text-sm">
                          {" "}
                          Tirupati City, Andhra Pradesh
                        </h1>
                        <h1 className="font-semibold tracking-normal lg:text-base text-sm">
                          India, 517501
                        </h1>
                      </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                      <div className=" h-20 0 w-full flex justify-center items-center">
                        <Image
                          src="/phone.png"
                          alt=""
                          width={60}
                          height={60}
                        ></Image>
                      </div>
                      <div className=" h-12 flex justify-center items-center">
                        <Image
                          src="/left.svg"
                          alt=""
                          width={27}
                          height={52}
                        ></Image>
                        <h1 className="tracking-wider font-bold text-xl">
                          PHONE
                        </h1>
                        <Image
                          src="/right.svg"
                          alt=""
                          width={26}
                          height={30}
                        ></Image>
                      </div>
                      <div className="flex flex-col h-24  overflow-hidden items-center justify-center">
                        <h1 className="font-semibold tracking-normal lg:text-base text-sm">
                          Office Number:
                        </h1>
                        <h1 className="font-semibold tracking-normal lg:text-base text-sm">
                          91+ 70754 95493
                        </h1>
                      </div>
                    </div>
                    <div className=" flex flex-col justify-center items-center">
                      <div className="h-20  w-full flex justify-center items-center">
                        <Image
                          src="/email.png"
                          alt=""
                          width={60}
                          height={60}
                        ></Image>
                      </div>
                      <div className=" h-12 flex justify-center items-center">
                        <Image
                          src="/left.svg"
                          alt=""
                          width={27}
                          height={52}
                        ></Image>
                        <h1 className="tracking-wider font-bold text-xl">
                          EMAIL
                        </h1>
                        <Image
                          src="/right.svg"
                          alt=""
                          width={26}
                          height={30}
                        ></Image>
                      </div>
                      <div className="flex flex-col h-24  overflow-hidden  items-center justify-center">
                        <h1 className="font-semibold tracking-normal lg:text-base text-sm">
                          <a href="">macglobalservices@gmail.com</a>
                        </h1>
                        <h1 className="font-semibold tracking-normal lg:text-base text-sm">
                          <a href="">keshavaconsultancy@gmail.com</a>
                        </h1>
                      </div>
                    </div>
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

export default ContactOne;
