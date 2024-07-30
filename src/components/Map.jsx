import React from "react";
import Data from "../assets/Data.svg";

const Map = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-16 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full ">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex flex-wrap flex-col items-center pb-3">
                  <div className="flex items-center justify-center">
                    <h1 className="text-3xl font-semibold text-center tracking-normal text-colorTwo mx-1">
                      {" "}
                      Services across the world
                    </h1>
                  </div>
                  <div className="md:w-36 w-32 h-1 border-b-[3px] border-colorOne mt-[1px]"></div>
                </div>

                <div className="text-gray-600 dark:text-gray-800 my-4">
                  <p className="font-medium leading-relaxed md:text-[17px] text-[16px] text-center tracking-wide">
                    Marked below are the countries we provide services like
                    University Selection, VISA Guidance, Post-departure support
                    and many more.
                  </p>
                </div>

                <div className="pt-6">
                  <div>
                    {/* <iframe
                      width="100%"
                      height="600"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=10-3-206%20/%20M4,%202nd%20Floor,KK%20Street,Tirupati,India+(MAC%20Global%20Services)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                      <a href="https://www.gps.ie/">gps devices</a>
                    </iframe> */}
                    <div className="flex justify-center items-center">
                      <img src={Data} alt="" className="md:w-[80%] w-[100%]" />
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

export default Map;
