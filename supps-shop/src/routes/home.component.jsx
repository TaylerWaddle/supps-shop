import HeroSection from "../components/hero.component";
import ProductsPreview from "../components/products-preview.component";
import ContactUs from "../components/contact-us.component";
import AboutUs from "../components/about-us.component";
import Testimonials from "../components/testimonials.component";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductsPreview />
      <AboutUs />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default Home;
