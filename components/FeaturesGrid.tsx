"use client";

import { motion } from "framer-motion";
import { Droplets, Layers, ShieldCheck, Flame, Snowflake, Clock, Award } from "lucide-react";
import Image from "next/image";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";
import { FEATURES, METRICS } from "@/lib/data";

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-16 text-center max-w-2xl mx-auto"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-bold uppercase tracking-[0.25em] text-[#7B9E87] mb-3"
        >
          Uncompromising Craftsmanship
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight"
        >
          Engineered to Endure
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-4 text-base md:text-lg text-neutral-600 dark:text-neutral-400"
        >
          Every seam, thread, and coating is meticulously refined so your flask performs flawlessly in blizzards or boardrooms.
        </motion.p>
      </motion.div>

      {/* 2x2 Asymmetric Bento Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        {/* ── Card 1: Large Image Focused Macro Shot (Leakproof Chug Lid) ─ */}
        <motion.div
          variants={scaleIn}
          whileHover={{ y: -4 }}
          className="md:col-span-7 relative min-h-[420px] rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 group"
        >
          <Image
            src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=1100&q=85&auto=format&fit=crop"
            alt="Leakproof Chug Lid macro detail"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

          {/* Badge & Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-10 flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider w-fit">
              <Droplets size={13} className="text-[#7B9E87]" />
              Aero-Seal Lid Architecture
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
              Leakproof Chug Lid
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-lg">
              Food-grade silicone gasket with quick-snap locking hinge. Flip open for smooth unrestricted flow; lock shut with zero drips even when tossed upside-down into a stuffed backpack.
            </p>
          </div>
        </motion.div>

        {/* ── Card 2: Medium Feature Card (Powder Coat Finish) ─────── */}
        <motion.div
          variants={scaleIn}
          whileHover={{ y: -4 }}
          className="md:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#7B9E87]/15 dark:bg-[#7B9E87]/25 text-[#7B9E87] flex items-center justify-center mb-6">
              <Layers size={24} />
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 mb-4">
              Tactile Grip Coating
            </span>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Powder Coat Finish
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base mt-3 leading-relaxed">
              Industrial-grade thermoset powder coating provides a slip-resistant texture that won’t sweat or flake. Built to handle drops on granite, gym bags, and dishwasher cycles.
            </p>
          </div>

          <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
            <span>Matte Texturized</span>
            <span className="text-[#7B9E87] font-semibold">100% Sweat-Proof</span>
          </div>
        </motion.div>

        {/* ── Card 3: Medium Feature Card (18/8 Pro-Grade Steel) ───── */}
        <motion.div
          variants={scaleIn}
          whileHover={{ y: -4 }}
          className="md:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-900 text-white shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-6">
              <ShieldCheck size={24} className="text-[#7B9E87]" />
            </div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-neutral-200 mb-4">
              304 Austenitic Stainless
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              18/8 Pro-Grade Steel
            </h3>
            <p className="text-neutral-300 text-sm sm:text-base mt-3 leading-relaxed">
              Electropolished interior ensures pure taste with zero flavor retainment — swap from morning dark roast to crisp ice water without tasting yesterday’s roast.
            </p>
          </div>

          <div className="pt-6 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
            <span>BPA & Phthalate Free</span>
            <span className="text-[#7B9E87] font-semibold">Food Contact Certified</span>
          </div>
        </motion.div>

        {/* ── Card 4: Metrics / Stats Pill Card with Micro-Interactions ─ */}
        <motion.div
          variants={scaleIn}
          whileHover={{ y: -4 }}
          className="md:col-span-7 p-8 sm:p-10 rounded-3xl border border-neutral-200/80 dark:border-neutral-800 bg-gradient-to-br from-[#7B9E87]/10 via-neutral-50 dark:via-neutral-900 to-white dark:to-[#0F0F10] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between gap-6"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7B9E87]">
                Performance Metrics
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                <Award size={13} className="text-[#7B9E87]" />
                Lab Verified
              </span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Thermal Insulation Rating
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
              TempShield™ double-wall vacuum barrier eliminates heat transfer via radiation and conduction.
            </p>
          </div>

          {/* Interactive Metric Pills with hover micro-interaction */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
            {[
              {
                icon: Snowflake,
                value: "24 hrs",
                label: "Cold Retention",
                color: "text-sky-500",
              },
              {
                icon: Flame,
                value: "12 hrs",
                label: "Heat Retention",
                color: "text-amber-500",
              },
              {
                icon: Droplets,
                value: "950 ml",
                label: "Flagship Size",
                color: "text-[#7B9E87]",
              },
              {
                icon: Clock,
                value: "Lifetime",
                label: "Warranty",
                color: "text-purple-500",
              },
            ].map((metric) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 rounded-2xl bg-white dark:bg-neutral-800/90 border border-neutral-200/80 dark:border-neutral-700/70 shadow-xs hover:border-[#7B9E87]/60 hover:ring-2 hover:ring-[#7B9E87]/25 transition-all duration-200 cursor-default flex flex-col items-center text-center group"
                >
                  <Icon size={18} className={`${metric.color} mb-1.5 transition-transform duration-200 group-hover:scale-110`} />
                  <span className="text-xl font-extrabold text-neutral-900 dark:text-neutral-100 tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {metric.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
