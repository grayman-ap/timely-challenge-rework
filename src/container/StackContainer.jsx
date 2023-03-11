import React from 'react'
import Stack from '../components/Stack'
import Try from '../components/Try'

function StackContainer() {
  return (
    <div className="stackApp">
    <div className="stackContainer">
            <Stack />
        </div>
        <Try />
    </div>

  )
}

export default StackContainer