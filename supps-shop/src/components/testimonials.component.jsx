import TestimonialCard from "./testimonial-card.component";
import SectionHeader from "./section-header";

const headerText = "Testimonials";

const Testimonials = () => {
  return (
    <div className="relative flex h-fit w-full flex-col items-center bg-zinc-950 px-8 font-zain md:py-20 lg:px-20">
      <SectionHeader headerText={headerText} />
      <div className="flex w-fit flex-col items-center justify-center space-y-6 py-16 md:flex-row md:space-y-0 lg:space-x-12">
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
