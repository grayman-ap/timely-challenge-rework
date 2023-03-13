import React from "react";
import { useGlobalContext } from "../utils/ContextProvider";
import { featureData, industryData } from "../utils/data/nav";
import { Link } from "react-router-dom";

function FeaturesComp() {
  const { handleNavOpen, handleNavClose, setIsMouseHover } = useGlobalContext();
  return (
    <div className="">
      <div className="feature__container">
        <div className="feature__content">
          <div className="f_header">Features</div>
          <div className="feature">
            {featureData.map((item) => (
              <Link to={item.url} className="link" onClick={handleNavClose}>
                <div className="feature__data">
                  <div className="feature_detail">
                    <span className="f_icon">{item.icon} </span>
                    <span className="f_title">{item.title}</span>
                  </div>
                  <p className="feature__item">{item.content}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="industry">
          <div className="f_header">Industries</div>
          <div className="industry__container">
            {industryData.industry.map((item) => (
              <Link to={item.url} className="link" onClick={handleNavClose}>
                <div className="feature__data">
                  <div className="feature_detail">
                    <span className="f_icon">{item.icon} </span>
                    <span className="f_title">{item.name}</span>
                  </div>
                  <p className="feature__item">{item.content}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="app__f">
          <div className="f_header">Apps</div>
          <div className="app__container">
            {industryData.apps.map((item) => (
              <div className="app__data">
                {item.item.map((item)=>(
               <Link to={item.url} className="link" onClick={handleNavClose}>
               <div className="feature__data__app">
                 <div className="feature_detail">
                   <span className="a_icon">{item.icon} </span>
                   <span className="a_title">{item.name}</span>
                 </div>
                 <p className="feature__item">{item.content}</p>
               </div>
             </Link>
                ))}
                {item.item2.map((item)=>(
                    <Link to={item.url} className="link" onClick={handleNavClose}>
                    <div className="feature__data__app">
                      <div className="feature_detail">
                      <img src={item.logo} alt='logo' />
                        <span className="f_title">{item.name}</span>
                      </div>
                      <p className="feature__item">{item.content}</p>
                    </div>
                  </Link>
                
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesComp;
