import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const TrackRecord = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="bg-white">
        <div className="relative lg:pt-0 pt-8">
          <div className="w-full animate-slidein">
            <div className="w-full px-4 mx-auto max-w-[1400px]">
              <div className="justify-center w-full pb-8">
                <div className="w-full max-w-[1300px] mx-auto space-y-4 ">
                  <div className=" flex flex-col flex-wrap items-center"></div>
                  <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
                    <div className="relative">
                      <div className="flex flex-col">
                        <div className="flex md:justify-start justify-center items-center">
                          <h1 className="md:text-6xl text-5xl font-bold text-colorTwo">
                            1050+
                          </h1>
                        </div>
                        <div className="flex md:justify-start justify-center items-center mt-4 mb-2">
                          <h1 className="text-xl font-medium text-colorTwo">
                            Students Sent From MAC to Various Universities.
                          </h1>
                        </div>
                        <div className="flex md:justify-start justify-center items-center">
                          <p className="mt-4 text-gray-600">
                            Opportunity to select top-ranked university based on
                            location, courses, ranking.
                          </p>
                        </div>
                      </div>
                      <div className="absolute right-0 bg-colorOne top-0 hidden h-full min-h-[1em] w-0.5 self-stretch border-t-0 bg-gradient-to-tr from-transparent  to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
                    </div>

                    <div className="relative">
                      <div className="flex flex-col">
                        <div className="flex md:justify-start justify-center items-center">
                          <h1 className="md:text-6xl text-5xl font-bold text-colorTwo">
                            96%
                          </h1>
                        </div>
                        <div className="flex md:justify-start justify-center items-center mt-4 mb-2">
                          <h1 className="text-xl font-medium text-colorTwo">
                            VISA Acceptance Rate out of every 100 Students.
                          </h1>
                        </div>
                        <div className="flex md:justify-start justify-center items-center">
                          <p className="mt-4 text-gray-600">
                            Assisting students in preparing visa applications,
                            understanding visa requirements.
                          </p>
                        </div>
                      </div>
                      <div className="absolute right-0 bg-colorOne top-0 hidden h-full min-h-[1em] w-0.5 self-stretch border-t-0 bg-gradient-to-tr from-transparent  to-transparent opacity-25 dark:via-neutral-400 lg:block"></div>
                    </div>
                    <div>
                      <div className="flex flex-col">
                        <div className="flex md:justify-start justify-center items-center">
                          <h1 className="md:text-6xl text-5xl font-bold text-colorTwo">
                            4.8/5
                          </h1>
                        </div>
                        <div className="flex md:justify-start justify-center items-center mt-4 mb-2">
                          <h1 className="text-xl font-medium text-colorTwo">
                            Excellent acceptance From Students and Parents.
                          </h1>
                        </div>
                        <div className="flex md:justify-start justify-center items-center">
                          <p className="mt-4 text-gray-600 ">
                            Offering sessions to prepare students for cultural
                            adjustments, academic expectations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center pt-8">
                    <a
                      href="/contact"
                      className="relative inline-flex items-center justify-center py-2 px-16 overflow-hidden font-semibold text-colorOne transition duration-1000 ease-out border-2 border-colorOne rounded-3xl group"
                    >
                      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-colorOne duration-300 -translate-x-full group-hover:translate-x-0 ease-in-out">
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
                        Make a better future &#8594;
                      </span>
                      <span className="relative invisible">Button Text</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default TrackRecord;
