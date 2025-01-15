import React from "react";
import bgvideo from "../assets/bgvideo.mp4"; // Ensure the path is correct

const BackgroundVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline // Useful for mobile devices to autoplay
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover", // Ensures the video fully covers the viewport
        zIndex: -1, // Places the video behind other content
      }}
    >
      <source src={bgvideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
