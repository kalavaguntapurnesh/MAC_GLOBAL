"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import FeaturesOne from "@/app/features/FeaturesOne";
import FeaturesTwo from "@/app/features/FeaturesTwo";
import FeaturesThree from "@/app/features/FeaturesThree";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FeaturesOne />
      <FeaturesTwo />
      <FeaturesThree />
      <Footer />
    </main>
  );
}
