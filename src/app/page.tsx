"use client";
import Navbar from "@/app/components/Navbar";
import Countries from "@/app/components/Countries";
import Footer from "@/app/components/Footer";


export default function Home() {
  return (
    <main>
      <Navbar />
      {/* <Carousel /> */}
      <Countries/>
      <Footer />
    </main>
  );
}
