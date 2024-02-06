import React from "react";
import Image from "next/image";
import Accordion from "@/app/components/Accordion";

const FAQ = () => {
  return (
    <div className="bg-white">
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
                  <div className=" w-4/5">
                    <Accordion
                      title="How long will it take to process my student VISA?"
                      answer="The answer to this question depends on various factors like profile strength, education gap years, experience, IELTS score, and proper counselling and guidance."
                    />
                    <Accordion
                      title="What are various education credentials after UG?"
                      answer="Post Graduate Diploma Graduate, Master’s Degree, Post Graduate Business Administration are a few to name. There are many capstone courses to pursue after UG."
                    />
                    <Accordion
                      title="Which country easily gives Student VISA's?"
                      answer="Visas are issued only if you meet the eligibility requirements. Every visa has different requirements to be met. Depending on the country and the visa you want to apply you will have to see if meet the requirements."
                    />
                    <Accordion
                      title="How can our customers contact us instantly?"
                      answer="You can contact us through mail on macglobalservices@gmail.com or through mobile numbers. And we are ready to help 24 / 7 throughout the year."
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
