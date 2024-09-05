import HeroSection from "../components/hero.component";
import TopProductsSection from "../components/top-products-section";
import ContactUs from "../components/contact-us.component";
import AboutUs from "../components/about-us.component";
import Testimonials from "../components/testimonials.component";

const Home = () => {
  return (
    <>
      <HeroSection />
      <TopProductsSection />
      {/* <AboutUs /> */}
      <Testimonials />
      {/* <ContactUs /> */}
    </>
  );
};

export default Home;
