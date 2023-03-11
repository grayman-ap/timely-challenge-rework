import React from 'react'
import { stepData } from '../utils/data/data'

function Step() {
  return (
    <div className="step">
      <div className="step__container">
        {stepData.map((item)=>(
          <div className="step__data" style={{flexDirection:item.position, display:'flex'}}>
              <div className="image__container">
                <img src={item.img} alt="tracking" />
              </div>
              <div className="step__textContainer">
              <h3 className='step__header'>{item.header}</h3>
              <p className='step__content'>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Step