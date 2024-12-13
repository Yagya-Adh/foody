import MealImageCard from "../card/MealImageCard";
import SectionHeading from "../headings/SectionHeading";

const PopularDishes = () => {
  return (
    <section
      id="services"
      className="max-w-screen-xl mx-auto px-3 pb-10 md:pb-24 lg:pb-32"
    >
      <SectionHeading
        maxWidthDescribe="max-w-96"
        heading="Popular Dishes"
        description="Morbi in sed enim viverra aenean amet. A commodo nunc mauris, in accumsan facilisi montes, neque venenatis."
      />
      <MealImageCard />
    </section>
  );
};

export default PopularDishes;
