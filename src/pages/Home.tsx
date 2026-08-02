import SEO from '../components/ui/SEO'
import GlowHero from '../components/home/GlowHero'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ServicesSection from '../components/home/ServicesSection'
import DentistSection from '../components/home/DentistSection'
import GallerySection from '../components/home/GallerySection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import DreamSmileCTA from '../components/home/DreamSmileCTA'
import WaveDivider from '../components/ui/WaveDivider'

export default function Home() {
  return (
    <>
      <SEO
        title="The Toothgram Dental Clinic — Premium Smile Studio, Sector 135 Noida"
        description="Noida's premier cosmetic dental lounge. Veneers, Invisalign, whitening, smile makeovers & general dentistry in a calm beauty-first setting. Rated 5.0★ by 153+ patients."
        ogTitle="The Toothgram Dental Clinic — Premium Smile Studio, Noida"
        ogDescription="Your soft place to shine. World-class cosmetic dentistry in Sector 135, Noida."
        canonical="https://toothgram.in/"
      />

      <GlowHero />
      <WaveDivider topColor="#F8EDE8" bottomColor="#FFF9F6" />
      <WhyChooseUs />
      <WaveDivider topColor="#FFF9F6" bottomColor="#F8EDE8" />
      <ServicesSection />
      <WaveDivider topColor="#F8EDE8" bottomColor="#FFF9F6" />
      <DentistSection />
      <WaveDivider topColor="#FFF9F6" bottomColor="#F0DDD6" />
      <GallerySection />
      <WaveDivider topColor="#F0DDD6" bottomColor="#FFF9F6" />
      <TestimonialsSection />
      <WaveDivider topColor="#FFF9F6" bottomColor="#F8EDE8" />
      <DreamSmileCTA />
    </>
  )
}
