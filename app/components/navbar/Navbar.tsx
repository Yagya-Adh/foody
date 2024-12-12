"use client";
import Link from "next/link";
import { useState } from "react";
import { InavBar } from "@/app/interface";
import { BarIcon, FoodyIcon, XmarkIcon } from "@/app/icons";
import PillButton from "../button/PillButton";
import navbarData from "@/lib/data/navbarData.json";

const data: InavBar[] = navbarData;

const Navbar = () => {
  const [dropNavbar, setDropNavBar] = useState(false);

  const handleDropNavBar = () => {
    setDropNavBar(!dropNavbar);
  };

  return (
    <nav className="px-4 fixed top-0 left-0 lg:relative w-full z-20">
      <div className="relative max-w-screen-xl mx-auto lg:px-4 border-2 border-black lg:border-r-0 lg:border-l-0 lg:border-b xl:border-black/5 bg-transparent-10 bg-white/15 backdrop-blur-3xl border-white/15 backdrop:blur-3xl rounded-b-lg">
        <div className="flex flex-row justify-between items-center py-3 px-4">
          <Link href="#home">
            <FoodyIcon className="w-20 h-8" />
          </Link>
          <ul className="hidden lg:flex justify-between items-center">
            {data?.map((list) => (
              <Link
                key={list.id}
                href={list.path}
                className="text-sm xl:text-base uppercase font-foody font-light mx-5"
              >
                {list.name}
              </Link>
            ))}
          </ul>
          <button
            type="button"
            className="
          hidden
          lg:block
          border
          bg-transparent 
          text-center 
          text-black
          hover:text-white
          hover:bg-black  
          border-black
          rounded-full 
          text-sm
          font-foody
          font-medium
          px-6          
          py-3
          "
          >
            Our Menu
          </button>
          <button
            className="lg:hidden"
            type="button"
            onClick={handleDropNavBar}
          >
            {dropNavbar ? (
              <XmarkIcon className="w-7 h-4" />
            ) : (
              <BarIcon className="w-7 h-4" />
            )}
          </button>
        </div>
      </div>
      <ul
        className={`
          py-3
          lg:hidden
          bg-white rounded-xl flex flex-col justify-center items-center w-full 
          transition-all duration-500 ease-in-out
          ${dropNavbar ? "translate-y-0" : "-translate-y-96"}`}
      >
        {data?.map((list) => (
          <Link
            key={list.id}
            href={list.path}
            className="text-base uppercase font-foody font-light my-1"
          >
            {list.name}
          </Link>
        ))}
        <Link href="#services">
          <PillButton text="Our Menu" />
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
