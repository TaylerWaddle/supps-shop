import TopProductCard from "./top-product-card.component";
import SectionHeader from "./section-header";

const headerText = "Top Products";

const TopProductsSection = () => {
  return (
    <div className="flex h-fit w-full flex-col items-center bg-zinc-950 px-16 md:py-20">
      <SectionHeader headerText={headerText} />
      <div className="flex w-fit flex-col items-center justify-center space-y-10 py-12 md:flex-row md:space-y-0">
        <TopProductCard />
      </div>
    </div>
  );
};

export default TopProductsSection;
