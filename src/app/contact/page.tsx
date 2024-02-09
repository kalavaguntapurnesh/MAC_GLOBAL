"use client";
import Navbar from "@/app/components/Navbar";
import ContactOne from "@/app/contact/ContactOne";
import ContactTwo from "@/app/contact/ContactTwo";
import Footer from "@/app/components/Footer";
import ScrollToTop from "@/app/components/ScrollToTop"
export default function Home() {
  return (
    <main>
      <Navbar />
      <ContactOne />
      <ScrollToTop />
      <ContactTwo />
      <Footer />
    </main>
  );
}
