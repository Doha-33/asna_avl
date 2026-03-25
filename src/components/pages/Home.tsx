"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/home/Hero";
import { StatsSection } from "@/components/home/StatsSection";
import { AboutSection } from "@/components/home/AboutSection";
import { FeatureBento } from "@/components/home/FeatureBento";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { PricingSection } from "@/components/home/PricingSection";
import { BlogSection } from "@/components/home/BlogSection";
import { AppDownloadSection } from "@/components/home/AppDownloadSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { OffersSection } from "@/components/home/OffersSection";
import { ContactSection } from "@/components/home/ContactSection";
import { CTASection } from "@/components/home/CTASection";
import { Footer } from "@/components/Footer";

export default function HomePage({ lang = "ar" }: { lang?: "ar" | "en" }) {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      {/* <StatsSection /> */}
      <AboutSection />
      <FeaturedProducts />
      <ClientsSection />
      <PricingSection />
      <OffersSection />
      <BlogSection />
      <FeatureBento />
      <AppDownloadSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
