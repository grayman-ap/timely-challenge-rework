import React from 'react'
import {BsCheck2Circle} from 'react-icons/bs'
import Button from './Button'
import { Link } from 'react-router-dom'
import viking from '../utils/assets/viking.svg'
import line from '../utils/assets/ocean_line.svg'
function Try() {
    const tryData = [
        {
            id: 1,
            title:'Accurately billing',
            icon:<BsCheck2Circle />
        },
        {
            id: 1,
            title:'Project profitability',
            icon:<BsCheck2Circle />
        },
        {
            id: 1,
            title:'Strict anti-surveillance policy',
            icon:<BsCheck2Circle />
        },
        {
            id: 1,
            title:'Trusted by 5000+ businesses globally',
            icon:<BsCheck2Circle />
        },
    ]
  return (
    <div className="tryApp">
  <div className="try">
    <div className="try__container">
        <div className="try__content">
        <div className="left">
        <h3>Try <span className='gradient__02'>Timely</span> today!</h3>
        <p>Discover the power of Timely's automated time tracking now!</p>
        </div>
            <div className="right">
            <Button title="Get started" />
        <Link to="sales" className='link'>
            <span className='right-sales'>30 people or more? Get a personalized introduction to Timely</span>
        </Link>
            </div>
            </div>
       <div className="try__content">
        {tryData.map((item)=>(
            <div className="try__data" key={item.id}>
                <div className='try__icon'>{item.icon} </div>
                <div>{item.title}</div>
        
            </div>
        ))}
       </div>
    </div>
  </div>
        <div className="viking">
            <div className="viking__container">
            <p>This page was last updated on March 8, 2023 and was first created on February 3, 2011.</p>
                <div className="viking__content">
                <img src={viking} alt="viking"/>
                <img src={line} alt="line"/>
                </div>
            </div>
        </div>
  </div>
  )
}

export default Try