import HeroSection from "../components/hero.component";
import ProductsPreview from "../components/products-preview.component";
import ContactUs from "../components/contact-us.component";
import AboutUs from "../components/about-us.component";
import Testimonials from "../components/testimonials.component";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ProductsPreview />
      {/* <AboutUs /> */}
      <Testimonials />
      {/* <ContactUs /> */}
    </>
  );
};

export default Home;
