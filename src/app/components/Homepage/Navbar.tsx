'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isStore = pathname === '/store'

  return (
    <nav className='w-full flex items-center justify-between px-6 md:px-16 py-4 relative'>
      {/* Logo */}
      <div className='flex gap-3 items-center'>
        <div className='px-3 py-2 font-semibold text-3xl bg-[#2D2C2C] text-[#8FD7ED]'>M</div>
        <h3 className='text-2xl font-semibold'>Marqetplace</h3>
      </div>

      {/* Desktop Nav */}
      {!isStore && (
        <div className='hidden md:flex items-center gap-6'>
          <Link href="/store" className='hover:text-[#8FD7ED]'>Store</Link>
          <Link href="/about" className='hover:text-[#8FD7ED]'>Tech</Link>
          <Link href="/contact" className='hover:text-[#8FD7ED]'>Support</Link>
        </div>
      )}

      {/* Desktop Right Section */}
      <div className='hidden md:flex items-center gap-6'>
        {isStore ? (
          <>
            <Link href="/#" className='tracking-wider font-light hover:text-[#8FD7ED]'>About</Link>
            <Link href="/#" className='tracking-wider font-light hover:text-[#8FD7ED]'>Support</Link>
            <Link href="/#" className='tracking-wider inline-flex items-center gap-2 hover:text-[#8FD7ED]'>
              <Image src='/cart-icon.png' alt='cart icon' width={20} height={10}/> Cart
            </Link>
            <div className='bg-black rounded-full w-8 h-8'></div>
          </>
        ) : (
          <>
            <Link href="/signup" className='hover:text-[#8FD7ED]'>Sign up</Link>
            <Link href="/signin" className='hover:text-[#8FD7ED]'>Sign in</Link>
            <div className='bg-black rounded-full w-8 h-8'></div>
          </>
        )}
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className='md:hidden text-black'
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white flex flex-col items-center gap-5 py-6 transition-all duration-300 ease-in-out md:hidden shadow-md ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        {isStore ? (
          <>
            <Link href="/#" className='tracking-wider font-light hover:text-[#8FD7ED]' onClick={() => setOpen(false)}>About</Link>
            <Link href="/#" className='tracking-wider font-light hover:text-[#8FD7ED]' onClick={() => setOpen(false)}>Support</Link>
            <Link href="/#" className='tracking-wider inline-flex items-center gap-2 hover:text-[#8FD7ED]' onClick={() => setOpen(false)}>
              <Image src='/cart-icon.png' alt='cart icon' width={20} height={10}/> Cart
            </Link>
          </>
        ) : (
          <>
            <Link href="/store" className='hover:text-[#8FD7ED]' onClick={() => setOpen(false)}>Store</Link>
            <Link href="/about" className='hover:text-[#8FD7ED]' onClick={() => setOpen(false)}>Tech</Link>
            <Link href="/contact" className='hover:text-[#8FD7ED]' onClick={() => setOpen(false)}>Support</Link>
            <Link href="/signup" className='hover:text-[#8FD7ED]' onClick={() => setOpen(false)}>Sign up</Link>
            <Link href="/signin" className='hover:text-[#8FD7ED]' onClick={() => setOpen(false)}>Sign in</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
