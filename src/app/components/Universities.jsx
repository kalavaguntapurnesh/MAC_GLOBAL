import React from "react";
import Image from "next/image";

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
                    <h1 className="text-4xl font-bold tracking-tight text-primaryColor dark:text-black mx-1">
                      {" "}
                      Student Admissions We Got So Far
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

                <div className="grid grid-cols-3 md:grid-cols-7 md:gap-4 pt-8 mx-auto items-center justify-center content-center">
                  <div>
                    <Image
                      src="/FSU.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/ASU.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/USF.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/OAK.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/UNC.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/CSULos.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/HSU.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/TSUA.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/TSUAr.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/KENTSU.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/IIT.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/CASU.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/NJIT.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/NYU.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/NCSU.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/OHIO.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/ISU.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/CSU.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/UWM.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
                  </div>
                  <div>
                    <Image
                      src="/MMU.png"
                      alt=""
                      width={100}
                      height={100}
                    ></Image>
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
