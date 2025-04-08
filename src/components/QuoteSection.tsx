
import { useEffect } from "react";

const QuoteSection = () => {
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
    <section className="py-16 bg-secondary/30">
      <div className="container max-w-5xl mx-auto px-4 md:px-8">
        <blockquote className="relative text-center">
          <div className="text-6xl text-primary/30 font-serif absolute top-0 left-0">"</div>
          <p className="text-xl md:text-2xl italic text-foreground/90 pt-6 px-10 section-fade-in">
            Cybersecurity isn't a straight path—it's an ever-evolving journey with twists, turns, and constant challenges. Every day brings a new puzzle to solve. And you know what? Let's crack it together.
          </p>
          <footer className="mt-4 text-right pr-10 text-foreground/70 section-fade-in" style={{ animationDelay: "0.3s" }}>
            — <cite>Ishan Shah</cite>
          </footer>
          <div className="text-6xl text-primary/30 font-serif absolute bottom-0 right-0">"</div>
        </blockquote>
      </div>
    </section>
  );
};

export default QuoteSection;
