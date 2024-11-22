import Image from "next/image"
import Logo from "../../assets/images/footer-logo.png"
import FooterLink, { FooterLinkType } from "./footer-link"
import { Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { Separator } from "@/tailwind-components/ui/separator"

const AboutPart: FooterLinkType[] = [
  {
    href: "/",
    linkName: "Terms & Conditions",
  },
  {
    href: "/",
    linkName: "Privacy Policies",
  },
  {
    href: "/",
    linkName: "Careers",
  },
  {
    href: "/",
    linkName: "Contact Us",
  },
]

const ServicesPart: FooterLinkType[] = [
  {
    href: "/",
    linkName: "Image Generator",
  },
  {
    href: "/",
    linkName: "Creative Tools",
  },
  {
    href: "/",
    linkName: "Design Generator",
  },
  {
    href: "/",
    linkName: "Excellent Support",
  },
]

const Footer = () => {
  return (
    <div className='pt-[60px] xl:pt-[200px]'>
      <div className='container'>
        <div className='flex flex-col xl:flex-row items-center justify-between'>
          <div className='relative max-w-[520px] mb-4 xl:mb-0'>
            <Image src={Logo} alt='logo' />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] 2xl:gap-[70px] w-full'>
            <FooterLink title='About' data={AboutPart} />
            <FooterLink title='Services' data={ServicesPart} />

            <div>
              <h3 className='text-[30px] text-[#6A41FB] font-bold mb-4'>
                Address
              </h3>

              <div className='flex items-start space-x-2 mb-4'>
                <MapPin />
                <p className='max-w-[170px]'>
                  551 Swanston Street, Melbourne Victoria 3053 Australia
                </p>
              </div>

              <div className='flex items-start space-x-2 mb-4'>
                <Phone />
                <Link href='tel:+91 1234567890'>+91 1234567890</Link>
              </div>

              <div className='flex items-start space-x-2 mb-4'>
                <Mail />
                <Link href='mailto:info@optodolce.com'>info@optodolce.com</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className='w-full mt-[60px] bg-[#FFFFFF] opacity-30' />

      <p className='w-full text-center py-7'>
        © 2024 Optodolce All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
