import React from 'react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ContactForm from '@/components/ContactForm'

const Contact = () => {
  return (
    <div className="">
      <div
        className="absolute bottom-[10%] left-[-4%]  z-[-10] h-[392px] w-[392px] animate-scale rounded-[50%]"
        style={{
          background: 'linear-gradient(180deg, #6dcde8 -1.14%, #14b8a6 98.86%)',
          filter: 'blur(110.193px)',
        }}
      ></div>
      {/* <div
        className="absolute top-[10%] right-[10%]  z-[-10] h-[392px] w-[392px] animate-scale rounded-[50%]"
        style={{
          background: 'linear-gradient(180deg, #6dcde8 -1.14%, #14b8a6 98.86%)',
          filter: 'blur(110.193px)',
        }}></div> */}
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ContactForm />
    </div>
  )
}

export default Contact
