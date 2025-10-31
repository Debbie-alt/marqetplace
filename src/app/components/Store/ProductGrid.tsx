import React from 'react'
import TabNav from './TabNav'
import {  SetStateAction } from 'react';

  

const ProductGrid = ({tabs, activeTab, setActiveTab} :{tabs: string[], activeTab: string, setActiveTab: React.Dispatch<SetStateAction<string>>}) => {


  return (
    <section className='mt-10 px-2  md:px-14'>
   
      <form className='flex flex-wrap items-center gap-20 justify-center mb-16'>
        <label className='font-semibold tracking-wide text-3xl '>Store</label>
          <input className='border py-1 px-10 placeholder:text-black focus:outline-none focus:border-cyan-500' placeholder='Search'/>
      </form>
         <TabNav tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab}/>
      
    </section>
  )
}

export default ProductGrid