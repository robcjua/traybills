/* HeroSection  Full-bleed editorial asymmetric hero */
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
      <div
        ref={heroRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663485941894/RFn3Kh3CZHJ54YvoZNKVZc/tray_closeup_portrait_56af6f53.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 20%",
          filter: "brightness(0.55)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />

      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-16 xl:px-24 max-w-7xl mx-auto">
        <div className="mb-4 lg:mb-6">
          <span className="font-['Outfit'] text-xs tracking-[0.3em] uppercase text-[oklch(0.72_0.12_75)] font-medium">
            Atlanta, Georgia
          </span>
        </div>

        <h1
          className="font-['Cormorant_Garamond'] text-white leading-none mb-2"
          style={{ fontSize: "clamp(4rem, 12vw, 11rem)", fontWeight: 300 }}
        >
          Tray
        </h1>
        <h1
          className="font-['Cormorant_Garamond'] text-white leading-none mb-6 lg:mb-8"
          style={{ fontSize: "clamp(4rem, 12vw, 11rem)", fontWeight: 600 }}
        >
          Bills
        </h1>

        <p className="font-['Outfit'] text-white/70 text-sm lg:text-base tracking-[0.2em] uppercase mb-10 lg:mb-12 max-w-md font-light">
          Music Artist · Content Creator · Fashion Influencer
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#about"
            className="font-['Outfit'] text-xs tracking-[0.15em] uppercase bg-white text-black px-8 py-3.5 hover:bg-[oklch(0.72_0.12_75)] hover:text-white transition-all duration-300 font-medium"
          >
            Discover
          </a>
          <a
            href="/music"
            className="font-['Outfit'] text-xs tracking-[0.15em] uppercase border border-white/40 text-white px-8 py-3.5 hover:border-[oklch(0.72_0.12_75)] hover:text-[oklch(0.72_0.12_75)] transition-all duration-300 font-medium"
          >
            Latest Music
          </a>
        </div>

        <div className="absolute bottom-8 right-8 lg:right-16 flex flex-col items-center gap-2 opacity-50">
          <span className="font-['Outfit'] text-white text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center translate-x-4">
            Scroll
          </span>
          <div className="w-px h-12 bg-white/40 animate-pulse" />
        </div>
      </div>

      <div className="absolute top-1/2 right-8 lg:right-12 -translate-y-1/2 hidden lg:block">
        <span
          className="font-['Outfit'] text-white/20 text-[10px] tracking-[0.4em] uppercase"
          style={{ writingMode: "vertical-rl" }}
        >
          Billionaire Gang
        </span>
      </div>
    </section>
  );
}
