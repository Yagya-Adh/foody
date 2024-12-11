import { FoodyIcon } from "@/app/icons";

const FooterTop = () => {
  return (
    <div className="flex justify-between items-center lg:py-12">
      <FoodyIcon className="w-20 h-8" />
      <div className="flex flex-col justify-end items-end">
        <p className="text-black/40 font-normal">
          4517 Washington Ave. Manchester, Kentucky 39495
        </p>
        <p className="text-black/40 font-normal">Open : 09:00 Am - 01:00 PM</p>
      </div>
    </div>
  );
};

export default FooterTop;
