"use client";

import Hero from "@/components/homepage/Hero";
import QuickInfo from "@/components/homepage/QuickInfo";
import MenuPreview from "@/components/homepage/MenuPreview";
import About from "@/components/homepage/About";
import Contact from "@/components/homepage/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <QuickInfo />
      <MenuPreview />
      <About />
      <Contact />
    </div>
  );
}
