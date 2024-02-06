import React from "react";
import Image from "next/image";

const Carousel = () => {
  return (
    <div className="mt-40">
      <div className="w-full inline-flex flex-nowrap border-2 border-red-700 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_Image]:max-w-none animate-infinite-scroll">
          <li>
            <Image src="/samsung.svg" alt="" width={180} height={100}></Image>
          </li>
          <li>
            <Image src="/disney.svg" alt="" width={180} height={100}></Image>
          </li>
          <li>
            <Image src="/facebook.svg" alt="" width={180} height={100}></Image>
          </li>
          <li>
            <Image src="/apple.svg" alt="" width={180} height={100}></Image>
          </li>
          <li>
            <Image src="/airbnb.svg" alt="" width={180} height={100}></Image>
          </li>
          <li>
            <Image src="/quora.svg" alt="" width={180} height={100}></Image>
          </li>
          <li>
            <Image src="/sass.svg" alt="" width={180} height={100}></Image>
          </li>
          <li>
            <Image src="/spark.svg" alt="" width={180} height={100}></Image>
          </li>
        </ul>

        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_Image]:max-w-none animate-infinite-scroll">
          <li>
            <Image src="/samsung.svg" alt="" width={180} height={100}></Image>
          </li>
          <li>
            <Image src="/disney.svg" alt="" width={180} height={100}></Image>
          </li>
          <li>
            <Image src="/facebook.svg" alt="" width={180} height={100}></Image>
          </li>
          <li>
            <Image src="/apple.svg" alt="" width={180} height={100}></Image>
          </li>
          <li>
            <Image src="/airbnb.svg" alt="" width={180} height={100}></Image>
          </li>
          <li>
            <Image src="/quora.svg" alt="" width={180} height={100}></Image>
          </li>
          <li>
            <Image src="/sass.svg" alt="" width={180} height={100}></Image>
          </li>
          <li>
            <Image src="/spark.svg" alt="" width={180} height={100}></Image>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
