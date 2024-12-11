import Image from "next/image";
import CounterTag from "./CounterTag";

const CounterSection = () => {
  return (
    <section className="mx-auto px-4 max-w-screen-2xl">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-center justify-around h-full">
          <CounterTag countNumber="14" counterText="Restaurants" />
          <CounterTag countNumber="20" counterText="Chef in Kitchen" />
        </div>
        <div className="col-span-2 md:col-span-1 order-1 md:order-none">
          <Image
            src="/assets/counter.png"
            alt="counter_image"
            width={560}
            height={680}
            className="object-center object-cover w-full h-full hover:scale-105 transition-all ease-linear duration-500"
          />
        </div>
        <div className="flex flex-col items-center justify-around">
          <CounterTag countNumber="08" counterText="Years of Experience" />
          <CounterTag countNumber="200" counterText="Food Dishes" />
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
