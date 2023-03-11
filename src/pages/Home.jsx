import React from 'react'
import HeroContainer from '../container/HeroContainer'
import TimelyContainer from '../container/TimelyContainer'
import TrustedContainer from '../container/TrustedContainer'
import StepContainer from '../container/StepContainer'

function Home() {
  return (
  <div className="home">
      <HeroContainer />
      <TimelyContainer />
      <TrustedContainer />
      <StepContainer />
  </div>
  )
}

export default Home