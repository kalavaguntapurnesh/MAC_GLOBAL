"use client";
import Navbar from "@/app/components/Navbar";
import AboutOne from "@/app/about/AboutOne";
import AboutTwo from "@/app/about/AboutTwo";
import ScrollToTop from "@/app/components/ScrollToTop";
import Footer from "@/app/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <AboutOne />
      <ScrollToTop />
      <AboutTwo />
      <Footer />
    </main>
  );
}
