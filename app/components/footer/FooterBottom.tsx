import Link from "next/link";
import React from "react";

const data = [
  { id: 1, name: "Styleguide" },
  { id: 2, name: "Styleguide" },
  { id: 3, name: "Styleguide" },
  { id: 4, name: "Styleguide" },
];

const FooterBottom = () => {
  return (
    <div className="flex justify-between items-center border-t border-t-black lg:py-5">
      <div className="font-urbanist text-base font-normal text-black/40">
        Built by
        <Link
          href="https://www.jamstackers.com"
          target="_blank"
          className="hover:underline"
        >
          Jamstackers
        </Link>
        Powered by
        <Link
          href="https://www.jamstackers.com"
          target="_blank"
          className="hover:underline"
        >
          Jamstackers
        </Link>
      </div>
      <div className="flex flex-col justify-end items-end"></div>
    </div>
  );
};

export default FooterBottom;
