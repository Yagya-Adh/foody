import { GlowRayIcon } from "@/app/icons";
import BrandStampIcon from "@/app/icons/BrandStampIcon";

const HeroSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-10 py-10 lg:py-16 z-10">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center md:justify-start">
          <h1 className="text-7xl sm:text-8xl md:text-big font-oswald font-light">
            Delicious
          </h1>
        </div>
        <div className="flex justify-center">
          <h2 className="text-7xl sm:text-8xl md:text-big font-oswald font-light">
            Food
          </h2>
          <GlowRayIcon className="h-10 w-10" />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-end items-center relative">
          <h3 className="text-7xl sm:text-8xl md:text-big font-oswald font-light">
            Dishes
          </h3>
          <BrandStampIcon className="h-40 w-40 md:h-60 left-1/2 top-1 sm:absolute" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
