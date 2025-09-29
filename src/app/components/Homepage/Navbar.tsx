'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const Navbar = () => {  
  const pathname = usePathname();    
  return (
     <nav className='w-full flex items-center justify-between px-16 py-4 '>
      <div className='logo flex gap-3 items-center'>
        <div className='px-3 py-2 font-semibold text-3xl bg-[#2D2C2C] text-[#8FD7ED]'>M</div>
        <h3 className='text-2xl font-semibold'>Marqetplace</h3>

      </div>
      <div className={`nav  items-center gap-3  ${pathname == '/store' ? 'hidden' : 'flex'}`}>
        <Link href="/store" className='cursor-pointer'>Store</Link>
        <Link href="/about" className='cursor-pointer'>Tech</Link>
        <Link href="/contact" className='cursor-pointer'>Support</Link>
       </div>

      <div className={`signup flex items-center gap-3  ${pathname == '/store' ? 'hidden' : 'flex'}`}>
        <Link  href="/signup" className='cursor-poitorenter'>Sign up</Link>
        <Link  href="/signup" className='cursor-pointer'>Sign in</Link>
        <div className='bg-black rounded-full w-8 h-8 '></div>

    </div>

        <div className={`flex items-center gap-6  ${pathname == '/store' ? 'flex' : 'hidden'}`}>
        <Link  href="/#" className='cursor-pointer tracking-wider font-light'>About</Link>
        <Link  href="/#" className='cursor-pointer tracking-wider font-light'>Support</Link>
        <Link  href="/#" className='cursor-pointer tracking-wider inline-flex items-center gap-2'> 
        <Image src='/cart-icon.png' alt='cart icon' width={30} height={10}/> Cart</Link>

        <div className='bg-black rounded-full w-8 h-8 '></div>

    </div>


    
     </nav>
  )
}

export default Navbar 