import heroVidZoomed from "../assets/hero-vid-zoomed.mp4";
import { Link } from "react-router-dom";

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
      <div className="items-left w-fit-content z-10 mb-20 ml-32 mt-20 flex h-full flex-col justify-center">
        <h1 className="-mb-10 font-sans text-14xl font-light text-yellow-500/85">
          PURE
        </h1>
        <h1 className="-mt-10 text-14xl font-thin text-yellow-500/85">APEX</h1>
        <span className="-mt-10 mb-16 text-center text-5xl font-thin text-yellow-500/85">
          POWER SUPPLEMENTS
        </span>
      </div>
      <div className="static z-10 flex w-full items-center justify-center">
        <div className="flex h-fit w-fit items-center justify-center rounded-xl bg-zinc-800/75 p-20 text-white">
          <div className="pr-6">
            <h1 className="text-3xl">Sign Up and Get $5 </h1>
            <h1 className="text-3xl">Off Your First Order</h1>
          </div>

          <div className="ml-5 flex w-48 flex-col items-center justify-center">
            {/* <input
              className="mt-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              type="text"
              placeholder="First Name"
            />
            <input
              className="mt-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
              type="text"
              placeholder="Last Name"
            />
            <input
              type="text"
              placeholder="Email"
              className="mt-1.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
            /> */}
            <Link
              to={"sign-up"}
              className="mt-1.5 flex w-full justify-center rounded-md bg-yellow-500 px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-yellow-500/85 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
