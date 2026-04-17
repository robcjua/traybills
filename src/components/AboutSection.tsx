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
              <span className="section-number">01  About</span>
            </div>

            <h2
              className="font-['Cormorant_Garamond'] leading-tight mb-10 gold-underline"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400 }}
            >
              The Story of
              <br />
              <em>Big Billy</em>
            </h2>

            <div className="space-y-6 font-['Outfit'] text-foreground/70 leading-relaxed text-[15px] lg:text-base">
              <p>
                Born in Atlanta, Georgia, Tray Bills  known to his fans as{" "}
                <strong className="text-foreground font-medium">BILLY</strong>  grew up in a neighborhood
                deeply shaped by hip-hop culture. The streets, the sounds, and the stories of Atlanta became
                the foundation of everything he creates.
              </p>
              <p>
                After developing a passion for music in middle school, Tray took a bold step: he dropped out
                of college to pursue his vision full-time. What started as YouTube content and SoundCloud
                releases evolved into a multi-platform empire spanning music, fashion, and influence.
              </p>
              <p>
                Today, Tray leads the{" "}
                <strong className="text-foreground font-medium">Billionaire Gang</strong>  a community of
                over <strong className="text-foreground font-medium">2.5 million followers</strong> across
                platforms who connect with his authentic storytelling about real friendship, devoted love,
                and street romance. He's a NovaMEN brand ambassador, SXSW contributor, and one of Atlanta's
                most compelling creative voices.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-10">
              {["Music Artist", "Content Creator", "Fashion", "NovaMEN", "Billionaire Gang", "Atlanta"].map((tag) => (
                <span
                  key={tag}
                  className="font-['Outfit'] text-[10px] tracking-[0.15em] uppercase border border-foreground/20 text-foreground/60 px-3 py-1.5 hover:border-[oklch(0.72_0.12_75)] hover:text-[oklch(0.72_0.12_75)] transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-black/[0.07] pt-8">
              {[
                { value: "2013", label: "Started" },
                { value: "ATL", label: "Based In" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-['Cormorant_Garamond'] text-3xl font-semibold text-foreground">
                    {stat.value}
                  </div>
                  <div className="font-['Outfit'] text-[10px] tracking-[0.2em] uppercase text-foreground/40 mt-1">
                    {stat.label}
                  </div>
                </div>
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
                alt="Tray Bills  recent press photo"
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
