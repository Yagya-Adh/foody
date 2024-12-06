import { NotFoundIcon } from "./icons";

const NotFound = () => {
  return (
    <section className="max-w-screen-xl mx-auto h-screen">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <NotFoundIcon className="p-1" />
        <p className="font-oswald font-light text-6xl uppercase my-4">
          Looks like you&apos;re lost
        </p>
        <span className="text-lg font-urbanist font-light">
          We can&apos;t seem to find the page you&apos;re looking for
        </span>
        <button className="my-4 text-sm border border-black bg-transparent hover:bg-black text-black hover:text-white rounded-full px-4 py-2">
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;
