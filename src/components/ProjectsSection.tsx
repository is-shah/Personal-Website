
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    title: "Silent Consent",
    description: "OS-scale Research for defensive gaps and real world bypass in consent banners and policy pages across top websites.",
    image: "/placeholder.svg",
    technologies: ["OS Security", "Authentication Bypass", "CWE-401"],
    githubUrl: "https://github.com",
    featured: true
  },
  {
    title: "Cobalt Kitty & APT39 TTP Analysis",
    description: "APT Campaign Analysis using MITRE ATT&CK Framework to identify and mitigate advanced persistent threats.",
    image: "/placeholder.svg",
    technologies: ["MITRE ATT&CK", "Threat Intelligence", "APT Analysis"],
    githubUrl: "https://github.com",
    featured: true
  },
  {
    title: "Attack Chain Honeypot Framework",
    description: "Threat Emulation system with Protocol Analysis for Defensive Bypass detection, using containerized honeypots.",
    image: "/placeholder.svg",
    technologies: ["Honeypots", "Docker", "Network Security"],
    githubUrl: "https://github.com",
    featured: true
  },
  {
    title: "Privacy Compliance Scanner",
    description: "ML-based tool that identifies inconsistencies between privacy consent banners and policy pages. Analyzes GDPR, CCPA & e-Directive compliance.",
    image: "/placeholder.svg",
    technologies: ["Python", "NLP", "Machine Learning", "GDPR", "CCPA"],
    githubUrl: "https://github.com",
    featured: true
  },
  {
    title: "Deceptive Content Detector",
    description: "ML-based system to detect deceptive horizons, misleading URLs and fraudulent content online.",
    image: "/placeholder.svg",
    technologies: ["Python", "Machine Learning", "Content Analysis"],
    githubUrl: "https://github.com",
    featured: false
  },
  {
    title: "TTP Defense Matrix",
    description: "Open-source framework leveraging MITRE ATT&CK for detection, prevention and remediation of advanced threats.",
    image: "/placeholder.svg",
    technologies: ["MITRE ATT&CK", "Security", "Threat Modeling"],
    githubUrl: "https://github.com",
    featured: false
  }
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<"all" | "featured">("featured");
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  
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
    
    document.querySelectorAll(".section-fade-in").forEach((el) => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

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
              className="project-card border border-border h-full flex flex-col section-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="grow">
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
              href="https://github.com/ishan-shah" 
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
