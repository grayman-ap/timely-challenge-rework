import React from 'react'
import icon from '../utils/assets/icon1.svg'
import {BiUserCircle} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import LoginButton from './LoginButton'
import { Link } from 'react-router-dom'
function GetStarted() {
  return (
    <div className="getstarted">
        <div className="getstarted__container">
            <img src={icon} alt="icon" className='g__image'/>
            <h2>Welcome to Timely</h2>
            <p>Tell us how many people will be automatically tracking their time?</p>
            <div className="login__button">
            <LoginButton title="Just me" img={<BiUserCircle />} url="login"/>
            <LoginButton title="Timely for teams"img={<FiUsers />} url="/get-started/team-size"/>
            </div>
           <h4>Already a Timely customer? <Link to="login" >Log in</Link></h4>
        </div>
    </div>
  )
}

export default GetStarted