'use client'

import React from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { useAuth } from '@/context/Authcontext'

interface TopBarProps {
  onMenuClick?: () => void
}

const TopBar = ({ onMenuClick }: TopBarProps) => {
  const { user } = useAuth()

  return (
    <header className="w-full border-gray-200 flex items-center justify-between px-7 py-3 shadow-sm sticky top-0 bg-white z-20">
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none"
      >
        <Menu size={22} />
      </button>

      {/* Center: Title */}
      <h2 className="text-sm hidden sm:block font-medium text-gray-700 py-2 px-5 mx-auto rounded-sm text-center border border-gray-400">
        Business Management
      </h2>

      <Link
        href="/store"
        className="border border-gray-400 text-sm px-4 py-1 rounded hover:bg-gray-100"
      >
        View store
      </Link>
    </header>
  )
}

export default TopBar
