"use client";
import React from "react";
import SectionHeading from "../headings/SectionHeading";
import PillButton from "../button/PillButton";

const PasswordSection = () => {
  const handleSubmit = () => {};
  return (
    <form>
      <div className="border rounded-xl p-12">
        <div className="mb-10">
          <SectionHeading
            heading="Protected Page"
            description="If you are the website admin, or have access to this page,please type your password below."
            maxWidthDescribe=""
          />
        </div>
        <input
          name="password"
          id="password"
          maxLength={256}
          type="text"
          className="w-full mb-10 py-2.5 col-span-2 bg-transparent outline-none placeholder:text-black placeholder:font-medium lg:py-2 border-b focus:border-b-foody-purple-10"
          placeholder="Enter your password"
        />
        <div className="flex justify-center w-full inset-0">
          <PillButton
            onClick={handleSubmit}
            text="Submit"
            variant="button-arrow"
          />
        </div>
      </div>
    </form>
  );
};

export default PasswordSection;
