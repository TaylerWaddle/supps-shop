import preSampleImg from "../assets/pre-sample.jpg";
const ProductCard = () => {
  return (
    <>
      <div className="hover:shadow-lg/50 h-fit w-fit rounded-lg bg-zinc-300 p-5 shadow-sm hover:bg-zinc-400/40">
        <img src={preSampleImg} className="w-80 rounded-lg" />
        <h1 className="text-3xl text-black">AL Lions Blood</h1>
        <div className="justify-left -mt-1 flex items-center text-black">
          <span className="mr-3 text-xl">Currently In Stock: </span>
          <p className="text-xl">2</p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-2xl text-black">$45</span>
          <button className="rounded-lg bg-zinc-800 px-3 py-2 text-xl">
            Reserve
          </button>
        </div>
      </div>
      <div className="hover:shadow-lg/50 h-fit w-fit rounded-lg bg-zinc-300 p-5 shadow-sm hover:bg-zinc-400/40">
        <img src={preSampleImg} className="w-80 rounded-lg" />
        <h1 className="text-3xl text-black">AL Lions Blood</h1>
        <div className="justify-left -mt-1 flex items-center text-black">
          <span className="mr-3 text-xl">Currently In Stock: </span>
          <p className="text-xl">2</p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-2xl text-black">$45</span>
          <button className="rounded-lg bg-zinc-800 px-3 py-2 text-xl">
            Reserve
          </button>
        </div>
      </div>
      <div className="hover:shadow-lg/50 h-fit w-fit rounded-lg bg-zinc-300 p-5 shadow-sm hover:bg-zinc-400/40">
        <img src={preSampleImg} className="w-80 rounded-lg" />
        <h1 className="text-3xl text-black">AL Lions Blood</h1>
        <div className="justify-left -mt-1 flex items-center text-black">
          <span className="mr-3 text-xl">Currently In Stock: </span>
          <p className="text-xl">2</p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-2xl text-black">$45</span>
          <button className="rounded-lg bg-zinc-800 px-3 py-2 text-xl">
            Reserve
          </button>
        </div>
      </div>
      <div className="hover:shadow-lg/50 h-fit w-fit rounded-lg bg-zinc-300 p-5 shadow-sm hover:bg-zinc-400/40">
        <img src={preSampleImg} className="w-80 rounded-lg" />
        <h1 className="text-3xl text-black">AL Lions Blood</h1>
        <div className="justify-left -mt-1 flex items-center text-black">
          <span className="mr-3 text-xl">Currently In Stock: </span>
          <p className="text-xl">2</p>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-2xl text-black">$45</span>
          <button className="rounded-lg bg-zinc-800 px-3 py-2 text-xl">
            Reserve
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
