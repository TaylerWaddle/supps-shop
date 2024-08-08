import "./hero-section.styles.scss";

import heroVidZoomed from "../../assets/hero-vid-zoomed.mp4";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <video className="hero-vid" src={heroVidZoomed} autoPlay muted loop />
      <div className="hero-content">
        <h1 className="hero-title">PURE</h1>
        <h1 className="hero-title">APEX</h1>
        <span className="hero-subtitle">POWER SUPPLEMENTS</span>
      </div>
      <div className="button-container">
        <button className="hero-button">Sign Up</button>
      </div>
    </div>
  );
};

export default HeroSection;
