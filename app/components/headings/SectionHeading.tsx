import { IsectionHead } from "@/app/interface";

const SectionHeading = ({
  heading,
  description,
  maxWidthDescribe,
}: IsectionHead) => {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <h2 className="font-oswald font-light text-3xl md:text-6xl lg:text-7xl text-center uppercase mb-2">
        {heading}
      </h2>
      <p
        className={`${maxWidthDescribe ? maxWidthDescribe : "max-w-screen-sm"}
        font-urbanist font-light text-base text-center xl:text-lg max-w-screen-sm 
        `}
      >
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
