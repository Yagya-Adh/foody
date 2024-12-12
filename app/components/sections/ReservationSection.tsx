import ReservationForm from "../form/ReservationForm";
import Image from "next/image";

const ReservationSection = () => {
  return (
    <section
      id="reservation"
      className="mx-auto max-w-screen-xl px-4 py-10 lg:py-20 md:px-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:gap-40 items-center">
        <div className="flex inset-0">
          <Image
            src="/assets/reservation.png"
            alt="reservation_image"
            width={580}
            height={411}
            className="object-center object-cover w-auto h-full"
          />
        </div>
        <ReservationForm />
      </div>
    </section>
  );
};

export default ReservationSection;
