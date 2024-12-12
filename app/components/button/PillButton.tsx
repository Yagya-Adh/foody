import { ArrowCircleRight } from "@/app/icons";
import { IPillButtonInterface } from "@/app/interface";

const PillButton = ({ text, variant, onClick }: IPillButtonInterface) => {
  return (
    <button
      onClick={onClick}
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
        px-2
        py-2.5
        "
      >
        {text}
      </span>
      {variant == "button-arrow" && (
        <ArrowCircleRight className="h-6 w-6 fill-black  group-hover:fill-black" />
      )}
    </button>
  );
};

export default PillButton;
