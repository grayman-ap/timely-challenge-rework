import React from 'react'
import Integration from './Integration'
import FeaturesComp from './FeaturesComp'
import LearnComp from './LearnComp'
import BlogIntegration from './BlogIntegration'

function Learn() {
  return (
    <div className="dropContainer">
    <div className="feature__app">
    <div className="featureComp">
    <LearnComp />
    </div>
    <div className="integrationComp">
    <BlogIntegration />
    </div>
    </div>
    </div>
  )
}

export default Learn