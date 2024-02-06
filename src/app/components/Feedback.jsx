import React from "react";
import Image from "next/image";

const Feedback = () => {
  return (
    <div className="mt-40 mb-20">
      <div className="relative pt-8 pb-16">
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
                      Magnificent Feedback From Our Customers
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
                <div>



                  <div className="w-full inline-flex flex-nowrap border-2 border-red-700 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)">
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_Image]:max-w-none animate-infinite-scroll">
                      <li>
                        <Image
                          src="/samsung.svg"
                          alt=""
                          width={180}
                          height={100}
                        ></Image>
                      </li>
                      <li>
                        <Image
                          src="/disney.svg"
                          alt=""
                          width={180}
                          height={100}
                        ></Image>
                      </li>
                      <li>
                        <Image
                          src="/facebook.svg"
                          alt=""
                          width={180}
                          height={100}
                        ></Image>
                      </li>
                      <li>
                        <Image
                          src="/apple.svg"
                          alt=""
                          width={180}
                          height={100}
                        ></Image>
                      </li>
                      <li>
                        <Image
                          src="/airbnb.svg"
                          alt=""
                          width={180}
                          height={100}
                        ></Image>
                      </li>
                      <li>
                        <Image
                          src="/quora.svg"
                          alt=""
                          width={180}
                          height={100}
                        ></Image>
                      </li>
                      <li>
                        <Image
                          src="/sass.svg"
                          alt=""
                          width={180}
                          height={100}
                        ></Image>
                      </li>
                      <li>
                        <Image
                          src="/spark.svg"
                          alt=""
                          width={180}
                          height={100}
                        ></Image>
                      </li>
                    </ul>
                    
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

export default Feedback;
