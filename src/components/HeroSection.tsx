
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const typingTextRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    if (typingTextRef.current) {
      typingTextRef.current.classList.add("animate");
    }
    
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
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-lg section-fade-in">
                Hi, my name is
              </p>
              <h1 className="text-4xl md:text-6xl font-bold section-fade-in" style={{ animationDelay: "0.2s" }}>
                <span className="typing-container">
                  <span className="typing-text" ref={typingTextRef}>
                    Ishan Shah
                  </span>
                </span>
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground/70 section-fade-in" style={{ animationDelay: "0.4s" }}>
                Cybersecurity Researcher
              </h2>
              <p className="text-lg text-foreground/70 max-w-xl section-fade-in" style={{ animationDelay: "0.6s" }}>
                Hi, I'm Ishan Shah — a cybersecurity researcher passionate about privacy, system resilience, and ethical defense. Currently a B.Tech student at IIT Jodhpur, I'm a Research Intern at IIT Bombay & Max Planck Institute (Germany), where I work on global privacy compliance and adversarial risk.
              </p>
              <p className="text-lg text-foreground/70 max-w-xl section-fade-in" style={{ animationDelay: "0.7s" }}>
                I thrive on identifying vulnerabilities, breaking silos between offensive and defensive security, and building systems that truly protect.
              </p>
              <p className="text-lg font-bold text-primary section-fade-in" style={{ animationDelay: "0.8s" }}>
                Let's secure the digital world — one byte at a time.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 section-fade-in" style={{ animationDelay: "0.8s" }}>
              <Button asChild size="lg" className="group">
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            
            <div className="flex gap-4 section-fade-in" style={{ animationDelay: "1s" }}>
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://github.com/Xclusive-Ishan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://www.linkedin.com/in/ishan-shah-6a1584287"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="mailto:Ishanshah.iit@gmail.com"
                  aria-label="Email Me"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex justify-center section-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Sound wave effect container */}
              <div className="absolute inset-0 w-full h-full">
                <div className="wave-container">
                  <div className="wave wave1"></div>
                  <div className="wave wave2"></div>
                  <div className="wave wave3"></div>
                </div>
              </div>
              
              {/* Profile photo */}
              <div className="profile-photo w-full h-full animate-profile-float rounded-full overflow-hidden border-4 border-primary relative z-10">
                <img 
                  src="/lovable-uploads/800c70e9-d007-46e8-9067-05f6c0c2071c.png" 
                  alt="Ishan Shah" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
