
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
                I am a Research Scholar at the Max Planck Institute for
                Informatics, working in the INET Lab under the supervision of
                Prof. Anja Feldmann. Previously, I worked with IIT Bombay’s
                Trust Lab under Prof. Devashish Gosain, where I worked on web
                privacy and privacy compliance across specific jurisdictions at
                scale.
              </p>
              <p>
                I am currently looking for a PhD position. My research revolves
                around a crucial question in privacy: how privacy looks on paper
                and in theory versus what actually happens when those principles
                are applied across the Web and real-world digital systems.
              </p>
              <p>
                In particular, I am interested in understanding how emerging
                technologies and new functionalities, especially those involving
                AI, are becoming part of the Web at scale, and how this
                introduces new gaps in regulatory frameworks intended to protect
                user privacy. I am also interested in questions of
                accountability across Web services—particularly understanding
                where responsibility lies when privacy protections fail, an area
                that remains relatively underexplored and difficult to study
                systematically.
              </p>
              <p>
                Beyond research, I enjoy reaching out to different people,
                building new connections, and understanding how the world works
                from different perspectives. I like talking to people, learning
                about different cultures, and travelling to different countries.
              </p>
              <p>
                By the way, I am currently on a streak of visiting new
                countries. I am planning to visit the Netherlands in December,
                so if you happen to be around, I would love to meet and talk!
              </p>
              <p>
                If you work in similar areas and would like to know more about
                my work, I would be more than happy to connect. Feel free to
                reach out by email and get in touch.
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
              <div className="profile-photo w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
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
