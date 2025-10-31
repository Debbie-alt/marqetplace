'use client'

import React from "react"
import { ArrowRight } from "lucide-react"

type TabNavProps = {
  tabs: string[]
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

const TabNav = ({ tabs, activeTab, setActiveTab }: TabNavProps) => {
  return (
    <nav className="flex flex-wrap pb-2 items-center gap-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-5 py-1.5 rounded-full text-sm font-medium transition-colors duration-200
            ${
              activeTab === tab
                ? "bg-[#91D9EE] hover:bg-[#91D9EE]/70"
                : "text-gray-700 hover:opacity-80"
            }`}
        >
          {tab}
        </button>
      ))}
      <ArrowRight className="ml-2 text-gray-600" />
    </nav>
  )
}

export default TabNav
