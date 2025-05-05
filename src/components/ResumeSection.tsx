
import { useEffect } from "react";

const ResumeSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll(".section-fade-in").forEach((el) => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="resume" className="py-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 section-fade-in">Resume</h2>
          <div className="w-16 h-1 bg-primary mb-8 section-fade-in"></div>
        </div>
        
        <div className="flex justify-center">
          <div className="border border-border rounded-lg overflow-hidden shadow-lg max-w-2xl section-fade-in">
            <img 
              src="/lovable-uploads/89d526ba-14a7-44a5-a587-ddd400979063.png" 
              alt="Ishan Shah Resume" 
              className="w-full h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
