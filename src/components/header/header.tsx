"use client"

import { Button } from "@/tailwind-components/ui/button"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Logo from "../../assets/images/logo.png"

const Header = () => {
  return (
    <div className='container'>
      <div className='flex justify-between items-center py-4'>
        <Button
          variant='ghost'
          className='hover:bg-transparent hover:text-white p-0 w-[44px]'
        >
          <Menu className='text-[44px]' />
        </Button>

        <Link href='/'>
          <div className='max-w-[252px] relative'>
            <Image src={Logo} alt='logo' />
          </div>
        </Link>

        <div className='flex items-start space-x-2'>
          <Button className='bg-white text-black border rounded-full hover:bg-transparent hover:text-white hover:border-white'>
            Log in
          </Button>
          <Button className='bg-gradient-to-r from-[#6A41FB] to-[#F49957] rounded-full'>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Header
