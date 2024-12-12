"use client";
import { useState } from "react";
import PillButton from "../button/PillButton";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    date: "",
    time: "",
    email: "",
    phone: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Form Data Submitted:", formData);
      setSubmitted(true);
      setLoading(false);
    }, 3000);
  };
  return (
    <div className="bg-white rounded-xl border p-8 lg:p-12">
      <div className="flex flex-col justify-center">
        <h3 className="uppercase font-oswald font-light text-5xl mb-1.5 text-center">
          make a reservation
        </h3>
        <p className="font-urbanist font-medium text-base mb-12 text-center text-black/40">
          For Further Questions, Please Call
        </p>
      </div>

      {submitted ? (
        <div className="border lg:p-5 text-center flex flex-col justify-center items-center">
          <p className="text-base font-urbanist font-normal text-black">
            Thank you! Your submission has been received!
          </p>
        </div>
      ) : (
        <form className="flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 gap-12">
            <input
              required
              maxLength={256}
              type="text"
              className="bg-transparent outline-none placeholder:text-black placeholder:font-medium lg:py-2 border-b focus:border-b-foody-purple-10"
              placeholder="First Name"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              required
              maxLength={256}
              type="text"
              className="bg-transparent outline-none placeholder:text-black placeholder:font-medium lg:py-2 border-b focus:border-b-foody-purple-10"
              placeholder="Last Name"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <input
              required
              maxLength={256}
              type="text"
              className="bg-transparent outline-none placeholder:text-black placeholder:font-medium lg:py-2 border-b focus:border-b-foody-purple-10"
              id="date"
              placeholder="Date"
              value={formData.date}
              onChange={handleChange}
            />
            <input
              required
              maxLength={256}
              type="text"
              className="bg-transparent outline-none placeholder:text-black placeholder:font-medium lg:py-2 border-b focus:border-b-foody-purple-10"
              id="time"
              placeholder="Time"
              value={formData.time}
              onChange={handleChange}
            />
            <input
              required
              maxLength={256}
              type="email"
              className="col-span-2 bg-transparent outline-none placeholder:text-black placeholder:font-medium lg:py-2 border-b focus:border-b-foody-purple-10"
              placeholder="Email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              required
              maxLength={256}
              type="text"
              className="col-span-2 bg-transparent outline-none placeholder:text-black placeholder:font-medium lg:py-2 border-b focus:border-b-foody-purple-10"
              placeholder="Phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <div className="col-span-2 flex inset-0 justify-center items-center w-full">
              <PillButton
                onClick={() => handleSubmit}
                text={loading ? "Please wait..." : "Reserve now"}
                variant="button-arrow"
              />
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReservationForm;
