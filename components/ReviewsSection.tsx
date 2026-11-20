"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";
import { REVIEWS } from "@/lib/data";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/motion";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-16 text-center max-w-xl mx-auto"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-bold uppercase tracking-[0.25em] text-[#7B9E87] mb-3"
        >
          Community Voices
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight"
        >
          Summiteers Speak
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-2.5 mt-4"
        >
          <div className="flex items-center gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-amber-400 stroke-amber-400" />
            ))}
          </div>
          <span className="text-sm font-semibold text-neutral-800 dark:text-neutral-200">
            4.9 out of 5
          </span>
          <span className="text-xs text-neutral-400 dark:text-neutral-500">
            (450+ verified reviews)
          </span>
        </motion.div>
      </motion.div>

      {/* Review Cards Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {REVIEWS.map((review) => (
          <motion.div
            key={review.id}
            variants={scaleIn}
            whileHover={{ y: -5, scale: 1.01 }}
            className="flex flex-col justify-between p-8 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:border-[#7B9E87]/40 transition-all duration-300 cursor-default"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 text-amber-400 mb-5">
                {[...Array(review.rating)].map((_, j) => (
                  <Star
                    key={j}
                    size={16}
                    className="fill-amber-400 stroke-amber-400"
                  />
                ))}
              </div>

              {/* Review Quote */}
              <p className="text-neutral-700 dark:text-neutral-300 text-base leading-relaxed italic">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>

            {/* Author Footer */}
            <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800/80">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#7B9E87] to-[#4e6f59] flex items-center justify-center text-white text-xs font-bold shadow-sm">
                {review.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-bold text-neutral-900 dark:text-neutral-100 truncate">
                    {review.name}
                  </p>
                  <CheckCircle size={13} className="text-[#7B9E87] shrink-0" />
                </div>
                <p className="text-xs text-neutral-400 dark:text-neutral-500">
                  {review.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
