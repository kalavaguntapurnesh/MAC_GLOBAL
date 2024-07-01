import { useEffect } from "react";
import { useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";
import { classNames } from "../components/classNames";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 md:right-4 right-2 z-10 rounded-full">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-colorTwo hover:bg-colorOne transition duration-1000 ease-in-out inline-flex items-center rounded-full md:p-3 p-2 text-white shadow-sm "
        )}
      >
        <IoMdArrowRoundUp className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};

export default ScrollToTop;
