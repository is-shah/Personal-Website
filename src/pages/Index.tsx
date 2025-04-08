
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AchievementsSection from "@/components/AchievementsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.classList.add("smooth-scroll");
    
    // Set up cursor effect (disabled on mobile)
    const isMobile = window.innerWidth <= 768;
    
    if (!isMobile) {
      const cursor = document.createElement("div");
      cursor.className = "cursor-effect";
      document.body.appendChild(cursor);
      
      const moveCursor = (e: MouseEvent) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      };
      
      window.addEventListener("mousemove", moveCursor);
      
      return () => {
        window.removeEventListener("mousemove", moveCursor);
        if (document.body.contains(cursor)) {
          document.body.removeChild(cursor);
        }
      };
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
