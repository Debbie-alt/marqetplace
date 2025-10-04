'use client';

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const tabs = [
  "All",
  "Fashion",
  "Cloth",
  "Electronics",
  "Cosmetics",
  "Drugs",
  "Devices",
];

const TabNav = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <nav className="flex flex-wrap  pb-2 items-center">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200
            ${
              activeTab === tab
            ? "bg-[#91D9EE] hover:bg-[#91D9EE]/70"
                : " text-gray-700 hover:opacity-80 transition-opacity ease-in-out "
            }`}
        >
          {tab}
        </button>
      ))}
      <ArrowRight />
    </nav>
  );
};

export default TabNav;
