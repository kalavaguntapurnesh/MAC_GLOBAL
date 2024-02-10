"use client";
import Navbar from "@/app/components/Navbar";
import AboutOne from "@/app/about/AboutOne";
import AboutTwo from "@/app/about/AboutTwo";
import AboutThree from "@/app/about/AboutThree";
import ScrollToTop from "@/app/components/ScrollToTop";
import Footer from "@/app/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <AboutOne />
      <ScrollToTop />
      <AboutThree />
      {/* <AboutTwo /> */}
      <Footer />
    </main>
  );
}
