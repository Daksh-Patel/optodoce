import Image from "next/image"
import Image2 from "../../assets/images/image_2.png"
import Image3 from "../../assets/images/image_3.png"
import Image4 from "../../assets/images/image_4.png"
import Cartton5 from "../../assets/images/cartton-5.png"
import Cartton1 from "../../assets/images/cartton-1.png"

const CartoonImages = () => {
  return (
    <div className='grid grid-cols-4 gap-6 mt-10'>
      <div className='col-span-1'>
        <div className='max-w-[312px] relative'>
          <Image src={Cartton5} alt='img-1' />
        </div>
      </div>

      <div className='col-span-2'>
        <div className='grid grid-cols-2 gap-6'>
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

      <div className='col-span-1'>
        <div className='max-w-[312px] relative'>
          <Image src={Cartton1} alt='img-5' />
        </div>
      </div>
    </div>
  )
}

export default CartoonImages
