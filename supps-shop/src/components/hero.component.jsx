import heroVidZoomed from "../assets/hero-vid-zoomed.mp4";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="font-zain relative flex w-full items-center justify-between">
      <video
        className="absolute h-full w-full bg-cover bg-center object-cover"
        src={heroVidZoomed}
        autoPlay
        muted
        loop
      />
      <div className="items-left w-fit-content z-10 mb-20 ml-32 mt-20 flex h-full flex-col justify-center">
        <h1 className="-mb-10 text-14xl font-light text-yellow-500/85">PURE</h1>
        <h1 className="-mt-10 text-14xl font-light text-yellow-500/85">APEX</h1>
        <span className="-mt-10 mb-16 text-center text-5xl font-light text-yellow-500/85">
          POWER SUPPLEMENTS
        </span>
      </div>
      <div className="static z-10 flex w-full items-center justify-center">
        <div className="flex h-fit w-fit flex-col items-center justify-center rounded-xl bg-zinc-800/75 px-10 py-16 text-white">
          <div className="p-6">
            <h1 className="text-3xl">Sign Up For Our Monthly Newsletter</h1>
          </div>

          <div className="ml-5 flex w-48 flex-col items-center justify-center">
            <Link
              to={"sign-up"}
              className="mt-1.5 flex w-24 justify-center rounded-md bg-yellow-500/95 px-3 pb-1.5 pt-2 text-2xl font-medium leading-6 text-black shadow-sm hover:bg-yellow-500/80 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
