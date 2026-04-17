/* TRAY BILLS  Gallery Subpage (/gallery) */
import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery  Tray Bills" },
      { name: "description", content: "Press photos, fashion shoots, and music video stills from Tray Bills." },
      { property: "og:title", content: "Photo Gallery  Tray Bills" },
      { property: "og:description", content: "Press photos, fashion shoots, and music video stills from Tray Bills." },
      { property: "og:image", content: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485941894/RFn3Kh3CZHJ54YvoZNKVZc/tray_closeup_portrait_56af6f53.jpg" },
      { name: "twitter:image", content: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485941894/RFn3Kh3CZHJ54YvoZNKVZc/tray_closeup_portrait_56af6f53.jpg" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#111111] text-white overflow-x-hidden">
      <Navbar />
      <div className="h-20 bg-[#111111]" />
      <GallerySection />
      <Footer />
    </div>
  );
}
