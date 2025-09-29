import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ViewProducts = () => {
  return (
    <div className='bg-[#8FD7ED40] flex items-center justify-center w-full pb-20 relative'>
        <div className='text  flex flex-col  max-w-md justify-between' >
     
             <div className='space-y-3'>
                       <h2 className='text-4xl font-medium '> VIEW PRODUCTS IN 3D IN REAL-TIME</h2>
            <p className='text-lg font-medium font-mono trcaking-tight'>Accurately visualize the fabric, fit and silhouette of your products as fast as you can imagine them.</p>
             <button className='px-8 py-3  w-[200px] text-white bg-[#E8912E] text-lg'>Learn More</button>
             </div>
              <Link href='#' className='underline absolute bottom-0  tracking-wide text-lg'>Shop verified products in store now</Link>
        </div>

        <Image src='/outfit.png' width={700} height={600} alt='3d image demo'/>
    </div>
  )
}

export default ViewProducts