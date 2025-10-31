import React from 'react'
import Image from 'next/image'

const WhyWeStarted = () => {
  return (
    <section className='bg-white flex flex-col max-w-5xl mx-auto items-center justify-center px-5  py-12'>
          
          <h1 className='font-semibold text-2xl mb-3'>Why We Started</h1>
          <p className='mb-7'>
Marqetplace was born out of frustration with misleading product images, fake listings, and counterfeit goods dominating online spaces. We set out to change that — to give both buyers and sellers a platform where authenticity comes first.
</p>
<Image src='/ecommerce.png' alt='ecommerce image illustration' height={700} width={1000}/>
    </section>
  )
}

export default WhyWeStarted