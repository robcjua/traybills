/* BrandPartnersSection — Brand deals & press */
import { useEffect, useRef, useState } from "react";

const brands = [
  "Nike",
  "Monster Energy",
  "Hulu",
  "BLK",
  "Walmart",
  "TikTok",
  "Amazon",
  "Fashion Nova",
  "Triller",
  "The New York Times",
  "CNN",
  "NFL",
  "Complex",
  "Mayweather Boxing + Fitness",
  "NBA",
  "Facebook",
  "AXE",
  "Distractify",
  "Refinery29",
  "Cision PR Newswire",
  "SXSW",
];

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
      className="bg-[#0a0a0a] py-24 lg:py-36 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
        <div
          className={`mb-16 lg:mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-number text-[oklch(0.72_0.12_75)]">04 · Partnerships</span>
          <h2
            className="font-['Cormorant_Garamond'] text-white mt-3 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400 }}
          >
            Brand Deals
            <br />
            <em>& Press</em>
          </h2>
          <p className="font-['Outfit'] text-white/50 text-sm mt-4 max-w-lg leading-relaxed">
            Trusted by global brands and featured across major media. A track record of partnerships that move culture.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-white/5">
          {brands.map((brand, index) => (
            <div
              key={brand}
              className={`bg-[#0a0a0a] px-6 py-8 lg:py-10 flex items-center justify-center text-center transition-all duration-700 hover:bg-[#141414] group ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              <span className="font-['Cormorant_Garamond'] text-white/70 text-xl lg:text-2xl tracking-wide group-hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300">
                {brand}
              </span>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-4">
            <div className="w-16 h-px bg-white/20" />
            <span className="font-['Cormorant_Garamond'] text-2xl text-white/40 italic">
              Brand ambassador · Fashion Nova
            </span>
            <div className="w-16 h-px bg-white/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
