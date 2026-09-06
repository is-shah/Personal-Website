
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const cvFile = `${import.meta.env.BASE_URL}Ishan_Shah_CV.pdf`;

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
    link.href = cvFile;
    link.download = "Ishan_Shah_CV.pdf";
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

        <div className="max-w-4xl border border-border rounded-lg bg-card shadow-sm section-fade-in">
          <div className="h-[min(78vh,900px)] min-h-[560px] overflow-y-auto bg-muted/30">
            <object
              data={cvFile}
              type="application/pdf"
              aria-label="Ishan Shah CV"
              className="h-full min-h-[900px] w-full"
            >
              <p className="p-6 text-muted-foreground">
                The CV preview is unavailable in this browser. Use the download
                button above to open the PDF.
              </p>
            </object>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
