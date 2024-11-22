"use client"
import AiPart from "@/components/ai-section/ai-part"
import CreateAnything from "@/components/create-anything/create-anything"
import CreativeApproach from "@/components/creative-approach/creative-approach"
import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import HomeBanner from "@/components/home/home"
import ImageGallery from "@/components/image-gallery/image-gallery"

export default function Home() {
  return (
    <div className='w-full'>
      <Header />
      <HomeBanner />
      <ImageGallery />
      <AiPart />
      <CreateAnything />
      <CreativeApproach />
      <Footer />
    </div>
  )
}
