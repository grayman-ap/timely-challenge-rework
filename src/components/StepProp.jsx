import React from 'react'
import { stepData } from '../utils/data/data'

function StepProp({header,content}) {
  return (
    <div className="step">
    <div className="step__container">
      {stepData.map((item)=>(
        <div className="step__data" style={{flexDirection:item.position, display:'flex', justifyContent:'space-between'}}>
            <div className="image__container">
              <img src={item.img} alt="tracking" style={{width:600}} />
            </div>
            <div className="step__textContainer">
              <h3 className='step__header'>{header}</h3>
              <p className='step__content'>{content}</p>
            </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default StepProp