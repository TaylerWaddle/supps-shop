import ProductCard from "./product-card";

const ProductSection = () => {
  return (
    <div className="h-fit w-full bg-zinc-200 text-white">
      {/* Product Cards Container */}
      <div className="flex justify-between p-32">
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductSection;
