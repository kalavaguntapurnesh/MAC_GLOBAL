import React from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full bg-white pt-28 pb-8 h-auto">
      <div className="max-w-[1400px] m-auto grid md:grid-cols-2">
        <div className="flex flex-col md:gap-3 gap-4">
          {/* <div className="flex items-center lg:justify-start justify-center">
            <p className="uppercase text-[22px] text-[#20B486] font-medium py-2 lg:px-4 xl:px-2 lg:text-start text-center">
              start to success
            </p>
          </div> */}
          <div className=" flex items-center lg:justify-start justify-center mt-4">
            <h1 className="xl:text-6xl lg:text-[48px] text-[48px] font-semibold lg:px-4 xl:px-2 xl:leading-[72px] lg:leading-[60px] lg:text-start text-center">
              Access to 5000+ Courses from 300
              <span className="text-colorOne"> Instructors & Institutions</span>
            </h1>
          </div>

          <div className=" flex items-center lg:justify-start justify-center">
            <h1 className="lg:text-[24px] text-[24px] font-semibold lg:px-4 xl:px-2 xl:leading-[72px] lg:leading-[60px] lg:text-start text-center">
              Top 1% Pre-vetted Coders | Dedicated Software Programmers.
            </h1>
          </div>

          <div className=" flex items-center lg:justify-start justify-center">
            <p className="lg:text-lg text-[16px] text-gray-900 lg:px-4 xl:px-2 lg:text-start text-center">
              Hire best software engineers in India from AppsDevPro. An
              award-winning software outsourcing company, we help businesses
              meet the tech-talent.
            </p>
          </div>

          <div className=" flex items-center lg:justify-start justify-center">
            <a
              href="/contact"
              className="bg-colorOne font-semibold outline-none
              rounded-md hover:shadow-form transition duration-1000 ease-in-out hover:bg-colorTwo text-white px-8 py-2.5 text-center"
            >
              Get Started Now
            </a>
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

        <div className="flex justify-center items-center">
          {/* <Image
            src="/HERO.jpg"
            alt=""
            width={300}
            height={200}
            className="md:order-last h-6/12 w-5/6 border-2 border-red-400"
          ></Image> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
