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
        <div className="flex h-fit w-fit items-center justify-center rounded-xl bg-zinc-900/60 p-20 text-white">
          <div className="pr-6">
            <h1 className="text-3xl">Sign Up and Get $5 </h1>
            <h1 className="text-3xl">Off Your First Order</h1>
          </div>

          <form className="ml-5 flex flex-col items-center justify-center">
            <input type="text" placeholder="First Name" className="my-2 w-60" />
            <input type="text" placeholder="Last Name" className="my-2 w-60" />
            <input type="text" placeholder="Email" className="my-2 w-60" />
            {/* <input type="text" placeholder="Phone Number" className="m-2" /> */}
            <button
              type="submit"
              className="mt-8 w-1/3 self-center bg-zinc-200 text-black"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
