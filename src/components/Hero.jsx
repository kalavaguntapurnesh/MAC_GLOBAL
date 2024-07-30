import Lottie from "lottie-react";
import HeaderLottie from "../assets/lotties/Header.json";
import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
import One from "../assets/HeroImage.jpg";
import Two from "../assets/HeroTwo.jpg";
import Three from "../assets/HeroThree.jpg";
import Four from "../assets/HeroFour.jpg";

const Hero = () => {
  const data = [
    {
      image: Two,
      heading: "IT Software Solution & Support.",
      button: "Journey Starts here",
    },
    {
      image: Four,
      heading: "Vahas Technolgies Technical Support.",
      button: "Explore with us",
    },
    {
      image: One,
      heading: "Better User Interface Structure.",
      button: "Collaborate with us",
    },
  ];

  return (
    <div className="w-full bg-white pt-20 h-auto">
      <div className="m-auto max-w-[1400px] md:hidden block pt-8">
        <div className=" grid md:grid-cols-2 ">
          <div className="flex justify-center lg:justify-end items-center ">
            <Lottie
              animationData={HeaderLottie}
              loop={true}
              className="w-11/12 h-92"
            />
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-center mt-4 mx-3">
              <h1 className="text-[44px] font-bold text-center text-colorTwo">
                Find the right catch, in an ocean
                <span className="text-colorOne"> of opportunities.</span>
              </h1>
            </div>

            <div className="flex items-center lg:justify-start justify-center mx-3">
              <h1 className="lg:text-[24px] text-[24px] font-semibold lg:px-2 lg:text-start text-center text-colorTwo">
                Want to study abroad this 2024 ?
              </h1>
            </div>

            <div className="flex items-center lg:justify-start justify-center mx-3">
              <p className="lg:text-lg text-[16px] text-colorTwo lg:px-2 lg:text-start text-center">
                But you might feel a bit lost on how to get started. So, Mac
                does the hard work for you! Everything you need to know is on
                one platform. You will receive guidance throughout the whole
                application process.
              </p>
            </div>

            <div className="flex items-center lg:justify-start justify-center md:mx-5 pt-2 pb-4">
              <a
                href="/features"
                className="bg-colorTwo font-semibold outline-none
              rounded-full hover:shadow-form transition duration-1000 ease-in-out hover:bg-colorOne text-white px-8 py-2.5 text-center"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="m-auto md:block hidden">
        <div className="w-full bg-white">
          <Swiper
            modules={[Autoplay, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay
          >
            {data.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <img
                    src={img.image}
                    alt={`slide-${index + 1}`}
                    className="w-full h-[480px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-700 opacity-40 rounded-md"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h2 className="text-white text-center text-3xl font-bold">
                      {img.heading}
                    </h2>
                    <div className="mt-8">
                      <a
                        href="/careers"
                        className="relative inline-flex items-center justify-center py-2 px-16 overflow-hidden font-semibold text-white border-2 border-black bg-black rounded-3xl group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-black group-hover:translate-x-0 ease-in-out">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-1000 transform group-hover:translate-x-full ease-in-out">
                          Explore about us &#8594;
                        </span>
                        <span className="relative invisible">Button Text</span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
