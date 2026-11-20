"use client";

import { useEffect } from "react";
import { Project } from "@/lib/portfolio-data";
import { X, ExternalLink, CheckCircle2, Terminal, Cpu, Layers, Sparkles } from "lucide-react";
import { Github } from "@/components/Icons";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-3xl bg-[#120a07] border border-orange-500/30 rounded-3xl p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.8)] z-10 my-8 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Subtle orange accent glow inside modal */}
        <div className="absolute -top-32 -right-32 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Row */}
        <div className="flex items-start justify-between pb-4 border-b border-white/10 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/15 border border-orange-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono text-neutral-400">
                {project.year}
              </span>
            </div>
            <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white border border-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6 max-h-[70vh] overflow-y-auto pr-2">
          {/* Tagline Summary */}
          <div className="p-4 rounded-2xl bg-orange-950/30 border border-orange-500/20 text-orange-200 text-xs sm:text-sm font-medium leading-relaxed">
            {project.tagline}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2">
              Project Overview
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* System Architecture */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-orange-400" />
              <span>System Architecture &amp; Implementation</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed bg-neutral-900/80 p-4 rounded-2xl border border-white/10 font-mono">
              {project.architecture}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>Key Technical Highlights</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 text-xs text-neutral-300 bg-neutral-900/60 p-3 rounded-xl border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-orange-400" />
              <span>Technologies &amp; Tools Used</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/10 text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 relative z-10">
          <div className="text-xs font-mono text-neutral-400">
            Source Code Available on GitHub
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              Close
            </button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
