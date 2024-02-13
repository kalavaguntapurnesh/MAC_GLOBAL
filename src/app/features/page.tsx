"use client";
import Navbar from "@/app/features/Navbar";
import Footer from "@/app/components/Footer";
import FeaturesOne from "@/app/features/FeaturesOne";
import FeaturesTwo from "@/app/features/FeatureTwo";
import Hero from "@/app/components/Hero";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturesOne />
      <FeaturesTwo />
      <Footer />
    </main>
  );
}
