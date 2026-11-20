"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { fadeUp } from "@/lib/motion";

export default function ParallaxBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle scroll-driven zoom and gentle parallax translation
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.0, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative h-[65vh] md:h-[80vh] overflow-hidden my-12"
    >
      {/* Parallax Background Visual */}
      <motion.div
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ y, scale }}
      >
        <Image
          src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=2000&q=85&auto=format&fit=crop"
          alt="Summit Flask in alpine mountain environment"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/60" />
      </motion.div>

      {/* Atmospheric Content Overlay */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 gap-5"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.2em]"
        >
          <Sparkles size={13} className="text-[#7B9E87]" />
          Field-Tested In The Rockies
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-4xl tracking-tight"
        >
          From sea-level commute <br className="hidden sm:block" />
          to 14,000 ft peaks.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-light leading-relaxed"
        >
          Crafted to outlast seasons, trends, and rugged terrain. One flask designed to replace single-use bottles for life.
        </motion.p>
      </motion.div>
    </section>
  );
}
