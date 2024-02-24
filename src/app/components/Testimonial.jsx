import React from "react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-8 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div className="w-full space-y-4">
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
              </div>

              <div className="flex flex-col w-full">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden ">
                      <table className="min-w-full text-center text-sm font-light border-2 border-gray-400 rounded-xl">
                        <thead className="border-b font-medium dark:border-neutral-500 ">
                          <tr>
                            <th scope="col" className="px-6 py-4 ">
                              Factors
                            </th>
                            <th scope="col" className="px-6 py-4 font-bold">
                              MAC Global
                            </th>
                            <th scope="col" className="px-6 py-4 font-bold">
                              Others
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b dark:border-neutral-600 dark:bg-neutral-700">
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-black">
                              Interest Rate
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold text-black">
                              10.02%
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold text-black">
                              12.20%
                            </td>
                          </tr>

                          <tr className="border-b border-secondary-200 bg-secondary-100 text-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              Stay Assistance
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

                          <tr className="border-b text-neutral-800 dark:bg-neutral-50 ">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              Part Time Facility
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
                          <tr className="border-b text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-black">
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
                          <tr className="border-b text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                            <td className="whitespace-nowrap px-6 py-4 font-medium text-black">
                              Job Assistance
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
