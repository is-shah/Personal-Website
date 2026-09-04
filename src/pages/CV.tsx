
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CV = () => {
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

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/lovable-uploads/89d526ba-14a7-44a5-a587-ddd400979063.png";
    link.download = "ishan_shah_resume.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 section-fade-in">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">
              Curriculum Vitae
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A concise overview of my academic background, research
              experience, and technical work.
            </p>
          </div>
          <Button
            onClick={handleDownload}
            variant="outline"
            className="w-fit shrink-0"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 section-fade-in">
          <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm">
            <img
              src="/lovable-uploads/89d526ba-14a7-44a5-a587-ddd400979063.png"
              alt="Ishan Shah CV page 1"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="border border-border rounded-lg overflow-hidden bg-card shadow-sm flex items-center justify-center bg-muted/30 min-h-[400px]">
            <p className="text-muted-foreground text-center px-8">
              Page 2 placeholder — replace with the second page of your CV
              when available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
