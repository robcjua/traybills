/* TRAY BILLS  Music Subpage (/music) */
import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import MusicSection from "@/components/MusicSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/music")({
  head: () => ({
    meta: [
      { title: "Music Catalog  Tray Bills" },
      { name: "description", content: "Listen to Tray Bills' music catalog: New Flava, Weather Man, We Wylin, UH OH, In My Bag, Flexin, Hot Topic, and more." },
      { property: "og:title", content: "Music Catalog  Tray Bills" },
      { property: "og:description", content: "Stream the full Tray Bills catalog on YouTube and Spotify." },
      { property: "og:image", content: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485941894/RFn3Kh3CZHJ54YvoZNKVZc/new_flava_effccf37.jpg" },
      { name: "twitter:image", content: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485941894/RFn3Kh3CZHJ54YvoZNKVZc/new_flava_effccf37.jpg" },
    ],
  }),
  component: MusicPage,
});

function MusicPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="h-20" />
      <MusicSection />
      <Footer />
    </div>
  );
}
