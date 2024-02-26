import React from 'react';
import Image from "next/image";

const FeaturesOne = () => {
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
                  <h1 className="text-4xl font-bold tracking-normal text-primaryColor dark:text-black mx-1">
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

              <div className="text-gray-600 dark:text-gray-800 my-4">
                <p className="font-medium leading-relaxed md:text-[17px] text-[16px] text-center tracking-wide">
                  Open doors to a world of possibilities with education loans,
                  expert study abroad counseling, comprehensive exam
                  preparation, forex services, credit card solutions,
                  accommodation support, and a rich array of informational
                  resources including scholarships and insightful blogs.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-4">
                <div className="">
                  <div className="rounded-xl  bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-88">
                    <div className="flex flex-col justify-center items-center">
                      <div className="my-4">
                        <Image
                          src="/One.png"
                          alt=""
                          width={200}
                          height={180}
                          className="rounded-lg"
                        ></Image>
                      </div>
                      <div className="my-2">
                        <h1 className="font-bold text-[18px] tracking-wide text-primaryColor">
                          Superior Success Rate
                        </h1>
                      </div>
                      <div className="mt-2 mb-4">
                        <p className="text-[16px] leading-relaxed tracking-wide mx-2">
                          MAC is responsible for helping you achieve your
                          educational dreams. Studying abroad in countries
                          like Canada, Australia, UK, New Zealand could help
                          explore your possibilities to a very great extent.
                          Also, create success stories for students worldwide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="rounded-xl bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col h-88">
                    <div className="flex flex-col justify-center items-center">
                      <div className="my-4">
                        <Image
                          src="/Two.png"
                          alt=""
                          width={200}
                          height={180}
                          className="rounded-lg"
                        ></Image>
                      </div>
                      <div className="my-2">
                        <h1 className="font-bold text-[18px] tracking-wide text-primaryColor">
                          Better Student Satisfaction
                        </h1>
                      </div>
                      <div className="mt-2 mb-4 h-auto ">
                        <p className="text-[16px] leading-relaxed tracking-wide mx-2">
                          MAC is responsible for helping you achieve your
                          educational dreams. Studying abroad in countries
                          like Canada, Australia, UK, New Zealand could help
                          explore your possibilities to a very great extent.
                          Also, create success stories for students worldwide.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="rounded-xl bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col h-88">
                    <div className="flex flex-col justify-center items-center">
                      <div className="my-4">
                        <Image
                          src="/Three.png"
                          alt=""
                          width={200}
                          height={180}
                          className="rounded-lg"
                        ></Image>
                      </div>
                      <div className="my-2">
                        <h1 className="font-bold text-[18px] tracking-wide text-primaryColor">
                          Higher Visa Approvals
                        </h1>
                      </div>
                      <div className="mt-2 mb-4 h-auto">
                        <p className="text-[16px] leading-relaxed tracking-wide mx-2">
                          MAC is responsible for helping you achieve your
                          educational dreams. Studying abroad in countries
                          like Canada, Australia, UK, New Zealand could help
                          explore your possibilities to a very great extent.
                          Also, create success stories for students worldwide.
                        </p>
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
  </div>
  )
}

export default FeaturesOne
