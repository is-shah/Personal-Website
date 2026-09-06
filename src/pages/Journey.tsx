
import { useEffect } from "react";
const mem1Image = `${import.meta.env.BASE_URL}mem1.jpg`;
const mem2Image = `${import.meta.env.BASE_URL}mem2.jpg`;

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
        "From being a student exploring privacy and security to finding my way to the Max Planck Institute for Informatics felt like a dream—and a moment when I felt that the effort had truly paid off. What I valued most was the research culture: bringing together people from different backgrounds, ideas, and perspectives, while holding a strong commitment to the quality of research. Spending time with researchers there, learning from their perspectives, and being part of that environment helped me see more clearly the kind of researcher I hope to become. I am deeply grateful for that experience and for the people who made it meaningful.",
    },
    {
      image: mem2Image,
      alt: "Saarbrücken place view",
      title: "Saarbrücken Evenings",
      story:
        "My time in Saarbrücken was about more than research. Visiting Europe for the first time, discovering new places and cultures, and simply spending time in a different part of the world was genuinely eye-opening. The beauty of the places I visited and the many small moments shared with people along the way made the experience especially memorable. It is a part of my time at MPII that I will always be grateful for.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-16 section-fade-in">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Experiences & Memories
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          </p>
        </div>

        <div className="space-y-20 md:space-y-28">
          {memories.map((memory, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 gap-8 md:gap-12 items-center section-fade-in ${
                index % 2 === 1
                  ? "md:grid-cols-[65fr_35fr]"
                  : "md:grid-cols-[35fr_65fr]"
              }`}
            >
              <div
                className={`${
                  index % 2 === 1 ? "md:order-2" : "md:order-1"
                }`}
              >
                <div className="rounded-md border border-border bg-muted/30">
                  <img
                    src={memory.image}
                    alt={memory.alt}
                    className="block w-full h-auto object-contain"
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

      </div>
    </section>
  );
};

export default Journey;
