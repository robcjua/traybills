/* RoadmapSection  Career timeline with scroll-driven roadmap animation */
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

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
      "Launched the collaborative YouTube channel with Chris Gilly, originally 'Clout of Atlanta', now 'Chris And Tray', which grew to 755K+ subscribers.",
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
    year: "2021–22",
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

function MilestoneRow({ milestone, index }: { milestone: typeof milestones[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px -15% 0px" });
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="relative grid lg:grid-cols-2 gap-0"
    >
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`pb-12 lg:pb-16 ${
          isLeft ? "lg:pr-16 lg:text-right" : "lg:col-start-2 lg:pl-16"
        }`}
      >
        <div className="pl-8 lg:pl-0">
          <div className="font-['Cormorant_Garamond'] text-[oklch(0.72_0.12_75)] text-4xl font-light mb-2">
            {milestone.year}
          </div>
          <h3 className="font-['Outfit'] text-white text-base font-medium tracking-wide mb-3">
            {milestone.title}
          </h3>
          <p className="font-['Outfit'] text-white/50 text-sm leading-relaxed max-w-sm lg:max-w-none">
            {milestone.description}
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2, ease: "backOut" }}
        className="absolute left-0 lg:left-1/2 top-2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-[oklch(0.72_0.12_75)] bg-[#111111]"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="absolute inset-1 rounded-full bg-[oklch(0.72_0.12_75)]"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0.6 }}
          animate={inView ? { scale: 2.5, opacity: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-[oklch(0.72_0.12_75)]"
        />
      </motion.div>
    </div>
  );
}

export default function RoadmapSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeadingVisible(true); },
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
          className={`mb-16 lg:mb-20 transition-all duration-700 ${headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-number text-[oklch(0.72_0.12_75)]">02 · Journey</span>
          <h2
            className="font-['Cormorant_Garamond'] text-white mt-3 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400 }}
          >
            How He Got
            <br />
            <em>Here</em>
          </h2>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Track (faint) */}
          <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-white/10 lg:-translate-x-px" />
          {/* Progress line (gold) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-0 lg:left-1/2 top-0 w-px bg-gradient-to-b from-[oklch(0.72_0.12_75)] via-[oklch(0.72_0.12_75)] to-[oklch(0.72_0.12_75)]/40 lg:-translate-x-px shadow-[0_0_8px_oklch(0.72_0.12_75_/_0.6)]"
          />

          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <MilestoneRow key={milestone.year} milestone={milestone} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
