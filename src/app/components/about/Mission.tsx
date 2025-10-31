import Image from 'next/image'
import React from 'react'

const Mission = () => {
  return (
    <section className='w-full flex flex-col md:flex-row justify-between items-center py-10 md:mt-18 px-6 md:px-20 '>
      <div className='text-section md:max-w-xl'>
         <h1 className='text-2xl font-semibold'>Our Mission</h1>
         <p>Our mission is to make online shopping across more transparent, reliable, and true-to-life by connecting buyers to verified sellers and authentic products.</p>
      </div>
      < Image src='/mission.png' alt='mission illustration' height={300} width={500} className='mt-6 md:mt-0'/>
    </section>
  )
}

export default Mission