import { Metadata } from "next";
import ChangeLogHeader from "../components/sections/ChangeLogHeader";
import ChangeLogSection from "../components/sections/ChangeLogSection";

export const metadata: Metadata = {
  title: "ChangeLog - Foody Website Template",
  description: "Created by Jamstackers",
};

const ChangeLogPage = () => {
  return (
    <main>
      <ChangeLogHeader />
      <ChangeLogSection />
    </main>
  );
};

export default ChangeLogPage;
