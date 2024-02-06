import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-4 rounded-lg my-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <button
        onClick={() => {
          setAccordionOpen(!accordionOpen);
        }}
        className="flex justify-between w-full"
      >
        <div className=" flex justify-start w-full items-center">
          <span className="font-bold tracking-tight px-4 text-lg text-primaryColor">
            {title}
          </span>
        </div>
        <div className="px-4">
          {accordionOpen ? <FaMinus color="red" /> : <FaPlus color="green" />}
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 pt-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <span className="font-bold tracking-tight leading-loose text-base px-4">
            {answer}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
