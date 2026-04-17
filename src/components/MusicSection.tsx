/**
 * MusicSection  Clean Luxury Editorial Design
 */
import { useEffect, useRef, useState } from "react";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663485941894/RFn3Kh3CZHJ54YvoZNKVZc";

const tracks = [
  {
    number: "01",
    title: "New Flava",
    description: "Latest single  smooth R&B vibes with Atlanta heat",
    type: "Single",
    year: "2025",
    youtubeId: "cE-F7mc30KQ",
    spotifyUrl: "https://open.spotify.com/artist/02SBfl5AcHDQA3AL4M8YDa",
    thumbnail: `${CDN}/new_flava_effccf37.jpg`,
  },
  {
    number: "02",
    title: "Weather Man",
    description: "Certified banger  bringing the forecast to the streets",
    type: "Single",
    year: "2023",
    youtubeId: "mzE3AC0teoI",
    spotifyUrl: "https://open.spotify.com/artist/02SBfl5AcHDQA3AL4M8YDa",
    thumbnail: `${CDN}/weather_man_b652141f.jpg`,
  },
  {
    number: "03",
    title: "We Wylin",
    description: "Official music video  high energy summer anthem",
    type: "Official Video",
    year: "2022",
    youtubeId: "nuhchMbfubU",
    spotifyUrl: "https://open.spotify.com/artist/02SBfl5AcHDQA3AL4M8YDa",
    thumbnail: `${CDN}/we_wylin_1005b6c6.jpg`,
  },
  {
    number: "04",
    title: "UH OH ft. Juno Central",
    description: "Hard-hitting collab with Juno Central",
    type: "Single",
    year: "2021",
    youtubeId: "E8dVEHEkmAs",
    spotifyUrl: "https://open.spotify.com/artist/02SBfl5AcHDQA3AL4M8YDa",
    thumbnail: `${CDN}/uh_oh_76c50114.jpg`,
  },
  {
    number: "05",
    title: "In My Bag",
    description: "ft. Chris Gilly & Miita 6  The Leak EP",
    type: "EP Track",
    year: "2020",
    youtubeId: "S0CmZNKL7CM",
    spotifyUrl: "https://open.spotify.com/artist/02SBfl5AcHDQA3AL4M8YDa",
    thumbnail: `${CDN}/in_my_bag_132cddc9.jpg`,
  },
  {
    number: "06",
    title: "Flexin",
    description: "From The Bills Way  anthem of the Billionaire Gang",
    type: "Album Track",
    year: "2019",
    youtubeId: "yptOxrDLPsY",
    spotifyUrl: "https://open.spotify.com/artist/02SBfl5AcHDQA3AL4M8YDa",
    thumbnail: `${CDN}/flexin_be436b05.jpg`,
  },
  {
    number: "07",
    title: "Hot Topic ft. Richy Rolex",
    description: "The collab that put him on the map  210K views",
    type: "Feature",
    year: "2018",
    youtubeId: "Z_iToUzX5lw",
    spotifyUrl: "https://open.spotify.com/artist/02SBfl5AcHDQA3AL4M8YDa",
    thumbnail: `${CDN}/hot_topic_a028d228.jpg`,
  },
  {
    number: "08",
    title: "Freestylin'",
    description: "Pure bars  showcasing the lyrical side of Tray Bills",
    type: "Single",
    year: "2018",
    youtubeId: "3uo5sMz_yFU",
    spotifyUrl: "https://open.spotify.com/artist/02SBfl5AcHDQA3AL4M8YDa",
    thumbnail: `${CDN}/freestylin_37207f97.jpg`,
  },
];

function PlayIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function YoutubeIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function SpotifyIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export default function MusicSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeTrack, setActiveTrack] = useState<(typeof tracks)[0] | null>(null);
  const [playerVisible, setPlayerVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (playerVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [playerVisible]);

  const openPlayer = (track: (typeof tracks)[0]) => {
    setActiveTrack(track);
    setPlayerVisible(true);
  };

  const closePlayer = () => {
    setPlayerVisible(false);
    setTimeout(() => setActiveTrack(null), 300);
  };

  const goToTrack = (delta: number) => {
    if (!activeTrack) return;
    const idx = tracks.findIndex(t => t.youtubeId === activeTrack.youtubeId);
    const next = tracks[idx + delta];
    if (next) setActiveTrack(next);
  };

  return (
    <>
      <section
        id="music"
        ref={sectionRef}
        className="bg-[#fafaf8] py-24 lg:py-36"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24">

          <div
            className={`mb-16 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div>
              <span className="section-number">05  Music</span>
              <h2
                className="font-['Cormorant_Garamond'] text-foreground mt-3 leading-tight"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400 }}
              >
                Music
                <br />
                <em>Catalog</em>
              </h2>
            </div>
            <div className="flex gap-3">
              <a
                href="https://open.spotify.com/artist/02SBfl5AcHDQA3AL4M8YDa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-['Outfit'] text-xs tracking-[0.1em] uppercase bg-[#1DB954] text-white px-5 py-2.5 hover:bg-[#1aa34a] transition-colors"
              >
                <SpotifyIcon size={13} />
                Spotify
              </a>
              <a
                href="https://www.youtube.com/@TrayBillsTV"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-['Outfit'] text-xs tracking-[0.1em] uppercase bg-[#FF0000] text-white px-5 py-2.5 hover:bg-[#cc0000] transition-colors"
              >
                <YoutubeIcon size={13} />
                YouTube
              </a>
            </div>
          </div>

          <div className="divide-y divide-black/[0.07]">
            {tracks.map((track, index) => (
              <div
                key={track.number}
                className={`group flex items-center gap-4 lg:gap-6 py-5 cursor-pointer hover:bg-black/[0.02] transition-all duration-700 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
                onClick={() => openPlayer(track)}
              >
                <div className="relative flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 overflow-hidden">
                  <img
                    src={track.thumbnail}
                    alt={track.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                    <PlayIcon size={16} />
                  </div>
                </div>

                <span
                  className="hidden lg:block flex-shrink-0 font-['Cormorant_Garamond'] text-foreground/15 text-2xl w-8 text-right group-hover:text-[oklch(0.72_0.12_75)] transition-colors duration-300"
                >
                  {track.number}
                </span>

                <button
                  className="flex-shrink-0 w-9 h-9 flex items-center justify-center border border-foreground/20 text-foreground/40 group-hover:border-[oklch(0.72_0.12_75)] group-hover:text-[oklch(0.72_0.12_75)] transition-all duration-300"
                  onClick={(e) => { e.stopPropagation(); openPlayer(track); }}
                  aria-label={`Play ${track.title}`}
                >
                  <PlayIcon size={12} />
                </button>

                <div className="flex-1 min-w-0">
                  <div className="font-['Cormorant_Garamond'] text-foreground text-lg lg:text-xl font-500 leading-tight group-hover:text-[oklch(0.72_0.12_75)] transition-colors">
                    {track.title}
                  </div>
                  <div className="font-['Outfit'] text-foreground/40 text-xs lg:text-sm mt-0.5 truncate">
                    {track.description}
                  </div>
                </div>

                <span className="hidden sm:block flex-shrink-0 font-['Outfit'] text-[10px] tracking-[0.18em] uppercase text-foreground/30">
                  {track.type}
                </span>

                <span className="hidden sm:block flex-shrink-0 font-['Cormorant_Garamond'] text-foreground/25 text-lg">
                  {track.year}
                </span>

                <div className="flex items-center gap-1 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                  <a
                    href={`https://www.youtube.com/watch?v=${track.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center text-foreground/25 hover:text-[#FF0000] transition-colors"
                    title="Watch on YouTube"
                    aria-label={`Watch ${track.title} on YouTube`}
                  >
                    <YoutubeIcon size={15} />
                  </a>
                  <a
                    href={track.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 flex items-center justify-center text-foreground/25 hover:text-[#1DB954] transition-colors"
                    title="Listen on Spotify"
                    aria-label={`Listen to ${track.title} on Spotify`}
                  >
                    <SpotifyIcon size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`mt-12 transition-all duration-700 delay-[600ms] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <a
              href="https://www.youtube.com/@TrayBillsTV"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Outfit'] text-xs tracking-[0.15em] uppercase text-foreground/40 hover:text-foreground transition-colors inline-flex items-center gap-2"
            >
              View full catalog on YouTube
              <span style={{ color: "oklch(0.72 0.12 75)" }}>→</span>
            </a>
          </div>
        </div>
      </section>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          playerVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "rgba(0,0,0,0.88)", backdropFilter: "blur(10px)" }}
        onClick={closePlayer}
      >
        <div
          className={`relative w-full max-w-3xl transition-all duration-300 ${
            playerVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-6"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start justify-between mb-4 px-1">
            <div>
              <p className="font-['Cormorant_Garamond'] text-white leading-tight" style={{ fontSize: "1.6rem", fontWeight: 300 }}>
                {activeTrack?.title}
              </p>
              <p className="font-['Outfit'] text-white/40 text-[10px] tracking-[0.18em] uppercase mt-1">
                {activeTrack?.year} · {activeTrack?.type} · Tray Bills
              </p>
            </div>
            <div className="flex items-center gap-2 ml-4 flex-shrink-0">
              <a
                href={activeTrack ? `https://www.youtube.com/watch?v=${activeTrack.youtubeId}` : "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FF0000] text-white font-['Outfit'] text-[10px] tracking-widest uppercase hover:bg-[#cc0000] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <YoutubeIcon size={11} />
                YouTube
              </a>
              <a
                href={activeTrack?.spotifyUrl ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#1DB954] text-white font-['Outfit'] text-[10px] tracking-widest uppercase hover:bg-[#1aa34a] transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <SpotifyIcon size={11} />
                Spotify
              </a>
              <button
                onClick={closePlayer}
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-colors"
                aria-label="Close player"
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            {activeTrack && (
              <iframe
                key={activeTrack.youtubeId}
                src={`https://www.youtube.com/embed/${activeTrack.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeTrack.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
              />
            )}
          </div>

          <div className="flex items-center justify-between mt-4 px-1">
            <button
              onClick={() => goToTrack(-1)}
              disabled={!activeTrack || tracks.findIndex(t => t.youtubeId === activeTrack.youtubeId) === 0}
              className="font-['Outfit'] text-[10px] tracking-widest uppercase text-white/30 hover:text-white disabled:opacity-20 transition-colors"
            >
              ← Prev
            </button>
            <div className="flex gap-1.5">
              {tracks.map((t) => (
                <button
                  key={t.youtubeId}
                  onClick={() => setActiveTrack(t)}
                  className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: activeTrack?.youtubeId === t.youtubeId
                      ? "oklch(0.72 0.12 75)"
                      : "rgba(255,255,255,0.2)",
                  }}
                  aria-label={`Play ${t.title}`}
                />
              ))}
            </div>
            <button
              onClick={() => goToTrack(1)}
              disabled={!activeTrack || tracks.findIndex(t => t.youtubeId === activeTrack.youtubeId) === tracks.length - 1}
              className="font-['Outfit'] text-[10px] tracking-widest uppercase text-white/30 hover:text-white disabled:opacity-20 transition-colors"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
