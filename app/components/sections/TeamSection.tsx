import TeamImageCard from "../card/TeamImageCard";
import SectionHeading from "../headings/SectionHeading";

const TeamSection = () => {
  return (
    <section className="max-w-screen-xl mx-auto px-4 py-10 md:py-20 lg:py-32">
      <SectionHeading
        maxWidthDescribe="max-w-lg"
        heading="Our Team"
        description="Morbi in sed enim viverra aenean amet. A commodo nunc mauris, in accumsan facilisi montes, neque venenatis."
      />
      <TeamImageCard />
    </section>
  );
};

export default TeamSection;
