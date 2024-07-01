import Lottie from "lottie-react";
import FeatureOne from "../assets/lotties/Feature.json";
import FeatureTwo from "../assets/lotties/FeatureTwo.json";
import FeatureThree from "../assets/lotties/FeatureOne.json";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

const ServicesOne = () => {
  return (
    <div>
      <div className="relative pt-28 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full text-center pb-14">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <section class="relative overflow-hidden dark:bg-gray-900 pt-4">
                  <div class="text-center">
                    <p class="text-sm font-bold uppercase tracking-widest text-colorOne">
                      How We Work
                    </p>
                    <h2 class="mt-6 text-3xl font-bold tracking-tight text-colorTwo sm:text-4xl lg:text-5xl">
                      Land in your dream college in 4 easy steps
                    </h2>
                    <p class="mx-auto mt-4 max-w-2xl text-lg font-normal text-colorTwo lg:text-xl lg:leading-8">
                      Get guidance and support with us, and we will look after
                      everything.
                    </p>
                  </div>

                  <div class="mt-2 md:mt-0 overflow-hidden">
                    <div class="px-4 mx-auto sm:px-6 lg:px-8 relative">
                      <div class="relative mt-12 lg:mt-20">
                        <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                          <svg
                            class="w-full"
                            xmlns="http://www.w3.org/2000/svg"
                            width="875"
                            height="48"
                            viewBox="0 0 875 48"
                            fill="none"
                          >
                            <path
                              d="M2 29C20.2154 33.6961 38.9915 35.1324 57.6111 37.5555C80.2065 40.496 102.791 43.3231 125.556 44.5555C163.184 46.5927 201.26 45 238.944 45C312.75 45 385.368 30.7371 458.278 20.6666C495.231 15.5627 532.399 11.6429 569.278 6.11109C589.515 3.07551 609.767 2.09927 630.222 1.99998C655.606 1.87676 681.208 1.11809 706.556 2.44442C739.552 4.17096 772.539 6.75565 805.222 11.5C828 14.8064 850.34 20.2233 873 24"
                              stroke="#D4D4D8"
                              stroke-width="3"
                              stroke-linecap="round"
                              stroke-dasharray="1 12"
                            />
                          </svg>
                        </div>
                        <div class="relative grid grid-cols-1 text-center gap-y-8 sm:gap-y-10 md:gap-y-12 md:grid-cols-3 gap-x-12">
                          <div>
                            <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                              <span class="text-xl font-semibold text-colorOne dark:text-gray-200">
                                1
                              </span>
                            </div>
                            <h3 class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-colorTwo dark:text-white md:mt-10">
                              Contact Us
                            </h3>
                            <p class="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                              Contact us through email / phone number and we
                              will get back to you shortly.
                            </p>
                          </div>
                          <div>
                            <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                              <span class="text-xl font-semibold text-colorOne dark:text-gray-200">
                                2
                              </span>
                            </div>
                            <h3 class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-colorTwo dark:text-white md:mt-10">
                              University Assistance
                            </h3>
                            <p class="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                              Based on your interest and academics we will guide
                              you through college selection.
                            </p>
                          </div>
                          <div>
                            <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow">
                              <span class="text-xl font-semibold text-colorOne dark:text-gray-200">
                                3
                              </span>
                            </div>
                            <h3 class="mt-4 sm:mt-6 text-xl font-semibold leading-tight text-colorTwo dark:text-white md:mt-10">
                              Visa Approval
                            </h3>
                            <p class="mt-3 sm:mt-4 text-base text-gray-600 dark:text-gray-400">
                              Finally we will guide you how to attend VISA
                              interview and postal abroad support.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesOne;
