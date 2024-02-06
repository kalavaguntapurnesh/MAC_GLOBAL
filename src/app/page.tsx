"use client";
import Navbar from "@/app/components/Navbar";
import Feedback from "@/app/components/Feedback";
import Countries from "@/app/components/Countries";
import FAQ from "@/app/components/FAQ";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <Carousel /> */}
      <Feedback />
      <Countries />
      <FAQ />
      <Footer />
    </main>
  );
}
