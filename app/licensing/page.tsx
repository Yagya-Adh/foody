import { Metadata } from "next";
import LicensingSection from "../components/sections/LicensingSection";
import LicensingHead from "../components/sections/LicensingHead";

export const metadata: Metadata = {
  title: "Licensing - Foody Website Template",
  description: "Created by Jamstackers",
  openGraph: {
    title: "Licensing - Foody Website Template",
    description: "Licensing Page Created by Jamstackers",
  },
};
const Licensing = () => {
  return (
    <main>
      <LicensingHead />
      <LicensingSection />
    </main>
  );
};

export default Licensing;
