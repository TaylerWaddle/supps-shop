import ProductCard from "./product-card.component";

const ProductsPreview = () => {
  return (
    <div className="flex h-fit w-full flex-col items-center bg-zinc-900">
      <h1 className="flex items-center justify-center px-20 pt-16 font-zain text-7xl font-medium text-white">
        Popular Products
      </h1>
      <div className="flex w-2/3 px-20 py-16">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductsPreview;
