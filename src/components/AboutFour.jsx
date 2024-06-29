import React from "react";
import One from "../assets/aboutOne.jpg";
import AboutOne from "./AboutOne";

const AboutFour = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-2 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full ">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 h-auto">
                  <div className="flex justify-start items-start md:mt-0 mt-4">
                    <img src={AboutOne} alt="" className="w-11/12 h-full" />
                  </div>
                  <div>
                    <div className="flex flex-col flex-wrap">
                      <div className="flex lg:justify-start justify-center">
                        <h1 className="uppercase text-2xl font-medium text-colorTwo">
                          The spirit of Mac Global Services
                        </h1>
                      </div>
                      <div className="bg-colorOne w-[10%] h-[2px] mt-1 lg:block hidden"></div>
                    </div>
                    <div className="mt-8">
                      <p>
                        As children, we were never afraid of failure. We got up,
                        dusted ourselves and went back to what we were doing.
                        There were no furtive glances to check if someone
                        spotted us falling, no embarrassment, no feeling of
                        being ridiculed. It was all part of our journey. As we
                        transition from child to adult however, a new journey of
                        self-censure begins
                      </p>
                      <p className="mt-4">
                        Some of us remain curious, unbridled, ever-seeking,
                        ever-questioning, ever-expressing. This internal
                        yearning to test ourselves – what we had when we were
                        children never really disappears. This childlikeness,
                        this spark of courage lurks, spurts, sputters somewhere
                        in the fringes of our mind, waiting to be inspired. This
                        is the seed and root of how talent begins its journey –
                        intrepidly expressive.
                      </p>
                      {/* <p className="mt-4">
                        Mufti is on the side of those who want to set free their
                        expression. On the side of those who ‘live to express’.
                        And by being a strong voice, we hope to inspire more
                        people to join our tribe.
                      </p> */}
                      <p className="mt-4 font-medium">
                        <b>Mufti lives to inspire people to be Expressive.</b>
                      </p>
                    </div>
                    <div className="pt-8 flex md:justify-start justify-center">
                      <a
                        href="/careers"
                        className="relative inline-flex items-center justify-center py-2 px-16 overflow-hidden font-semibold text-colorOne transition duration-1000 ease-out border-2 border-colorOne rounded-full group"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFour;
