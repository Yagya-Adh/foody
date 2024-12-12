import { GlowRayIcon } from "@/app/icons";
import BrandStampIcon from "@/app/icons/BrandStampIcon";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="#home"
      className="max-w-screen-lg mx-auto py-20 px-3.5 md:py-16 lg:py-20 lg:px-1 z-10 relative h-[530]"
    >
      <div className="flex flex-col justify-center">
        <div className="flex justify-center md:justify-start">
          <h1 className="text-7xl md:text-9xl lg:text-[170px] lg:font-thin md:text-big font-oswald font-light mb-2.5">
            Delicious
          </h1>
        </div>
        <div className="flex justify-center">
          <h2 className="text-7xl md:text-9xl lg:text-[170px] lg:font-thin md:text-big font-oswald font-light mb-2.5">
            Food
          </h2>
          <GlowRayIcon className="h-10 w-10" />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-end items-center relative">
          <BrandStampIcon className="h-40 w-40 md:h-60 my-7 lg:my-0 lg:-left-32 lg:top-0 relative order-1 md:order-none" />
          <h3 className="text-7xl md:text-9xl lg:text-[170px] lg:font-thin md:text-big font-oswald font-light mb-2.5">
            Dishes
          </h3>
        </div>
      </div>
      <div className="hidden md:block absolute left-3 bottom-16">
        <Image
          src="/assets/hero1.png"
          alt="hero_bg_image"
          width={330}
          height={260}
          className="object-center object-cover rounded-xl w-56 h-72 lg:h-80 -z-10"
        />
      </div>
      <div className="relative flex flex-col justify-center items-center md:absolute md:right-3 md:top-16">
        <Image
          src="/assets/hero2.png"
          alt="hero_bg_image"
          width={330}
          height={260}
          className="object-center object-cover rounded-xl w-56 h-72 lg:h-80 -z-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;
