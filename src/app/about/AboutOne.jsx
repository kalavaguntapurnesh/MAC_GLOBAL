import React from "react";
import Image from "next/image";

const AboutOne = () => {
  return (
    <div className="bg-gray-50 ">
      <div className="relative pt-40 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full text-center pb-14">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="border-2 border-red-500">Hello</div>
                  <div className="border-2 border-red-500">Hello</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
