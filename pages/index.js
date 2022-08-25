import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'
import Image from 'next/image'
import Rain from '@/layouts/Rain'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <div className="relative">
      {/* <div
        className=" absolute bottom-[2%]  left-[-4%] z-[-10] h-[392px] w-[392px] rounded-[50%]"
        style={{
          background: 'linear-gradient(180deg, #6dcde8 -1.14%, #14b8a6 98.86%)',
          filter: 'blur(20.193px)',
        }}></div> */}
      <div className="absolute">
        <div className="drop"></div>
        <div className="wave absolute"></div>
      </div>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="relative flex h-[65vh] items-center">
        <div className="md:flex">
          <div className="my-auto text-center md:text-left ">
            <h5 className="text-primary-500">HI THERE 👋 , I'M</h5>

            <h4 className="mt-[10px] text-[80px] leading-[88px] dark:text-[#ccd6f6] ">
              Sujeet Singh
            </h4>

            <h4 className="mt-[10px]  text-[50px] leading-[72px] dark:text-[#8892b0]">
              I am a Full Stack Developer.
            </h4>

            <h4 className="mt-[20px]  dark:text-[#8892b0] md:w-[70%]">
              I’m a software engineer specializing in building (and occasionally designing)
              exceptional digital experiences. Currently, I’m focused on building accessible,
              human-centered products at Upstatement.
            </h4>

            <button
              onClick={() => {
                var element = document.createElement('a')
                element.setAttribute('href', '/static/Sujeet_Singh_Resume.pdf')
                element.setAttribute('download', 'SujeetSinghResume.pdf')
                document.body.appendChild(element)
                element.click()
                document.body.removeChild(element)
              }}
              className="mx-auto mt-[30px]  animate-bounce border border-primary-500 px-[1.75rem] py-[1rem] text-primary-500 md:mx-0 "
            >
              Download Resume
            </button>
          </div>
          <div className="relative hidden items-center md:flex">
            <div
              className="absolute right-0  z-[-10] h-[292px] w-[292px] animate-scale rounded-[50%]"
              style={{
                background: 'linear-gradient(180deg, #6dcde8 -1.14%, #14b8a6 98.86%)',
                filter: 'blur(100.193px)',
              }}
            ></div>
            <Image src="/static/images/sujeet.svg" alt="self" height="650" width="650" />
          </div>
        </div>
      </div>
      {/* <div className="absolute bottom-0  w-[100%] border">
        <Rain />
      </div> */}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4 ">
          <NewsletterForm />
        </div>
      )} */}
    </div>
  )
}
