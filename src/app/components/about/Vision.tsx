import Image from 'next/image'
import React from 'react'

const Vision = () => {
  return (
    <section className='w-full flex flex-col md:flex-row justify-between items-center py-10 px-6 md:px-20 mb-10'>
      <div className='text-section max-w-xl'>
         <h1 className='text-2xl font-semibold'>Our Vision</h1>
         <p>We envision an African digital commerce is powered by truth, trust and technology. Where every product seen online is exactly what  arrives at your doorstep. </p>
      </div>
      < Image src='/vision.png' alt='Vision illustration' height={300} width={500} className='mt-6 md:mt-0'/>
    </section>
  )
}

export default Vision