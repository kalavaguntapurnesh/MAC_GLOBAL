import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import Image from "next/image";
// import { ServiceData } from "@/app/data/index";

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxAccessibility,
} from "react-icons/rx";

// import SpaceCity5 from "../assets/SpaceCity5.jpeg";
// import SpaceCity6 from "../assets/SpaceCity6.jpeg";
// import SpaceCity7 from "../assets/SpaceCity7.jpeg";
// import SpaceCity8 from "../assets/SpaceCity8.jpeg";
// import SpaceCity9 from "../assets/SpaceCity9.jpeg";

const ActiveSlider = () => {
  const ServiceData = [
    {
      icon: RxCrop,
      title: "Rohit Sukheja",
      content:
        "MAC is responsible for helping you achieve your educational dreams. Studying abroad in countries like Canada, Australia, UK, New Zealand could help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/StudentOne.png",
    },
    {
      icon: RxPencil2,
      title: "Pranavi Manikonda",
      content:
        "MAC is responsible for helping you achieve your educational dreams. Studying abroad in countries like Canada, Australia, UK, New Zealand could help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/StudentTwo.png",
    },
    {
      icon: RxDesktop,
      title: "Purnesh Kalavagunta",
      content:
        "MAC is responsible for helping you achieve your educational dreams. Studying abroad in countries like Canada, Australia, UK, New Zealand could help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/StudentThree.png",
    },
    {
      icon: RxReader,
      title: "Teja Samanthavada",
      content:
        "MAC is responsible for helping you achieve your educational dreams. Studying abroad in countries like Canada, Australia, UK, New Zealand could help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/StudentFour.png",
    },
    {
      icon: RxAccessibility,
      title: "Priya Sharma",
      content:
        "MAC is responsible for helping you achieve your educational dreams. Studying abroad in countries like Canada, Australia, UK, New Zealand could help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/StudentFive.png",
    },
    {
      icon: RxRocket,
      title: "Ram Charan Teja",
      content:
        "MAC is responsible for helping you achieve your educational dreams. Studying abroad in countries like Canada, Australia, UK, New Zealand could help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/StudentSix.png",
    },
    {
      icon: RxCrop,
      title: "Tarak Ram",
      content:
        "MAC is responsible for helping you achieve your educational dreams. Studying abroad in countries like Canada, Australia, UK, New Zealand could help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/StudentSeven.png",
    },
    {
      icon: RxPencil2,
      title: "Vishwak Sen",
      content:
        "MAC is responsible for helping you achieve your educational dreams. Studying abroad in countries like Canada, Australia, UK, New Zealand could help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/StudentEight.png",
    },
    {
      icon: RxDesktop,
      title: "Anjali Bhatia",
      content:
        "MAC is responsible for helping you achieve your educational dreams. Studying abroad in countries like Canada, Australia, UK, New Zealand could help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/StudentNine.png",
    },
    {
      icon: RxReader,
      title: "Kailash Parghi",
      content:
        "MAC is responsible for helping you achieve your educational dreams. Studying abroad in countries like Canada, Australia, UK, New Zealand could help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/StudentTen.png",
    },
    {
      icon: RxAccessibility,
      title: "Bhupathi Raju",
      content:
        "MAC is responsible for helping you achieve your educational dreams. Studying abroad in countries like Canada, Australia, UK, New Zealand could help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/StudentOne.png",
    },
  ];

  return (
    <div className="bg-gray-50 ">
      <div className="relative pt-8 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="flex items-center justify-center flex-col bg-gray-50 ">
              <Swiper
                breakpoints={{
                  340: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                  },
                  1000: {
                    slidesPerView: 3,
                    spaceBetween: 18,
                  },
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, FreeMode, Pagination]}
                className="max-w-[90%] lg:max-w-[80%]"
              >
                {ServiceData.map((item) => (
                  <SwiperSlide key={item.title}>
                    {/* <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer border-2 border-pink-500"> */}
                    {/* <div
                className="absolute inset-0 bg-cover bg-center border-2 border-red-700"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />

              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50 " />
              <div className="relative flex flex-col gap-3 border-2 border-red-600">
                <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                <p className="lg:text-[18px]">{item.content} </p>
              </div> */}
                    {/* <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" /> */}
                    {/* <div className="h-[250px] w-full lg:h-[400px] lg:w-full pb-20 border-2 border-blue-500">
                <div className="flex flex-col justify-center items-center">
                  <div className="border-2 border-green-500">
                    <Image
                      src={item.backgroundImage}
                      alt=""
                      width={176}
                      height={176}
                      className="rounded-full bg-white"
                    ></Image>
                  </div>
                  <div>
                    <h1>{item.title}</h1>
                  </div>
                  <div className="overflow-hidden">
                    <p>{item.content}</p>
                  </div>
                </div>
              </div> */}

                    <div className="rounded-xl bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-88">
                      <div className="flex flex-col justify-center items-center mb-20 mt-8">
                        <div className="my-4">
                          <Image
                            src={item.backgroundImage}
                            alt=""
                            width={200}
                            height={180}
                            className="rounded-lg"
                          ></Image>
                        </div>
                        <div className="my-2">
                          <h1 className="font-bold md:text-[20px] text-[22px] tracking-wide text-primaryColor">
                            {item.title}
                          </h1>
                        </div>

                        <div class="flex items-center">
                          <svg
                            class="w-4 h-4 text-yellow-300 ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 text-yellow-300 ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                          <svg
                            class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                          >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                          </svg>
                        </div>

                        <div className="mt-2 mb-4 ">
                          <p className="text-[15px] tracking-wide mx-2">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* </div> */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveSlider;
