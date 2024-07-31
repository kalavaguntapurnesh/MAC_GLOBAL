import { useEffect } from "react";
import { useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { classNames } from "../components/classNames";

const ScrollToTop = () => {
  const phoneNumber = "7075495493"; // Replace with your phone number
  const message =
    "Hello MAC Global Services, I need your guidance on abroad education..."; // Pre-filled message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // const [isVisible, setIsVisible] = useState(false);
  // const toggleVisibility = () => {
  //   if (window.pageYOffset > 200) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <a
      href={whatsappUrl}
      className={classNames(
        "bg-[#25d366] fixed flex flex-row lg:bottom-6 bottom-4 lg:right-2 right-3 z-20 lg:py-2 lg:px-4 rounded-full "
      )}
    >
      <a>
        <SiWhatsapp
          className="lg:h-6 lg:w-6 w-10 h-10 text-white lg:mr-2"
          aria-hidden="true"
        />
      </a>
      <div className="flex justify-center items-center text-sm">
        <h1 className="lg:block hidden text-white font-semibold">
          Whatsapp us!
        </h1>
      </div>
    </a>
  );
};

export default ScrollToTop;
