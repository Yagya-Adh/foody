import { FoodyIcon } from "@/app/icons";

const FooterTop = () => {
  return (
    <div className="flex flex-col justify-center md:flex-row md:justify-between items-center lg:py-12">
      <FoodyIcon className="w-20 h-8" />
      <div className="flex flex-col justify-center items-center md:justify-end md:items-end pb-3.5">
        <p className="text-black/40 font-normal text-center text-base lg:text-end">
          4517 Washington Ave. Manchester, Kentucky 39495
        </p>
        <p className="text-black/40 font-normal text-base">
          Open : 09:00 Am - 01:00 PM
        </p>
      </div>
    </div>
  );
};

export default FooterTop;
