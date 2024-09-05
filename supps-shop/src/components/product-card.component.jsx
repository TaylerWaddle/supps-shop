import { products } from "../constants";
const ProductCard = () => {
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="font-mont items-between relative mx-2 mb-8 flex h-fit min-w-[8rem] max-w-[12rem] flex-col justify-between rounded-xl bg-zinc-800/35 shadow-xl shadow-zinc-400/10 hover:shadow-zinc-100/35 md:mx-4"
        >
          <img
            src={product.frontImage}
            className="aspect-auto h-full w-full rounded-xl"
          />
          <div className="flex min-h-[140px] flex-col justify-between px-2">
            <h1 className="text-wrap pb-2 text-base font-medium text-white md:text-base">
              {product.title}
            </h1>
            <div className="justify-left -mt-8 mr-3 flex text-base font-thin text-white">
              {product.type}
            </div>
            <div className="mt-3 flex h-full w-full items-center justify-between pl-1">
              <span className="text-xl font-light text-yellow-500">
                ${product.price}
              </span>
              <button className="font-mont flex w-fit items-center justify-center rounded-md bg-zinc-900 px-1 text-sm font-medium leading-8 text-yellow-500 shadow-lg outline outline-[0.2px] outline-yellow-500/50 hover:bg-yellow-500/85 hover:font-semibold hover:text-black hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-sm md:px-3 md:pb-1 md:pt-2 md:text-base">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
