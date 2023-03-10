import React from "react";
import video from '../utils/assets/video.mp4'

const Video =()=>{
    return(
            <div className="video">
                <div className="video__container">
                <video src={video} autoPlay loop />
                </div>
                
            </div>
    )   
}
export default Video