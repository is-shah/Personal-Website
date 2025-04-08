
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            
            if (entry.target === skillsRef.current) {
              document.querySelectorAll(".skill-bar").forEach((el) => {
                el.classList.add("animate");
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll(".section-fade-in").forEach((el) => {
      observer.observe(el);
    });
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="container max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 section-fade-in">About Me</h2>
          <div className="w-16 h-1 bg-primary mb-8 section-fade-in"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="prose max-w-none section-fade-in">
              <p className="text-lg">
                I'm a final year B.Tech student at IIT Jodhpur specializing in cybersecurity research and privacy. My academic journey has equipped me with strong technical skills and analytical capabilities to address complex security challenges.
              </p>
              <p className="text-lg">
                My research interests include vulnerability assessment, privacy analysis, and system resilience. I've contributed to identifying inconsistencies between consent banners and policy pages affecting millions of websites, and developed ML-based models to detect deceptive content.
              </p>
              <p className="text-lg">
                I'm passionate about creating more secure digital environments through practical research and innovative solutions. My work combines technical expertise with a commitment to addressing real-world security challenges.
              </p>
            </div>
            
            <div className="section-fade-in">
              <Button asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div ref={skillsRef} className="space-y-8 section-fade-in">
            <h3 className="text-xl font-semibold">Technical Skills</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Penetration Testing</span>
                  <span>Expert</span>
                </div>
                <div className="skill-bar bg-secondary dark:bg-secondary/50" style={{ "--skill-percent": "95%" } as React.CSSProperties}></div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Threat Analysis</span>
                  <span>Advanced</span>
                </div>
                <div className="skill-bar bg-secondary dark:bg-secondary/50" style={{ "--skill-percent": "85%" } as React.CSSProperties}></div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Security Research</span>
                  <span>Advanced</span>
                </div>
                <div className="skill-bar bg-secondary dark:bg-secondary/50" style={{ "--skill-percent": "80%" } as React.CSSProperties}></div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">OffSec (Pentesting)</span>
                  <span>90%</span>
                </div>
                <div className="skill-bar bg-secondary dark:bg-secondary/50" style={{ "--skill-percent": "90%" } as React.CSSProperties}></div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Adversary Emulation</span>
                  <span>85%</span>
                </div>
                <div className="skill-bar bg-secondary dark:bg-secondary/50" style={{ "--skill-percent": "85%" } as React.CSSProperties}></div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-medium">GRC (NIST CSF)</span>
                  <span>80%</span>
                </div>
                <div className="skill-bar bg-secondary dark:bg-secondary/50" style={{ "--skill-percent": "80%" } as React.CSSProperties}></div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card className="border border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">C</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">C++</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Bash</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">PowerShell</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">SQL</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Certifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">TryHackMe Junior Web Pentester</p>
                  <p className="text-sm">Google Cybersecurity Certified Professional (ongoing)</p>
                </CardContent>
              </Card>
              
              <Card className="border border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Operating Systems</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">• Linux (Kali, Ubuntu)</p>
                  <p className="text-sm">• Windows (Server, Active Directory)</p>
                </CardContent>
              </Card>
              
              <Card className="border border-border">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Cybersecurity Tools</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Burp Suite</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Metasploit</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Nmap</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Wireshark</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Nessus</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Splunk</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
