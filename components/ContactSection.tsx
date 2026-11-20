"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/lib/portfolio-data";
import {
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  Send,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const generateDynamicGmailUrl = () => {
    const finalSubject = subject.trim()
      ? `${subject.trim()} — via Portfolio`
      : `Portfolio Inquiry — ${name.trim() || "Visitor"}`;

    const finalBody = `Hi Mayur,\n\n${message.trim() || "I came across your portfolio and would love to connect with you!"}\n\nBest regards,\n${name.trim() || "A Visitor"}`;

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      PERSONAL_INFO.email
    )}&su=${encodeURIComponent(finalSubject)}&body=${encodeURIComponent(finalBody)}`;
  };

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-mono font-semibold uppercase tracking-widest mb-3">
            <Sparkles className="w-3 h-3" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Let&apos;s Build Something <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              Impactful Together
            </span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
            Click on my email to open Gmail directly, or write a custom message below and send it straight to my Gmail inbox.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Gmail Redirect Big Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/80 border border-orange-500/30 backdrop-blur-xl relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/15 border border-orange-500/30 px-3 py-1 rounded-full uppercase tracking-wider">
                  Direct Gmail Redirect
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Online
                </span>
              </div>

              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                Send Email via Gmail
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mb-6 leading-relaxed">
                Clicking the address below redirects you straight to Google Gmail with my recipient address pre-filled:
              </p>

              {/* Big Clickable Email Card that redirects to Gmail */}
              <a
                href={PERSONAL_INFO.gmailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to compose an email in Gmail"
                className="group flex flex-col p-4 sm:p-5 rounded-2xl bg-black/50 border border-white/15 hover:border-orange-500 transition-all duration-300 shadow-inner hover:shadow-orange-500/20"
              >
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-1 font-mono">
                  <span>Recipient Address</span>
                  <span className="text-orange-400 flex items-center gap-1 font-semibold group-hover:translate-x-0.5 transition-transform">
                    <span>Redirect to Gmail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="font-mono font-bold text-base sm:text-lg text-white group-hover:text-orange-400 transition-colors break-all">
                  {PERSONAL_INFO.email}
                </div>
              </a>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <a
                  href={PERSONAL_INFO.gmailComposeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Gmail ↗</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white border border-white/10 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Fallback mailto */}
              <div className="text-center pt-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-xs text-neutral-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-mono"
                >
                  Or open default desktop mail client (mailto)
                </a>
              </div>
            </div>

            {/* Quick Info Badges */}
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-4 rounded-2xl bg-neutral-900/50 border border-white/10 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                <div>
                  <div className="text-neutral-400 text-[10px]">Location</div>
                  <div className="text-white font-semibold">India (Open Global)</div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-neutral-900/50 border border-white/10 flex items-center gap-3">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <div>
                  <div className="text-neutral-400 text-[10px]">Response Time</div>
                  <div className="text-white font-semibold">Within 24 Hours</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pre-fill Message Helper */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-neutral-900/70 border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-orange-400 mb-2">
                <MessageSquare className="w-4 h-4" />
                <span>Interactive Gmail Compose Helper</span>
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-1">
                Draft a Message to Mayur
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                Type your message below and click &quot;Send via Gmail&quot; — it will open Gmail with your name, subject, and text already pre-filled and ready to send!
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(generateDynamicGmailUrl(), "_blank");
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-semibold text-neutral-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. John Doe / Recruiter"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-neutral-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Full-Stack Developer Role"
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-neutral-300 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Mayur, I came across your portfolio and project work. We would like to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-orange-500 text-sm transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-xl shadow-orange-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Gmail (Redirect to Compose) ↗</span>
                </button>

                <p className="text-[11px] font-mono text-center text-neutral-500">
                  Clicking will open mail.google.com in a new tab with your message pre-loaded.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
