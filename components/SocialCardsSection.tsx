"use client";

import { PERSONAL_INFO } from "@/lib/portfolio-data";
import { Trophy, ArrowUpRight, Code, GitFork, Users, ExternalLink, Sparkles } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function SocialCardsSection() {
  return (
    <section id="socials" className="py-16 sm:py-24 relative overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Connect &amp; Profiles</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            GitHub &amp; LinkedIn Profiles
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Direct redirect links to inspect my source code repositories, problem-solving journey, and professional network.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* GitHub Card */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 sm:p-8 rounded-3xl bg-[#111113] border border-white/10 hover:border-purple-500/60 transition-all duration-300 shadow-2xl hover:shadow-purple-500/15 flex flex-col justify-between hover:-translate-y-2 overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-white/10 text-white group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
                  <Github className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono text-purple-400 bg-purple-500/15 border border-purple-500/30 px-3 py-1 rounded-full font-bold">
                  Open Source
                </span>
              </div>

              <div className="text-xs font-mono text-neutral-400 mb-1">
                {PERSONAL_INFO.githubHandle}
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-purple-300 transition-colors">
                GitHub Repositories
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2.5 leading-relaxed">
                Explore source code for AlgoCraft, WanderLust, Spotify Clone, and 150+ DSA problem solutions with clean commit histories.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-2 gap-2 mt-6 pt-6 border-t border-white/10 text-xs font-mono text-neutral-300">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5">
                  <Code className="w-4 h-4 text-purple-400" />
                  <span>3 Main Projects</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5">
                  <GitFork className="w-4 h-4 text-purple-400" />
                  <span>150+ Solutions</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-bold text-white group-hover:text-purple-300">
              <span>Visit GitHub Profile</span>
              <div className="w-8 h-8 rounded-full bg-white/10 group-hover:bg-purple-500 group-hover:text-white flex items-center justify-center transition-all">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-6 sm:p-8 rounded-3xl bg-[#0b1424] border border-white/10 hover:border-blue-500/60 transition-all duration-300 shadow-2xl hover:shadow-blue-500/15 flex flex-col justify-between hover:-translate-y-2 overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-600/20 transition-all" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <Linkedin className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono text-blue-400 bg-blue-500/15 border border-blue-500/30 px-3 py-1 rounded-full font-bold">
                  Professional Network
                </span>
              </div>

              <div className="text-xs font-mono text-neutral-400 mb-1">
                in/{PERSONAL_INFO.linkedinHandle}
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-blue-300 transition-colors">
                LinkedIn Profile
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2.5 leading-relaxed">
                Connect with me to discuss full-stack engineering roles, internships, tech stacks, or potential collaborations.
              </p>

              {/* Status Callout */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-950/50 border border-blue-500/20 text-xs text-blue-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  <span className="font-medium">Open to Full-Stack &amp; Software Roles</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-bold text-white group-hover:text-blue-300">
              <span>Connect on LinkedIn</span>
              <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white flex items-center justify-center transition-all">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </a>

          {/* LeetCode Achievement Card */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-[#171109] border border-amber-500/30 shadow-2xl flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-amber-500/20 text-amber-400">
                  <Trophy className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono text-amber-400 bg-amber-500/15 border border-amber-500/30 px-3 py-1 rounded-full font-bold">
                  LeetCode DSA
                </span>
              </div>

              <div className="text-xs font-mono text-neutral-400 mb-1">
                Data Structures &amp; Algorithms
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-white">
                150+ Problems Solved
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2.5 leading-relaxed">
                Extensive practice on LeetCode tackling core computer science fundamentals, time and space complexity optimization.
              </p>

              {/* Topics Pills */}
              <div className="flex flex-wrap gap-1.5 mt-6 pt-6 border-t border-white/10">
                {["Arrays", "Strings", "Recursion", "Sorting", "Hash Maps", "Two Pointers"].map((topic, i) => (
                  <span
                    key={i}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 font-semibold"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-bold text-amber-400">
              <span>Continuous Growth</span>
              <span className="font-mono text-xs text-neutral-400">Consistent Problem Solver</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
