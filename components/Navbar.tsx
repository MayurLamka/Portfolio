"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/lib/portfolio-data";
import { Menu, X, ArrowUpRight, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work (03)", href: "#projects", badge: "03" },
    { name: "Skills", href: "#skills" },
    { name: "Connect", href: "#socials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c0806]/85 backdrop-blur-md border-b border-orange-500/15 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#home"
            className="group flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-orange-400 transition-colors"
          >
            <span className="font-heading font-extrabold tracking-tight">
              {PERSONAL_INFO.brandName}
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-orange-500 group-hover:scale-125 transition-transform animate-pulse" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-black/40 border border-white/10 rounded-full px-5 py-2 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-neutral-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-all relative group"
              >
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>

          {/* Right Action: Direct Gmail / Contact */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.gmailComposeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-4 py-2 rounded-full shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-200 hover:text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#120a06]/98 border-b border-orange-500/20 px-4 pt-4 pb-6 mt-3 backdrop-blur-xl shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-medium text-neutral-200 hover:text-orange-400 py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-mono">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={PERSONAL_INFO.gmailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full text-center py-2.5 px-4 rounded-xl font-semibold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email via Gmail</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 text-neutral-300 hover:text-white"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 text-neutral-300 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
