
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
const profileImage = `${import.meta.env.BASE_URL}Profile_Image.jpg`;
const secondImage = `${import.meta.env.BASE_URL}image2.jpg`;

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
        <div className="space-y-24 md:space-y-32">
          <div className="grid grid-cols-1 lg:grid-cols-[35fr_65fr] gap-10 lg:gap-16 items-center">
            <div className="section-fade-in">
              <div className="profile-photo aspect-square w-full max-w-sm mx-auto lg:max-w-none">
                <img
                  src={profileImage}
                  alt="Portrait of Ishan Shah"
                  className="block w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="section-fade-in">
            <p className="text-sm font-mono text-muted-foreground mb-4 tracking-wide uppercase">
              Ishan Shah · Research Scholar · INET Lab, MPII 
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight">
            </h1>
            <div className="space-y-5 text-lg text-foreground/80 leading-relaxed max-w-2xl">
              <p>
                I am a Research Scholar at the Max Planck Institute for Informatics, working in the INET Lab under the supervision of Prof. Anja Feldmann. I also collaborate with the Trust Lab at IIT Bombay under Prof. Devashish Gosain. My work sits at the intersection of Web privacy, compliance, and security, exploring <strong>what the protections we design on paper actually become when they meet the systems we rely on.</strong>
              </p>
              <p>
                The Web is changing faster than the rules and protections designed around it. As the Web grows more complex with advances in AI, new ways of collecting, combining, and using information are emerging, often in ways that are difficult to see from the outside. <strong>I am interested in understanding where these protections fall short, how such gaps can be measured, and how responsibility can be established when they do.</strong>
              </p>
            </div>

            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[65fr_35fr] gap-10 lg:gap-16 items-center">
            <div className="section-fade-in lg:order-2">
              <div className="rounded-md border border-border bg-muted/30">
                <img
                  src={secondImage}
                  alt="Ishan Shah at the Max Planck Institute for Informatics"
                  className="block w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="section-fade-in lg:order-1">
              <p className="text-sm font-mono text-muted-foreground mb-4 tracking-wide uppercase">
                What I do beyond Research?
              </p>
              <div className="space-y-5 text-lg text-foreground/80 leading-relaxed">
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
                reach out and get in touch.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild>
                  <a href="mailto:b23cm1050@iitj.ac.in">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in touch
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href="https://github.com/is-shah?tab=repositories"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
