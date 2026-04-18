/* BrandPartnersSection — Editorial brand deals & press showcase */
import { useEffect, useRef, useState } from "react";

const featured = {
  name: "Fashion Nova",
  role: "Brand Ambassador",
  note: "Official face of NovaMEN — global fashion partnership.",
};

const partnerBrands = [
  "Nike",
  "Monster Energy",
  "Hulu",
  "BLK",
  "Walmart",
  "TikTok",
  "Amazon",
  "Triller",
  "AXE",
  "NFL",
  "NBA",
  "Mayweather Boxing + Fitness",
  "Facebook",
  "SXSW",
];

const pressBrands = [
  "The New York Times",
  "CNN",
  "Complex",
  "Distractify",
  "Refinery29",
  "Cision PR Newswire",
  "Fashion Gxd Magazine",
  "DJ Smallz",
];

function MarqueeRow({
  items,
  direction = "left",
  variant = "light",
}: {
  items: string[];
  direction?: "left" | "right";
  variant?: "light" | "dark";
}) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-mask overflow-hidden">
      <div
        className={`flex gap-3 w-max ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {doubled.map((brand, i) => (
          <div
            key={`${brand}-${i}`}
            className={`shrink-0 px-7 py-5 border transition-all duration-300 group cursor-default ${
              variant === "light"
                ? "border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-[oklch(0.72_0.12_75)]/40"
                : "border-white/5 bg-black/40 hover:bg-black/60 hover:border-[oklch(0.72_0.12_75)]/30"
            }`}
          >
            <span className="font-['Cormorant_Garamond'] text-white/80 text-xl lg:text-2xl tracking-wide whitespace-nowrap group-hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300">
              {brand}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BrandPartnersSection() {
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
      id="partners"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] py-24 lg:py-36 overflow-hidden"
    >
      {/* Background ornaments */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(oklch(0.72 0.12 75) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.12 75 / 0.08), transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
        {/* Heading */}
        <div
          className={`mb-14 lg:mb-20 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="section-number text-[oklch(0.72_0.12_75)]">
            04 · Partnerships
          </span>
          <h2
            className="font-['Cormorant_Garamond'] text-white mt-3 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400 }}
          >
            Brand Deals
            <br />
            <em>& Press</em>
          </h2>
          <p className="font-['Outfit'] text-white/50 text-sm mt-4 max-w-lg leading-relaxed">
            Trusted by global brands and featured across major media. A track
            record of partnerships that move culture.
          </p>
        </div>

        {/* Featured Ambassador Card */}
        <div
          className={`mb-16 lg:mb-20 transition-all duration-700 delay-150 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative border border-[oklch(0.72_0.12_75)]/30 bg-gradient-to-br from-white/[0.04] to-transparent p-8 lg:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 -translate-y-1/2 translate-x-1/4 rounded-full bg-[oklch(0.72_0.12_75)]/10 blur-3xl pointer-events-none" />
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <div className="font-['Outfit'] text-[10px] tracking-[0.3em] uppercase text-[oklch(0.72_0.12_75)] mb-3">
                  ★ Featured Partnership
                </div>
                <h3 className="font-['Cormorant_Garamond'] text-white text-4xl lg:text-5xl font-light mb-2">
                  {featured.name}
                </h3>
                <p className="font-['Outfit'] text-white/60 text-sm lg:text-base max-w-md">
                  {featured.note}
                </p>
              </div>
              <div className="lg:text-right">
                <div className="font-['Outfit'] text-[10px] tracking-[0.25em] uppercase text-white/40 mb-2">
                  Role
                </div>
                <div className="font-['Cormorant_Garamond'] italic text-white text-2xl lg:text-3xl">
                  {featured.role}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Partners Marquee */}
        <div
          className={`mb-12 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[oklch(0.72_0.12_75)]" />
            <span className="font-['Outfit'] text-[10px] tracking-[0.3em] uppercase text-white/50">
              Brand Partners
            </span>
          </div>
          <MarqueeRow items={partnerBrands} direction="left" variant="light" />
        </div>

        {/* Press Marquee */}
        <div
          className={`mb-16 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[oklch(0.72_0.12_75)]" />
            <span className="font-['Outfit'] text-[10px] tracking-[0.3em] uppercase text-white/50">
              Press & Media
            </span>
          </div>
          <MarqueeRow items={pressBrands} direction="right" variant="dark" />
        </div>

        {/* Stats Footer */}
        <div
          className={`grid grid-cols-3 gap-px bg-white/10 transition-all duration-700 delay-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "20+", label: "Brand Deals" },
            { value: "8+", label: "Press Features" },
            { value: "100%", label: "Organic Reach" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0a0a0a] py-8 lg:py-10 text-center"
            >
              <div className="font-['Cormorant_Garamond'] text-[oklch(0.72_0.12_75)] text-4xl lg:text-5xl font-light mb-1">
                {stat.value}
              </div>
              <div className="font-['Outfit'] text-[10px] lg:text-xs tracking-[0.25em] uppercase text-white/40">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
