import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

type Project = {
  id?: number;
  title: string;
  description: string;
  subtitle?: string;
  details?: string[];
  problem?: string;
  solution?: string;
  outcome?: string;
  image?: string;
  thumbnail?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    title: "Silent Consent: OAuth2 Risks",
    subtitle: "Offensive Research | Defensive Gaps | Real World Bypass",
    description: "Research on OAuth2 security flaws and validation of bypasses against domain whitelisting/blacklisting defenses.",
    details: [
      "Replicated & validated OAuth2 security flaws (including CWE-601) in controlled environment, weaponizing prior vulnerability reports.",
      "Tested & confirmed 20+ bypass techniques against domain whitelisting/blacklisting defenses, documenting security gaps with MITRE T1071 mappings.",
      "Compiled detailed technical report covering attack vectors and 2 mitigation strategies, including strict redirect URI and PKCE (RFC 7636)."
    ],
    problem: "Conducted research on silent consent authentication issues including CWE-401 in controlled environments.",
    solution: "Tested and confirmed 20+ bypass techniques against domain whitelisting/blacklisting defenses, documenting security gaps.",
    outcome: "Documented security gaps and bypass techniques against various authentication systems.",
    image: "/placeholder.svg",
    thumbnail: "/lovable-uploads/ab6f9129-d796-492b-9558-45980593c6c9.png",
    technologies: ["OAuth2", "CWE-601", "Security Bypass", "MITRE T1071", "PKCE"],
    githubUrl: "https://github.com/Xclusive-Ishan/Silent-Consent-OAuth2-Risks",
    featured: true
  },
  {
    title: "Cobalt Kitty & APT39: TTP Defense Matrix",
    subtitle: "TTP Correlation | ATT&CK Framework | NIST CSF Compliance",
    description: "Mapping of major APT campaigns using the MITRE ATT&CK framework for adversary behavior profiling.",
    details: [
      "Mapped 2 major APT campaigns (Cobalt Kitty & APT39) using the MITRE ATT&CK framework, analyzing 30+ TTPs for adversary behavior profiling.",
      "Created comparative ATT&CK Navigator layers with risk scoring (0-4 scale) and SVG visualizations.",
      "Developed actionable playbooks with NIST CSF mappings, shared as community resources."
    ],
    problem: "Need to analyze advanced persistent threat campaigns using structured frameworks.",
    solution: "Mapped 2 major APT campaigns (Cobalt Kitty & APT39) using the MITRE ATT&CK framework, analyzing tactics and techniques.",
    outcome: "Created comparative ATT&CK Navigator maps with risk scoring and NVD visualizations.",
    image: "/placeholder.svg",
    thumbnail: "/lovable-uploads/3c79db40-83b2-45af-985e-f258407ed24f.png",
    technologies: ["MITRE ATT&CK", "Threat Intelligence", "NIST CSF", "APT Analysis", "Risk Scoring"],
    githubUrl: "https://github.com/Xclusive-Ishan/Cobalt-Kitty-APT39-TTP-Defense-Matrix",
    featured: true
  },
  {
    title: "Attack-Chain Honeypot Framework",
    subtitle: "Threat Emulation | Protocol Analysis | Defensive Bypass",
    description: "Design and deployment of vulnerable honeypots in Docker for covert attacker profiling and security research.",
    details: [
      "Designed and deployed 4+ vulnerable honeypots in Docker, enabling covert attacker persistence, security evasion, and 100% untraceable operations.",
      "Developed dynamic HTTP/HTTPS, SSH, FTP attack payloads using Flask & Socket Programming.",
      "Simulated attacks across 5 protocols (SMB/DNS included) at 1,000+ RPS to test system resilience.",
      "Exposed telemetry gaps in Cowrie/Dionaea through custom evasion techniques, creating detection blindspots."
    ],
    problem: "Need for more advanced honeypot systems to detect and analyze attacker behavior.",
    solution: "Built advanced yet believable honeypot network in Docker, enabling precise attacker persistence and security evasion monitoring.",
    outcome: "Developed dynamic HTTP/HTTPS, SSH, FTP attack payloads and expanded telemetry gaps using custom modules for increased detection.",
    image: "/placeholder.svg",
    thumbnail: "/lovable-uploads/19ee7e1b-0760-4090-b3dd-a246bea36861.png",
    technologies: ["Honeypots", "Docker", "Protocol Analysis", "Flask", "Socket Programming"],
    githubUrl: "https://github.com/Xclusive-Ishan/Honeypots-Beyond-Defense-Offensive-Potential.git",
    featured: true
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<"all" | "featured">("all"); // Changed default to "all" to display all projects initially
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects); // Initialize with all projects
  
  useEffect(() => {
    setVisibleProjects(
      filter === "all" 
        ? projects 
        : projects.filter(project => project.featured)
    );
  }, [filter]);
  
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
    
    // Add a delay to allow the DOM to update before observing elements
    setTimeout(() => {
      document.querySelectorAll(".section-fade-in").forEach((el) => {
        observer.observe(el);
      });
    }, 100);
    
    return () => observer.disconnect();
  }, [visibleProjects]); // Added visibleProjects as a dependency

  console.log("Visible projects:", visibleProjects.length); // Debug log to check if projects are being filtered

  return (
    <section id="projects" className="py-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 section-fade-in">Projects</h2>
          <div className="w-16 h-1 bg-primary mb-8 section-fade-in"></div>
          
          <div className="flex gap-4 mb-8 section-fade-in">
            <Button
              variant={filter === "featured" ? "default" : "outline"}
              onClick={() => setFilter("featured")}
            >
              Featured
            </Button>
            <Button
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => setFilter("all")}
            >
              All Projects
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <Card 
              key={index} 
              className="project-card border border-border h-full flex flex-col section-fade-in opacity-100" // Added opacity-100 to ensure visibility
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.thumbnail && (
                <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <p className="text-sm text-primary mt-1">{project.subtitle}</p>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="grow">
                <ul className="list-disc pl-5 mb-4 space-y-2 text-sm">
                  {project.details && project.details.map((detail, i) => (
                    <li key={i} className="text-foreground/80">{detail}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-secondary text-foreground/80 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center section-fade-in">
          <Button asChild variant="outline" size="lg" className="group">
            <a 
              href="https://github.com/Xclusive-Ishan" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View More on GitHub
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
