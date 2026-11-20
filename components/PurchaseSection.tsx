"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Check, ShoppingBag, Shield, Truck, RotateCcw, CheckCircle2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import {
  COLOR_VARIANTS,
  CAPACITY_VARIANTS,
  SPECS,
  BRAND,
  formatPrice,
} from "@/lib/data";
import { fadeUp, slideLeft, slideRight, staggerContainer } from "@/lib/motion";

export default function PurchaseSection() {
  const { addItem, openCart } = useCart();
  const [selectedColor, setSelectedColor] = useState(COLOR_VARIANTS[0]);
  const [selectedCapacity, setSelectedCapacity] = useState(CAPACITY_VARIANTS[1]); // 950 ml ($40) default
  const [isAdded, setIsAdded] = useState(false);

  function handleAddToBag() {
    const itemId = `${selectedColor.id}-${selectedCapacity.id}`;
    addItem({
      id: itemId,
      colorId: selectedColor.id,
      colorLabel: selectedColor.label,
      colorHex: selectedColor.hex,
      capacityId: selectedCapacity.id,
      capacityLabel: selectedCapacity.label,
      price: selectedCapacity.price,
      image: selectedColor.image,
    });

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      openCart();
    }, 450);
  }

  return (
    <section id="purchase" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Heading */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-14 text-center max-w-xl mx-auto"
      >
        <motion.p
          variants={fadeUp}
          className="text-xs font-bold uppercase tracking-[0.25em] text-[#7B9E87] mb-3"
        >
          Configure Your Flask
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight"
        >
          Make It Yours
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-3 text-neutral-600 dark:text-neutral-400 text-base"
        >
          Choose your bespoke powder coat finish, tailor your volume capacity, and elevate your daily hydration.
        </motion.p>
      </motion.div>

      {/* Dedicated Product Selection Card */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl overflow-hidden"
      >
        {/* ── Left Side: Large Dynamic Product Preview Image ──────── */}
        <motion.div
          variants={slideLeft}
          className="lg:col-span-6 relative aspect-square sm:aspect-[4/5] lg:aspect-auto min-h-[420px] bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-neutral-200 dark:border-neutral-800"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedColor.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={selectedColor.image}
                alt={`Summit Flask in ${selectedColor.label}`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40" />
            </motion.div>
          </AnimatePresence>

          {/* Floating Finish & Size Badge */}
          <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full border border-black/10"
              style={{ backgroundColor: selectedColor.hex }}
            />
            <span className="text-xs font-semibold text-neutral-800 dark:text-neutral-200">
              {selectedColor.label} · {selectedCapacity.label}
            </span>
          </div>

          {/* Floating Live Price Pill */}
          <div className="absolute bottom-5 right-5 px-4 py-2 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-md">
            <AnimatePresence mode="wait">
              <motion.span
                key={selectedCapacity.price}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.2 }}
                className="text-2xl font-black text-neutral-900 dark:text-neutral-100"
              >
                {formatPrice(selectedCapacity.price)}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── Right Side: Configurator, Specs & Add to Bag ───────── */}
        <motion.div
          variants={slideRight}
          className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between gap-8"
        >
          {/* Header & Live Price */}
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#7B9E87]">
                  {BRAND.name} Flask Series IV
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-50 tracking-tight mt-1">
                  The Everyday Summit
                </h3>
              </div>
              <div className="text-right">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCapacity.price}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="text-3xl sm:text-4xl font-black text-neutral-900 dark:text-neutral-50"
                  >
                    {formatPrice(selectedCapacity.price)}
                  </motion.div>
                </AnimatePresence>
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  Tax included · Free delivery
                </span>
              </div>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-3 leading-relaxed">
              Precision temperature regulation with pro-grade 18/8 stainless steel, textured powder coat, and magnetic chug flow cap.
            </p>
          </div>

          {/* Color Finish Variant Selector */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider">
                Finish: <span className="font-semibold text-neutral-500 dark:text-neutral-400">{selectedColor.label}</span>
              </span>
              <span className="text-neutral-400 text-[11px]">Matte Ceramic Powder Coat</span>
            </div>
            <div className="flex items-center gap-3">
              {COLOR_VARIANTS.map((v) => {
                const isSelected = selectedColor.id === v.id;
                return (
                  <motion.button
                    key={v.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={() => setSelectedColor(v)}
                    className={`relative w-10 h-10 rounded-full border-2 transition-all duration-200 ${
                      isSelected
                        ? "border-neutral-900 dark:border-white shadow-md scale-105"
                        : "border-neutral-300 dark:border-neutral-700 opacity-80 hover:opacity-100"
                    }`}
                    style={{ backgroundColor: v.hex }}
                    aria-label={`Select ${v.label}`}
                  >
                    {isSelected && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <Check size={16} className="text-white drop-shadow-md stroke-[3]" />
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Capacity Size Variant Selector */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-neutral-900 dark:text-neutral-100 uppercase tracking-wider">
                Volume: <span className="font-semibold text-neutral-500 dark:text-neutral-400">{selectedCapacity.label}</span>
              </span>
              <span className="text-neutral-400 text-[11px]">Fits Standard Cup Holders</span>
            </div>
            <div className="grid grid-cols-3 gap-2.5">
              {CAPACITY_VARIANTS.map((cap) => {
                const isSelected = selectedCapacity.id === cap.id;
                return (
                  <motion.button
                    key={cap.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedCapacity(cap)}
                    className={`py-3 px-3 rounded-2xl text-center border-2 transition-all duration-200 ${
                      isSelected
                        ? "border-[#7B9E87] bg-[#7B9E87]/10 text-neutral-900 dark:text-neutral-100 font-bold shadow-xs"
                        : "border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400 hover:border-neutral-300 dark:hover:border-neutral-700 font-medium"
                    }`}
                  >
                    <div className="text-sm">{cap.label}</div>
                    <div className="text-xs opacity-75 mt-0.5">{formatPrice(cap.price)}</div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Specs Summary List */}
          <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-800/40 divide-y divide-neutral-200/60 dark:divide-neutral-800/60 text-xs">
            {SPECS.slice(0, 4).map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between px-4 py-2.5"
              >
                <span className="text-neutral-500 dark:text-neutral-400">{spec.label}</span>
                <span className="font-semibold text-neutral-900 dark:text-neutral-100 text-right">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Interactive CTA Button ("Add to Bag — $40") */}
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.96 }}
              animate={isAdded ? { scale: [1, 1.05, 1] } : {}}
              onClick={handleAddToBag}
              className={`w-full py-4.5 px-6 rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2.5 shadow-lg ${
                isAdded
                  ? "bg-emerald-600 text-white shadow-emerald-600/30"
                  : "bg-[#7B9E87] hover:bg-[#688873] text-white shadow-[#7B9E87]/30 hover:shadow-[#7B9E87]/40"
              }`}
            >
              <AnimatePresence mode="wait">
                {isAdded ? (
                  <motion.span
                    key="added"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle2 size={20} className="stroke-[2.5]" />
                    Added to Bag!
                  </motion.span>
                ) : (
                  <motion.span
                    key="add"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2"
                  >
                    <ShoppingBag size={20} />
                    Add to Bag — {formatPrice(selectedCapacity.price)}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Reassurances */}
            <div className="grid grid-cols-3 gap-2 text-[11px] text-center text-neutral-500 dark:text-neutral-400 pt-1">
              <div className="flex items-center justify-center gap-1.5">
                <Truck size={14} className="text-[#7B9E87]" />
                <span>Free 2-Day Shipping</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <RotateCcw size={14} className="text-[#7B9E87]" />
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <Shield size={14} className="text-[#7B9E87]" />
                <span>Lifetime Warranty</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
