"use client";

import { PERSONAL_INFO } from "@/lib/portfolio-data";
import { User, Code2, Database, ShieldCheck, Mail, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    {
      title: "Full-Stack Development",
      desc: "Building seamless user experiences with React and robust, scalable backend services in Node.js & Express.",
      icon: Code2,
      tag: "Frontend & Backend",
    },
    {
      title: "Data & Relational Modeling",
      desc: "Designing normalized MySQL relational schemas and flexible MongoDB document stores with indexing.",
      icon: Database,
      tag: "MySQL & MongoDB",
    },
    {
      title: "Secure Architecture & DevOps",
      desc: "Implementing JWT authentication, Passport.js session security, and isolated Docker code execution pipelines.",
      icon: ShieldCheck,
      tag: "Docker & Auth",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3 h-3" />
              <span>About Me</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Driven by Algorithms. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Crafting Scalable Digital Systems.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.gmailComposeUrl("Hi Mayur, Let's Connect!")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-neutral-950 font-bold text-xs sm:text-sm hover:bg-orange-500 hover:text-white transition-all shadow-lg hover:shadow-orange-500/25"
            >
              <Mail className="w-4 h-4" />
              <span>Contact via Gmail</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Biography Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-4">
                Aspiring Full Stack Developer with Passion for Clean Code & Problem Solving
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                <p>
                  Hello! I&apos;m <span className="font-semibold text-white">Mayur Lamka</span>, an aspiring Full Stack Developer with a strong foundation in modern web development, software engineering, and algorithmic problem-solving.
                </p>
                <p>
                  I specialize in building end-to-end applications from the ground up — designing intuitive, responsive frontend interfaces with <span className="text-orange-400 font-medium">React</span> and architecting high-performance backend APIs using <span className="text-orange-400 font-medium">Node.js, Express.js, MySQL</span>, and <span className="text-orange-400 font-medium">MongoDB</span>.
                </p>
                <p>
                  Beyond traditional web apps, I enjoy solving deep engineering challenges — like setting up isolated <span className="text-orange-400 font-medium">Docker code sandboxes</span> for AlgoCraft to execute untrusted user code safely, and integrating geospatial search with Mapbox for WanderLust.
                </p>
              </div>

              {/* Bullet points from resume */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-white/10 mt-6">
                {[
                  "150+ LeetCode DSA Problems Solved",
                  "Dockerized Secure Sandbox Architecture",
                  "Full-Stack Authentication (JWT & Passport)",
                  "Geospatial & Cloud Media Pipelines",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Details Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/10">
                <span className="text-[11px] font-mono uppercase text-neutral-400">Location</span>
                <p className="text-sm font-bold text-white mt-0.5">India (Remote/Relocate)</p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/10">
                <span className="text-[11px] font-mono uppercase text-neutral-400">Email</span>
                <p className="text-sm font-bold text-white mt-0.5 truncate">{PERSONAL_INFO.email}</p>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-900/40 border border-white/10">
                <span className="text-[11px] font-mono uppercase text-neutral-400">Status</span>
                <p className="text-sm font-bold text-emerald-400 mt-0.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Hire
                </p>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1 group backdrop-blur-md"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-neutral-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
