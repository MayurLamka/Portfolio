"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import SocialCardsSection from "@/components/SocialCardsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleSelectProjectFromHero = (projectId: string) => {
    setSelectedProjectId(projectId);
    const projectsElem = document.getElementById("projects");
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0d0907] text-neutral-100 flex flex-col font-sans selection:bg-orange-500/30 selection:text-orange-200 overflow-x-hidden">
      {/* Top Floating Glass Navigation */}
      <Navbar />

      {/* Main Portfolio Flow */}
      <main className="flex-1">
        {/* 1:1 Replicated Orange Hero Canvas with Floating Cards & Portait */}
        <HeroSection onSelectProject={handleSelectProjectFromHero} />

        {/* Quick Engineering Key Metrics & Highlights */}
        <StatsStrip />

        {/* Background, Education & Philosophy */}
        <AboutSection />

        {/* Interactive Filterable Technical Skills Matrix */}
        <SkillsSection />

        {/* Featured Projects with Interactive Mockups & Deep-Dive Modals */}
        <ProjectsSection
          selectedProjectId={selectedProjectId}
          onClearSelectedProject={() => setSelectedProjectId(null)}
        />

        {/* Dedicated GitHub, LinkedIn, and LeetCode Interactive Cards */}
        <SocialCardsSection />

        {/* Contact & Direct Gmail Compose Redirect */}
        <ContactSection />
      </main>

      {/* Footer with Copyright and Quick Nav */}
      <Footer />
    </div>
  );
}
