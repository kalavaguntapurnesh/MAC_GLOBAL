"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeaturesOne from "@/app/features/FeaturesOne";
import FeaturesTwo from "@/app/features/FeaturesTwo";
import ScrollToTop from "@/app/components/ScrollToTop";
import FeaturesThree from "@/app/features/FeaturesThree";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FeaturesOne />
      <ScrollToTop />
      <FeaturesTwo />
      <FeaturesThree />
      <Footer />
    </main>
  );
}
