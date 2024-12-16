import React from 'react'
import HeroSection from '../components/Herosection'
import WhyChooseUs from '../components/WhyChooseus'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import MenuSection from '../components/MenuSection'

const page = () => {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <MenuSection />

    </div>
  )
}

export default page