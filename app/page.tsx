import AboutSection from "./components/sections/AboutSection";
import CounterSection from "./components/sections/CounterSection";
import CustomerReviewSection from "./components/sections/CustomerReviewSection";
import HeroSection from "./components/sections/HeroSection";
import PopularDishes from "./components/sections/PopularDishes";
import ReservationSection from "./components/sections/ReservationSection";
import ServiceSection from "./components/sections/ServiceSection";
import TeamSection from "./components/sections/TeamSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <PopularDishes />
      <CounterSection />
      <TeamSection />
      <ReservationSection />
      <CustomerReviewSection />
    </main>
  );
}
