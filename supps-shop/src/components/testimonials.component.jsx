import TestimonialCard from "./testimonial-card.component";

const Testimonials = () => {
  return (
    <div className="flex h-fit w-full flex-col items-center bg-zinc-900 py-20">
      <h1 className="justify-left flex items-center px-20 font-zain text-7xl font-medium text-white">
        Testimonials
      </h1>
      <div className="flex w-2/3 px-20 py-16">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default Testimonials;
