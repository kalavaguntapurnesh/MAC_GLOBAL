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
            <div className="justify-center w-full pb-14">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="mt-4 mb-8 flex flex-col flex-wrap items-center">
                  <div className="group transition duration-1000 ">
                    <h1 className="text-center font-semibold text-colorTwo tracking-normal leading-relaxed text-3xl">
                      About Mac Global Services
                    </h1>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:pt-8 pt-4">
                  <div>
                    <div className="flex flex-col flex-wrap">
                      <div className="flex lg:justify-start justify-center">
                        <h1 className="uppercase text-2xl font-medium text-colorTwo">
                          Mac Global Education Services
                        </h1>
                      </div>
                      <div className="bg-colorOne w-[10%] h-[2px] mt-1 lg:block hidden"></div>
                    </div>
                    <div className="mt-8">
                      <p>
                        Vahas Technologies are committed to your success with
                        Industry Standard IT solutions. We’re here to help you
                        throughout the entire solution lifecycle — from strategy
                        and consulting to implementation and management — with
                        unsurpassed depth of expertise and breadth of services
                        offerings to deliver real business results with
                        confidence.
                      </p>
                      <p className="mt-4">
                        Plan for success, and achieve better business agility
                        from strategy to execution with Project Portfolio
                        Management solutions from Vahas Technologies.
                      </p>
                    </div>
                    <div className="pt-8 flex lg:justify-start justify-center pb-4">
                      <a
                        href="/careers"
                        className="relative inline-flex items-center justify-center py-2 px-16 overflow-hidden font-semibold text-colorOne transition duration-1000 ease-out border-2 border-colorOne rounded-3xl group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-colorOne group-hover:translate-x-0 ease-in-out">
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
                        <span className="absolute flex items-center justify-center w-full h-full text-colorOne transition-all duration-1000 transform group-hover:translate-x-full ease-in-out">
                          Collaborate with us &#8594;
                        </span>
                        <span className="relative invisible">Button Text</span>
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center items-center md:mt-0 mt-4">
                    <img
                      src="https://vahas-technologies.vercel.app/assets/WorldMapTwo-CJbVEvUx.png"
                      alt=""
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid lg:grid-cols-4 grid-cols-2 gap-6 pt-16">
                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <img src={Time} alt="" className="w-12 h-12" />
                    </div>
                    <div className="mt-1">
                      <h1 className="text-colorTwo font-medium md:text-lg text-base text-center">
                        5+ Years of experience
                      </h1>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <img src={World} alt="" className="w-12 h-12" />
                    </div>
                    <div className="mt-1">
                      <h1 className="text-colorTwo font-medium md:text-lg text-base text-center">
                        Services across the world
                      </h1>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <img src={Flight} alt="" className="w-12 h-12" />
                    </div>
                    <div className="mt-1">
                      <h1 className="text-colorTwo font-medium md:text-lg text-base text-center">
                        VISA approval guidance
                      </h1>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <div>
                      <img src={map} alt="" className="w-12 h-12" />
                    </div>
                    <div className="mt-1">
                      <h1 className="text-colorTwo font-medium md:text-lg text-base text-center">
                        University selection guidance
                      </h1>
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

export default AboutOne;
