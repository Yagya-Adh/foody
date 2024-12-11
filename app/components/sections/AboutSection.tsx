import Image from "next/image";
import { ArrowCircleRight } from "@/app/icons";

const AboutSection = () => {
  return (
    <section className="bg-foody-green-10">
      <div className="max-w-screen-xl mx-auto px-2 xl:px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-10">
          <div className="flex flex-col justify-center order-1 lg:order-none">
            <h2 className="text-4xl sm:text-[80px] xl:text-7xl font-oswald font-light mb-4 xl:mb-3">
              ABOUT US
            </h2>
            <p className="text-xl xl:text-xl font-urbanist font-semibold mb-7 sm:py-1.5">
              The only thing we&apos;re serious about is food.
            </p>
            <div>
              <p className="text-base xl:text-base font-urbanist font-light max-w-xl mb-10">
                Fusce quam praesent enim enim. Arcu ornare maecenas mauris
                tellus ut mollis. Laoreet enim amet donec nulla risus erat sed.
                Scelerisque ac cum nulla massa ultricies etiam augue justo,
                amet. Fermentum ac viverra tincidunt neque, tristique duis nunc
                lacus quam. Pharetra, in pharetra
              </p>
              <button
                type="button"
                className="lg                
                group 
                flex 
                justify-between 
                border 
                border-black
                rounded-full
                items-center 
                px-4             
                "
              >
                <span
                  className="
                  text-sm
                  capitalize 
                  text-black 
                  hover:text-white 
                  text-center 
                  hover:bg-black
                  mr-1
                  px-2 py-3
                  "
                >
                  Explore Menu
                </span>
                <ArrowCircleRight className="h-6 w-6 fill-black group-hover:fill-white" />
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center flex-col h-full w-full">
            <Image
              src="/assets/about_food.png"
              width={360}
              height={360}
              alt="foody_about image1"
              className="object-contain object-center h-96 w-96 lg:h-auto lg:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
