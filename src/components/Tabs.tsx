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
      <div className="py-4">
        {tabs.map((child) => {
          if (child.title === activeTab) {
            return (
              <div key={child.title}>
                <Tab title={child.title}>{child.content}</Tab>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="w-full  flex justify-center">
        <div className="flex border-b border-gray-300 ">
          {tabs.map((child) => (
            <button
              key={child.title}
              className={`${
                activeTab === child.title ? "border-b-2 border-purple-500" : ""
              } flex-1 text-gray-700 font-medium py-2`}
              onClick={(e) => handleClick(e, child.title)}
            >
              {child.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const Tab = ({ title, children }: { title: string; children: JSX.Element }) => {
  return (
    <div title={title}>
      <div className="py-4">
        <h2 className="text-lg font-medium mb-2">{children}</h2>
      </div>
    </div>
  );
};

const TabsFull = () => {
  const tabArray = [
    { title: "Tab 1", content: <>test 1 </> },
    { title: "Tab 2", content: <>test 2 </> },
    { title: "Tab 3", content: <>test 3</> },
    { title: "Tab 4", content: <>test 4</> },
    { title: "Tab 5", content: <>test 5</> },
  ];
  return <Tabs tabs={tabArray} />;
};

export default TabsFull;
