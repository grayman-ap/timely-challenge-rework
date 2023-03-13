import React from 'react'
import logo from '../utils/assets/logoDark.svg'
import ios from '../utils/assets/appstore.svg'
import google from '../utils/assets/googleplay.svg'
import { footerData, trustData } from '../utils/data/data'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className="footer">
        <div className="footerContainer">
            <div className="footer__left">
            <div className="mainlogo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="fText">
                <p>Get Timely on your phone</p>
            </div>
            <div className="applogo">
                <img src={ios} alt="ios"/>
                <img src={google} alt="google"/>
            </div>
            <div className="footerCard">
                {trustData.map((item)=>(
                    <div className="footer__data1" key={item.id}>
                        <img src={item.img} alt="winter"/>
                    </div>
                ))}
            </div>
            </div>

            <div className="footer__right">

                <div className="main__left">
                {footerData.link1.map((item)=>(
                    <div className="footer__data" key={item.id}>
                        <p>{item.header}</p>
                        <Link to={item.url} className='link'>
                            <span>{item.link}</span>
                        </Link>
                    </div>
                ))}
            </div>  

            <div className="main__center">
                {footerData.link2.map((item)=>(
                    <div className="footer__data" key={item.id}>
                        <p>{item.header}</p>
                        <Link to={item.url} className='link'>
                            <span>{item.link}</span>
                        </Link>
                    </div>
                ))}
            </div>  

            <div className="main__right">
                {footerData.link3.map((item)=>(
                    <div className="footer__data" key={item.id}>
                        <p>{item.header}</p>
                        <Link to={item.url} className='link'>
                            <span>{item.link}</span>
                        </Link>
                    </div>
                ))}
            </div>  

            </div>
        </div>
        <div className="footer__last">
            <p>Copyright 2023 - AIQ</p>
        </div>
    </div>
  )
}

export default Footer