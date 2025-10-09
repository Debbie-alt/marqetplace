import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { ArrowLeft } from 'lucide-react'

const ThreeDImages = () => {
  return (
    <>
        <figure className='border bg-[#F3F3F3] w-fit px-10 mt-15 '>
            <Image src='/outfit.png' alt='3d preview' width={400} height={500}/>
            <iframe>
                
            </iframe>
        </figure>

        <div className='flex items-center gap-4 mt-5'>
            <span><ArrowLeft/></span>
            <div className='bg-black p-2'>            
            <Image src='/outfit.png' alt='3d preview' width={60} height={90} />
             </div>
              <div className='bg-black p-2'>            
            <Image src='/outfit.png' alt='3d preview' width={60} height={90} />
             </div>
              <div className='bg-black p-2'>            
            <Image src='/outfit.png' alt='3d preview' width={60} height={90} />
             </div>
              <div className='bg-black p-2'>            
            <Image src='/outfit.png' alt='3d preview' width={60} height={90} />
             </div>
            <span><ArrowRight/></span>
        </div>
    </>
  )
}

export default ThreeDImages