import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import Image from "next/image";

const ActiveSlider = () => {
  const ServiceData = [
    {
      title: "Rohit Sukheja",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/My_Profile.jpg",
      university: "Oklahoma State University, USA",
    },
    {
      title: "Pranavi Manikonda",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/My_Profile.jpg",
      university: "Queen's Mary University, UK",
    },
    {
      title: "Purnesh Kalavagunta",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/My_Profile.jpg",
      university: "Toronto National University, Canada",
    },
    {
      title: "Teja Samanthavada",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/My_Profile.jpg",
      university: "Oklahoma State University, USA",
    },
    {
      title: "Priya Sharma",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/My_Profile.jpg",
      university: "Florida State University, USA",
    },
    {
      title: "Ram Charan Teja",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/My_Profile.jpg",
      university: "Indiana State University, USA",
    },
    {
      title: "Tarak Ram",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/My_Profile.jpg",
      university: "NJIT(New Jersey), USA",
    },
    {
      title: "Vishwak Sen",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/My_Profile.jpg",
      university: "Canberra State University, Australia",
    },
    {
      title: "Anjali Bhatia",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/My_Profile.jpg",
      university: "University of Cincinnati, USA",
    },
    {
      title: "Kailash Parghi",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/My_Profile.jpg",
      university: "Manchester Metropolitan University, UK",
    },
    {
      title: "Bhupathi Raju",
      content:
        "MAC is responsible for helping you achieve your ould help explore your possibilities to a very great extent. Also, create success stories for students worldwide",
      backgroundImage: "/students/My_Profile.jpg",
      university: "North Western University, USA",
    },
  ];

  return (
    <div className="bg-gray-50 pb-8">
      <div className="relative pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="flex items-center justify-center flex-col bg-gray-50">
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
                className="max-w-[90%] lg:max-w-[90%] "
              >
                {ServiceData.map((item) => (
                  <SwiperSlide key={item.title}>
                    <div className="rounded-md bg-white shadow-lg h-100">
                      <div className="flex flex-col justify-center items-center mb-20 ">
                        <div className="mb-4 w-full flex justify-center items-center">
                          <Image
                            src={item.backgroundImage}
                            alt=""
                            width={160}
                            height={160}
                            className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] lg:w-[85%] w-[75%] h-48 rounded-md"
                          ></Image>
                        </div>
                        <div className=" flex justify-center items-center h-8 w-full">
                          <h1 className="font-semibold md:text-[20px] text-[22px] text-colorOne leading-relaxed tracking-wide">
                            {item.title}
                          </h1>
                        </div>
                        <div className=" flex justify-center items-center h-10 w-full">
                          <h1 className="leading-relaxed tracking-wide font-medium text-colorTwo text-center">
                            {item.university}
                          </h1>
                        </div>

                        <div className=" lg:h-28 flex justify-center items-center mb-3">
                          <p className="text-[14px] tracking-wide mx-2 font-medium text-black  text-center leading-relaxed">
                            {item.content}
                          </p>
                        </div>
                      </div>
                    </div>
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
