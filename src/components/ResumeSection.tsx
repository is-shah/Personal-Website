
import { useEffect } from "react";

const cvFile = `${import.meta.env.BASE_URL}Ishan_Shah_CV.pdf`;

const ResumeSection = () => {
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
    <section id="resume" className="py-20">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 section-fade-in">Resume</h2>
          <div className="w-16 h-1 bg-primary mb-8 section-fade-in"></div>
        </div>
        
        <div className="flex justify-center">
          <div className="border border-border rounded-lg shadow-lg w-full max-w-4xl section-fade-in">
            <div className="h-[min(78vh,900px)] min-h-[560px] overflow-y-auto bg-muted/30">
              <object
                data={cvFile}
                type="application/pdf"
                aria-label="Ishan Shah CV"
                className="h-full min-h-[900px] w-full"
              >
                <p className="p-6 text-muted-foreground">
                  The CV preview is unavailable in this browser. Use the
                  download button above to open the PDF.
                </p>
              </object>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
