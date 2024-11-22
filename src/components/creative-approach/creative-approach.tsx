import Image from "next/image"
import ApproachImage from "../../assets/images/approach.png"
import AccordianPart from "./accordian-part"

const CreativeApproach = () => {
  return (
    <div className='pt-[100px] pb-[110px] bg-white text-black xl:mt-[140px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row items-start xl:items-center xl:space-x-[44px]'>
          <div className='max-w-[536x] w-full lg:w-[40%]'>
            <Image src={ApproachImage} alt='ai-image' />
          </div>

          <div className='w-full lg:w-[60%] pt-10 lg:pt-0'>
            <p className='py-4 px-6 bg-[#6A41FB33] text-sm rounded-full max-w-[190px]'>
              Creative Approach
            </p>

            <h2 className='text-[60px] max-w-[610px] pt-4 leading-[66px]'>
              Questions?{" "}
              <span className='bg-gradient-to-r from-[#6A41FB] to-[#F49957] text-transparent bg-clip-text'>
                We have
              </span>{" "}
              Answers.
            </h2>

            <AccordianPart />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreativeApproach
