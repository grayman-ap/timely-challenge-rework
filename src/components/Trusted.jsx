import React from "react";
import logo1 from "../utils/assets/rank.svg";
import { trustData } from "../utils/data/data";
import quote from '../utils/assets/quote.svg'
import Button from "./Button";

function Trusted() {
  return (
    <div className="trusted">
      <div className="trusted__container">
        <div className="trusted__map">

          <div className="rank">
            <img src={logo1} alt="rank" style={{ width: 120 }} />
          </div>
          <div className="trust__d">
            {trustData.map((item) => (
              <div className="trust__data" key={item.id}>
                <img src={item.img} alt="rank" />
              </div>
            ))}
          </div>
        </div>
        <div className="trusted__content">
          <div className="title">
            <p>Trusted around the world</p>
          </div>
          <div className="content">
            <p>
              We help over 5,000 businesses across 160 countries automatically
              record their time, stay connected with their teams and report
              accurately on their work.
            </p>
          </div>
          <div className="button">
            <Button title="Get started" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trusted;
