import { topProducts } from "../constants";
const TopProductCard = () => {
  return (
    <>
      {topProducts.map((product) => (
        <div
          key={product.id}
          className="font-mont relative max-h-[16rem] w-full min-w-[7rem] max-w-[24rem] rounded bg-zinc-800/35 pb-5 shadow-xl shadow-zinc-400/10 hover:shadow-zinc-100/35 md:mx-3 lg:mx-6"
        >
          <img
            src={product.frontImage}
            className="relative aspect-auto rounded-t-3xl object-cover px-1 pt-1 md:max-h-[370px] md:min-h-[370px] lg:max-h-[480px] lg:min-h-[480px] xl:max-h-[560px] xl:min-h-[560px]"
          />

          <div className="static left-0 top-0 px-2 pt-2">
            <h1 className="text-lg md:text-lg text-nowrap font-medium text-white xl:text-xl">
              {product.title}
            </h1>
            <div className="justify-left -mt-1 flex items-center text-white">
              <div className="mr-3 font-zain text-xl font-thin text-white md:text-xl">
                {product.type}
              </div>
            </div>
            <div className="mt-3 flex w-full items-center justify-between pl-1">
              <span className="text-xl font-light text-yellow-500">
                ${product.price}
              </span>
              <button className="font-mont text-lg flex w-fit items-center justify-center rounded-md bg-zinc-900 px-2 pb-1.5 pt-2 font-medium leading-8 text-yellow-500 shadow-lg outline outline-[0.2px] outline-yellow-500/50 hover:bg-yellow-500/85 hover:font-semibold hover:text-black hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:px-3 md:pb-1 md:pt-2">
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
