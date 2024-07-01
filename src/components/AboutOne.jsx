import Time from "../assets/time.svg";
import World from "../assets/world.svg";
import Flight from "../assets/Flight.svg";
import map from "../assets/map.svg";
const AboutOne = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-28 pb-4">
        <div className="w-full ">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full ">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div class="text-center pb-4 pt-4">
                  <p class="text-sm font-bold uppercase tracking-widest text-colorOne">
                    About us
                  </p>
                </div>

                <div class="items-center px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-16 lg:px-6">
                  <div class="col-span-2 mb-8">
                    <p class="text-lg font-medium text-colorOne">
                      Mac Global Services
                    </p>
                    <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-colorTwo md:text-3xl ">
                      Trusted by students across various parts of the country.
                    </h2>
                    <p class="font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                      Our rigorous compliance standards are at the heart of all
                      we do. We work tirelessly to protect you and your
                      education services.
                    </p>
                    <div class="pt-6 mt-6 space-y-4 border-t-[2px] border-gray-200 dark:border-gray-700">
                      <div className="lg:block hidden">
                        <a
                          href="/services"
                          class="inline-flex items-center text-base font-medium text-colorOne hover:text-colorTwo transition duration-1000 ease-in-out"
                        >
                          Explore our unique services
                          <svg
                            class="w-5 h-5 ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </div>
                      <div className="lg:block hidden">
                        <a
                          href="/features"
                          class="inline-flex items-center text-base font-medium text-colorOne hover:text-colorTwo transition duration-1000 ease-in-out"
                        >
                          Visit our various features
                          <svg
                            class="w-5 h-5 ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
                    <div className="flex flex-col lg:items-start items-center">
                      <img
                        src={Flight}
                        class="w-10 h-10 mb-2 md:w-12 md:h-12"
                      ></img>
                      <h3 class="mb-2 text-2xl font-bold text-colorTwo dark:text-white">
                        99.7% success
                      </h3>
                      <p class="font-normal text-gray-500 dark:text-gray-400">
                        rate of visa approval to various countries.
                      </p>
                    </div>
                    <div className="flex flex-col lg:items-start items-center">
                      <img
                        src={Time}
                        class="w-10 h-10 mb-2 md:w-12 md:h-12"
                      ></img>
                      <h3 class="mb-2 text-2xl text-colorTwo font-bold dark:text-white">
                        1050+ Students
                      </h3>
                      <p class="font-normal text-gray-500 dark:text-gray-400">
                        Students Sent From MAC to Various Universities.
                      </p>
                    </div>
                    <div className="flex flex-col lg:items-start items-center">
                      <svg
                        class="w-10 h-10 mb-2 text-colorTwo md:w-12 md:h-12"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <h3 class="mb-2 text-2xl text-colorTwo font-bold dark:text-white">
                        10+ countries
                      </h3>
                      <p class="font-normal text-gray-500 dark:text-gray-400">
                        Have used Landwind to create functional websites
                      </p>
                    </div>
                    <div className="flex flex-col lg:items-start items-center">
                      <img
                        src={map}
                        class="w-10 h-10 mb-2 md:w-12 md:h-12"
                      ></img>
                      <h3 class="mb-2 text-2xl font-bold text-colorTwo dark:text-white">
                        4.8/5 Ratings
                      </h3>
                      <p class="font-normal text-gray-500 dark:text-gray-400">
                        from the satisfied customers of our consultancy.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 pt-8">
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <img src={Time} alt="" className="w-12 h-12" />
                    </div>
                    <div className="mt-[6px]">
                      <h1 className="text-colorTwo font-medium md:text-lg text-base text-center">
                        5+ Years of industrial experience
                      </h1>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <img src={World} alt="" className="w-12 h-12" />
                    </div>
                    <div className="mt-[6px]">
                      <h1 className="text-colorTwo font-medium md:text-lg text-base text-center">
                        Services available across world
                      </h1>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <img src={Flight} alt="" className="w-12 h-12" />
                    </div>
                    <div className="mt-[6px]">
                      <h1 className="text-colorTwo font-medium md:text-lg text-base text-center">
                        VISA & Immigration approval guidance
                      </h1>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <img src={map} alt="" className="w-12 h-12" />
                    </div>
                    <div className="mt-[6px]">
                      <h1 className="text-colorTwo font-medium md:text-lg text-base text-center">
                        University selection guidance
                      </h1>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOne;
