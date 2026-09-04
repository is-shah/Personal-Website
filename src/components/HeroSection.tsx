
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
const profileImage = "/lovable-uploads/449b0b54-ea79-4ea7-bf34-e9992351c4d2.jpg";

const HeroSection = () => {
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
    <section
      id="home"
      className="min-h-screen flex items-center py-24 md:py-32"
    >
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 section-fade-in">
            <p className="text-sm font-mono text-muted-foreground mb-4 tracking-wide uppercase">
              Research Scholar · INET Lab, MPII · Saarbrücken, DE
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight">
              Hi, I’m Ishan Shah
            </h1>
            <div className="space-y-5 text-lg text-foreground/80 leading-relaxed max-w-xl">
              <p>
                I’m a cybersecurity researcher driven by a deep passion for
                privacy, system resilience, and ethical defense. I’m currently
                pursuing my B.Tech at IIT Jodhpur and actively collaborating
                with leading research institutions like IIT Bombay and the Max
                Planck Institute for Informatics, Germany, on projects related
                to global privacy compliance and adversarial risk.
              </p>
              <p>
                My work sits at the intersection of privacy theory and
                real-world Web behavior — understanding how emerging AI and Web
                functionality interact with regulatory frameworks, and what
                accountability means when privacy protections fail.
              </p>
              <p>
                I love being part of communities that push the boundaries of
                cybersecurity — uniting offensive and defensive strategies to
                build systems that genuinely protect.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild>
                <a href="mailto:Ishanshah.iit@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in touch
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://github.com/Xclusive-Ishan"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/ishan-shah-6a1584287"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end section-fade-in">
            <div className="relative">
              <div className="profile-photo w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <img
                  src={profileImage}
                  alt="Ishan Shah at the Max Planck Institute for Informatics"
                  className="w-full h-full object-cover"
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
