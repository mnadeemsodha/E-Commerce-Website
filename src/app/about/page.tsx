import React from 'react'
import HeroSection from '../components/Herosection'
import WhyChooseUs from '../components/WhyChooseus'
import TeamSection from '../components/TeamSection'
import Testimonials from '../components/Testimonials'
import MenuSection from '../components/MenuSection'
const page = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <TeamSection />
      <Testimonials />
      <MenuSection />

    </div>
  )
}

export default page