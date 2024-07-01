import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { LuMinus } from "react-icons/lu";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-6 border-b-[1px] pt-2">
      <button
        onClick={() => {
          setAccordionOpen(!accordionOpen);
        }}
        className="flex justify-between w-full"
      >
        <div className="flex justify-start w-full items-center">
          <span className="font-medium tracking-normal px-4 pt-2 text-colorTwo">
            {title}
          </span>
        </div>
        <div className="px-4 pt-4">
          {accordionOpen ? (
            <LuMinus className="text-colorFour" />
          ) : (
            <LuPlus className="text-colorTwo" />
          )}
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 pt-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden md:mx-0 mx-1">
          <span className="px-4 text-base">{answer}</span>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
