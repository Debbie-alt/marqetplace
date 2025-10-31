'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { useAuth } from '@/context/Authcontext'

const Sidebar = () => {
  const pathname = usePathname()
  const user = useAuth()

  // Track which dropdowns are open
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }))
  }

  const [searchTerm, setSearchTerm] = useState('')

  const menu = [
    {
      title: 'My Store',
      items: [
        { name: 'Upload Product', path: '/upload-product' },
        { name: 'Orders', path: '/orders' },
        { name: 'Customer Reviews', path: '/customer-reviews' },
      ],
    },
    { title: 'Business Analytics', path: '/analytics' },
    { title: 'Promotion', path: '/promotion' },
    { title: 'Earnings', path: '/earnings' },
    {
      title: 'Settings',
      items: [
        { name: 'Profile', path: '/settings/profile' },
        { name: 'Preferences', path: '/settings/preferences' },
      ],
    },
    {
      title: 'Support',
      items: [
        { name: 'Contact Us', path: '/support/contact' },
        { name: 'FAQ', path: '/support/faq' },
      ],
    },
  ]

  // Filter menu items based on search
  const filterMenu = (menu: any[]) => {
    if (!searchTerm.trim()) return menu
    const term = searchTerm.toLowerCase()
    return menu
      .map((section) => {
        if (section.items) {
          const filteredItems = section.items.filter((item: any) =>
            item.name.toLowerCase().includes(term)
          )
          if (section.title.toLowerCase().includes(term) || filteredItems.length)
            return { ...section, items: filteredItems }
        } else if (section.title.toLowerCase().includes(term)) return section
        return null
      })
      .filter(Boolean)
  }

  const filteredMenu = filterMenu(menu)

  return (
    <aside className="w-72 h-screen bg-[#F6F6F6] border-r border-gray-200 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-200">
        <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-semibold text-lg rounded">M</div>
        <h1 className="font-semibold text-lg">Marqetplace</h1>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-3 px-6 py-4">
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
          <Image
            src="/greenfront.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="font-semibold text-sm text-gray-800">Fela Style</p>
          <p className="text-xs text-gray-500 leading-tight">{user?.user?.displayName}</p>
        </div>
      </div>

      {/* Search */}
      <div className="px-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto px-6 mt-4 text-sm font-medium">
        {filteredMenu.map((section, index) => (
          <div key={index} className="mb-3">
            {section.items ? (
              <div>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="flex items-center justify-between w-full text-gray-700 font-semibold mb-1 hover:text-cyan-600"
                >
                  <span>{section.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                      openSections[section.title] ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Dropdown items */}
                <div
                  className={`pl-3 mt-1 space-y-1 transition-all duration-300 overflow-hidden ${
                    openSections[section.title]
                      ? 'max-h-40 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  {section.items.map((item: any, idx: number) => (
                    <Link
                      key={idx}
                      href={item.path}
                      className={`block px-3 py-1.5 rounded text-[15px] ${
                        pathname === item.path
                          ? 'bg-cyan-500 text-white font-semibold'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={section.path!}
                className={`block font-semibold text-gray-700 mb-1 ${
                  pathname === section.path
                    ? 'text-cyan-600'
                    : 'hover:text-cyan-500'
                }`}
              >
                {section.title}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
