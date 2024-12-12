import { ArrowCircleRight } from "@/app/icons";
import { IPillButtonInterface } from "@/app/interface";

const PillButton = ({ text, variant, type }: IPillButtonInterface) => {
  return (
    <button
      type={type}
      className="
      group 
      flex 
      justify-between 
      border 
      border-black
      hover:bg-black
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
        group-hover:text-white 
        text-center 
        py-2.5
        px-2
        "
      >
        {text}
      </span>
      {variant == "button-arrow" && (
        <ArrowCircleRight
          className="
          mr-1
          h-6 
          w-6
          fill-black           
          -z-10
          "
        />
      )}
    </button>
  );
};

export default PillButton;
