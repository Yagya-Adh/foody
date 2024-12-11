import { ICounterInterface } from "@/app/interface";

const CounterTag = ({ countNumber, counterText }: ICounterInterface) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-black font-oswald font-light text-4xl lg:text-7xl lg:mb-2.5 text-center">
        {countNumber}
      </h2>
      <div className="font-urbanist font-light lg:text-xl text-lg text-black text-center">
        {counterText}
      </div>
    </div>
  );
};

export default CounterTag;
