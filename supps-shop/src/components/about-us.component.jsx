import ScottPhoto from "../assets/Scott-About.jpg";
import TabianPhoto from "../assets/Tabian-About.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="font-zain h-fit w-full bg-zinc-800 p-20">
        <h1 className="justify-left mb-16 flex items-center text-6xl font-medium text-white">
          Our Founders
        </h1>
        <div className="mb-32 flex w-full items-center justify-start">
          <img src={TabianPhoto} className="mx-20 h-full w-1/3 rounded-full" />
          <div className="mr-36 max-w-3xl rounded-2xl bg-zinc-900 p-12">
            <h1 className="text-6xl font-medium text-yellow-500/90">
              Tabian Waddle
            </h1>
            <div className="flex items-center space-x-4 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 -960 960 960"
                width="16px"
                fill="#eab308"
              >
                <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
              </svg>
              <span className="pt-1 text-2xl font-semibold text-white">
                Bodybuilder
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 -960 960 960"
                width="16px"
                fill="#eab308"
              >
                <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
              </svg>
              <span className="pt-1 text-2xl font-semibold text-white">
                Anytime Fitness Manager
              </span>
            </div>
            <span className="text-2xl font-light text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi minus animi perspiciatis deserunt dolorum, rem cum
              eligendi vel voluptatem est aliquam enim dicta architecto. Ea quod
              possimus ex minima ullam! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Provident earum eos atque laborum deleniti
              repellendus, quod nobis. Exercitationem maxime, non laboriosam
              eveniet quisquam dicta dignissimos velit tenetur, molestias nisi
              perferendis.
            </span>
          </div>
        </div>
        <div className="mb-32 flex w-full items-center justify-end">
          <div className="ml-36 max-w-3xl rounded-2xl bg-zinc-900 p-12">
            <h1 className="text-6xl font-medium text-yellow-500/90">
              Scott Melvin
            </h1>
            <div className="flex items-center space-x-4 pb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 -960 960 960"
                width="16px"
                fill="#eab308"
              >
                <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
              </svg>
              <span className="pt-1 text-2xl font-semibold text-white">
                Bodybuilder
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 -960 960 960"
                width="16px"
                fill="#eab308"
              >
                <path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0-312Z" />
              </svg>
              <span className="pt-1 text-2xl font-semibold text-white">
                Anytime Fitness Manager
              </span>
            </div>
            <span className="text-2xl font-light text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi minus animi perspiciatis deserunt dolorum, rem cum
              eligendi vel voluptatem est aliquam enim dicta architecto. Ea quod
              possimus ex minima ullam! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Provident earum eos atque laborum deleniti
              repellendus, quod nobis. Exercitationem maxime, non laboriosam
              eveniet quisquam dicta dignissimos velit tenetur, molestias nisi
              perferendis.
            </span>
          </div>
          <img src={ScottPhoto} className="mx-20 h-full w-1/3 rounded-full" />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
