import { Metadata } from "next";
import { NotFoundIcon } from "./icons";
import PillButton from "./components/button/PillButton";

export const metadata: Metadata = {
  title: "Not Found - Foody",
  description: "Created by Jamstackers",
  openGraph: {
    title: "Not Found - Foody",
    description: "Not Found Page Created by Jamstackers",
  },
};
const NotFound = () => {
  return (
    <section className="max-w-screen-4xl mx-auto h-screen relative">
      <div className="bg-foodyBackground bg-center bg-cover p-96 absolute top-0 left-0 -z-10" />
      <div className="flex flex-col justify-center items-center h-full w-full">
        <NotFoundIcon className="p-1" />
        <p className="font-oswald font-light text-6xl uppercase my-4">
          Looks like you&apos;re lost
        </p>
        <span className="text-lg font-urbanist font-light">
          We can&apos;t seem to find the page you&apos;re looking for
        </span>
        {/* <button className="my-4 text-sm border border-black bg-transparent hover:bg-black text-black hover:text-white rounded-full px-4 py-2">
          
        </button> */}

        <PillButton text="Back to Home" />
      </div>
    </section>
  );
};

export default NotFound;
