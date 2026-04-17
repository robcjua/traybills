/* ContactSection  Booking/contact info with social links */
import { useEffect, useRef, useState } from "react";

const socialLinks = [
  { label: "Instagram", handle: "@traymfnbills", url: "https://www.instagram.com/traymfnbills/" },
  { label: "TikTok", handle: "@traybills", url: "https://www.tiktok.com/@traybills" },
  { label: "YouTube", handle: "@TrayBillsTV", url: "https://www.youtube.com/@TrayBillsTV" },
  { label: "Snapchat", handle: "@traybills", url: "https://www.snapchat.com/@traybills" },
  { label: "Twitter / X", handle: "@traybills", url: "https://x.com/traybills" },
  { label: "Spotify", handle: "Tray Bills", url: "https://open.spotify.com/artist/02SBfl5AcHDQA3AL4M8YDa" },
];

export default function ContactSection() {
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
      id="contact"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] py-24 lg:py-36 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663485941894/RFn3Kh3CZHJ54YvoZNKVZc/atlanta_skyline-jWYGe5sJbtzFH3zooToPA6.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          <div
            className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
          >
            <span className="section-number text-[oklch(0.72_0.12_75)]">04  Connect</span>
            <h2
              className="font-['Cormorant_Garamond'] text-white mt-3 mb-8 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400 }}
            >
              Work With
              <br />
              <em>Billy</em>
            </h2>

            <p className="font-['Outfit'] text-white/50 text-sm leading-relaxed mb-10 max-w-sm">
              For bookings, brand partnerships, collaborations, and press inquiries  reach out directly.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:traybillsbookings@gmail.com"
                className="group flex items-center gap-4 border border-white/10 p-5 hover:border-[oklch(0.72_0.12_75)] transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-[oklch(0.72_0.12_75)] transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/40 group-hover:fill-[oklch(0.72_0.12_75)] transition-colors">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-['Outfit'] text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1">Bookings</div>
                  <div className="font-['Outfit'] text-white/70 text-sm group-hover:text-white transition-colors">
                    traybillsbookings@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="mailto:traybillsmanage@gmail.com"
                className="group flex items-center gap-4 border border-white/10 p-5 hover:border-[oklch(0.72_0.12_75)] transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-[oklch(0.72_0.12_75)] transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/40 group-hover:fill-[oklch(0.72_0.12_75)] transition-colors">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div>
                  <div className="font-['Outfit'] text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1">Management</div>
                  <div className="font-['Outfit'] text-white/70 text-sm group-hover:text-white transition-colors">
                    traybillsmanage@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://linktr.ee/Traybills"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-white/10 p-5 hover:border-[oklch(0.72_0.12_75)] transition-all duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-white/10 group-hover:border-[oklch(0.72_0.12_75)] transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white/40 group-hover:fill-[oklch(0.72_0.12_75)] transition-colors">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-['Outfit'] text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1">All Links</div>
                  <div className="font-['Outfit'] text-white/70 text-sm group-hover:text-white transition-colors">
                    linktr.ee/Traybills
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}
          >
            <div className="mb-8">
              <div className="font-['Outfit'] text-xs tracking-[0.2em] uppercase text-white/30 mb-6">
                Follow Along
              </div>
              <div className="space-y-0">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 border-b border-white/8 hover:border-[oklch(0.72_0.12_75)]/30 transition-all duration-300"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="font-['Outfit'] text-white/50 text-sm group-hover:text-white transition-colors tracking-wide">
                      {link.label}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-['Outfit'] text-xs text-white/30 group-hover:text-[oklch(0.72_0.12_75)] transition-colors">
                        {link.handle}
                      </span>
                      <span className="text-white/20 group-hover:text-[oklch(0.72_0.12_75)] transition-colors text-sm">→</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <a
              href="https://linktr.ee/Traybills"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center font-['Outfit'] text-xs tracking-[0.2em] uppercase bg-[oklch(0.72_0.12_75)] text-white py-4 hover:bg-[oklch(0.65_0.12_75)] transition-colors mt-8"
            >
              View All Links  Linktree
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
