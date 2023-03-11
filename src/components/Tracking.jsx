import React from "react";
import { color, trackData } from "../utils/data/data";
import { Link, NavLink } from "react-router-dom";
import { TfiAngleRight } from "react-icons/tfi";
const Tracking = () => {
  return (
    <div className="tracking" style={{ color: "#000" }}>
      <div className="tracking__container">
        <div className="tracking__text">
          <p>
            <span>Automate</span> your time tracking
          </p>
        </div>
        <div className="tracking__mainContent">
          <p>
            Forget timers, note taking and manual input—
            <span style={{ color: color.black, fontWeight: 700 }}>
              Timely
            </span>
            can
            <span style={{ color: color.black, fontWeight: 700 }}>
              track time
            </span>
            spent in every web and desktop app automatically for you.
          </p>
          <p>
            Get a precise daily record of all the time you spend in documents,
            meetings, emails, websites and video calls with zero effort.
          </p>
          <p>It’s all 100% private to you.</p>
        </div>
      </div>
      <div className="borderBottom">
        <span></span>
      </div>

      <div className="tracker">
        <div className="tracker__container">
          {trackData.map((item) => (
            <div className="track__data" key={item.id}>
              <span className="icon">{item.icon}</span>
              <p className="title">{item.title}</p>
              <p className="content">{item.content}</p>
              <NavLink to={item.url}>
                <p className="link">
                  <span>
                    {item.link}
                    <span style={{fontSize:16, marginLeft:5}}>
                      <TfiAngleRight />
                    </span>
                  </span>
                </p>
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tracking;
