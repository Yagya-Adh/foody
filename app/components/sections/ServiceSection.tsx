import Image from "next/image";
import serviceData from "@/lib/data/ServiceData.json";

const data = serviceData;
const ServiceSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-10 lg:py-32">
      <div className="grid lg:grid-cols-3 gap-10 lg:gap-40">
        {data.map((list) => (
          <div
            className="flex flex-col justify-center items-center"
            key={list.id}
          >
            <Image
              src={list.image}
              width={100}
              height={100}
              alt={`${list.title}_image`}
              className="object-center object-cover h-38 w-38 mb-6"
            />
            <h3 className="font-oswald text-2xl text-center">{list.title}</h3>
            <p className="font-urbanist text-base font-normal text-center max-w-sm">
              {list.describe}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
