import "./home.styles.scss";

import heroVidZoomed from "../../assets/hero-vid-zoomed.mp4";

const Home = () => {
  return (
    <>
      <div className="hero-container">
        <video className="hero-vid" src={heroVidZoomed} autoPlay muted loop />
      </div>
    </>
  );
};

export default Home;
