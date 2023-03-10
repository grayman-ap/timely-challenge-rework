import React from "react";
import Button from "./Button";
import { company } from "../utils/data/data";

const HeroSection = () => {
  return (
    <section>
      <div className="hero">
        <div className="hero__container">
          <div className="timely__header">
            <p className="timely__text">
              <span className="gradient__01">Timely</span> time tracking
              software
            </p>
          </div>
          <div className="timely__main">
            <p>The world's best</p>
            <p><span className="gradient__02">AI-powered</span> automatic time tracker</p>
          </div>
          <div className="timely__last">
            <p className="timely__textlast">
              <span className="gradient__01">Timely</span> automates company
              time tracking, so you and your team can   <span className="gradient__01">focus on the work that
              matters.</span>
            </p>
          </div>
          <div className="timely__button">
            <Button title="Get Started" />
          </div>
          <div className="timely__companies">
            <div className="timely__companiesHeader">
            Trusted by tens of thousands of users, in some of the biggest companies
            </div>
            <div className="timely__images">
                {company.map((item)=>(
                    <div className="main__image">
                        <img src={item.img} alt="companiesimage" style={{width:150}}/>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
