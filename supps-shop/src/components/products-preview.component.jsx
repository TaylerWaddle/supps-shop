import ProductCard from "./product-card.component";

const ProductsPreview = () => {
  return (
    <div className="h-fit w-full bg-zinc-200 text-white">
      <div className="flex items-center justify-center">
        <h1 className="pt-16 text-4xl font-semibold text-black">
          Most Popular Products
        </h1>
      </div>
      {/* Product Cards Container */}
      <div className="flex justify-between px-32 py-16">
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductsPreview;
