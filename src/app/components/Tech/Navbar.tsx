"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ShoppingCart, UserIcon, Menu, X } from "lucide-react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-10 py-3 border-b border-gray-200 bg-white shadow-sm relative">
      <div className="flex items-center gap-3">
        <div className="bg-[#2D2C2C] text-[#8FD7ED] px-2 py-1 text-2xl font-semibold">
          M
        </div>
        <h2 className="text-lg font-semibold text-gray-800">Marqetplace</h2>
      </div>

      <div className="hidden md:flex items-center gap-8 text-gray-700 ">
        <Link href="/store" className="hover:text-black">
          Store
        </Link>
        <Link href="/contact" className="hover:text-black">
          Support
        </Link>
        <Link href="/about" className="hover:text-black">
          About
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-4 text-gray-700">
        <ShoppingCart size={26} className="cursor-pointer font-semibold" />
        <UserIcon size={26} className="cursor-pointer font-semibold" />
      </div>

      <button
        className="md:hidden text-gray-700"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md flex flex-col items-center py-4 gap-4 text-gray-700 text-sm md:hidden z-50">
          <Link href="/store" className="hover:text-black" onClick={() => setMenuOpen(false)}>
            Store
          </Link>
          <Link href="/contact" className="hover:text-black" onClick={() => setMenuOpen(false)}>
            Support
          </Link>
          <Link href="/about" className="hover:text-black" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <div className="flex items-center gap-6 pt-2">
            <ShoppingCart size={24} className="cursor-pointer" />
            <UserIcon size={24} className="cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  )
}
