'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import  { useAuth } from '@/context/Authcontext'

const Sidebar = () => {
  const pathname = usePathname()
  const user = useAuth()

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
    { title: 'Settings', path: '/settings' },
    { title: 'Support', path: '/support' },
  ]

  return (
    <aside className="w-72 h-screen bg-[#F6F6F6] border-r border-gray-200 flex flex-col">
      <div className="flex items-center gap-2 px-6 py-5 border-b border-gray-200">
        <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-semibold text-lg rounded">M</div>
        <h1 className="font-semibold text-lg">Marqetplace</h1>
      </div>

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
          <p className="font-medium text-sm">Fela Style</p>
          <p className="text-xs text-gray-500 leading-tight"> {user?.user?.displayName }</p>
        </div>
      </div>

      <div className="px-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto px-6 mt-4 text-sm">
        {menu.map((section, index) => (
          <div key={index} className="mb-4">
            {section.items ? (
              <div>
                <div className="flex items-center justify-between font-medium text-gray-700 mb-2">
                  <span>{section.title}</span>
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
                <div className="pl-2 space-y-1">
                  {section.items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.path}
                      className={`block px-3 py-1.5 rounded ${
                        pathname === item.path
                          ? 'bg-cyan-500 text-white'
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
                className={`block font-medium text-gray-700 mb-1 ${
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
