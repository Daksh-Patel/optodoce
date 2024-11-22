import Link from "next/link"
import React from "react"

export interface FooterLinkType {
  href: string
  linkName: string
}

interface FooterDetails {
  data: FooterLinkType[]
  title: string
}

const FooterLink = (props: FooterDetails) => {
  const { data, title } = props

  return (
    <div className='col-span-1 w-full'>
      <h3 className='text-[30px] text-[#6A41FB] font-bold mb-4'>{title}</h3>

      {data.map((text, index) => (
        <Link href={text.href} className='text-md block mb-4' key={index}>
          {text.linkName}
        </Link>
      ))}
    </div>
  )
}

export default FooterLink
