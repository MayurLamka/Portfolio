"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/lib/portfolio-data";
import { HERO_REFERENCE_IMAGE } from "@/lib/hero-reference";
import { ArrowUpRight, Sparkles, Terminal, Layers, Code } from "lucide-react";

interface HeroSectionProps {
  onSelectProject?: (projectId: string) => void;
}

export default function HeroSection({ onSelectProject }: HeroSectionProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 6, y: y * -6 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-12 sm:pb-20 px-3 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Laser Streaks & Atmospheric Lighting */}
      <div className="laser-beam-tl" />
      <div className="laser-beam-br" />
      <div className="laser-line-1" />
      <div className="laser-line-2" />

      {/* Main Orange Canvas Container */}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="max-w-7xl mx-auto rounded-[2rem] sm:rounded-[2.5rem] relative overflow-hidden shadow-[0_30px_100px_rgba(240,78,29,0.32)] border border-orange-500/30 bg-gradient-to-br from-[#ff581c] via-[#f14912] to-[#da3906]"
      >
        {/* Radial Glow Lighting Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,140,80,0.35)_0%,transparent_65%)] pointer-events-none" />

        {/* Technical Coordinate Grid Overlay with Crosshairs */}
        <div className="absolute inset-0 pointer-events-none grid grid-cols-4 grid-rows-4">
          {/* Vertical and Horizontal Grid Lines */}
          <div className="border-r border-white/15 h-full w-full" />
          <div className="border-r border-white/15 h-full w-full" />
          <div className="border-r border-white/15 h-full w-full" />
          <div className="h-full w-full" />

          {/* Precision Crosshairs (+) at Intersections */}
          <span className="crosshair-indicator absolute top-[12%] left-[25%] -translate-x-1/2 -translate-y-1/2">
            +
          </span>
          <span className="crosshair-indicator absolute top-[12%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            +
          </span>
          <span className="crosshair-indicator absolute top-[12%] left-[75%] -translate-x-1/2 -translate-y-1/2">
            +
          </span>

          <span className="crosshair-indicator absolute top-[38%] left-[8%] -translate-x-1/2 -translate-y-1/2">
            +
          </span>
          <span className="crosshair-indicator absolute top-[38%] left-[25%] -translate-x-1/2 -translate-y-1/2">
            +
          </span>
          <span className="crosshair-indicator absolute top-[38%] left-[75%] -translate-x-1/2 -translate-y-1/2">
            +
          </span>
          <span className="crosshair-indicator absolute top-[38%] left-[92%] -translate-x-1/2 -translate-y-1/2">
            +
          </span>

          <span className="crosshair-indicator absolute top-[68%] left-[8%] -translate-x-1/2 -translate-y-1/2">
            +
          </span>
          <span className="crosshair-indicator absolute top-[68%] left-[25%] -translate-x-1/2 -translate-y-1/2">
            +
          </span>
          <span className="crosshair-indicator absolute top-[68%] left-[75%] -translate-x-1/2 -translate-y-1/2">
            +
          </span>
          <span className="crosshair-indicator absolute top-[68%] left-[92%] -translate-x-1/2 -translate-y-1/2">
            +
          </span>

          <span className="crosshair-indicator absolute bottom-[8%] left-[8%] -translate-x-1/2 -translate-y-1/2">
            +
          </span>
          <span className="crosshair-indicator absolute bottom-[8%] left-[25%] -translate-x-1/2 -translate-y-1/2">
            +
          </span>
          <span className="crosshair-indicator absolute bottom-[8%] left-[75%] -translate-x-1/2 -translate-y-1/2">
            +
          </span>
          <span className="crosshair-indicator absolute bottom-[8%] left-[92%] -translate-x-1/2 -translate-y-1/2">
            +
          </span>
        </div>

        {/* Embedded Card Header Nav (Faithful to design) */}
        <div className="relative z-20 flex items-center justify-between px-6 sm:px-10 pt-6 sm:pt-8 pb-4 text-white">
          <div className="flex items-center gap-2">
            <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-white drop-shadow-sm">
              {PERSONAL_INFO.brandName}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-ping" />
          </div>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-xs sm:text-sm font-medium tracking-wide text-white/90">
            <a href="#home" className="hover:text-white hover:underline underline-offset-4 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-white hover:underline underline-offset-4 transition-colors">
              About
            </a>
            <a
              href="#projects"
              className="flex items-center gap-1 hover:text-white hover:underline underline-offset-4 transition-colors"
            >
              <span>Work</span>
              <span className="text-[10px] text-white/70 font-mono">(03)</span>
            </a>
            <a href="#skills" className="hover:text-white hover:underline underline-offset-4 transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-white hover:underline underline-offset-4 transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#projects"
              className="flex flex-col gap-1.5 p-2 rounded-lg bg-black/20 hover:bg-black/30 border border-white/20 transition-all cursor-pointer"
              title="Open Navigation"
            >
              <span className="w-6 h-0.5 bg-white rounded-full" />
              <span className="w-4 h-0.5 bg-white rounded-full self-end" />
            </a>
          </div>
        </div>

        {/* Gigantic Background Watermark Typography: "MAYUR" */}
        <div className="absolute top-[8%] sm:top-[6%] left-0 right-0 flex justify-center pointer-events-none select-none z-0 overflow-hidden">
          <span className="font-heading font-black text-[18vw] sm:text-[19vw] lg:text-[21vw] leading-none text-white/[0.14] tracking-tight mix-blend-overlay whitespace-nowrap">
            {PERSONAL_INFO.firstName.toUpperCase()}
          </span>
        </div>

        {/* Center Stage & Portrait Presentation */}
        <div className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex items-center justify-center px-4 sm:px-8 pb-12 z-10">
          {/* Hero Portrait Cutout */}
          <div className="relative w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[560px] h-[480px] sm:h-[580px] lg:h-[660px] flex items-end justify-center">
            {/* Subtle backlight aura behind the developer */}
            <div className="absolute top-1/4 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-orange-300/25 blur-3xl pointer-events-none animate-pulse-glow" />

            {/* Portrait Image with smooth dissolve into the bottom canvas */}
            <div className="relative w-full h-full flex items-end justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {/* <img
                src={HERO_REFERENCE_IMAGE}
                alt="Mayur Lamka — Full Stack Developer"
                className="w-full h-full object-cover object-center scale-[1.03] hover:scale-[1.05] transition-transform duration-700 ease-out select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              /> */}
            </div>
          </div>

          {/* Left Text Block: Tagline Statement */}
          <div className="absolute left-6 sm:left-10 lg:left-14 top-[26%] sm:top-[30%] max-w-[260px] sm:max-w-[300px] lg:max-w-[330px] z-20">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-white/60 font-mono text-sm">+</span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-white/80 bg-black/20 px-2 py-0.5 rounded-full border border-white/10">
                Full-Stack Systems
              </span>
            </div>
            <p className="text-xs sm:text-sm lg:text-base font-bold uppercase leading-relaxed text-white drop-shadow-md tracking-wider">
              {PERSONAL_INFO.statement}
            </p>
          </div>

          {/* Bottom Left Block: ©2026 + Giant Headline MAYUR */}
          <div className="absolute left-6 sm:left-10 lg:left-14 bottom-6 sm:bottom-10 z-20">
            <div className="flex items-center gap-1.5 text-white/80 text-xs sm:text-sm font-semibold tracking-wider mb-0.5">
              <span>{PERSONAL_INFO.year}</span>
            </div>
            <h1 className="font-heading font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
              {PERSONAL_INFO.firstName.toUpperCase()}
            </h1>
          </div>

          {/* Top-Right Floating Interactive Project Preview Card */}
          <div
            onClick={() => onSelectProject?.("algocraft")}
            className="absolute right-4 sm:right-10 lg:right-16 top-[22%] sm:top-[26%] z-30 cursor-pointer animate-float-subtle group"
          >
            <div className="bg-white text-neutral-900 rounded-2xl p-2.5 sm:p-3 shadow-2xl border border-white/80 hover:shadow-orange-950/40 hover:-translate-y-1.5 transition-all duration-300 w-44 sm:w-56 lg:w-60">
              {/* Preview Graphics Box */}
              <div className="relative w-full h-24 sm:h-32 lg:h-36 rounded-xl overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 p-2.5 flex flex-col justify-between border border-neutral-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-orange-400 bg-orange-950/80 px-1.5 py-0.5 rounded border border-orange-500/30">
                    Docker Sandbox
                  </span>
                </div>

                <div className="font-mono text-[10px] text-neutral-300 space-y-0.5">
                  <p className="text-orange-300 font-semibold flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-orange-400" /> AlgoCraft IDE
                  </p>
                  <p className="text-[9px] text-neutral-400">eval(code, testCases);</p>
                  <p className="text-[9px] text-green-400">✓ All 12/12 Tests Passed</p>
                </div>

                <div className="flex items-center justify-between text-[9px] text-neutral-400 pt-1 border-t border-neutral-700/60 font-mono">
                  <span>Monaco • Node • MySQL</span>
                  <ArrowUpRight className="w-3 h-3 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

              {/* Card Footer Tag */}
              <div className="flex items-center justify-between pt-2 px-1 text-[11px] font-bold text-neutral-800">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-orange-600" />
                  <span>ALGOCRAFT</span>
                </span>
                <span className="text-neutral-500 font-mono text-[10px]">/Full Stack</span>
              </div>
            </div>
          </div>

          {/* Bottom-Right Floating "Let's Talk" Direct Gmail Redirect Widget */}
          <div className="absolute right-4 sm:right-10 lg:right-16 bottom-6 sm:bottom-10 z-30 animate-float-reverse">
            <div className="bg-[#121214]/95 border border-white/20 text-white rounded-2xl p-3 sm:p-3.5 shadow-2xl backdrop-blur-xl flex items-center gap-3 sm:gap-4 hover:border-orange-400/50 transition-all duration-300 hover:shadow-orange-500/20 group">
              {/* Avatar Icon */}
              <div className="relative">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden bg-gradient-to-br from-orange-500 to-amber-600 p-0.5 flex items-center justify-center shadow-inner">
                  <div className="w-full h-full bg-[#18181b] rounded-[10px] flex items-center justify-center font-heading font-black text-sm text-orange-400">
                    ML
                  </div>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#121214] rounded-full" />
              </div>

              {/* Info text */}
              <div className="text-left">
                <div className="text-[10px] tracking-widest uppercase font-semibold text-neutral-400">
                  LET&apos;S TALK
                </div>
                <div className="text-xs sm:text-sm font-bold text-white group-hover:text-orange-400 transition-colors">
                  {PERSONAL_INFO.name}
                </div>
                <div className="text-[10px] text-neutral-400">
                  {PERSONAL_INFO.role}
                </div>
              </div>

              {/* Action Button: Directly opens Gmail Compose */}
              <a
                href={PERSONAL_INFO.gmailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                title="Send Email via Gmail to mayurlamka9664@gmail.com"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white hover:bg-orange-500 text-neutral-950 hover:text-white flex items-center justify-center transition-all duration-200 shadow-md group-hover:scale-105 active:scale-95 ml-1"
              >
                <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
