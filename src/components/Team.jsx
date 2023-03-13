import React from 'react'
import icon from '../utils/assets/icon1.svg'
import {BiGroup} from 'react-icons/bi'
import {GrGroup} from 'react-icons/gr'
import {MdOutlineGroups2} from 'react-icons/md'
import LoginButton from './LoginButton'
import { Link } from 'react-router-dom'
function Team() {
  return (
    <div className="login">


    <div className="getstarted">
        <div className="getstarted__container">
            <img src={icon} alt="icon" className='g__image'/>
            <h2>Great!</h2>
            <p>So we can give you the best experience, are you a big team or a small team?</p>
            <div className="login__button">
            <LoginButton title="Small team" img={<BiGroup />} url="/get-started/small-teams" small="(2-14 users)"/>
            <LoginButton title="Big team"img={<MdOutlineGroups2 />} url="/get-started/big-teams" small="(15+ users)"/>
            </div>
           <h4>Already a Timely customer? <Link to="login" >Log in</Link></h4>
        </div>
    </div>
    </div>
  )
}

export default Team