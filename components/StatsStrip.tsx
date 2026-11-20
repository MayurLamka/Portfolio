"use client";

import { Code2, Trophy, Terminal, Award, Cpu, GitBranch } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/portfolio-data";

export default function StatsStrip() {
  const stats = [
    {
      label: "LeetCode Solved",
      value: "150+",
      desc: "Arrays, Strings, Trees & DSA",
      icon: Trophy,
      color: "text-amber-400",
      bg: "bg-amber-500/10 border-amber-500/20",
    },
    {
      label: "Featured Projects",
      value: "3 Production",
      desc: "Full-Stack Web Architectures",
      icon: Terminal,
      color: "text-orange-400",
      bg: "bg-orange-500/10 border-orange-500/20",
    },
    {
      label: "Core Stack",
      value: "MERN + SQL",
      desc: "React • Node • MySQL • Mongo • Docker",
      icon: Cpu,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
    {
      label: "Availability",
      value: "Open to Work",
      desc: "Full-Time Roles & Opportunities",
      icon: Award,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="relative p-4 sm:p-5 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-md hover:border-orange-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 font-mono">
                  {item.label}
                </span>
                <div className={`p-2 rounded-xl ${item.bg} ${item.color}`}>
                  <Icon className="w-4 h-4" />
                </div>
              </div>
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white group-hover:text-orange-400 transition-colors">
                {item.value}
              </div>
              <div className="text-xs text-neutral-400 mt-1 line-clamp-1">
                {item.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
