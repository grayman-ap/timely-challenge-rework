import React from 'react'
import HeroContainer from '../container/HeroContainer'
import TimelyContainer from '../container/TimelyContainer'
import TrustedContainer from '../container/TrustedContainer'

function Home() {
  return (
  <div className="home">
      <HeroContainer />
      <TimelyContainer />
      <TrustedContainer />
  </div>
  )
}

export default Home