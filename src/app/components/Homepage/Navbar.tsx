import React from 'react'
import Link from 'next/link'

const Navbar = () => {      
  return (
     <nav className='w-full flex items-center justify-between px-16 py-4 '>
      <div className='logo flex gap-3 items-center'>
        <div className='px-3 py-2 font-semibold text-3xl bg-[#2D2C2C] text-[#8FD7ED]'>M</div>
        <h3 className='text-2xl font-semibold'>Marqetplace</h3>

      </div>
      <div className='nav flex items-center gap-3'>
        <Link href="/store" className='cursor-pointer'>Store</Link>
        <Link href="/about" className='cursor-pointer'>Tech</Link>
        <Link href="/contact" className='cursor-pointer'>Support</Link>
       </div>

      <div className='signup flex items-center gap-3'>
        <Link  href="/signup" className='cursor-poitorenter'>Sign up</Link>
        <Link  href="/signup" className='cursor-pointer'>Sign in</Link>

    </div>
     </nav>
  )
}

export default Navbar 