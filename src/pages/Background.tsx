
// import { useEffect } from "react";

// const Background = () => {
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible");
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll(".section-fade-in").forEach((el) => {
//       observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const milestones = [
//     {
//       period: "2025 – Present",
//       title: "Max Planck Institute for Informatics",
//       subtitle: "Research Scholar · INET Lab · Saarbrücken, Germany",
//       image: `${import.meta.env.BASE_URL}mpi-inf.jpg`,
//       description:
//         "Working under the supervision of Prof. Anja Feldmann, with guidance from Postdoctoral Researcher Ha Dao, on large-scale Web privacy measurement—studying tracking mechanisms such as cookies and browser fingerprinting, and uncovering data practices hidden beneath what websites disclose.",
//     },
//     {
//   period: "Dec 2024 – Present",
//   title: "IIT Bombay",
//   subtitle: "Research Intern · Trust Lab (Dec 2024 – Jul 2025) · Research Collaborator (Aug 2025 – Present)",
//   image: `${import.meta.env.BASE_URL}iitb.jpeg`,
//   imageAlt: "IIT Bombay campus",
//   description:
//     "Worked with Prof. Devashish Gosain on Web privacy and privacy compliance, and continued the collaboration after my internship to study privacy disclosures and tracking practices at scale across different privacy jurisdictions.",
//   },
//     {
//       period: "2023 – Present",
//       title: "IIT Jodhpur",
//       subtitle: "B.Tech in AIDE",
//       image: `${import.meta.env.BASE_URL}iitj.jpg`,
//       description:
//         "Final-year undergraduate student pursuing a Bachelor of Technology in Artificial Intelligence and Data Science at IIT Jodhpur.",
//     },
//   ];

//   return (
//     <section className="py-24 md:py-32">
//       <div className="container max-w-6xl mx-auto px-4 md:px-8">
//         <div className="mb-16 section-fade-in">
//           <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
//             Background
//           </h1>
//           <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
//           </p>
//         </div>

//         <div className="space-y-16 md:space-y-20">
//           {milestones.map((milestone, index) => (
//             <div
//               key={index}
//               className="grid grid-cols-1 lg:grid-cols-[35fr_65fr] gap-8 lg:gap-12 items-center section-fade-in"
//               style={{ transitionDelay: `${index * 80}ms` }}
//             >
//               <div className="h-56 overflow-hidden rounded-md border border-border bg-muted/30 lg:h-52">
//                 <img
//                   src={milestone.image}
//                   alt={`${milestone.title} building or campus`}
//                   className="block w-full h-full object-contain"
//                   loading="lazy"
//                 />
//               </div>
//               <div>
//                 <span className="text-sm font-mono text-muted-foreground mb-2 block">
//                   {milestone.period}
//                 </span>
//                 <h2 className="text-xl md:text-2xl font-medium mb-1">{milestone.title}</h2>
//                 <p className="text-sm text-muted-foreground mb-3">
//                   {milestone.subtitle}
//                 </p>
//                 <p className="text-foreground/80 leading-relaxed">
//                   {milestone.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Background;

import { useEffect } from "react";

const Background = () => {
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

  const milestones = [
    {
      period: "2025 – Present",
      title: "Max Planck Institute for Informatics",
      subtitle: "Research Scholar · INET Lab · Saarbrücken, Germany",
      image: `${import.meta.env.BASE_URL}mpi-inf.jpg`,
      description:
        "Working under the supervision of Prof. Anja Feldmann, with guidance from Postdoctoral Researcher Ha Dao, on large-scale Web privacy measurement—studying tracking mechanisms such as cookies and browser fingerprinting, and uncovering data practices hidden beneath what websites disclose.",
    },
    {
      period: "Dec 2024 – Present",
      title: "IIT Bombay",
      subtitle: "Research Intern · Trust Lab (Dec 2024 – Jul 2025) · Research Collaborator (Aug 2025 – Present)",
      image: `${import.meta.env.BASE_URL}iitb.jpeg`,
      imageAlt: "IIT Bombay campus",
      description:
        "Worked with Prof. Devashish Gosain on Web privacy and privacy compliance, and continued the collaboration after my internship to study privacy disclosures and tracking practices at scale across different privacy jurisdictions.",
    },
    {
      period: "2023 – Present",
      title: "IIT Jodhpur",
      subtitle: "B.Tech in AIDE",
      image: `${import.meta.env.BASE_URL}iitj.jpg`,
      description:
        "Final-year undergraduate student pursuing a Bachelor of Technology in Artificial Intelligence and Data Science at IIT Jodhpur.",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-16 section-fade-in">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
            Background
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          </p>
        </div>

        <div className="space-y-16 md:space-y-20">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-[35fr_65fr] gap-8 lg:gap-12 items-center section-fade-in"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="h-48 lg:h-52 w-full overflow-hidden rounded-md">
                <img
                  src={milestone.image}
                  alt={`${milestone.title} building or campus`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="text-sm font-mono text-muted-foreground mb-2 block">
                  {milestone.period}
                </span>
                <h2 className="text-xl md:text-2xl font-medium mb-1">{milestone.title}</h2>
                <p className="text-sm text-muted-foreground mb-3">
                  {milestone.subtitle}
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Background;