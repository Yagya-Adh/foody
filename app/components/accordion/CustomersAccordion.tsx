"use client";
import Image from "next/image";
import { useState } from "react";
import StarRating from "../star/StarRating";
import { ChevronLeftIcon, ChevronRightIcon } from "@/app/icons";
import consumerData from "@/lib/data/ConsumerReviewData.json";

const CustomersAccordion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      currentIndex === 0 ? consumerData.length - 1 : currentIndex - 1
    );
  };
  const handleNext = () => {
    setCurrentIndex(
      currentIndex === consumerData.length - 1 ? 0 : currentIndex + 1
    );
  };
  return (
    <div className="py-10 flex flex-col justify-center">
      <div className="flex gap-7 lg:gap-10 items-center min-w-96 max-w-full">
        {consumerData.map((list) => (
          <div
            className="flex flex-col justify-center pt-14 lg:pt-20 px-5 border rounded-xl relative min-h-80 h-full min-w-80 transition-transform duration-500"
            key={list.id}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <Image
              src={list.author.image}
              alt="author_image"
              width={80}
              height={80}
              className="object-center object-cover rounded-full h-20 w-20 absolute -top-10 left-5"
            />
            <p className="text-base font-urbanist font-light mb-7 max-w-screen-md w-full min-w-42">
              {list.describe}
            </p>

            <div className="flex justify-between items-center border-t">
              <div className="font-urbanist font-bold text-base py-5">
                {list.author.name}
              </div>
              <div className="flex inset-0">
                <StarRating stars={list.stars} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full mt-5">
        <button
          className="bg-white shadow-lg rounded-full h-12 w-12 items-center flex justify-center mr-3"
          type="button"
          onClick={handlePrev}
        >
          <ChevronLeftIcon className="w-2 h-3.5 fill-black" />
        </button>
        <button
          className="bg-white shadow-lg rounded-full h-12 w-12 items-center flex justify-center"
          type="button"
          onClick={handleNext}
        >
          <ChevronRightIcon className="w-2 h-3.5 fill-black" />
        </button>
      </div>
    </div>
  );
};

export default CustomersAccordion;
