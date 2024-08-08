import heroVidZoomed from "../../assets/hero-vid-zoomed.mp4";

const HeroSection = () => {
  return (
    <div className="absolute flex h-fit w-full items-center justify-between">
      <video
        className="absolute z-0 h-full w-full object-cover"
        src={heroVidZoomed}
        autoPlay
        muted
        loop
      />
      <div className="items-left w-fit-content z-10 ml-12 flex h-full flex-col justify-center">
        <h1 className="text-14xl -mb-5 mt-5 font-sans font-light tracking-wide text-white">
          PURE
        </h1>
        <h1 className="text-14xl -mt-5 font-thin tracking-wide text-white">
          APEX
        </h1>
        <span className="mb-10 text-center text-5xl text-white">
          POWER SUPPLEMENTS
        </span>
      </div>
      <div className="relative z-10 flex h-3/4 w-full items-center justify-center">
        <button className="font-zain relative z-10 flex cursor-pointer rounded bg-gray-300 pb-1 pl-2 pr-2 pt-1 text-2xl font-semibold outline-none">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
