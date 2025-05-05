
import { useEffect } from "react";

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Research Intern",
    company: "IIT Bombay",
    location: "Bombay",
    period: "Dec 2024 - Present",
    description: [
      "First author on an NLP research paper identifying inconsistencies between consent banners and Policy Pages across top 1 million websites (Tranco).",
      "Developing a model to detect misleading practices in privacy policies and consent banners, ensuring compliance with 3 key data privacy standards: GDPR, CCPA & e-Directive.",
      "Conducting Research on Sensitive Personally Identifiable Information, identifying 10+ new privacy violations to improve data handling practices."
    ],
    technologies: ["Privacy Compliance", "NLP", "ANLI (Adversarial Natural Language Inference)", "GRC Framework", "Docker"]
  },
  {
    title: "Affiliate Research Intern",
    company: "Max Planck Institute for Informatics",
    location: "Germany",
    period: "Dec 2024 - Present",
    description: [
      "Developing an NLP-based web crawler to detect deceptive buttons, misleading URLs, and fraudulent content, enhancing Compliance Audits.",
      "Pipelining between different high complexity based models for enhanced detection.",
      "Implemented system to identify Personally Identifiable Information vulnerabilities, identifying privacy violations to enhance compliance frameworks."
    ],
    technologies: ["NLP", "Pipelining", "Compliance", "Crawlers", "Web Security"]
  }
];

const ExperienceSection = () => {
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
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 section-fade-in">Experience</h2>
          <div className="w-16 h-1 bg-primary mb-8 section-fade-in"></div>
        </div>
        
        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-4 gap-6 section-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="md:text-right">
                <span className="text-primary font-mono text-sm">
                  {experience.period}
                </span>
              </div>
              
              <div className="md:col-span-3">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="mb-2">
                  <span className="font-medium">{experience.company}</span>
                  <span className="mx-2">·</span>
                  <span className="text-foreground/70">{experience.location}</span>
                </div>
                
                <ul className="list-disc pl-5 mb-4 space-y-2">
                  {experience.description.map((item, i) => (
                    <li key={i} className="text-foreground/90">{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
