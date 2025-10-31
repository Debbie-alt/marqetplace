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

  const getLinkClass = (path: string) =>
    `hover:text-cyan-700 transition-colors ${
      pathname === path ? 'text-cyan-700 font-semibold' : 'text-gray-800'
    }`

  return (
    <nav className='w-full flex items-center justify-between px-6 md:px-16 py-4 relative bg-white z-50'>
      <div className='flex gap-3 items-center'>
        <div className='px-3 py-2 font-semibold text-3xl bg-[#2D2C2C] text-[#8FD7ED]'>M</div>
        <h3 className='text-2xl font-semibold'>Marqetplace</h3>
      </div>

      {!isStore && (
        <div className='hidden md:flex items-center gap-6'>
          <Link href="/store" className={getLinkClass('/store')}>Store</Link>
          <Link href="/tech" className={getLinkClass('/tech')}>Tech</Link>
          <Link href="/contact" className={getLinkClass('/contact')}>Support</Link>
        </div>
      )}

      <div className='hidden md:flex items-center gap-6'>
        {isStore ? (
          <>
            <Link href="/about" className={getLinkClass('/about')}>About</Link>
            <Link href="/contact" className={getLinkClass('/contact')}>Support</Link>
            <Link href="/#" className={`${getLinkClass('/cart')} inline-flex items-center gap-2`}>
              <Image src='/cart-icon.png' alt='cart icon' width={20} height={10}/> Cart
            </Link>
            <div className='bg-black rounded-full w-8 h-8'></div>
          </>
        ) : (
          <>
            <Link href="/signup" className={getLinkClass('/signup')}>About</Link>
            <Link href="/signin" className={getLinkClass('/signin')}>Sign Up</Link>
            <div className='bg-black rounded-full w-8 h-8'></div>
          </>
        )}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className='md:hidden text-black z-50'
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className={`absolute top-full left-0 w-full bg-white flex flex-col items-center gap-5 py-6 transition-all duration-300 ease-in-out md:hidden shadow-md ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
        }`}
      >
        {isStore ? (
          <>
            <Link href="/about" className={getLinkClass('/about')} onClick={() => setOpen(false)}>About</Link>
            <Link href="/support" className={getLinkClass('/support')} onClick={() => setOpen(false)}>Support</Link>
            <Link href="/store" className={`${getLinkClass('/store')} inline-flex items-center gap-2`} onClick={() => setOpen(false)}>
              <Image src='/cart-icon.png' alt='cart icon' width={20} height={10}/> Cart
            </Link>
          </>
        ) : (
          <>
            <Link href="/store" className={getLinkClass('/store')} onClick={() => setOpen(false)}>Store</Link>
            <Link href="/tech" className={getLinkClass('/tech')} onClick={() => setOpen(false)}>Tech</Link>
            <Link href="/contact" className={getLinkClass('/contact')} onClick={() => setOpen(false)}>Support</Link>
            <Link href="/signup" className={getLinkClass('/signup')} onClick={() => setOpen(false)}>About</Link>
            <Link href="/signin" className={getLinkClass('/signin')} onClick={() => setOpen(false)}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
