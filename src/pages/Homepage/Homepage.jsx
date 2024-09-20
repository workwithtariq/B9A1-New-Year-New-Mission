import React from 'react'
import Footer from './Footer'
import Hero from './Hero'
import Holiday from './Holiday'
import Midnight from './Midnight'
import NewsLetter from './NewsLetter'
import Offer from './Offer'
import OffSection from './OffSection'
import Portfolio from './Portfolio'
import Schedule from './Schedule'

const Homepage = () => {
  return (
    <div >

    <Hero />
    <OffSection />
    <Midnight />
    <Schedule />
    <Offer />
    <Holiday />
    <Portfolio />
    <NewsLetter />
    <Footer />
    </div>
  )
}

export default Homepage