import React from "react";
import Image from "next/image";

const ContactTwo = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative pt-4 pb-16">
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
                      Write your queries here
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
            </div>

            <div className="w-full">
              <form action="" method="POST">
                <div className="w-full flex justify-center items-center">
                  <div class="mb-5 md:w-1/2 w-full">
                    <label
                      for="email"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Rohit Sukheja"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full flex justify-center items-center">
                  <div class="mb-5 md:w-1/2 w-full">
                    <label
                      for="email"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="example@domain.com"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="w-full flex justify-center items-center">
                  <div class="mb-5 md:w-1/2 w-full">
                    <label
                      for="subject"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Enter your subject"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                    />
                  </div>
                </div>

                <div className="w-full flex justify-center items-center">
                  <div class="mb-5 md:w-1/2 w-full">
                    <label
                      for="message"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Message
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      id="message"
                      placeholder="Type your message"
                      class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                    ></textarea>
                  </div>
                </div>

                <div className="w-full flex justify-center items-center">
                  <div class="mb-5 md:w-1/2 w-full">
                  <button class="hover:shadow-form rounded-md bg-[#048D3F] hover:bg-green-900 transition duration-1000 ease-in-out py-3 px-8 text-base font-semibold text-white outline-none">
                    Submit
                  </button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTwo;
