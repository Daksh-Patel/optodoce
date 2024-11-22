import Image from "next/image"
import Image1 from "../../assets/images/image_1.png"
import Image2 from "../../assets/images/image_2.png"
import Image3 from "../../assets/images/image_3.png"
import Image4 from "../../assets/images/image_4.png"

import { Button } from "@/tailwind-components/ui/button"

const ImageGallery = () => {
  return (
    <div className='container'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-[50px]'>
        <div className='col-span-1'>
          <div className='max-w-[648px] relative rounded-lg'>
            <Image src={Image1} alt='image-1' />
          </div>

          <p className='text-md mt-[57px] max-w-[430px]'>
            We&apos;re passionate about empowering creatives with the tools they
            need to 
            <span className='bg-gradient-to-r from-[#6A41FB] to-[#F49957] text-transparent bg-clip-text'>
              bring their vision
            </span>{" "}
            to life that&apos;s why we&apos;ve developed
          </p>

          <div className='mt-[30px] flex items-center'>
            <Button className='bg-gradient-to-r from-[#6A41FB] to-[#F49957] rounded-full mr-10'>
              Get Started
            </Button>

            <p className='text-[30px] font-bold mr-2'>100+</p>
            <p className='text-lg'>Happy Client</p>
          </div>
        </div>

        <div className='col-span-1'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
            <div className='max-w-[312px] relative rounded-lg'>
              <Image src={Image2} alt='image-2' />
            </div>
            <div className='max-w-[312px] relative rounded-lg'>
              <Image src={Image3} alt='image-3' />
            </div>
          </div>

          <div className='max-w-[648px] relative rounded-lg mt-6'>
            <Image src={Image4} alt='image-4' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
