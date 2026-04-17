/* TRAY BILLS DIGITAL BUSINESS CARD  Home Page */
import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoadmapSection from "@/components/RoadmapSection";
import FollowingSection from "@/components/FollowingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tray Bills (BILLY)  Atlanta Music Artist & Creator" },
      { name: "description", content: "Tray Bills, known as BILLY, is an Atlanta music artist, content creator, and fashion influencer leading the Billionaire Gang." },
      { property: "og:title", content: "Tray Bills (BILLY)  Atlanta Music Artist & Creator" },
      { property: "og:description", content: "Atlanta music artist, content creator, and fashion influencer leading the Billionaire Gang." },
      { property: "og:image", content: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485941894/RFn3Kh3CZHJ54YvoZNKVZc/tray_closeup_portrait_56af6f53.jpg" },
      { name: "twitter:image", content: "https://d2xsxph8kpxj0f.cloudfront.net/310519663485941894/RFn3Kh3CZHJ54YvoZNKVZc/tray_closeup_portrait_56af6f53.jpg" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <RoadmapSection />
      <FollowingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
