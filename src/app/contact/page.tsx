"use client";
import Navbar from "@/app/components/Navbar";
import ContactOne from "@/app/contact/ContactOne";
import ContactTwo from "@/app/contact/ContactTwo";
import Footer from "@/app/components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <ContactOne />
      <ContactTwo />
      <Footer />
    </main>
  );
}
