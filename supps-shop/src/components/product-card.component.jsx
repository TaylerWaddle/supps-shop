import preSampleImg from "../assets/pre-sample.jpg";
import { products } from "../constants";
const ProductCard = () => {
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          className="m-1 h-fit max-w-[24rem] rounded bg-zinc-800/35 pb-5 shadow-lg hover:shadow-2xl md:m-2 lg:min-w-[20rem]"
        >
          <img src={preSampleImg} className="rounded-t-lg" />
          <div className="px-2 pt-2">
            <h1 className="text-xl font-medium text-white md:text-3xl">
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
              <button className="text-lg flex w-fit items-center justify-center rounded-md bg-zinc-900 px-2 pb-1.5 pt-2 font-zain font-medium leading-8 text-yellow-500 shadow-sm hover:bg-yellow-500/85 hover:text-black hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 md:px-3 md:pb-1 md:pt-2 md:text-2xl">
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
