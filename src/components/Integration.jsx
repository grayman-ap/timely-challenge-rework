import React from "react";
import { integrationData } from "../utils/data/nav";
import { IoIosGitNetwork } from "react-icons/io";
import { Link } from "react-router-dom";
function Integration() {
  return (
    <div className="integration">
      <div className="integration__container">
        <div className="i__header">Integration</div>
        {integrationData.map((item) => (
          <Link to={item.url} key={item.id} className="link">
            <div className="integration__data">
              <img src={item.icon} alt="integration" />
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
        <Link to="ecosystem" className="link">
          <div className="see-all">
            <div className="main___icon">
              <span className="d_icon">
                <IoIosGitNetwork />
              </span>
            </div>
            <div className="main___content">
              <div className="d__header">
                <span>See all integrations</span>
              </div>
              <div className="d__content">
                <p>Connect Timely with all the tools you already use</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Integration;
