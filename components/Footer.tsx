"use client";

import Link from "next/link";
import { PERSONAL_INFO } from "@/lib/portfolio-data";
import { ArrowUp, Mail, Heart } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#090503] py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link
              href="#home"
              className="font-heading font-black text-2xl text-white tracking-tight hover:text-orange-400 transition-colors"
            >
              {PERSONAL_INFO.brandName}
            </Link>
            <p className="text-xs text-neutral-400 mt-1 max-w-sm">
              {PERSONAL_INFO.headline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href={PERSONAL_INFO.gmailComposeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Email via Gmail"
            >
              <Mail className="w-5 h-5" />
            </a>

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-all shadow-md ml-2 cursor-pointer hover:-translate-y-0.5"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 text-xs text-neutral-500 font-mono gap-3">
          <p>
            © {new Date().getFullYear()} Mayur Lamka. Crafted with precision &amp; passion.
          </p>

          
        </div>
      </div>
    </footer>
  );
}
