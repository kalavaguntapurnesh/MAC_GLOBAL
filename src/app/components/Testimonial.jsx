import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="bg-white md:my-12">
      <div className="relative pt-8 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div className="w-full space-y-6">
                <div className=" flex items-center justify-center ">
                  <h3 className="lg:text-start text-center lg:text-4xl text-4xl font-bold tracking-normal text-primaryColor dark:text-black">
                    Why MAC is superior than our competitors ?
                  </h3>
                </div>
                <ul className="space-y-3 pb-4">
                  <li>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad consectetur, praesentium rem, porro provident nulla
                        ipsam.
                      </span>
                    </div>
                  </li>
                  <li>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad consectetur, praesentium rem, porro provident nulla
                        ipsam.
                      </span>
                    </div>
                  </li>
                  <li>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ad consectetur, praesentium rem, porro provident nulla
                        ipsam.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col w-full">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden ">
                      <table className="min-w-full text-center text-sm font-light border-2 border-gray-400 rounded-xl">
                        <thead className="border-2 border-black font-medium dark:border-neutral-500 ">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-4 font-bold text-[16px]"
                            >
                              Factors
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 font-bold text-[16px]"
                            >
                              MAC Global
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-4 font-bold text-[16px]"
                            >
                              Others
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b dark:border-neutral-600 dark:bg-neutral-600">
                            <td className="whitespace-nowrap px-6 py-4 font-bold dark:text-neutral-50">
                              Interest Rates
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold dark:text-neutral-50">
                              10.02%
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold dark:text-neutral-50">
                              12.20%
                            </td>
                          </tr>

                          <tr className="border-b border-secondary-200 bg-secondary-100 text-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-bold">
                              Housing Assistance
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex justify-center items-center">
                                <Image
                                  src="/Check_Icon.png"
                                  width={30}
                                  height={20}
                                ></Image>
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex justify-center items-center">
                                <Image
                                  src="/Check_Icon.png"
                                  width={30}
                                  height={20}
                                ></Image>
                              </div>
                            </td>
                          </tr>

                          <tr className="border-b text-neutral-800  dark:border-neutral-600  dark:bg-neutral-600">
                            <td className="whitespace-nowrap px-6 py-4 font-bold dark:text-neutral-50">
                              Part-Time Facility
                            </td>
                            <td className="px-6 py-4 flex justify-center items-center">
                              <div className="flex justify-center items-center">
                                <Image
                                  src="/Check_Icon.png"
                                  width={30}
                                  height={20}
                                ></Image>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-7 py-4 ">
                              <div className="flex justify-center items-center">
                                <Image
                                  src="/Wrong_Icon.png"
                                  width={30}
                                  height={20}
                                ></Image>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b text-neutral-50 ">
                            <td className="whitespace-nowrap px-6 py-4 font-bold text-black">
                              Career Guidance
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex justify-center items-center">
                                <Image
                                  src="/Check_Icon.png"
                                  width={30}
                                  height={20}
                                ></Image>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-7 py-4 ">
                              <div className="flex justify-center items-center">
                                <Image
                                  src="/Check_Icon.png"
                                  width={30}
                                  height={20}
                                ></Image>
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b text-neutral-50 dark:border-neutral-600  dark:bg-neutral-600">
                            <td className="whitespace-nowrap px-6 py-4 font-bold text-black dark:text-neutral-50">
                              Job Support
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex justify-center items-center">
                                <Image
                                  src="/Check_Icon.png"
                                  width={30}
                                  height={20}
                                ></Image>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-7 py-4 ">
                              <div className="flex justify-center items-center">
                                <Image
                                  src="/Wrong_Icon.png"
                                  width={30}
                                  height={20}
                                ></Image>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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

export default Testimonial;
