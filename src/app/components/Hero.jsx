import React from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full bg-white pt-40 pb-16">
      <div className="max-w-[1400px] m-auto grid md:grid-cols-2">
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center lg:justify-start justify-center">
            <p className="uppercase text-[22px] text-[#20B486] font-medium py-2 lg:px-4 xl:px-2 lg:text-start text-center">
              start to success
            </p>
          </div>
          <div className=" flex items-center lg:justify-start justify-center">
            <h1 className="xl:text-6xl lg:text-[48px] text-[44px] font-semibold py-2 lg:px-4 xl:px-2 xl:leading-[72px] lg:leading-[60px] lg:text-start text-center">
              Access to 5000+ Courses from 300
              <span className="text-[#20B486]">
                {" "}
                Instructors & Institutions
              </span>
            </h1>
          </div>
          <div className=" flex items-center lg:justify-start justify-center">
            <p className="lg:text-lg text-[16px] text-gray-900 py-2 lg:px-4 xl:px-2 lg:text-start text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              labore repellat.
            </p>
          </div>
          {/* <div className="lg:px-4 xl:px-2">
            <form
              action=""
              className="bg-white border max-w-[500px] p-4 input-box-shadow rounded-md flex justify-between"
            >
              <input
                className="bg-white"
                type="text"
                placeholder="What do want to learn?"
              />
              <button>
                <AiOutlineSearch
                  size={20}
                  className="icon"
                  style={{ color: "#000" }}
                />
              </button>
            </form>
          </div> */}
        </div>

        <div className="flex justify-center items-center ">
          <Image
            src="/heroImg.png"
            alt=""
            width={300}
            height={300}
            className="md:order-last h-full w-5/6"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
