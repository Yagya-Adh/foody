import SectionHeading from "../headings/SectionHeading";
import CustomersAccordion from "../accordion/CustomersAccordion";

const CustomerReviewSection = () => {
  return (
    <section className="max-w-screen-2xl mx-auto px-4 lg:py-28">
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
