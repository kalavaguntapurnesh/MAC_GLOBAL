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

                <div className="lg:pt-28 pt-16">
                  <div className="flex justify-center items-center">
                    <h1 className="text-center text-3xl font-semibold text-colorTwo">
                      Learn More About Us
                    </h1>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 pt-8">
                    <div className="border border-colorTwo rounded-lg grid grid-cols-5 h-28 cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-in-out">
                      <div className="col-span-1 flex justify-center items-center">
                        <img
                          src="https://static.cdn.printful.com/static/v864/images/about/icon-48-x-48-globe.svg"
                          alt=""
                        />
                      </div>
                      <div className="col-span-4  flex flex-col justify-center items-start">
                        <h1 className="font-semibold text-xl text-colorTwo">
                          Sustainability & Responsibility
                        </h1>
                        <p className="text-gray-700">
                          Take a look at our efforts to become bestly conscious
                        </p>
                      </div>
                    </div>
                    <div className="border border-colorTwo rounded-lg grid grid-cols-5 h-28 cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-in-out">
                      <div className="col-span-1  flex justify-center items-center">
                        <img
                          src="https://static.cdn.printful.com/static/v864/images/about/icon-56-x-56-people.svg"
                          alt=""
                        />
                      </div>
                      <div className="col-span-4 flex flex-col justify-center items-start">
                        <h1 className="font-semibold text-xl text-colorTwo">
                          Jobs Revalued
                        </h1>
                        <p className="text-gray-700">
                          See vacancies for Printful and join our team effort
                          and quality.
                        </p>
                      </div>
                    </div>

                    <div className="border border-colorTwo rounded-lg grid grid-cols-5 h-28 cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-in-out">
                      <div className="col-span-1 flex justify-center items-center">
                        <img
                          src="https://static.cdn.printful.com/static/v864/images/about/icon-56-x-56-news.svg"
                          alt=""
                        />
                      </div>
                      <div className="col-span-4 flex flex-col justify-center items-start">
                        <h1 className="font-semibold text-xl text-colorTwo">
                          News Room
                        </h1>
                        <p className="text-gray-700">
                          Your key resource for news, press releases, and latest
                          updates
                        </p>
                      </div>
                    </div>

                    <div className="border border-colorTwo rounded-lg grid grid-cols-5 h-28 cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-in-out">
                      <div className="col-span-1 flex justify-center items-center">
                        <img
                          src="https://static.cdn.printful.com/static/v864/images/about/icon-56-x-56-feedback.svg"
                          alt=""
                        />
                      </div>
                      <div className="col-span-4 flex flex-col justify-center items-start">
                        <h1 className="font-semibold text-xl text-colorTwo">
                          Contact Us
                        </h1>
                        <p className="text-gray-700">
                          See where you can find us and how you can get in touch
                          with us
                        </p>
                      </div>
                    </div>

                    <div className="border border-colorTwo rounded-lg grid grid-cols-5 h-28 cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-in-out">
                      <div className="col-span-1 flex justify-center items-center">
                        <img
                          src="https://static.cdn.printful.com/static/v864/images/about/icon-56-x-56-tools.svg"
                          alt=""
                        />
                      </div>
                      <div className="col-span-4 flex flex-col justify-center items-start">
                        <h1 className="font-semibold text-xl text-colorTwo">
                          VIP Tools for Responsibility
                        </h1>
                        <p className="text-gray-700">
                          Get exclusive tools and services to grow your business
                          and fanbase
                        </p>
                      </div>
                    </div>
                    <div className="border border-colorTwo rounded-lg grid grid-cols-5 h-28 cursor-pointer hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] transition duration-1000 ease-in-out">
                      <div className="col-span-1 flex justify-center items-center">
                        <img
                          src="https://static.cdn.printful.com/static/v864/images/about/icon-56-x-56-sponsorship-support.svg"
                          alt=""
                        />
                      </div>
                      <div className="col-span-4  flex flex-col justify-center items-start">
                        <h1 className="font-semibold text-xl text-colorTwo">
                          Sponsorships
                        </h1>
                        <p className="text-gray-700">
                          Learn about the causes that matter to us and the kinds
                          of support we provide
                        </p>
                      </div>
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
