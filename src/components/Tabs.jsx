import React, { useState } from "react";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="bg-white">
      <div className="relative md:pt-12 pt-8 pb-8">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full ">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="flex flex-wrap flex-col items-center pb-10">
                  <div className="flex items-center justify-center">
                    <h1 className="text-3xl text-center font-semibold tracking-normal text-colorTwo mx-1">
                      Some more features we offer
                    </h1>
                  </div>
                  <div className="md:w-44 w-32 h-1 border-b-[3px] border-colorOne mt-[1px]"></div>
                </div>

                <div className="flex border-b-[1px]">
                  {children.map((child) => (
                    <button
                      key={child.props.label}
                      className={`${
                        activeTab === child.props.label
                          ? "border-b-2 border-colorOne"
                          : ""
                      } flex-1 text-gray-700 font-medium py-2`}
                      onClick={(e) => handleClick(e, child.props.label)}
                    >
                      {child.props.label}
                    </button>
                  ))}
                </div>
                <div className="py-4">
                  {children.map((child) => {
                    if (child.props.label === activeTab) {
                      return (
                        <div key={child.props.label}>
                          {child.props.children}
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Tab = ({ label, children }) => {
  return (
    <div label={label} className="hidden">
      {children}
    </div>
  );
};
export { Tabs, Tab };
