import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Video from '../components/Video'
import { color } from '../utils/data/data'

function HeroContainer() {
  return (
    <div className="heroContainer" >

    <Header />
    <HeroSection />
    <Video />
  
    </div>

  )
}

export default HeroContainer