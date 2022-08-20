import React from 'react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ContactForm from '@/components/ContactForm'

const Contact = () => {
  return (
    <div>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <ContactForm />
    </div>
  )
}

export default Contact
