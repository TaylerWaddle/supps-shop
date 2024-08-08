import HeroSection from "../../components/hero-section/hero-section.component";
import ProductsSection from "../../components/products-section/products-section";
import ContactSection from "../../components/contact-section/contact-section";
import NewsletterSection from "../../components/newsletter-section/newsletter-section";

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
