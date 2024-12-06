"use client";
import Link from "next/link";
import { InavBar } from "@/app/interface";
import navbarData from "@/lib/data/navbarData.json";
import { FoodyIcon } from "@/app/icons";

const data: InavBar[] = navbarData;

const Navbar = () => {
  return (
    <nav className="max-w-screen-xl mx-auto px-4 xl:border-b xl:border-black/5">
      <div className="flex flex-row justify-between items-center py-4">
        <FoodyIcon className="h-" />
        <ul className="flex justify-between items-center">
          {data?.map((list) => (
            <Link
              key={list.id}
              href={list.path}
              className="text-sm uppercase font-foody font-light mx-5"
            >
              {list.name}
            </Link>
          ))}
        </ul>

        <button
          type="button"
          className="
          bg-transparent 
          text-center 
          text-black
          hover:text-white
          hover:bg-black  
          border
          border-black
          rounded-full 
          text-sm
          font-foody
          font-medium
          h-10 w-24
          "
        >
          Our Menu
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
