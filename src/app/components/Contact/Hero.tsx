import React from 'react'

const ContactHero = () => {
  return (
    <section className='bg-[url("/contact-hero.jpg")] relative bg-cover bg-center py-20 h-[70vh] flex flex-col items-center justify-center text-white text-center px-4'>
         <div className='bg-black/10  bg-opacity-50 p-6 inset-0 absolute rounded-md'></div>
        <h1 className='text-4xl md:text-5xl font-medium text-black  mb-2'>
            Contact Us
        </h1>
        <p className='text-lg text-black'>We'd love to hear from you</p>
        


    </section>
  )
}

export default ContactHero