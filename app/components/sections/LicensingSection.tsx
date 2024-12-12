import Link from "next/link";

const LicensingSection = () => {
  return (
    <section className="bg-white py-10 px-1.5 lg:py-28">
      <div className="max-w-screen-xl mx-auto">
        <div className="border-b mb-10 pb-10 lg:pb-12 lg:mb-12">
          <h2 className="uppercase text-xl mb-1.5 lg:text-5xl font-oswald font-light">
            Disclaimer
          </h2>
          <p className="font-light font-urbanist text-base lg:mt-5 max-w-screen-md">
            All images used in this template are 100% free to use for personal
            and commercial purposes. You can change all the images within the
            Webflow designer or editor. Please be careful when using other
            images from the internet. They can be copyright protected, which can
            lead to issues with the copyright owner and can even lead to big
            fines.
          </p>
        </div>
        <div className="border-b mb-10 pb-10 lg:pb-12 lg:mb-12">
          <h3 className="uppercase text-xl md:text-5xl lg:text-5xl mb-5 font-oswald font-light">
            Images
          </h3>
          <p className="font-light font-urbanist text-base mt-4">
            <span className="font-bold"> Unsplash -</span> Certain images are
            sourced from <span className="font-bold"> Unsplash.</span>
          </p>
        </div>
        <div className="border-b mb-10 pb-10 lg:pb-12 lg:mb-12">
          <h3 className="uppercase text-xl md:text-5xl lg:text-5xl mb-5 font-oswald font-light">
            Icons & Graphics
          </h3>
          <p className="font-light font-urbanist text-base mt-4">
            <span className="font-bold"> Feather Icons & Unicon - </span>{" "}
            <Link
              href="https:://www.figma.com/"
              target="_blank"
              className="underline"
            >
              https:://www.figma.com/community/file/831889015869671429
            </Link>
          </p>

          <p className="">
            <span className="font-bold">Services Icons - </span>{" "}
            <Link
              href="https://www.freepikcompany.com/"
              target="_blank"
              className="underline"
            >
              https://www.freepikcompany.com/legal
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LicensingSection;
