import { Mail, MailsIcon } from 'lucide-react'
import React from 'react'

const ContactForm = () => {
  return (
    <section className=' mx-auto px-18  py-6 bg-white rounded-lg shadow-md'>
        <p className='text-gray-400 font-light'>Our Friendly customer support team is always here to help you</p>
        
        <section className='mt-20 space-y-4'>  
              <h1 className='text-2xl font-medium font-serif inline-flex items-center gap-2'>Inquire <MailsIcon/></h1>  
            </section>
    </section>
  )
}

export default ContactForm