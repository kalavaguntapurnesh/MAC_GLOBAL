import React from "react";
import Image from "next/image";

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

                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 pt-4">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/serviceOne.jpg"
                      alt="imageOne"
                      width={300}
                      height={300}
                      className="md:w-11/12 w-full rounded-3xl"
                    ></Image>
                    <div className="p-6 space-y-4 text-center">
                      <h4 className="text-2xl font-semibold tracking-tight text-gray-900">
                        Software{" "}
                        <span className="text-companyColor">Development</span>
                      </h4>
                      <p className="text-sm text-gray-600">
                        Dynamic and innovative enterprise applications to
                        optimize your critical business processes and functions.
                      </p>
                      <a
                        href="/about"
                        className="block px-3 py-2 mt-6 text-sm font-semibold text-black transition duration-200 ease-in-out bg-companyColor border border-companyColor rounded-md hover:companyColor  hover:no-underline hover:companyColor"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <Image
                      src="/aboutOne.jpg"
                      alt="imageOne"
                      width={300}
                      height={300}
                      className="md:w-11/12 w-full rounded-3xl"
                    ></Image>
                    <div className="p-6 space-y-4 text-center">
                      <h4 className="text-2xl font-semibold tracking-tight text-gray-900">
                        Software{" "}
                        <span className="text-companyColor">Development</span>
                      </h4>
                      <p className="text-sm text-gray-600">
                        Dynamic and innovative enterprise applications to
                        optimize your critical business processes and functions.
                      </p>
                      <a
                        href="/about"
                        className="block px-3 py-2 mt-6 text-sm font-semibold text-black transition duration-200 ease-in-out bg-companyColor border border-companyColor rounded-md hover:companyColor  hover:no-underline hover:companyColor"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src="/serviceThree.jpg"
                      alt="imageOne"
                      width={300}
                      height={300}
                      className="md:w-11/12 w-full rounded-3xl"
                    ></Image>
                    <div className="p-6 space-y-4 text-center">
                      <h4 className="text-2xl font-semibold tracking-tight text-gray-900">
                        Software{" "}
                        <span className="text-companyColor">Development</span>
                      </h4>
                      <p className="text-sm text-gray-600">
                        Dynamic and innovative enterprise applications to
                        optimize your critical business processes and functions.
                      </p>
                      <a
                        href="/about"
                        className="block px-3 py-2 mt-6 text-sm font-semibold text-black transition duration-200 ease-in-out bg-companyColor border border-companyColor rounded-md hover:companyColor  hover:no-underline hover:companyColor"
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
