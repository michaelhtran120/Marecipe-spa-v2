// Library imports
import React from "react";

// Style imports

// Asset imports
import videoMp4 from "../../assets/videos/recipe-video.mp4";
import videoOgv from "../../assets/videos/recipe-video.ogv";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div data-testid="parallaxVideo" id="video-container">
        <div id="video-overlay" />
        <video poster="./media/poster.jpg" autoPlay muted loop>
          <source src={videoOgv} type="video/ogv" />
          <source src={videoMp4} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Hero;
