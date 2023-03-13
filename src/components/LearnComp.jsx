import React from "react";
import { useGlobalContext } from "../utils/ContextProvider";
import { featureData, industryData, learnData, supportData } from "../utils/data/nav";
import { Link } from "react-router-dom";

function LearnComp() {
  const { handleNavOpen, handleNavClose, setIsMouseHover } = useGlobalContext();
  return (
    <div className="">
      <div className="feature__container">
        <div className="feature__content">
          <div className="f_header">Learn</div>
          <div className="learn">
            {learnData.map((item) => (
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
        <div className="blogger">
          <div className="f_header">Support</div>
          <div className="industry__container">
            {supportData.map((item) => (
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
      </div>
    </div>
  );
}

export default LearnComp;
