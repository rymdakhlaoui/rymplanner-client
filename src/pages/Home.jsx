import React from 'react'
import Hero from '../components/Hero'
import HeaderSection from '../components/HeaderSection'
import PromoSection from '../components/PromoSection'
import PricingSection from '../components/PricingSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Hero />
        <HeaderSection />
        <PromoSection />
        <PricingSection />
        <Footer />
    </div>
  )
}

export default Home