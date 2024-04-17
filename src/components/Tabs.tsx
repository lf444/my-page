import { motion } from "framer-motion";
import React, { useState } from "react";

const Tabs = ({
  tabs,
}: {
  tabs: {
    title: string;
    content: JSX.Element;
  }[];
}) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].title);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newActiveTab: string
  ) => {
    e.preventDefault();

    setActiveTab(newActiveTab);
  };

  return (
    <div className="w-full mx-auto">
      <div className="py-4 ">
        {tabs.map((child, index) => {
          if (child.title === activeTab) {
            return (
              <div key={child.title} className="">
                <Tab title={child.title} index={index}>
                  {child.content}
                </Tab>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="w-full  flex justify-center">
        <div className="flex border-b border-gray-300 gap-7  bg-gray-400 rounded-full p-1">
          {tabs.map((child) => (
            <button
              key={child.title}
              className={`${
                activeTab === child.title ? "" : "hover:text-white/60"
              } relative rounded-full px-3 py-1.5 text-sm font-medium text-white outline-sky-400 transition focus-visible:outline-2`}
              onClick={(e) => handleClick(e, child.title)}
            >
              {activeTab === child.title && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10  bg-regal-test"
                  style={{ borderRadius: 9999 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <p className=" z-30 relative text-white">{child.title}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Tab = ({
  title,
  index,
  children,
}: {
  title: string;
  index: number;
  children: JSX.Element;
}) => {
  return (
    <div title={title} style={{ paddingLeft: `${index * 20}%` }}>
      <div className={`py-4 `}>
        <motion.div
          animate={{ x: 10 }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 },
          }}
        >
          <h2 className={`text-lg font-medium mb-2  w-fit `}>{children}</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default Tabs;
