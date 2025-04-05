
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
    title: "Privacy & Compliance Researcher",
    company: "Microsoft Interns",
    location: "Joint Affiliation",
    period: "Dec. 2024 - Present",
    description: [
      "First author on a NLP research paper identifying inconsistencies between consent banners and Policy Pages across top 1 million websites.",
      "Developed a ML-based model to detect key data privacy standards: GDPR, CCPA & e-Directive.",
      "Implemented system to identify Personally Identifiable Information, identifying 10+ new privacy violations to enhance compliance frameworks."
    ],
    technologies: ["NLP", "Machine Learning", "Privacy Analysis", "GDPR", "CCPA"]
  },
  {
    title: "OAauth2 Broke",
    company: "GitHub",
    location: "Remote",
    period: "Mar. 2023",
    description: [
      "Registered & validated OAuth2 security flaws (including CVE - 601) in controlled environment, weaponizing parameter stealing techniques.",
      "Developed proof of concept attacks against OAuth2 authorization flows, enhancing defense strategies.",
      "Collaborated with MITRE TIAFT companies to identify attack vectors and mitigate concerns.",
      "Created in-depth technical report covering attack vectors and 2 mitigation strategies, including strict redirect URI and server-side validation."
    ],
    technologies: ["OAuth2", "Security Analysis", "MITRE TIAFT", "Vulnerability Assessment"]
  },
  {
    title: "TTP Defense Matrix",
    company: "GitHub",
    location: "Remote",
    period: "Mar. 2023",
    description: [
      "Created and contributed to Open-Source TTP defense matrix project using the MITRE ATT&CK framework.",
      "Implemented detection, prevention and remediation techniques for IKE/IPsec adversary behavior profiling.",
      "Simulated attacks across 5 protocols with DNS, HTTPS at 1,000+ RPS to test system resilience.",
      "Deployed telemetry gaps in Event Schema testing through packet manipulation, raising detection thresholds."
    ],
    technologies: ["MITRE ATT&CK", "TTP Defense", "IKE/IPsec", "Protocol Analysis"]
  },
  {
    title: "Honeypot Framework",
    company: "GitHub",
    location: "Remote",
    period: "Feb. 2023",
    description: [
      "Created and deployed 40+ vulnerable honeypots in Docker, enabling covert attacker profiling.",
      "Implemented HTTP(S) server with self-signed SSL/TLS for session monitoring & packet capture.",
      "Simulated attacks across 5 protocols with DNS, HTTPS to test system resilience.",
      "Deployed telemetry in Event Schema format, enabling detailed detection and analysis."
    ],
    technologies: ["Docker", "Honeypot Development", "HTTP/HTTPS", "SSL/TLS", "Packet Analysis"]
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
