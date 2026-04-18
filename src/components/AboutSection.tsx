/**
 * AboutSection  Text-only editorial bio
 */
import { useEffect, useRef, useState } from "react";

const PORTRAIT = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485941894/RFn3Kh3CZHJ54YvoZNKVZc/tray_side_goyard_007ae10a.jpg";

export default function AboutSection() {
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
    <section id="about" ref={sectionRef} className="bg-[#fafaf8] py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">

          <div
            className={`lg:col-span-3 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-6">
              <span className="section-number">01 · About</span>
            </div>

            <h2
              className="font-['Cormorant_Garamond'] leading-tight mb-10 gold-underline"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400 }}
            >
              The Story of
              <br />
              <em>Tray Bills</em>
            </h2>

            <div className="space-y-6 font-['Outfit'] text-foreground/70 leading-relaxed text-[15px] lg:text-base">
              <p>
                <strong className="text-foreground font-medium">Tray Bills</strong> is a recording artist,
                entrepreneur, model, personality, and content creator from Atlanta, Georgia. He began his
                professional career snapping photos and uploading to social media, where he quickly built a
                devoted fan base by staying ahead of the trends.
              </p>
              <p>
                As his following and demand grew, brands lined up to partner with him, evolving Tray into
                what's now widely called a "big influencer", able to move culture through his channels.
                He's currently a brand ambassador for{" "}
                <strong className="text-foreground font-medium">Fashion Nova</strong>, and his debut album{" "}
                <em>The Bills Way</em>, featuring the hit "Flexin," dropped July 4, 2019.
              </p>
              <p>
                Now working on a new project with A-list producers and contributors, Tray is preparing to
                front more fashion labels and host some of the hottest shows on television. His following,
                affectionately called <strong className="text-foreground font-medium">"The Bills Way"</strong>,
                spans <strong className="text-foreground font-medium">2.5M+ across platforms</strong> with{" "}
                <strong className="text-foreground font-medium">800,000 daily followers</strong> tuning in
                to his world.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-10">
              {["Recording Artist", "Content Creator", "Entrepreneur", "Model", "Fashion Nova", "Billionaire Gang", "Atlanta"].map((tag) => (
                <span
                  key={tag}
                  className="font-['Outfit'] text-[10px] tracking-[0.15em] uppercase border border-foreground/20 text-foreground/60 px-3 py-1.5 hover:border-[oklch(0.72_0.12_75)] hover:text-[oklch(0.72_0.12_75)] transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>

          <div
            className={`hidden lg:block lg:col-span-2 transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative sticky top-28">
              <div className="absolute -top-3 -right-3 w-full h-full border border-[oklch(0.72_0.12_75)]/25" />
              <img
                src={PORTRAIT}
                alt="Tray Bills, recent press photo"
                className="relative w-full object-cover"
                style={{ aspectRatio: "3/4", zIndex: 1 }}
              />
              <div
                className="absolute -bottom-5 -left-5 w-24 h-24 z-0"
                style={{ backgroundColor: "oklch(0.72 0.12 75 / 0.08)" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
