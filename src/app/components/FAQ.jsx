import React from "react";
import Image from "next/image";
import Accordion from "@/app/components/Accordion";

const FAQ = () => {
  return (
    <div className="bg-gray-50">
      <div className="relative pt-12 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full text-center pb-4">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex flex-wrap flex-col items-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/left.svg"
                      alt=""
                      width={27}
                      height={52}
                    ></Image>
                    <h1 className="text-4xl font-bold tracking-tight text-primaryColor dark:text-black mx-1">
                      {" "}
                      Frequently Asked Questions
                    </h1>
                    <Image
                      src="/right.svg"
                      alt=""
                      width={27}
                      height={52}
                    ></Image>
                  </div>
                  <div className="w-44 h-1 border-b-4 border-red-400 mt-2"></div>
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
    </div>
  );
};

export default FAQ;
