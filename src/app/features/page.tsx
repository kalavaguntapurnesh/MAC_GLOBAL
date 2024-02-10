"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AboutOne from "../about/AboutOne";
export default function Home() {
  return (
    <main>
      <Navbar />
      <AboutOne/>
      <Footer />
    </main>
  );
}