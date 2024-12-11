import PillButton from "../button/PillButton";

const ReservationForm = () => {
  return (
    <div className="bg-white rounded-xl border lg:p-12">
      <div className="flex flex-col justify-center">
        <h3 className="uppercase font-oswald font-light text-5xl mb-1.5  text-center">
          make a reservation
        </h3>
        <p className="font-urbanist font-medium text-base mb-12 text-center text-black/40">
          For Further Questions, Please Call
        </p>
      </div>
      <form className="flex flex-col justify-center items-center" action="">
        <div className="grid grid-cols-2 gap-12">
          <input
            required
            maxLength={256}
            type="text"
            className="bg-transparent outline-none placeholder:text-black placeholder:font-medium lg:py-2 border-b  focus:border-b-foody-purple-10"
            placeholder="First Name"
            id="firstName"
          />
          <input
            required
            maxLength={256}
            type="text"
            className="bg-transparent outline-none placeholder:text-black placeholder:font-medium lg:py-2 border-b  focus:border-b-foody-purple-10"
            placeholder="Last Name"
            id="lastName"
          />
          <input
            required
            maxLength={256}
            type="text"
            className="bg-transparent outline-none placeholder:text-black placeholder:font-medium lg:py-2 border-b  focus:border-b-foody-purple-10"
            placeholder="Date"
            id="date"
          />

          <input
            required
            maxLength={256}
            type="text"
            className="bg-transparent outline-none placeholder:text-black placeholder:font-medium lg:py-2 border-b  focus:border-b-foody-purple-10"
            placeholder="Time"
            id="time"
          />
          <input
            required
            maxLength={256}
            type="email"
            className="col-span-2 bg-transparent outline-none placeholder:text-black placeholder:font-medium lg:py-2 border-b  focus:border-b-foody-purple-10"
            placeholder="Email"
            id="email"
          />
          <input
            required
            maxLength={256}
            type="text"
            className="col-span-2 bg-transparent outline-none placeholder:text-black placeholder:font-medium lg:py-2 border-b  focus:border-b-foody-purple-10"
            placeholder="Phone"
            id="phone"
          />
          <div className="col-span-2 flex inset-0 justify-center items-center w-full">
            <PillButton text="Reserve now" variant="button-arrow" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
