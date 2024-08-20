import Star from "./star.component";
import Headshot from "../assets/headshot.jpg";

const TestimonialCard = () => {
  return (
    <div className="mx-6 flex h-96 w-80 flex-col items-center justify-center space-y-3 rounded-xl bg-zinc-800 px-6 font-zain shadow-2xl">
      <img src={Headshot} className="h-20 w-20 rounded-full" />
      <h1 className="text-3xl font-light text-white">Tayler Waddle</h1>
      <div className="flex">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p className="text-md font-light text-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat totam
        quasi voluptatibus dolorum aperiam facilis vero, in incidunt odio nulla
        non eius! Quam sapiente maxime, molestias voluptatibus dicta ducimus
        fugit?
      </p>
    </div>
  );
};

export default TestimonialCard;
