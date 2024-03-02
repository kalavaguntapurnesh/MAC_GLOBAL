import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import FeatureOne from "../../../public/lotties/Feature.json";
import FeatureTwo from "../../../public/lotties/FeatureTwo.json";
import FeatureThree from "../../../public/lotties/FeatureOne.json";

const ServicesOne = () => {
  return (
    <div className="bg-gray-50 ">
      <div className="relative pt-40 pb-4">
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
                      Services We Offer
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

                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 pt-4 ">
                  <div className="flex flex-col justify-center items-center space-y-4">
                    <div className=" w-full">
                      <Lottie
                        animationData={FeatureOne}
                        loop={true}
                        className="w-full  h-[200px]"
                      />
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold tracking-normal text-gray-900 leading-relaxed">
                        University{" "}
                        <span className="text-colorOne">Selection</span>
                      </h1>
                    </div>
                    <div className="w-full">
                      <p className="text-sm text-gray-600 text-center">
                        Dynamic and innovative enterprise applications to
                        optimize your critical business processes and functions.
                      </p>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <a
                        href="/contact"
                        className="block px-3 py-2 mt-4 text-sm font-medium text-white transition duration-200 ease-in-out bg-primaryColor border rounded-md w-11/12"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center space-y-4">
                    <div className=" w-full">
                      <Lottie
                        animationData={FeatureTwo}
                        loop={true}
                        className="w-full  h-[200px]"
                      />
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold tracking-normal text-gray-900 leading-relaxed">
                        VISA &{" "}
                        <span className="text-colorOne">Immigration</span>
                      </h1>
                    </div>
                    <div className="w-full">
                      <p className="text-sm text-gray-600 text-center">
                        Dynamic and innovative enterprise applications to
                        optimize your critical business processes and functions.
                      </p>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <a
                        href="/contact"
                        className="block px-3 py-2 mt-4 text-sm font-medium text-white transition duration-200 ease-in-out bg-primaryColor border rounded-md w-11/12"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center space-y-4">
                    <div className=" w-full">
                      <Lottie
                        animationData={FeatureThree}
                        loop={true}
                        className="w-full  h-[200px]"
                      />
                    </div>
                    <div>
                      <h1 className="text-2xl font-semibold tracking-normal text-gray-900 leading-relaxed">
                        Fees <span className="text-colorOne">Deployment</span>
                      </h1>
                    </div>
                    <div className="w-full">
                      <p className="text-sm text-gray-600 text-center">
                        Dynamic and innovative enterprise applications to
                        optimize your critical business processes and functions.
                      </p>
                    </div>
                    <div className="w-full flex justify-center items-center">
                      <a
                        href="/contact"
                        className="block px-3 py-2 mt-4 text-sm font-medium text-white transition duration-200 ease-in-out bg-primaryColor border rounded-md w-11/12 "
                      >
                        Learn More
                      </a>
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

export default ServicesOne;
