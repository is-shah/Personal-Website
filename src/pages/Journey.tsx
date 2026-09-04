
import { useEffect } from "react";
const mem1Image = "/lovable-uploads/b4523937-a5a2-46bc-8e21-c820cc658f6e.jpg";
const mem2Image = "/lovable-uploads/081ca96f-5332-4e52-92a7-8c5c1c0015ed.jpg";

const Journey = () => {
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

  const memories = [
    {
      image: mem1Image,
      alt: "Ishan Shah at the Max Planck Institute for Informatics",
      title: "At MPII",
      story:
        "Stepping into the Max Planck Institute for Informatics felt like entering a quiet intersection of curiosity and rigor. The long corridors, the impromptu whiteboard discussions, and the late-evening debugging sessions taught me that the best research happens when you’re willing to sit with a problem longer than feels comfortable.",
    },
    {
      image: mem2Image,
      alt: "Evening view of the MPII campus courtyard",
      title: "Saarbrücken Evenings",
      story:
        "The campus at dusk, with its clean lines and warm lights, became a reminder that research is also about place and people. Conversations over coffee here turned into collaborations, and walks across this courtyard often became the moments where confusing ideas finally clicked into place.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-5xl mx-auto px-4 md:px-8">
        <div className="mb-16 section-fade-in">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Experiences & Memories
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Research is as much about the people you meet and the places you
            carry with you as it is about the results you produce. A few
            moments from the journey so far.
          </p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center section-fade-in ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`${
                  index % 2 === 1 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="overflow-hidden rounded-lg border border-border bg-muted/30">
                  <img
                    src={memory.image}
                    alt={memory.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              </div>
              <div
                className={`${
                  index % 2 === 1 ? "md:order-1" : "md:order-2"
                }`}
              >
                <h2 className="text-2xl font-medium mb-4">{memory.title}</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {memory.story}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-border section-fade-in">
          <blockquote className="text-xl md:text-2xl font-light italic text-center max-w-3xl mx-auto text-foreground/90">
            “Cybersecurity isn’t a straight path — it’s an ever-evolving journey
            with twists, turns, and constant challenges. Every day brings a new
            puzzle to solve. And you know what? Let’s crack it together.”
          </blockquote>
          <p className="text-center text-muted-foreground mt-4">— Ishan Shah</p>
        </div>
      </div>
    </section>
  );
};

export default Journey;
