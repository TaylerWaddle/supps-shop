import HeroSection from "../components/hero-section";
import ProductSection from "../components/products-section";
import ContactSection from "../components/contact-section";
import AboutUs from "../components/about-us.component";
import Testimonials from "../components/testimonials.component";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductSection />
      <AboutUs />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Home;
