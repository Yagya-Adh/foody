import { Metadata } from "next";
import PasswordSection from "../components/sections/PasswordSection";

export const metadata: Metadata = {
  title: "Password - Foody Website Template",
  description: "Created and developed by Jamstackers",
};

const Password = () => {
  return (
    <main className="max-w-screen-sm mx-auto px-2.5">
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <PasswordSection />
      </div>
    </main>
  );
};

export default Password;
