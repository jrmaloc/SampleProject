
import Image from "next/image";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import { Features } from "./components/Features";
import { FAQ } from "./components/FAQ";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="px-[20px] lg:mx-auto lg:container">
        <Features />
        <FAQ />
        <Pricing />
        <CTA />
        <Footer/>
      </div>
    </>
  );
}
