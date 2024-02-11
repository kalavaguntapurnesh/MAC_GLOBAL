import React from "react";
import Image from "next/image";

const AboutThree = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div className="flex items-center justify-center py-4">
                <Image
                  src="/aboutOne.jpg"
                  alt=""
                  width={600}
                  height={400}
                  className="rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden lg:hover:scale-110 transition duration-1000 ease-in-out"
                ></Image>
              </div>
              <div className="">
                <div className="w-full space-y-8">
                  <div className=" flex items-center justify-center ">
                    <h3 className="lg:text-start text-center lg:text-4xl text-3xl font-bold tracking-normal text-primaryColor dark:text-black">
                      Why MAC is superior than our competitors ?
                    </h3>
                  </div>
                  <div className="flex items-center justify-center content-center">
                    <p className="w-full leading-relaxed font-medium lg:text-start text-center md:text-[17px] text-[16px] text-gray-600 dark:text-gray-800 ">
                      Our experience in various business verticals/domains and
                      different technologies allows us to serve customers of all
                      sizes around the world, providing with software system
                      development; product development in web, mobile / client
                      server environments; or software maintenance and QA.
                    </p>
                  </div>
                  <ul className="space-y-3 pb-4">
                    <li className="space-x-3 ">
                      <div className=" flex flex-row space-x-3 justify-center lg:justify-start items-center">
                        <svg
                          class="flex-shrink-0 w-6 h-6 text-green-600 hover:text-primaryColor transition duration-1000 ease-in-out"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="font-medium md:text-[17px] text-[16px] text-gray-600 dark:text-gray-800 ">
                          Progressively introduce new features with interactive
                          Tours
                        </span>
                      </div>
                    </li>
                    <li className="space-x-3 ">
                      <div className=" flex flex-row space-x-3 justify-center lg:justify-start items-center">
                        <svg
                          class="flex-shrink-0 w-6 h-6 text-green-600 hover:text-primaryColor transition duration-1000 ease-in-out"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="font-medium md:text-[17px] text-[16px] text-gray-600 dark:text-gray-800 ">
                          Target the most receptive users for efficient feature
                          adoption
                        </span>
                      </div>
                    </li>
                    <li className="space-x-3">
                      <div className=" flex flex-row space-x-3 justify-center lg:justify-start items-center">
                        <svg
                          class="flex-shrink-0 w-6 h-6 text-green-600 hover:text-primaryColor transition duration-1000 ease-in-out"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <span class="font-medium md:text-[17px] text-[16px] text-gray-600 dark:text-gray-800 ">
                          Offer additional guidance in Tooltips to drive users
                          to value
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutThree;
