import { useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { News } from "@/components/home/news";
import { Tracks } from "@/components/home/tracks";
import { Teachers } from "@/components/home/teachers";
import NewLogo from "@assets/logo.jpg";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col font-sans overflow-x-hidden">

      {/* Animated dynamic background */}
      <div className="fixed inset-0 -z-10 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_15%_10%,hsl(var(--primary)/0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_85%_80%,hsl(167_100%_70%/0.06),transparent)]" />

        {/* Watermark with new logo */}
        <img
          src={NewLogo}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute"
          style={{
            width: "min(70vw, 500px)",
            height: "min(70vw, 500px)",
            opacity: 0.05,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            objectFit: "contain",
          }}
        />

        {/* Static colour orbs */}
        <div
          className="absolute h-[600px] w-[600px] rounded-full blur-[120px] opacity-30"
          style={{ background: "hsl(var(--primary)/0.4)", top: "-10%", right: "-10%" }}
        />
        <div
          className="absolute h-[500px] w-[500px] rounded-full blur-[100px] opacity-25"
          style={{ background: "hsl(167 100% 50% / 0.5)", bottom: "10%", left: "-5%" }}
        />
        <div
          className="absolute h-[400px] w-[400px] rounded-full blur-[90px] opacity-20"
          style={{ background: "hsl(250 80% 60% / 0.4)", top: "40%", left: "40%" }}
        />
      </div>

      <Header />
      <main className="flex-1 pt-20">
        <Hero />
        <News />
        <Tracks />
        <Teachers />
      </main>
      <Footer />
    </div>
  );
}
