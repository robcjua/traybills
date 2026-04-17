/* RoadmapSection  Career timeline with editorial styling */
import { useEffect, useRef, useState } from "react";

const milestones = [
  {
    year: "2013",
    title: "The Beginning",
    description:
      "Started building a social media following in Atlanta, venturing into YouTube for acting and modeling content. The seeds of Billionaire Gang were planted.",
  },
  {
    year: "2017",
    title: "Chris & Tray",
    description:
      "Launched the collaborative YouTube channel with Chris Gilly  originally 'Clout of Atlanta', now 'Chris And Tray'  which grew to 755K+ subscribers.",
  },
  {
    year: "2018",
    title: "Going Viral",
    description:
      "A prank video involving Floyd Mayweather went viral, catapulting Tray's name into a wider national audience and proving his content instincts were undeniable.",
  },
  {
    year: "2019",
    title: "The Bills Way",
    description:
      "Released his debut album 'The Bills Way', establishing himself as a serious music artist. Collaborated with Kelly Cole and Blood Brothers.",
  },
  {
    year: "2020",
    title: "The Leak EP",
    description:
      "Dropped 'The Leak' EP featuring 'In My Bag' ft. Chris Gilly & Miita 6. Featured in Fashion Gxd Magazine Summer 2020 Issue as a rising star.",
  },
  {
    year: "202122",
    title: "Building the Brand",
    description:
      "Released 'UH OH' ft. Juno Central and 'We Wylin' (official music video). Became a NovaMEN brand ambassador, cementing his fashion influence.",
  },
  {
    year: "2023",
    title: "Weather Man",
    description:
      "Released 'Weather Man' on his birthday, August 25. Sat down with DJ Smallz for a candid interview about his journey, music, and vision.",
  },
  {
    year: "2025",
    title: "New Flava",
    description:
      "Dropped 'New Flava' (March 14, 2025), performed at ATL Edition, appeared at SXSW 2025, and continues to grow the Billionaire Gang movement.",
  },
];

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="roadmap"
      ref={sectionRef}
      className="bg-[#111111] py-24 lg:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
        <div
          className={`mb-16 lg:mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-number text-[oklch(0.72_0.12_75)]">02  Journey</span>
          <h2
            className="font-['Cormorant_Garamond'] text-white mt-3 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400 }}
          >
            How He Got
            <br />
            <em>Here</em>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 lg:-translate-x-px" />

          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative grid lg:grid-cols-2 gap-0 transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`pb-12 lg:pb-16 ${
                    index % 2 === 0
                      ? "lg:pr-16 lg:text-right"
                      : "lg:col-start-2 lg:pl-16"
                  }`}
                >
                  <div className="pl-8 lg:pl-0">
                    <div className="font-['Cormorant_Garamond'] text-[oklch(0.72_0.12_75)] text-4xl font-300 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="font-['Outfit'] text-white text-base font-500 tracking-wide mb-3">
                      {milestone.title}
                    </h3>
                    <p className="font-['Outfit'] text-white/50 text-sm leading-relaxed max-w-sm lg:max-w-none">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                <div
                  className={`absolute left-0 lg:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-[oklch(0.72_0.12_75)] bg-[#111111] transition-all duration-300 hover:bg-[oklch(0.72_0.12_75)]`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
