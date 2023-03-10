import React from "react";
import video from "../utils/assets/video.mp4";
import imag from '../utils/assets/639cdb35f8822842f930e577_billable_home.webp'
const Video = () => {
  return (
    <div className="video">
      <div className="video__container">
        <video controls autoPlay loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
export default Video;
