import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import OneLottie from "../../../public/lotties/AboutOne.json";
import TwoLottie from "../../../public/lotties/TwoLottie.json";
import ThreeLottie from "../../../public/lotties/ThreeLottie.json";

const AboutOne = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-40 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full text-center pb-14">
              <div className="w-full max-w-[14000px] mx-auto space-y-4">
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
                      About MAC Global Services
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

                <div className="text-gray-600 dark:text-gray-800 my-4">
                  <p className="font-medium leading-relaxed md:text-[17px] text-[16px] text-center tracking-wide">
                    Open doors to a world of possibilities with education loans,
                    expert study abroad counseling, comprehensive exam
                    preparation, forex services, credit card solutions,
                    accommodation support, and a rich array of informational
                    resources including scholarships and insightful blogs.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-4">
                  <div className="flex flex-col gap-2  justify-center items-center">
                    <Lottie
                      animationData={OneLottie}
                      loop={true}
                      className="w-[310px] h-[200px]"
                    />
                    <h1 className="font-bold tracking-wide leading-relaxed text-xl text-colorTwo">Study Abroad Service</h1>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Lottie
                      animationData={TwoLottie}
                      loop={true}
                      className="w-[310px] h-[200px]"
                    />
                    <h1 className="font-bold tracking-wide leading-relaxed text-xl text-colorTwo">VISA Approval Service</h1>
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-center">
                    <Lottie
                      animationData={ThreeLottie}
                      loop={true}
                      className="w-[310px] h-[200px]"
                    />
                    <h1 className="font-bold tracking-wide leading-relaxed text-xl text-colorTwo">Interest Loan Payment</h1>
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

export default AboutOne;
