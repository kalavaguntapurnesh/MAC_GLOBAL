import FeatureOne from "../assets/FeaturesOne.jpg";
import FeatureTwo from "../assets/FeaturesTwo.jpg";
import FeatureThree from "../assets/FeaturesThree.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const FeaturesOne = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-32 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full text-center md:pb-4">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  class="text-center"
                >
                  <p class="text-sm font-bold uppercase tracking-widest text-colorOne">
                    How It Works
                  </p>
                  <h2 class="mt-6 text-3xl font-bold tracking-tight text-colorTwo sm:text-4xl lg:text-5xl">
                    Features & Services we provide
                  </h2>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="text-colorTwo dark:text-gray-800 my-4"
                >
                  <p className="font-normal leading-relaxed md:text-[17px] text-[16px] text-center tracking-wide">
                    Open doors to a world of possibilities with education loans,
                    expert study abroad counseling, comprehensive exam
                    preparation, forex services, credit card solutions,
                    accommodation support, and a rich array of informational
                    resources including scholarships and insightful blogs.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  class="md:h-full flex items-center text-gray-600"
                >
                  <div class="container px-5 py-12 mx-auto ">
                    <div class="flex flex-wrap -m-4">
                      <div class="p-4 sm:w-1/2 lg:w-1/3 ">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                          <img
                            class="lg:h-72 md:h-48 w-full object-cover object-center"
                            src={FeatureOne}
                            alt="blog"
                          />
                          <div class="p-6 transition duration-300 ease-in">
                            <h1 class="text-2xl font-semibold mb-3 text-colorTwo">
                              University Selection Guidance
                            </h1>
                            <p class="leading-relaxed mb-3">
                              Opportunity to select top-ranked university based
                              on location, courses, ranking, accommodation,
                              resources to study abroad based on their academic
                              background, interests, and career goals.
                            </p>
                            <div class="flex items-center justify-center">
                              <a
                                href="/contact"
                                class="text-colorOne inline-flex items-center md:mb-2 lg:mb-0"
                              >
                                Read More
                                <svg
                                  class="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="p-4 sm:w-1/2 lg:w-1/3">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                          <img
                            class="lg:h-72 md:h-48 w-full object-cover object-center"
                            src={FeatureTwo}
                            alt="blog"
                          />
                          <div class="p-6  transition duration-300 ease-in">
                            <h1 class="text-2xl font-semibold mb-3 text-colorTwo">
                              VISA & Immigration Support
                            </h1>
                            <p class="leading-relaxed mb-3">
                              Assisting students in preparing visa applications,
                              understanding visa requirements, and guiding
                              students through the application process,
                              including filling out forms,
                            </p>
                            <div class="flex items-center justify-center">
                              <a
                                href="/contact"
                                class="text-colorOne inline-flex items-center md:mb-2 lg:mb-0"
                              >
                                Read More
                                <svg
                                  class="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="p-4 sm:w-1/2 lg:w-1/3">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                          <img
                            class="lg:h-72 md:h-48 w-full object-cover object-center"
                            src={FeatureThree}
                            alt="blog"
                          />
                          <div class="p-6 ">
                            <h1 class="text-2xl font-semibold mb-3 text-colorTwo">
                              Pre-Departure Orientation
                            </h1>
                            <p class="leading-relaxed mb-3">
                              Offering sessions to prepare students for cultural
                              adjustments, academic expectations, and ongoing
                              support during the initial phase of the student's
                              stay abroad.
                            </p>
                            <div class="flex items-center justify-center">
                              <a
                                href="/contact"
                                class="text-colorOne inline-flex items-center md:mb-2 lg:mb-0"
                              >
                                Read More
                                <svg
                                  class="w-4 h-4 ml-2"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  fill="none"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M5 12h14"></path>
                                  <path d="M12 5l7 7-7 7"></path>
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOne;
