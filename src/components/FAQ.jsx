import Accordion from "../components/Accordion";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const FAQ = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="bg-white"
    >
      <div className="relative pt-12 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full text-center">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex flex-wrap flex-col items-center pb-3">
                  <div className="flex items-center justify-center">
                    <h1 className="text-3xl font-semibold tracking-normal text-colorTwo mx-1">
                      {" "}
                      Frequently Asked Questions
                    </h1>
                  </div>
                  <div className="md:w-44 w-40 h-1 border-b-[3px] border-colorOne mt-[1px]"></div>
                </div>

                <div className="w-full flex justify-center items-center pt-4">
                  <div className="md:w-5/6 w-full">
                    <Accordion
                      title="How long will it take to process my student or education VISA?"
                      answer="The answer to this question depends on various factors like profile strength, education gap years, experience, IELTS score, and proper counselling and guidance."
                    />
                    <Accordion
                      title="What are the various educational credentials one can do after UG?"
                      answer="Post Graduate Diploma, Master’s Degree, Post Graduate Business Administration are a few to name. There are many capstone courses to pursue after UG."
                    />
                    <Accordion
                      title="What are the countries that easily gives Student VISA's?"
                      answer="Visas are issued only if you meet the eligibility requirements. Every visa has different requirements to be met. Depending on the country and the visa you want to apply you will have to see if meet the requirements."
                    />
                    <Accordion
                      title="How can our customers contact us for immediate guidance?"
                      answer="You can contact us through mail on macglobalservices@gmail.com or go to the Contact page for further information. And we are ready to help."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
