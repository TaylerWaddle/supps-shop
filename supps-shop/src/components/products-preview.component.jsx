import ProductCard from "./product-card.component";

const ProductsPreview = () => {
  return (
    <div className="h-fit w-full bg-zinc-200">
      <div className="justify-left flex items-center px-20">
        <h1 className="font-zain pt-16 text-6xl font-medium text-black">
          Popular Products
        </h1>
      </div>
      {/* Product Cards Container */}
      <div className="flex justify-between px-20 py-16">
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductsPreview;
