import Star from "./star.component";
import Headshot from "../assets/headshot.jpg";
import { testimonials } from "../constants";

const TestimonialCard = () => {
  return (
    <>
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="flex h-fit min-h-[450px] w-full min-w-[12rem] max-w-[24rem] flex-col items-center justify-center space-y-4 rounded-xl bg-zinc-800/35 px-6 py-8 font-zain shadow-xl shadow-zinc-400/10 hover:shadow-2xl hover:shadow-zinc-100/35 md:mx-3"
        >
          <img src={Headshot} className="h-20 w-20 rounded-full" />
          <h1 className="text-3xl font-light text-white">{testimonial.name}</h1>
          <div className="flex">
            {Array.from({ length: testimonial.rating }, () => (
              <Star key={testimonial.rating} />
            ))}
          </div>
          <p className="text-md font-light text-white">{testimonial.review}</p>
        </div>
      ))}
    </>
  );
};

export default TestimonialCard;
