import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='bg-[#7AD5EC] px-16 py-10 w-screen'>
        <div>
            <h1 className='font-extrabold text-6xl text-black '>SPIN IT. VERIFY IT. TRUST IT.</h1>
        </div>

        <div className='flex flex-col  '>
          <h6 className='text-black text-lg font-medium mt-5 mb-6'>Shop for Products that match exactly what comes up at your door</h6>
          <button className='px-6 py-2  w-fit rounded-full bg-gradient-to-r from-[#016880] via-[#016880] via-[] to-[#E8912E]'>SHOP NOW</button>
  <Image 
        src="/hero.png" 
        alt="hero image" 
        width={1300}
        height={200}
        className="object-contain" 
        priority
      />            

        </div>
    </div>
  )
}

export default Hero