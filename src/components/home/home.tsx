import Image from "next/image"
import React from "react"
import Banner1 from "../../assets/images/banner_1.png"
import Banner2 from "../../assets/images/banner_2.png"
import { Input } from "@/tailwind-components/ui/input"
import { Button } from "@/tailwind-components/ui/button"
import { Badge } from "@/tailwind-components/ui/badge"
import { motion } from "framer-motion"

const BadgeTitle = ["Creative", "Sport", "Animation", "Fantasy"]

const HomeBanner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className='container relative'>
        <div className='w-full max-w-[863px] mx-auto mt-[100px]'>
          <h1 className='text-[70px] text-center font-bold leading-[80px]'>
            Best AI Content Platform{" "}
            <span className='bg-gradient-to-r from-[#6A41FB] to-[#F49957] text-transparent bg-clip-text'>
              Image Generate
            </span>
          </h1>

          <p className='text-center w-full text-md max-w-[520px] mx-auto py-[30px]'>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div className='w-full max-w-[703px] mx-auto mt-5 relative'>
            <Input
              className='w-full bg-[#343435] rounded-full border border-[#343435] h-[75px] p-[27px] text-white'
              placeholder='An Astronaut riding a horse on mars, hd'
            />

            <Button className='bg-gradient-to-r from-[#6A41FB] to-[#F49957] rounded-full h-[53px] absolute top-[50%] translate-y-[-50%] right-3'>
              Generate Now
            </Button>
          </div>

          <div className='flex flex-col sm:flex-row items-start w-full mt-5 max-w-[487px] mx-auto'>
            <p>Popular tags:</p>
            {BadgeTitle.map((badge) => (
              <Badge key={badge} className='ml-2 rounded-full mt-2 sm:mt-0'>
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        <div className='hidden lg:block absolute top-[100px] left-[50px]'>
          <div className='max-w-[252px]relative'>
            <Image src={Banner1} alt='logo' />
          </div>
        </div>

        <div className='hidden xl:block absolute bottom-0 right-[20px] '>
          <div className='max-w-[252px] relative'>
            <Image src={Banner2} alt='logo' />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default HomeBanner
