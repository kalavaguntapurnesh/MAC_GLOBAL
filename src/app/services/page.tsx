"use client";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ServicesOne from "@/app/services/ServicesOne";
export default function Home() {
  return (
    <main>
      <Navbar />
      <ServicesOne/>
      <Footer />
    </main>
  );
}