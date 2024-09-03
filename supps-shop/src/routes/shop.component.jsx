import SearchBar from "../components/search-bar.component";
import ProductCard from "../components/product-card.component";

const Shop = () => {
  return (
    <div className="h-full w-full bg-zinc-950">
      <SearchBar />
      <div className="mx-3 grid grid-cols-2 justify-center overflow-hidden py-16 md:mx-10 lg:flex lg:flex-wrap">
        <ProductCard />
      </div>
    </div>
  );
};

export default Shop;
