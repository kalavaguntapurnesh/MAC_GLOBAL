import Navbar from "../components/Navbar";
import FeaturesOne from "../components/FeaturesOne";
import FeaturesTwo from "../components/FeaturesTwo";
import Footer from "../components/Footer";
import { Tabs, Tab } from "../components/Tabs";
import Lottie from "lottie-react";
import FeatureOne from "../assets/lotties/Feature.json";
import FeatureTwo from "../assets/lotties/FeatureTwo.json";
import FeatureThree from "../assets/lotties/FeatureOne.json";
import FeatureFour from "../assets/lotties/FeatureFour.json";

const Features = () => {
  return (
    <main>
      <Navbar />
      <FeaturesOne />
      <FeaturesTwo />

      <div className="lg:block hidden">
        <Tabs>
          <Tab label="Standardized Tests Preparation" className="text-sm">
            <div className="py-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex justify-center items-center ">
                  <Lottie
                    animationData={FeatureFour}
                    loop={true}
                    className="w-full h-[280px]"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <ul className="space-y-6 list-disc lg:text-lg md:ml-0 md:mr-0 ml-2 mr-2">
                    <li className="font-medium text-colorTwo">
                      Assessment of student's academic background, interests,
                      and career goals to recommend suitable countries and
                      universities.
                    </li>
                    <li className="font-medium text-colorTwo">
                      Advice and resources for preparing for standardized tests
                      required for admission, such as the TOEFL, IELTS, SAT,
                      ACT, GRE, GMAT, etc.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          <Tab label="Financial Planning & Scholarships">
            <div className="py-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex justify-center items-center">
                  <Lottie
                    animationData={FeatureTwo}
                    loop={true}
                    className="w-full h-[280px]"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <ul className="space-y-6 list-disc lg:text-lg md:ml-0 md:mr-0 ml-2 mr-2">
                    <li className="font-medium text-colorTwo">
                      Information on estimated costs of studying abroad,
                      including tuition fees, living expenses, and other
                      financial considerations.
                    </li>
                    <li className="font-medium text-colorTwo">
                      Guidance on available scholarships, grants, and financial
                      aid options for international students, and assistance
                      with application processes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          <Tab label="Post-arrival Support & Counseling">
            <div className="py-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex justify-center items-center">
                  <Lottie
                    animationData={FeatureThree}
                    loop={true}
                    className="w-full h-[280px]"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <ul className="space-y-6 list-disc lg:text-lg md:ml-0 md:mr-0 ml-2 mr-2">
                    <li className="font-medium text-colorTwo">
                      Assistance upon arrival in the destination country,
                      including airport pickup, accommodation arrangements, and
                      initial settling-in support.
                    </li>
                    <li className="font-medium text-colorTwo">
                      Continued support throughout the duration of the study
                      program, including troubleshooting issues related to
                      academics, visas, or personal matters.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>

          <Tab label="Personalized Guidance & Mentorship">
            <div className="py-4">
              <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
                <div className="flex justify-center items-center">
                  <Lottie
                    animationData={FeatureOne}
                    loop={true}
                    className="w-full h-[280px]"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <ul className="space-y-6 list-disc lg:text-lg md:ml-0 md:mr-0 ml-2 mr-2">
                    <li className="font-medium text-colorTwo">
                      Individualized counseling sessions to address specific
                      concerns or challenges faced by students during their
                      study abroad journey.
                    </li>
                    <li className="font-medium text-colorTwo">
                      Ongoing support and mentorship to ensure students achieve
                      their academic and personal goals abroad.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>

      <div className="lg:hidden block">
        <Tabs>
          <Tab label="Tests Preparation" className="text-sm">
            <div className="py-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex justify-center items-center ">
                  <Lottie
                    animationData={FeatureFour}
                    loop={true}
                    className="w-full h-[280px]"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <ul className="space-y-6 list-disc lg:text-lg md:ml-0 md:mr-0 ml-2 mr-2">
                    <li className="font-medium text-colorTwo">
                      Assessment of student's academic background, interests,
                      and career goals to recommend suitable countries and
                      universities.
                    </li>
                    <li className="font-medium text-colorTwo">
                      Advice and resources for preparing for standardized tests
                      required for admission, such as the TOEFL, IELTS, SAT,
                      ACT, GRE, GMAT, etc.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          <Tab label="Financial Scholarships">
            <div className="py-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex justify-center items-center">
                  <Lottie
                    animationData={FeatureTwo}
                    loop={true}
                    className="w-full h-[280px]"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <ul className="space-y-6 list-disc lg:text-lg md:ml-0 md:mr-0 ml-2 mr-2">
                    <li className="font-medium text-colorTwo">
                      Information on estimated costs of studying abroad,
                      including tuition fees, living expenses, and other
                      financial considerations.
                    </li>
                    <li className="font-medium text-colorTwo">
                      Guidance on available scholarships, grants, and financial
                      aid options for international students, and assistance
                      with application processes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
          <Tab label="Post-arrival Support">
            <div className="py-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                <div className="flex justify-center items-center">
                  <Lottie
                    animationData={FeatureThree}
                    loop={true}
                    className="w-full h-[280px]"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <ul className="space-y-6 list-disc lg:text-lg md:ml-0 md:mr-0 ml-2 mr-2">
                    <li className="font-medium text-colorTwo">
                      Assistance upon arrival in the destination country,
                      including airport pickup, accommodation arrangements, and
                      initial settling-in support.
                    </li>
                    <li className="font-medium text-colorTwo">
                      Continued support throughout the duration of the study
                      program, including troubleshooting issues related to
                      academics, visas, or personal matters.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>

          <Tab label="Personalized Guidance">
            <div className="py-4">
              <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
                <div className="flex justify-center items-center">
                  <Lottie
                    animationData={FeatureOne}
                    loop={true}
                    className="w-full h-[280px]"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <ul className="space-y-6 list-disc lg:text-lg md:ml-0 md:mr-0 ml-2 mr-2">
                    <li className="font-medium text-colorTwo">
                      Individualized counseling sessions to address specific
                      concerns or challenges faced by students during their
                      study abroad journey.
                    </li>
                    <li className="font-medium text-colorTwo">
                      Ongoing support and mentorship to ensure students achieve
                      their academic and personal goals abroad.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>

      <Footer />
    </main>
  );
};

export default Features;
