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
                    <div className="overflow-hidden">
                      <table className="min-w-full text-center text-sm font-light border-2 border-gray-500 ">
                        <thead className="border-b font-medium dark:border-neutral-500 ">
                          <tr>
                            <th scope="col" className="px-6 py-4 ">
                              className
                            </th>
                            <th scope="col" className="px-6 py-4">
                              MAC Global
                            </th>
                            <th scope="col" className="px-6 py-4">
                              Others
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-neutral-600 bg-neutral-600 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              Interest Rate
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              10.02%
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">
                              12.20%
                            </td>
                          </tr>

                          <tr className="border-b border-secondary-200 bg-secondary-100 text-neutral-800">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              Accomodation
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">Yes</td>
                            <td className="whitespace-nowrap px-6 py-4">No</td>
                          </tr>
                          <tr className="border-b border-neutral-600 bg-neutral-600 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              Career Guidance
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">Yes</td>
                            <td className="whitespace-nowrap px-6 py-4">No</td>
                          </tr>
                          <tr className="border-b  bg-neutral-50 text-neutral-800 dark:bg-neutral-50 ">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              Part Time Facility
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">Yes</td>
                            <td className="whitespace-nowrap px-6 py-4">No</td>
                          </tr>
                          <tr className="border-b border-neutral-600 bg-neutral-600 text-neutral-50 dark:border-neutral-600 dark:bg-neutral-700">
                            <td className="whitespace-nowrap px-6 py-4 font-medium">
                              Job Assistance
                            </td>
                            <td className="whitespace-nowrap px-6 py-4">Yes</td>
                            <td className="whitespace-nowrap px-6 py-4">No</td>
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
