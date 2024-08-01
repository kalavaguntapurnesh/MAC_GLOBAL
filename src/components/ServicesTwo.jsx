import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const ServicesTwo = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-4 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px] ">
            <section class="overflow-hidden bg-white ">
              <div class="mx-auto px-6 lg:px-8">
                <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                  <motion.div
                    variants={fadeIn("right", 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.5 }}
                    class="lg:pr-8 lg:pt-4"
                  >
                    <div class="lg:max-w-lg">
                      <h2 class="text-base font-semibold leading-7 text-colorOne">
                        Make a better future!
                      </h2>
                      <p class="mt-2 text-3xl font-bold tracking-tight text-colorTwo sm:text-4xl">
                        You are just one step away to reshape your dream
                      </p>
                      <p class="mt-6 text-lg leading-8 text-gray-600">
                        Just share your details with us and we will take care
                        everything.
                      </p>
                      <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                        <div class="relative pl-9">
                          <dt class="inline font-semibold text-gray-900">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              class="absolute left-1 top-1 h-5 w-5 text-colorOne"
                            >
                              <path d="M3.196 12.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 12.87z"></path>
                              <path d="M3.196 8.87l-.825.483a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.758 0l7.25-4.25a.75.75 0 000-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 01-2.276 0L3.196 8.87z"></path>
                              <path d="M10.38 1.103a.75.75 0 00-.76 0l-7.25 4.25a.75.75 0 000 1.294l7.25 4.25a.75.75 0 00.76 0l7.25-4.25a.75.75 0 000-1.294l-7.25-4.25z"></path>
                            </svg>
                            Assessment{" "}
                          </dt>
                          <dd class="inline">
                            of student's academic background, interests, and
                            career goals to recommend suitable countries and
                            universities.
                          </dd>
                        </div>
                        <div class="relative pl-9">
                          <dt class="inline font-semibold text-gray-900">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              class="absolute left-1 top-1 h-5 w-5 text-colorOne"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            Advice{" "}
                          </dt>
                          <dd class="inline">
                            and resources for preparing for standardized tests
                            required for admission, such as the TOEFL, IELTS,
                            SAT, ACT, GRE, GMAT
                          </dd>
                        </div>
                        <div class="relative pl-9">
                          <dt class="inline font-semibold text-gray-900">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                              class="absolute left-1 top-1 h-5 w-5 text-colorOne"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M14.5 10a4.5 4.5 0 004.284-5.882c-.105-.324-.51-.391-.752-.15L15.34 6.66a.454.454 0 01-.493.11 3.01 3.01 0 01-1.618-1.616.455.455 0 01.11-.494l2.694-2.692c.24-.241.174-.647-.15-.752a4.5 4.5 0 00-5.873 4.575c.055.873-.128 1.808-.8 2.368l-7.23 6.024a2.724 2.724 0 103.837 3.837l6.024-7.23c.56-.672 1.495-.855 2.368-.8.096.007.193.01.291.01zM5 16a1 1 0 11-2 0 1 1 0 012 0z"
                                clip-rule="evenodd"
                              ></path>
                              <path d="M14.5 11.5c.173 0 .345-.007.514-.022l3.754 3.754a2.5 2.5 0 01-3.536 3.536l-4.41-4.41 2.172-2.607c.052-.063.147-.138.342-.196.202-.06.469-.087.777-.067.128.008.257.012.387.012zM6 4.586l2.33 2.33a.452.452 0 01-.08.09L6.8 8.214 4.586 6H3.309a.5.5 0 01-.447-.276l-1.7-3.402a.5.5 0 01.093-.577l.49-.49a.5.5 0 01.577-.094l3.402 1.7A.5.5 0 016 3.31v1.277z"></path>
                            </svg>
                            Continued{" "}
                          </dt>
                          <dd class="inline">
                            support throughout the duration of the study
                            program, including troubleshooting issues related to
                            academics.
                          </dd>
                        </div>
                      </dl>
                    </div>
                    <div class="mt-10 flex items-center gap-x-6 lg:justify-start justify-center">
                      <a
                        href="/contact"
                        class="rounded-md bg-colorOne px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-colorTwo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 duration-1000 ease-in-out transition"
                      >
                        Collaborate with us
                      </a>
                      <a
                        href="/contact"
                        class="text-sm font-semibold leading-6 text-gray-700"
                      >
                        Follow us
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("left", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="flex justify-center items-center"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1658604520420-7569f9685b69?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Product screenshot"
                      className="rounded"
                    />
                  </motion.div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTwo;
