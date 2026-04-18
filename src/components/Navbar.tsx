/**
 * Navbar  Clean minimal fixed nav
 * - On homepage: anchor links for About, Journey, Following, Contact
 * - Gallery and Music are page routes (/gallery, /music)
 * - Gold underline on hover, black CTA button
 */
import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useRouterState({ select: (s) => s.location.pathname });

  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { label: "About", href: isHome ? "#about" : "/#about", isRoute: false },
    { label: "Journey", href: isHome ? "#roadmap" : "/#roadmap", isRoute: false },
    { label: "Following", href: isHome ? "#following" : "/#following", isRoute: false },
    { label: "Gallery", href: "/gallery", isRoute: true },
    { label: "Music", href: "/music", isRoute: true },
    { label: "Contact", href: isHome ? "#contact" : "/#contact", isRoute: false },
  ];

  const isGalleryPage = location === "/gallery";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isGalleryPage
          ? "bg-[#111111]/95 backdrop-blur-sm shadow-sm border-b border-white/10"
          : scrolled || !isHome
            ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-black/5"
            : "bg-black/60 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
        <Link
          to="/"
          className={`font-['Cormorant_Garamond'] text-xl lg:text-2xl font-semibold tracking-widest hover:opacity-70 transition-opacity ${
            isGalleryPage || (isHome && !scrolled) ? "text-white" : "text-foreground"
          }`}
        >
          TRAY BILLS
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const onDark = isGalleryPage || (isHome && !scrolled);
            const className = `font-['Outfit'] text-xs font-medium tracking-[0.15em] uppercase transition-colors relative group ${
              onDark ? "text-white/80 hover:text-white" : "text-foreground/70 hover:text-foreground"
            } ${
              (link.href === "/gallery" && location === "/gallery") ||
              (link.href === "/music" && location === "/music")
                ? "!text-[oklch(0.72_0.12_75)]"
                : ""
            }`;
            const inner = (
              <>
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[oklch(0.72_0.12_75)] group-hover:w-full transition-all duration-300" />
              </>
            );
            return link.isRoute ? (
              <Link key={link.label} to={link.href} className={className}>
                {inner}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className={className}>
                {inner}
              </a>
            );
          })}
          {(() => {
            const onDark = isGalleryPage || (isHome && !scrolled);
            return (
              <a
                href="https://linktr.ee/Traybills"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-['Outfit'] text-xs font-semibold tracking-[0.15em] uppercase px-5 py-2.5 transition-all duration-300 ${
                  onDark
                    ? "bg-white text-black hover:bg-[oklch(0.72_0.12_75)] hover:text-white"
                    : "bg-foreground text-background hover:bg-[oklch(0.72_0.12_75)] hover:text-white"
                }`}
              >
                Connect
              </a>
            );
          })()}
        </div>

        {(() => {
          const onDark = isGalleryPage || (isHome && !scrolled);
          return (
            <button
              className={`lg:hidden flex flex-col gap-1.5 p-2 ${onDark ? "text-white" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-px transition-all duration-300 ${onDark ? "bg-white" : "bg-foreground"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-px transition-all duration-300 ${onDark ? "bg-white" : "bg-foreground"} ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px transition-all duration-300 ${onDark ? "bg-white" : "bg-foreground"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          );
        })()}
      </div>

      <div
        className={`lg:hidden border-t overflow-hidden transition-all duration-300 ${
          isGalleryPage ? "bg-[#111111] border-white/10" : "bg-white border-black/5"
        } ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const className = `font-['Outfit'] text-sm tracking-[0.1em] uppercase transition-colors py-1 ${
              isGalleryPage ? "text-white/60 hover:text-white" : "text-foreground/70 hover:text-foreground"
            }`;
            return link.isRoute ? (
              <Link key={link.label} to={link.href} className={className} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            ) : (
              <a key={link.label} href={link.href} className={className} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            );
          })}
          <a
            href="https://linktr.ee/Traybills"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Outfit'] text-sm tracking-[0.1em] uppercase bg-foreground text-background px-5 py-3 text-center hover:bg-[oklch(0.72_0.12_75)] hover:text-white transition-all duration-300 mt-2"
          >
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
}
