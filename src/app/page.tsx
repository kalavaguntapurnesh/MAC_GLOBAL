"use client";
import Navbar from "@/app/components/Navbar";
import Heros from "@/app/components/Heros";
import TrackRecord from "@/app/components/TrackRecord";
import Feedback from "@/app/components/Feedback";
import ActiveSlider from "@/app/components/ActiveSlider";
import Countries from "@/app/components/Countries";
import ScrollToTop from "@/app/components/ScrollToTop";
import Universities from "@/app/components/Universities";
import FAQ from "@/app/components/FAQ";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <Hero /> */}
      <Heros />
      <TrackRecord />
      <ScrollToTop />
      <Feedback />
      <ActiveSlider />
      <Countries />
      <Universities />
      <FAQ />
      <Footer />
    </main>
  );
}
