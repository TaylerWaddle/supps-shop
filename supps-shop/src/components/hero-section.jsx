import heroVidZoomed from "../assets/hero-vid-zoomed.mp4";

const HeroSection = () => {
  return (
    <div className="relative flex w-full items-center justify-between">
      <video
        className="absolute h-full w-full bg-cover bg-center object-cover"
        src={heroVidZoomed}
        autoPlay
        muted
        loop
      />
      <div className="items-left w-fit-content z-10 mb-20 ml-12 mt-20 flex h-full flex-col justify-center">
        <h1 className="text-14xl -mb-10 font-sans font-light text-white">
          PURE
        </h1>
        <h1 className="text-14xl -mt-10 font-thin text-white">APEX</h1>
        <span className="-mt-10 mb-16 text-center text-5xl font-thin text-white">
          POWER SUPPLEMENTS
        </span>
      </div>
      <div className="static z-10 flex h-3/4 w-full items-center justify-center">
        <button className="flex cursor-pointer rounded bg-gray-300 pb-1 pl-2 pr-2 pt-1 text-2xl font-semibold outline-none">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
