
import HeroSection from "@/components/HeroSection";
import Background from "@/pages/Background";
import Journey from "@/pages/Journey";
import CV from "@/pages/CV";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Background />
      <Journey />
      <CV />
    </div>
  );
};

export default Home;
