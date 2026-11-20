"use client";

import { useState } from "react";
import { SKILL_CATEGORIES } from "@/lib/portfolio-data";
import { Code, Layout, Server, Database, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categoryIcons: Record<string, React.ElementType> = {
    "Programming Languages": Code,
    "Frontend & Web": Layout,
    "Backend & APIs": Server,
    "Databases & DevOps": Database,
  };

  const filteredCategories =
    activeTab === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Skills &amp; Technology Stack
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Hands-on expertise across full-stack development, database architecture, containerized environments, and algorithmic problem-solving.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: "all", label: "All Skills" },
              { id: "programming", label: "Languages" },
              { id: "frontend", label: "Frontend" },
              { id: "backend", label: "Backend" },
              { id: "databases", label: "Databases & DevOps" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 scale-105"
                    : "bg-neutral-900/80 text-neutral-300 hover:text-white hover:bg-neutral-800 border border-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredCategories.map((cat, idx) => {
            const Icon = categoryIcons[cat.category] || Code;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-orange-500/30 backdrop-blur-md transition-all duration-300 shadow-xl group hover:-translate-y-1"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white group-hover:text-orange-400 transition-colors">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-neutral-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                    {cat.skills.length} Techs
                  </span>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="group/skill">
                      <div className="flex items-center justify-between text-xs sm:text-sm mb-1.5">
                        <span className="font-semibold text-white flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                          <span>{skill.name}</span>
                        </span>
                        {skill.tags && (
                          <span className="text-[11px] font-mono text-neutral-400">
                            {skill.tags}
                          </span>
                        )}
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2 w-full rounded-full bg-neutral-800/80 overflow-hidden p-0.5 border border-white/5">
                        <div
                          style={{ width: `${skill.level}%` }}
                          className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-500 group-hover/skill:brightness-110"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* LeetCode & Problem Solving Banner */}
        {/* <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/15 via-orange-500/15 to-red-500/15 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Terminal className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold">
                Competitive &amp; Problem Solving
              </div>
              <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                150+ LeetCode DSA Problems Solved
              </h4>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1">
                Proficient in Arrays, Strings, Two Pointers, Recursion, Sorting, Trees, and Object-Oriented Programming principles.
              </p>
            </div>
          </div>

          <a
            href="https://github.com/MayurLamka"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs sm:text-sm whitespace-nowrap transition-all shadow-lg shadow-amber-500/25 shrink-0"
          >
            View DSA Repositories ↗
          </a>
        </div> */}
      </div>
    </section>
  );
}
