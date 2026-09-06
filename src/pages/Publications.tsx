
import { useEffect } from "react";
import { FileText } from "lucide-react";

const Publications = () => {
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

  const publications = [
    {
      title:
        "Cookies Are Not the Whole Story: Discrepancies Between Tracking Disclosures and Tracking Behavior.",
      authors: "Ishan Shah, Ali Rasaii, Anja Feldmann, Devashish Gosain, Ha Dao.",
      venue:
        "Accepted for publication in the proceedings of the ACM International Conference on emerging Networking EXperiments and Technologies (CoNEXT 2026).",
      link: "https://dl.acm.org/doi/10.1145/3830388",
      linkText: "Paper",
    },
    {
      title:
        "Two Stories, One Website: Measuring Inconsistencies Between Cookie Banners and Privacy Policies.",
      authors: "Palak Chopra∗, Ishan Shah∗, Devashish Gosain, Ha Dao.",
      venue: "Under review at the USENIX Security Symposium 2027.",
      note: "∗(Joint First-Authors)",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-16 section-fade-in">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Publications
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          </p>
        </div>

        <div className="space-y-10">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="section-fade-in p-6 md:p-8 border border-border rounded-lg bg-card shadow-sm"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-md bg-primary/10 text-primary shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-medium leading-snug mb-2">
                    {pub.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mb-3">
                    {pub.authors}
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-2">
                    {pub.venue}
                  </p>
                  {pub.note && (
                    <p className="text-sm text-muted-foreground italic mb-2">
                      {pub.note}
                    </p>
                  )}
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      {pub.linkText}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
