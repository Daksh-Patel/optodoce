import Image from "next/image"
import Cartton1 from "../../assets/images/cartton-1.png"
import Cartton2 from "../../assets/images/cartton-2.png"
import Cartton3 from "../../assets/images/cartton-3.png"
import Cartton4 from "../../assets/images/cartton-4.png"
import Cartton5 from "../../assets/images/cartton-5.png"

const AllImage = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-10'>
      <div className='col-span-1'>
        <div className='max-w-[312px] relative'>
          <Image src={Cartton1} alt='img-1' />
        </div>
      </div>

      <div className='col-span-2'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full'>
          <div className='max-w-[312px] relative rounded-lg'>
            <Image src={Cartton2} alt='image-2' />
          </div>
          <div className='max-w-[312px] relative rounded-lg'>
            <Image src={Cartton3} alt='image-3' />
          </div>
        </div>

        <div className='max-w-[648px] relative rounded-lg mt-6'>
          <Image src={Cartton4} alt='image-4' />
        </div>
      </div>

      <div className='col-span-1'>
        <div className='max-w-[312px] relative'>
          <Image src={Cartton5} alt='img-5' />
        </div>
      </div>
    </div>
  )
}

export default AllImage
