import React from 'react'
import TabNav from './TabNav'

const ProductGrid = () => {
  return (
    <section className='mt-10 px-14'>
   
      <form className='flex items-center gap-20 justify-center mb-16'>
        <label className='font-semibold tracking-wide text-3xl '>Store</label>
          <input className='border py-1 px-10 placeholder:text-black focus:outline-none focus:border-cyan-500' placeholder='Search'/>
      </form>
         <TabNav/>
      
    </section>
  )
}

export default ProductGrid