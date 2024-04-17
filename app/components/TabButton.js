import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonActivitie = active
    ? "text-white border-b border-purple-600"
    : "text-[#ADB7BE]";
  return (
    <button onClick={selectTab}>
      <p
        className={`className="mr-4 font-semibold hover:text-white ${buttonActivitie}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
