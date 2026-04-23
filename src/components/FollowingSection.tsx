/* FollowingSection  Animated social following stats */
import { useEffect, useRef, useState } from "react";

const platforms = [
  {
    name: "TikTok",
    handle: "@traybills",
    display: "1.5M",
    label: "Followers",
    sublabel: "10M views / 60 days",
    url: "https://www.tiktok.com/@traybills",
    color: "from-[#010101] to-[#69C9D0]",
  },
  {
    name: "Instagram",
    handle: "@traymfnbills",
    display: "753K",
    label: "Followers",
    sublabel: "4.4M views / 90 days",
    url: "https://www.instagram.com/traymfnbills/",
    color: "from-[#833AB4] to-[#FD1D1D]",
  },
  {
    name: "YouTube",
    handle: "@TrayBillsTV",
    display: "384K",
    label: "Subscribers",
    sublabel: "27.3M lifetime views",
    url: "https://www.youtube.com/@TrayBillsTV",
    color: "from-[#FF0000] to-[#CC0000]",
  },
  {
    name: "Snapchat",
    handle: "@traybills",
    display: "303K",
    label: "Followers",
    sublabel: "Public Figure",
    url: "https://www.snapchat.com/@traybills",
    color: "from-[#FFFC00] to-[#FFD700]",
  },
  {
    name: "Twitter / X",
    handle: "@traybills",
    display: "152K",
    label: "Followers",
    sublabel: "Since 2015",
    url: "https://x.com/traybills",
    color: "from-[#1DA1F2] to-[#0d8ecf]",
  },
];

function StatCard({ platform, index, visible }: { platform: typeof platforms[0]; index: number; visible: boolean }) {
  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block bg-white border border-black/5 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="font-['Outfit'] text-xs tracking-[0.2em] uppercase text-foreground/40 mb-4">
        {platform.name}
      </div>

      <div
        className="font-['Cormorant_Garamond'] text-5xl lg:text-6xl font-semibold text-foreground mb-1 group-hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300"
      >
        {platform.display}
      </div>

      <div className="font-['Outfit'] text-sm text-foreground/60 mb-3">
        {platform.label}
      </div>

      <div className="font-['Outfit'] text-xs tracking-[0.1em] text-foreground/40 uppercase">
        {platform.sublabel}
      </div>

      <div className="mt-4 pt-4 border-t border-black/5 font-['Outfit'] text-xs text-foreground/40 group-hover:text-[oklch(0.72_0.12_75)] transition-colors">
        {platform.handle}
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${platform.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </a>
  );
}

export default function FollowingSection() {
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
      id="following"
      ref={sectionRef}
      className="bg-[#fafaf8] py-24 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
        <div
          className={`mb-16 lg:mb-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="section-number">03 · Following</span>
          <h2
            className="font-['Cormorant_Garamond'] text-foreground mt-3 leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400 }}
          >
            The Billionaire
            <br />
            <em>Gang</em>
          </h2>
          <p className="font-['Outfit'] text-foreground/50 text-sm mt-4 max-w-md leading-relaxed">
            A community of over 3 million across platforms, built on authentic content, real stories, and genuine connection. <strong className="text-foreground/70">100% organic. Zero paid ads.</strong>
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {platforms.map((platform, index) => (
            <StatCard
              key={platform.name}
              platform={platform}
              index={index}
              visible={visible}
            />
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center gap-4">
            <div className="w-16 h-px bg-foreground/20" />
            <span className="font-['Cormorant_Garamond'] text-2xl text-foreground/40 italic">
              3M+ total reach
            </span>
            <div className="w-16 h-px bg-foreground/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
