"use client";

import { useState } from "react";
import { PROJECTS, Project } from "@/lib/portfolio-data";
import ProjectDetailModal from "./ProjectDetailModal";
import {
  ExternalLink,
  Terminal,
  Sparkles,
  Layers,
  ArrowUpRight,
  Code2,
  MapPin,
  Music,
  CheckCircle2,
  Eye,
} from "lucide-react";
import { Github } from "@/components/Icons";

interface ProjectsSectionProps {
  selectedProjectId?: string | null;
  onClearSelectedProject?: () => void;
}

export default function ProjectsSection({
  selectedProjectId,
  onClearSelectedProject,
}: ProjectsSectionProps) {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Sync with prop if triggered externally (e.g. from hero preview card)
  const currentModal = activeModalProject || PROJECTS.find((p) => p.id === selectedProjectId) || null;

  const handleCloseModal = () => {
    setActiveModalProject(null);
    onClearSelectedProject?.();
  };

  return (
    <section id="projects" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Accent Lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-3 h-3" />
              <span>Selected Works</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Featured Academic &amp; <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                Full-Stack Projects
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs sm:text-sm font-mono text-neutral-400">
            <span>3 Production Architectures</span>
            <span>•</span>
            <span className="text-orange-400">Full Source on GitHub</span>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-3xl bg-neutral-900/70 border border-white/10 hover:border-orange-500/40 backdrop-blur-xl transition-all duration-300 shadow-xl hover:shadow-orange-500/10 group hover:-translate-y-2 overflow-hidden"
            >
              <div>
                {/* Visual Preview Graphic Box */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-neutral-950 p-4 border-b border-white/10">
                  {/* Decorative background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`}
                  />

                  {/* Mockup Presentation per project */}
                  {project.id === "algocraft" && (
                    <div className="relative h-full w-full rounded-2xl bg-neutral-900/90 border border-white/15 p-3 flex flex-col justify-between font-mono shadow-2xl">
                      <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/10">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          <span className="text-neutral-400 ml-1 text-[10px]">AlgoCraft_Solution.cpp</span>
                        </div>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Docker: Active
                        </span>
                      </div>

                      <div className="space-y-1 text-[10px] text-neutral-300 py-1">
                        <p className="text-orange-400 font-semibold">// Monaco Editor &amp; Code Execution Sandbox</p>
                        <p className="text-neutral-400">vector&lt;int&gt; twoSum(vector&lt;int&gt;&amp; nums, int target) &#123;</p>
                        <p className="pl-4 text-neutral-300">unordered_map&lt;int, int&gt; mp;</p>
                        <p className="pl-4 text-emerald-400">// Time: O(N) | Space: O(N)</p>
                        <p className="text-neutral-400">&#125;</p>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px]">
                        <span className="text-emerald-400 flex items-center gap-1 font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5" /> All 28 Tests Passed
                        </span>
                        <span className="text-neutral-400 text-[9px]">Runtime: 12ms</span>
                      </div>
                    </div>
                  )}

                  {project.id === "wanderlust" && (
                    <div className="relative h-full w-full rounded-2xl bg-neutral-900/90 border border-white/15 p-3 flex flex-col justify-between shadow-2xl">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold text-rose-400 bg-rose-500/20 px-2 py-0.5 rounded-full border border-rose-500/30">
                          WanderLust Stays
                        </span>
                        <div className="flex items-center gap-1 text-[10px] text-amber-400 font-bold">
                          <span>★ 4.98</span>
                          <span className="text-neutral-400 text-[9px]">(124 reviews)</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 py-1">
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-rose-500" />
                          <span>Serene Alpine Chalet • Swiss Alps</span>
                        </div>
                        <p className="text-[10px] text-neutral-300">
                          Mapbox Forward Geocoding • Cloudinary Multi-Image Upload
                        </p>
                        <div className="flex items-center gap-2 pt-1">
                          <span className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/10 font-mono">
                            Passport.js Auth
                          </span>
                          <span className="text-[9px] px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/10 font-mono">
                            MongoDB Atlas
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-neutral-400 font-mono">
                        <span>$240 / night</span>
                        <span className="text-rose-400 font-bold">Verified Listing ✓</span>
                      </div>
                    </div>
                  )}

                  {project.id === "spotify-clone" && (
                    <div className="relative h-full w-full rounded-2xl bg-neutral-900/90 border border-white/15 p-3 flex flex-col justify-between shadow-2xl">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold font-mono">
                          <Music className="w-3.5 h-3.5" />
                          <span>Spotify Web Player</span>
                        </div>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono">
                          Web Audio API
                        </span>
                      </div>

                      <div className="space-y-1.5 py-1">
                        <div className="text-xs font-bold text-white">
                          Starboy — The Weeknd (ft. Daft Punk)
                        </div>
                        <div className="text-[10px] text-neutral-400">
                          Interactive timeline seek • Dynamic queue • Responsive sidebar
                        </div>

                        {/* Player scrubber mockup */}
                        <div className="pt-2">
                          <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-emerald-500 rounded-full" />
                          </div>
                          <div className="flex justify-between text-[9px] text-neutral-400 font-mono pt-1">
                            <span>2:32</span>
                            <span>3:50</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] text-neutral-400 font-mono">
                        <span>HTML5 • CSS3 • Vanilla JS</span>
                        <span className="text-emerald-400 font-bold">Playing ▶</span>
                      </div>
                    </div>
                  )}

                  {/* Corner Badge */}
                  
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl text-white group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium mt-0.5 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[11px] font-mono px-2 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-400">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-2.5">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-orange-500/15 hover:bg-orange-500 border border-orange-500/30 text-orange-300 hover:text-white font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Project Details</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white hover:bg-orange-500 text-neutral-950 hover:text-white font-bold text-xs sm:text-sm transition-all duration-200 shadow-md group/btn"
                  title={`View ${project.title} on GitHub`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Detail Modal */}
      <ProjectDetailModal project={currentModal} onClose={handleCloseModal} />
    </section>
  );
}
