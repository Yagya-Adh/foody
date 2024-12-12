import SectionHeading from "../headings/SectionHeading";
import CustomersAccordion from "../accordion/CustomersAccordion";

const CustomerReviewSection = () => {
  return (
    <section
      id="review"
      className="max-w-screen-xl mx-auto px-3.5 lg:py-28 overflow-hidden"
    >
      <SectionHeading
        heading="Customers Review"
        description="Morbi in sed enim viverra aenean amet. A commodo nunc mauris, in accumsan facilisi montes, neque venenatis."
        maxWidthDescribe="max-w-screen-sm"
      />
      <CustomersAccordion />
    </section>
  );
};

export default CustomerReviewSection;
