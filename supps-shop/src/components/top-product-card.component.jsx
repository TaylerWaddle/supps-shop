import preSampleImg from "../assets/pre-sample.jpg";
import { topProducts } from "../constants";
const TopProductCard = () => {
  return (
    <>
      {topProducts.map((product) => (
        <div
          key={product.id}
          className="h-fit w-full min-w-[8rem] max-w-[24rem] rounded bg-zinc-800/35 pb-5 shadow-2xl shadow-zinc-400/20 hover:shadow-2xl hover:shadow-zinc-100/20 md:mx-3"
        >
          <img src={preSampleImg} className="rounded-t-lg" />
          <div className="px-2 pt-2">
            <h1 className="text-3xl font-medium text-white md:text-3xl md:text-xl lg:text-3xl">
              {product.title}
            </h1>
            <div className="justify-left -mt-1 flex items-center text-white">
              <div className="text-lg mr-3 font-zain font-light text-white md:text-xl">
                {product.type}
              </div>
            </div>
            <div className="mt-3 flex w-full items-center justify-between pl-1">
              <span className="text-xl text-yellow-500 md:text-2xl">
                ${product.price}
              </span>
              <button className="flex w-fit items-center justify-center rounded-md bg-zinc-900 px-2 pb-1.5 pt-2 font-zain text-xl font-medium leading-8 text-yellow-500 shadow-sm hover:bg-yellow-500/85 hover:text-black hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:px-3 md:pb-1 md:pt-2">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopProductCard;
