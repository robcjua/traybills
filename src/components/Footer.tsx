/* Footer  Clean minimal footer */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 xl:px-24 flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="font-['Cormorant_Garamond'] text-white/30 text-lg tracking-widest">
          BILLY
        </div>

        <div className="font-['Outfit'] text-white/20 text-xs tracking-[0.15em] text-center">
          © {currentYear} Tray Bills. Atlanta, Georgia.
        </div>

        <div className="flex items-center gap-6">
          {[
            { label: "IG", url: "https://www.instagram.com/traymfnbills/" },
            { label: "TT", url: "https://www.tiktok.com/@traybills" },
            { label: "YT", url: "https://www.youtube.com/@TrayBillsTV" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Outfit'] text-[10px] tracking-[0.2em] uppercase text-white/20 hover:text-[oklch(0.72_0.12_75)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
