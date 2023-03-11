import React from 'react'
import icon from '../utils/assets/icon1.svg'
import { stackIcon } from '../utils/data/data'
import circle1 from '../utils/assets/circle1.svg'
import circle2 from '../utils/assets/circle2.svg'
import { Link } from 'react-router-dom'
function Stack() {
  return (
    <div className="stack">

        <div className="stack__container">
           
        <div className="circle">
            <img src={circle1} alt="circle"  className='circle1'/>
            <img src={circle2} alt="circle" className='circle2'/>
            <img src={circle2} alt="circle"  className='circle3'/>
            </div>
            <div className="inner__content">
            <img src={icon} alt="icon" />
            <p className='stack__title'>Integration ecosystem</p>
            <h2 className='stack__header'>Connect your stack</h2>
            <p className='stack__content'>Timely’s native integrations and open APIs let you easily connect data across your existing digital toolkit. Enjoy modern, automatic time tracking without changing the workflows you’ve spent years perfecting.</p>
            </div>
            <div className="stack__icon">
                {stackIcon.map((item)=>(
                    <div className="stack__data" key={item.id}>
                        <img src={item.icon} alt="icons"/>
                    </div>
                ))}
            </div>
            <div className="stack__link">
                <Link to="ecosystem">
                    <span>Check all our integrations</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Stack