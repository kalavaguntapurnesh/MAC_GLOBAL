import Lottie from "lottie-react";
import FeatureOne from "../assets/lotties/ServiceOne.json";
import FeatureTwo from "../assets/lotties/ServiceTwo.json";
import FeatureThree from "../assets/lotties/ServiceThree.json";
import left from "../assets/left.svg";
import right from "../assets/right.svg";

const FeaturesOne = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-32 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full text-center md:pb-8">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex flex-wrap flex-col items-center">
                  <div className="flex items-center justify-center">
                    <img src={left} alt="" width={27} height={52}></img>
                    <h1 className="text-3xl font-semibold tracking-normal text-colorTwo dark:text-black mx-1">
                      {" "}
                      Features We Offer
                    </h1>
                    <img src={right} alt="" width={27} height={52}></img>
                  </div>
                  <div className="md:w-44 w-32 h-1 border-b-[3px] border-colorOne mt-1"></div>
                </div>

                <div className="text-colorTwo dark:text-gray-800 my-4">
                  <p className="font-medium leading-relaxed md:text-[17px] text-[16px] text-center tracking-wide">
                    Open doors to a world of possibilities with education loans,
                    expert study abroad counseling, comprehensive exam
                    preparation, forex services, credit card solutions,
                    accommodation support, and a rich array of informational
                    resources including scholarships and insightful blogs.
                  </p>
                </div>

                <section class="md:h-full flex items-center text-gray-600">
                  <div class="container px-5 py-12 mx-auto ">
                    <div class="flex flex-wrap -m-4">
                      <div class="p-4 sm:w-1/2 lg:w-1/3 ">
                        <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                          <img
                            class="lg:h-72 md:h-48 w-full object-cover object-center"
                            src="https://www.harringtonhousing.com/uploads/0003/3066/2023/01/11/what-makes-the-university-of-michigan-unique.jpg"
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
                            src="https://images.shiksha.com/mediadata/images/1539253667php1AcBOm_g.jpg"
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
                            src="https://imageio.forbes.com/specials-images/imageserve/66279c49909b086f3c1043ed/McGraw-Clock-Tower--Cornell-University/960x0.jpg?height=465&width=711&fit=bounds"
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
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesOne;
