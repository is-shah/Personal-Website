
import { useEffect } from "react";
import { Award, Users, Trophy, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AchievementsSection = () => {
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
    <section id="achievements" className="py-20">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 section-fade-in">Achievements & Leadership</h2>
          <div className="w-16 h-1 bg-primary mb-8 section-fade-in"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border border-border h-full flex flex-col section-fade-in project-card">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto p-3 bg-primary/10 rounded-full mb-3">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Popular Blogger</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-foreground/80">
              <p>Public engagement with over 150,000 views (2020-2022)</p>
            </CardContent>
          </Card>
          
          <Card className="border border-border h-full flex flex-col section-fade-in project-card">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto p-3 bg-primary/10 rounded-full mb-3">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">TryHackMe Achievement</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-foreground/80">
              <p>Top 20% rankers globally on TryHackMe platform</p>
            </CardContent>
          </Card>
          
          <Card className="border border-border h-full flex flex-col section-fade-in project-card">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto p-3 bg-primary/10 rounded-full mb-3">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Competition Recognition</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-foreground/80">
              <p>First Runner Up in Pitch it Competition (showcasing presentation skills and teamwork)</p>
            </CardContent>
          </Card>
          
          <Card className="border border-border h-full flex flex-col section-fade-in project-card">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto p-3 bg-primary/10 rounded-full mb-3">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Quora Writer</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-foreground/80">
              <p>Established presence with significant viewership</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
