import { Metadata } from "next";
import { NotFoundIcon } from "./icons";
import PillButton from "./components/button/PillButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not Found - Foody Website Template",
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
        <NotFoundIcon className="mb-7 w-64 h-56 md:h-[360px] md:w-[450px]" />
        <p className="font-oswald font-light text-xl lg:text-6xl uppercase mb-1.5">
          Looks like you&apos;re lost
        </p>
        <span className="text-base lg:text-lg font-urbanist font-light mb-3 lg:mb-10 lg:py-1.5">
          We can&apos;t seem to find the page you&apos;re looking for
        </span>
        <Link href="/">
          <PillButton text="Back to Home" />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
