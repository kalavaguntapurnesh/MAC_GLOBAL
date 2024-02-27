import React from "react";
import Image from "next/image";

const ContactTwo = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative pt-4 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <div className="flex flex-col space-y-4 mt-8">
                  <div>
                    <h1 className="uppercase font-bold text-colorOne tracking-wide">
                      get in touch
                    </h1>
                  </div>
                  <div>
                    <h1 className="lg:text-5xl text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-colorTwo">
                      Motivated to make a better future, connect to us through
                      this form.
                    </h1>
                  </div>
                  <div>
                    <h1 className="leading-relaxed tracking-wide font-medium lg:text-[20px] text-[16px] text-gray-600 dark:text-gray-800 ">
                      We craft beautiful and unique digital experiences. With
                      more than 20 years of knowledge and expertise, we design
                      and code clean websites and apps!
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <form action="" method="POST" className="mt-8">
                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <label
                        for="email"
                        className="mb-3 block text-base font-medium text-[#07074D]"
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
                    <div class="mb-5 md:w-10/12 w-full">
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
                    <div class="mb-5 md:w-10/12 w-full">
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
                    <div class="mb-5 md:w-10/12 w-full">
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
                    <div class="mb-5 md:w-8/12 w-full">
                      <button class="hover:shadow-form rounded-md bg-[#048D3F] hover:bg-green-900 transition duration-1000 ease-in-out py-3 px-12 text-base font-semibold text-white outline-none">
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
    </div>
  );
};

export default ContactTwo;
