import React from "react";
import bgvideo from "../assets/bgvideo.mp4"; 

function BackgroundVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1, 
      }}
    >
      <source src={bgvideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default BackgroundVideo;
