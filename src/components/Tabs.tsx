import React, { useState } from "react";

const Tabs = ({ children }: { children: JSX.Element[] }) => {
  const [activeTab, setActiveTab] = useState<string>(children[0].props.title);

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newActiveTab: string
  ) => {
    e.preventDefault();

    setActiveTab(newActiveTab);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="flex border-b border-gray-300">
        {children.map((child) => (
          <button
            key={child.props.title}
            className={`${
              activeTab === child.props.title
                ? "border-b-2 border-purple-500"
                : ""
            } flex-1 text-gray-700 font-medium py-2`}
            onClick={(e) => handleClick(e, child.props.title)}
          >
            {child.props.title}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map((child) => {
          if (child.props.title === activeTab) {
            return <div key={child.props.title}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab = ({ title, children }: { title: string; children: JSX.Element }) => {
  return (
    <div title={title} className="hidden">
      <div className="py-4">
        <h2 className="text-lg font-medium mb-2">{children}</h2>
      </div>
    </div>
  );
};

const TabsFull = () => {
  return (
    <div>
      <Tabs>
        <Tab title="Tab 1">
          <>test</>
        </Tab>
        <Tab title="Tab 2">
          <>test2</>
        </Tab>
        <Tab title="Tab 3">
          <>test3</>
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsFull;
