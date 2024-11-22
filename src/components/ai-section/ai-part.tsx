import Image from "next/image"
import AiImage from "../../assets/images/ai-image.png"
import AiImage2 from "../../assets/images/ai-image2.png"
import AiImage3 from "../../assets/images/ai-image3.png"
import AiImage4 from "../../assets/images/ai-image4.png"
import { Button } from "@/tailwind-components/ui/button"
import { Sparkle } from "lucide-react"

const AiImages = [AiImage2, AiImage3, AiImage4]

const AiPart = () => {
  return (
    <div className='pt-[30px] pb-[110px] bg-white text-black mt-[140px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row items-center lg:space-x-[44px]'>
          <div className='max-w-[629px]'>
            <Image src={AiImage} alt='ai-image' />
          </div>

          <div className='mt-10 xl:mt-0'>
            <p className='py-4 px-6 bg-[#6A41FB33] text-sm rounded-full max-w-[190px]'>
              Introduce optpdoce AI
            </p>

            <h2 className='text-[60px] max-w-[610px] pt-4 leading-[66px]'>
              Unlocking the Power of{" "}
              <span className='bg-gradient-to-r from-[#6A41FB] to-[#F49957] text-transparent bg-clip-text'>
                AI for a Smarter
              </span>{" "}
              Future
            </h2>

            <div className='grid grid-cols-4 gap-4 mt-10'>
              {AiImages.map((img, index) => (
                <div className='max-w-[148px]' key={index}>
                  <Image src={img} alt='ai-image' />
                </div>
              ))}
            </div>

            <div className='flex items-center space-x-[30px] mt-10'>
              <Button className='bg-gradient-to-r from-[#6A41FB] to-[#F49957] rounded-full'>
                Try Now
              </Button>

              <p className='text-[#010102] text-md max-w-[380px] opacity-60 flex items-center'>
                <Sparkle
                  fill='#6A41FB'
                  stroke='#6A41FB'
                  className='mr-2 w-[32px] h-[32px]'
                />
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AiPart
