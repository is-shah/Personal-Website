
import { useEffect } from "react";

const Background = () => {
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

  const milestones = [
    {
      period: "2025 – Present",
      title: "Max Planck Institute for Informatics",
      subtitle: "Affiliate Research Intern · INET Lab · Saarbrücken, Germany",
      description:
        "Working with Prof. Anja Feldmann and the Internet Architecture group on large-scale privacy measurement and the gap between privacy theory and real-world Web behavior.",
    },
    {
      period: "2024 – Present",
      title: "IIT Bombay",
      subtitle: "Research Intern · Trust Lab",
      description:
        "Collaborating with Prof. Devashish Gosain on privacy-preserving systems, accountability mechanisms, and the security implications of emerging AI/Web functionality.",
    },
    {
      period: "2022 – 2026 (Expected)",
      title: "IIT Jodhpur",
      subtitle: "B.Tech in Computer Science",
      description:
        "Pursuing undergraduate studies with a focus on cybersecurity, privacy, and systems research. Active in research communities that bridge offensive and defensive security.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-4xl mx-auto px-4 md:px-8">
        <div className="mb-16 section-fade-in">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Background
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A short timeline of where I’ve studied, researched, and grown as a
            security and privacy researcher.
          </p>
        </div>

        <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="relative pl-8 md:pl-12 section-fade-in"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
              <span className="text-sm font-mono text-muted-foreground mb-2 block">
                {milestone.period}
              </span>
              <h2 className="text-xl font-medium mb-1">{milestone.title}</h2>
              <p className="text-sm text-muted-foreground mb-3">
                {milestone.subtitle}
              </p>
              <p className="text-foreground/80 leading-relaxed">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Background;
