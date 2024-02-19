import React from "react";
import Image from "next/image";

const Countries = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-16">
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
                      Our Study Abroad Service
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
              </div>
              <div className="text-gray-600 dark:text-gray-800 my-4">
                <p className="font-medium leading-relaxed md:text-[17px] text-[16px] text-center">
                  We offer overseas education services to top countries in the
                  rundown of international education. Are you looking for abroad
                  education services, MAC Global Services will encapsulate all
                  from counselling to visa stamping. We offer services to study
                  in countries like,
                </p>
              </div>
              <div className=" grid grid-cols-1 md:grid-cols-5 md:gap-6 mx-auto items-center justify-center content-center">
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src="/USA.png"
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-lg"
                  ></Image>
                  <div>
                    <h4 className="font-bold text-blue-900 hover:text-blue-500 transition duration-1000 ease-in-out">
                      USA
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <Image
                    src="/CANADA.png"
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-lg"
                  ></Image>
                  <div>
                    <h4 className="font-bold text-blue-900 hover:text-blue-500 transition duration-1000 ease-in-out">
                      CANADA
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <Image
                    src="/UK.png"
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-xl"
                  ></Image>
                  <div>
                    <h4 className="font-bold text-blue-900 hover:text-blue-500 transition duration-1000 ease-in-out">
                      UK
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center ">
                  <Image
                    src="/GERMANY.png"
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-lg"
                  ></Image>
                  <div>
                    <h4 className="font-bold text-blue-900 hover:text-blue-500 transition duration-1000 ease-in-out">
                      GERMANY
                    </h4>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center ">
                  <Image
                    src="/FRANCE.png"
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-lg"
                  ></Image>
                  <div>
                    <h4 className="font-bold text-blue-900 hover:text-blue-500 transition duration-1000 ease-in-out">
                      FRANCE
                    </h4>
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

export default Countries;
