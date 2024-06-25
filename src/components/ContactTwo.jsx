import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import Phone from "../assets/phone.svg";
import Email from "../assets/email.svg";
import Location from "../assets/Location.svg";

const ContactTwo = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "http://localhost:8080/auth/contactForm",
        {
          name,
          email,
          subject,
          message,
        }
      );
      if (response.data.status) {
        alert(response.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      navigate("/contact");
    }
  };

  return (
    <div className="bg-white">
      <div className="relative pt-28 pb-12">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="mt-4 mb-8 flex flex-col flex-wrap items-center">
              <div className="group transition duration-1000 ">
                <h1 className="text-center font-bold text-colorTwo tracking-normal leading-relaxed text-3xl">
                  Contact us here
                </h1>
                <div className="bg-colorOne h-[3px] lg:w-0 w-full lg:group-hover:w-full group-hover:w-0 transition-all duration-500"></div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                <div className="flex flex-col space-y-4 mt-8">
                  <div>
                    <h1 className="uppercase font-bold text-colorOne tracking-wide">
                      get in touch
                    </h1>
                  </div>
                  <div>
                    <h1 className="lg:text-5xl text-4xl font-bold tracking-normal md:leading-relaxed leading-normal text-colorTwo">
                      Motivated to make a better future, connect to us through
                      this form.
                    </h1>
                  </div>
                  <div>
                    <h1 className="leading-relaxed tracking-wide font-medium lg:text-[20px] text-[16px] text-colorTwo dark:text-gray-800 ">
                      We're here to help and answer any questions you might
                      have. We look forward to hearing from you!
                    </h1>
                  </div>
                  <div>
                    <div className="flex flex-col mt-5">
                      <div className="grid grid-cols-6 cursor-pointer">
                        <div className="col-span-1 flex items-center justify-center">
                          <img src={Location} className="w-8 h-8" alt="" />
                        </div>
                        <div className="col-span-5 flex items-center">
                          <p className="text-bold text-colorTwo lg:text-lg text-base">
                            10-3-206 / M4, 2nd Floor,KK Street,Tirupati,India
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 mt-5 cursor-pointer">
                        <div className="col-span-1 flex items-center justify-center">
                          <img src={Email} className="w-8 h-8" alt="" />
                        </div>
                        <div className="col-span-5 flex items-center">
                          <p className="text-bold text-colorTwo lg:text-lg text-base">
                            macglobalservices@gmail.com
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 mt-5 cursor-pointer">
                        <div className="col-span-1 flex items-center justify-center">
                          <img src={Phone} className="w-8 h-8" alt="" />
                        </div>
                        <div className="col-span-5 flex items-center">
                          <p className="text-bold text-colorTwo lg:text-lg text-base">
                            91+ 70754 95493
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <form action="" className="mt-8" onSubmit={handleSubmit}>
                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your Full Name"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@domain.com"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <label
                        htmlFor="subject"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Enter your subject"
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="w-full flex justify-center items-center">
                    <div className="mb-5 md:w-10/12 w-full">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Type your message"
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                      ></textarea>
                    </div>
                  </div>

                  <div className="w-full flex justify-center items-center pb-4">
                    <div className=" md:w-8/12 w-full flex md:justify-start justify-center items-center">
                      <a
                        href="/"
                        className="relative bg-colorOne text-white inline-flex items-center justify-center py-2 px-8 overflow-hidden font-medium transition duration-1000 ease-out rounded-full group"
                      >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 bg-colorOne -translate-x-full group-hover:translate-x-0 ease-in-out">
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
                        <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-1000 transform group-hover:translate-x-full ease-in-out">
                          Submit
                        </span>
                        <span className="relative invisible">Button Text</span>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="md:pt-16 pt-4 pb-6">
              <div className="flex justify-center items-center">
                <h1 className="text-4xl font-semibold text-colorTwo">
                  Follow us on
                </h1>
              </div>
              <div className="flex justify-center items-center pt-4 font-normal text-lg">
                <p className="text-center text-colorTwo">
                  Always stay informed and connected to all our channels,
                  support us and help us grow!
                </p>
              </div>
              <div className="grid grid-cols-6 gap-2 pt-8">
                <a href="" className="flex justify-center items-center">
                  <FaInstagram className="md:w-9 md:h-9 h-8 w-8 text-colorTwo" />
                </a>
                <a href="" className="flex justify-center items-center">
                  <FaFacebookF className="md:w-9 md:h-9 h-8 w-8 text-colorTwo" />
                </a>
                <a href="" className="flex justify-center items-center">
                  <FaXTwitter className="md:w-9 md:h-9 h-8 w-8 text-colorTwo" />
                </a>
                <a href="" className="flex justify-center items-center">
                  <FaWhatsapp className="md:w-9 md:h-9 h-8 w-8 text-colorTwo" />
                </a>
                <a href="" className="flex justify-center items-center">
                  <FaDiscord className="md:w-9 md:h-9 h-8 w-8 text-colorTwo" />
                </a>
                <a href="" className="flex justify-center items-center">
                  <FaLinkedinIn className="md:w-9 md:h-9 h-8 w-8 text-colorTwo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactTwo;
