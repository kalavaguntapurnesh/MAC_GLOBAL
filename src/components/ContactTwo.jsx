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
            <div class="text-center">
              <p class="text-sm font-bold uppercase tracking-widest text-colorOne">
                CONTACT US
              </p>
              <h2 class="mt-6 text-3xl font-bold tracking-tight text-colorTwo sm:text-4xl lg:text-5xl">
                Call us now and we will guide you better!
              </h2>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 pt-4">
              <div className="mt-8">
                <form action="" onSubmit={handleSubmit}>
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

              <div className="mt-8">
                <iframe
                  className="rounded-lg"
                  width="100%"
                  height="600"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=10-3-206%20/%20M4,%202nd%20Floor,KK%20Street,Tirupati,India+(MAC%20Global%20Services)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps devices</a>
                </iframe>
              </div>
            </div>

            <div className="md:pt-16 pt-4 pb-6">
              <div className="flex justify-center items-center">
                <h1 className="text-3xl font-semibold text-colorTwo">
                  Follow us on
                </h1>
              </div>
              <div className="flex justify-center items-center pt-4 font-normal md:text-[17px] text-[16px]">
                <p className="text-center text-colorTwo">
                  Always stay informed and connected to all our channels,
                  support us and help us grow!
                </p>
              </div>
              <div className="grid grid-cols-5 pt-8">
                <a href="" className="flex justify-center items-center">
                  <FaWhatsapp className="md:w-9 md:h-9 h-8 w-8 text-colorTwo" />
                </a>
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
