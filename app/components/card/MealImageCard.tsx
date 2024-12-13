import Image from "next/image";
import { ClockIcon } from "@/app/icons";
import mealData from "@/lib/data/MealData.json";
const data = mealData;

const MealImageCard = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 gap-y-9 place-items-start">
      {data.map((list) => (
        <div className="flex flex-col relative" key={list.id}>
          <h3
            className="
          absolute z-10 top-4 left-4
          text-white text-base py-1.5 px-4 xl:text-xl
          text-center font-urbanist font-light 
          bg-white/10 backdrop-blur-sm rounded-full
          "
          >
            {list.mealType}
          </h3>
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={list.image}
              alt={`${list.time}_image`}
              width={400}
              height={400}
              className="object-center object-cover w-full h-full hover:scale-105 transition-all ease-linear duration-500"
            />
          </div>
          <h2 className="text-base md:text-xl lg:text-2xl xl:text-3xl font-oswald font-extrabold my-2">
            {list.title}
          </h2>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 xl:w-5 xl:h-5 fill-black/50" />
            <span className="font-urbanist text-sm  xl:text-lg text-black/50 ml-1.5">
              {list.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealImageCard;
