import HeroSection from "../components/hero-section";
import ProductsSection from "../components/products-section";
import ContactSection from "../components/contact-section";
import NewsletterSection from "../components/newsletter-section";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductsSection />
      <NewsletterSection />
      <ContactSection />
    </div>
  );
};

export default Home;
