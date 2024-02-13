import React from "react";
import Image from "next/image";

const FeaturesOne = () => {
  return (
    <div className="bg-gray-50 ">
      <div className="relative pt-40 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full text-center pb-4">
              <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="border-2 border-red-400 ">
                  <div className="relative">
                    <Image
                      src="/aboutOne.jpg"
                      alt=""
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    ></Image>
                  </div>
                </div>
                <div className="border-2 border-red-400">
                  <div>
                    <Image
                      src="/aboutOne.jpg"
                      alt=""
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    ></Image>
                  </div>
                </div>
                <div className="border-2 border-red-400">
                  <div>
                    <Image
                      src="/aboutOne.jpg"
                      alt=""
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover"
                    ></Image>
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

export default FeaturesOne;
