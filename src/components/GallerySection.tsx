/**
 * GallerySection  Dark editorial masonry grid
 */
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485941894/RFn3Kh3CZHJ54YvoZNKVZc";

const photos = [
  {
    id: 1,
    src: `${CDN}/tray_closeup_portrait_56af6f53.jpg`,
    alt: "Tray Bills  close-up portrait with iced-out watch and rings",
    caption: "Portrait",
    label: "Press",
    tall: true,
    link: "https://www.instagram.com/traymfnbills/",
  },
  {
    id: 2,
    src: `${CDN}/tray_side_goyard_007ae10a.jpg`,
    alt: "Tray Bills  side profile with Goyard clutch",
    caption: "Side Profile",
    label: "Fashion",
    tall: false,
    link: "https://www.instagram.com/traymfnbills/",
  },
  {
    id: 3,
    src: `${CDN}/tray_cap_tilt_d9352dca.jpg`,
    alt: "Tray Bills  tilting cap, looking down",
    caption: "Cap Tilt",
    label: "Editorial",
    tall: false,
    link: "https://www.instagram.com/traymfnbills/",
  },
  {
    id: 4,
    src: `${CDN}/tray_goyard_bag_9a314d78.jpg`,
    alt: "Tray Bills  holding Goyard bag, looking away",
    caption: "Goyard",
    label: "Style",
    tall: true,
    link: "https://www.instagram.com/traymfnbills/",
  },
  {
    id: 5,
    src: `${CDN}/tray_sunglasses_pose_343f8fc7.jpg`,
    alt: "Tray Bills  holding sunglasses and Goyard, direct gaze",
    caption: "Sunglasses",
    label: "Shoot",
    tall: false,
    link: "https://www.instagram.com/traymfnbills/",
  },
  {
    id: 6,
    src: `${CDN}/tray_motion_blur_5d97f8ed.jpg`,
    alt: "Tray Bills  multi-exposure motion blur shoot",
    caption: "Motion",
    label: "Creative",
    tall: false,
    link: "https://www.instagram.com/traymfnbills/",
  },
  {
    id: 7,
    src: `${CDN}/we_wylin_1005b6c6.jpg`,
    alt: "Tray Bills  We Wylin official video still",
    caption: "We Wylin",
    label: "Official Video",
    tall: false,
    link: "https://www.youtube.com/watch?v=nuhchMbfubU",
  },
  {
    id: 8,
    src: `${CDN}/uh_oh_76c50114.jpg`,
    alt: "Tray Bills  UH OH music video still",
    caption: "UH OH",
    label: "Music Video",
    tall: true,
    link: "https://www.youtube.com/watch?v=E8dVEHEkmAs",
  },
  {
    id: 9,
    src: `${CDN}/weather_man_b652141f.jpg`,
    alt: "Tray Bills  Weather Man single cover",
    caption: "Weather Man",
    label: "Single",
    tall: false,
    link: "https://www.youtube.com/watch?v=mzE3AC0teoI",
  },
  {
    id: 10,
    src: `${CDN}/new_flava_effccf37.jpg`,
    alt: "Tray Bills  New Flava single cover",
    caption: "New Flava",
    label: "2025",
    tall: false,
    link: "https://www.youtube.com/watch?v=cE-F7mc30KQ",
  },
  {
    id: 11,
    src: `${CDN}/hot_topic_a028d228.jpg`,
    alt: "Tray Bills  Hot Topic ft. Richy Rolex video still",
    caption: "Hot Topic",
    label: "Collab",
    tall: false,
    link: "https://www.youtube.com/watch?v=Z_iToUzX5lw",
  },
  {
    id: 12,
    src: `${CDN}/freestylin_37207f97.jpg`,
    alt: "Tray Bills  Freestylin' video still",
    caption: "Freestylin'",
    label: "Performance",
    tall: false,
    link: "https://www.youtube.com/watch?v=3uo5sMz_yFU",
  },
];

function InstagramIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="bg-[#111111] py-24 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">

        <div
          className={`mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Link
                to="/"
                className="font-['Outfit'] text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-white/60 transition-colors"
              >
                ← Home
              </Link>
            </div>
            <span className="section-number" style={{ color: "oklch(0.72 0.12 75)" }}>04 · Gallery</span>
            <h2
              className="font-['Cormorant_Garamond'] text-white mt-3 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400 }}
            >
              Photo
              <br />
              <em>Shoots</em>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/traymfnbills/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-['Outfit'] text-xs tracking-[0.15em] uppercase border border-white/20 text-white/60 px-6 py-3 hover:border-[oklch(0.72_0.12_75)] hover:text-[oklch(0.72_0.12_75)] transition-all duration-300 self-start lg:self-auto"
          >
            <InstagramIcon />
            @traymfnbills
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4" style={{ gridAutoRows: "220px" }}>
          {photos.map((photo, index) => (
            <a
              key={photo.id}
              href={photo.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative overflow-hidden group cursor-pointer transition-all duration-700 block ${
                photo.tall ? "row-span-2" : "row-span-1"
              } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 55}ms` }}
              onMouseEnter={() => setHoveredId(photo.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />

              <div className="absolute top-3 left-3">
                <span
                  className="font-['Outfit'] text-[9px] tracking-[0.18em] uppercase px-2 py-1"
                  style={{ backgroundColor: "rgba(0,0,0,0.6)", color: "oklch(0.72 0.12 75)", backdropFilter: "blur(4px)" }}
                >
                  {photo.label}
                </span>
              </div>

              <div
                className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-300 ${
                  hoveredId === photo.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <p className="font-['Cormorant_Garamond'] text-white text-xl font-light leading-tight">
                  {photo.caption}
                </p>
                <p className="font-['Outfit'] text-white/50 text-[10px] tracking-widest uppercase mt-1">
                  View →
                </p>
              </div>
            </a>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-[660ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <a
            href="https://www.instagram.com/traymfnbills/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-['Outfit'] text-sm tracking-[0.1em] uppercase text-white/30 hover:text-[oklch(0.72_0.12_75)] transition-colors"
          >
            @traymfnbills · 752K followers on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
