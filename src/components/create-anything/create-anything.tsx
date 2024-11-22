import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/tailwind-components/ui/tabs"

import AllImage from "./all-image"
import CartoonImages from "./cartoon-images"
import { Button } from "@/tailwind-components/ui/button"

const TabsValues = ["All", "Cartoon", "Realistic", "3D"]

const CreateAnything = () => {
  return (
    <div className='py-[70px] xl:py-[140px]'>
      <div className='container'>
        <p className='py-4 px-6 bg-[#6A41FB33] text-white text-sm rounded-full max-w-[160px] mx-auto'>
          Recently Created
        </p>
        <h2 className='text-[60px] text-center'>
          Create anything with{" "}
          <span className='bg-gradient-to-r from-[#6A41FB] to-[#F49957] text-transparent bg-clip-text'>
            Optpdoce
          </span>{" "}
          AI
        </h2>

        <Tabs defaultValue='All' className='w-full mt-[30px]'>
          <TabsList className='grid w-full grid-cols-4 max-w-[520px]  mx-auto bg-transparent'>
            {TabsValues.map((tab) => (
              <TabsTrigger
                value={tab}
                className='bg-transparent text-white'
                key={tab}
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value='All'>
            <AllImage />
          </TabsContent>

          <TabsContent value='Cartoon'>
            <CartoonImages />
          </TabsContent>

          <TabsContent value='Realistic'>No Image</TabsContent>
          <TabsContent value='3D'>No Image</TabsContent>
        </Tabs>

        <div className='w-full max-w-[220px] mx-auto mt-[50px]'>
          <Button className='bg-gradient-to-r from-[#6A41FB] to-[#F49957] rounded-full'>
            Go to our AI gallery
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CreateAnything
