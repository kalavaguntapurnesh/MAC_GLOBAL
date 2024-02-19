import React from "react";
import Image from "next/image";

const Feedback = () => {
  return (
    <div className="pt-4 pb-16 bg-gray-50">
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
                      Magnificent Feedback From Our Customers
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

            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
