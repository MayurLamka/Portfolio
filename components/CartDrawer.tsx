"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/lib/data";
import Image from "next/image";

export default function CartDrawer() {
  const {
    items,
    totalItems,
    totalPrice,
    removeItem,
    updateQuantity,
    isOpen,
    closeCart,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Slide-Over Drawer Container */}
          <motion.aside
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-[#0F0F10] border-l border-neutral-200 dark:border-neutral-800 z-50 shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping Cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#7B9E87]/15 dark:bg-[#7B9E87]/25 text-[#7B9E87]">
                  <ShoppingBag size={18} />
                </div>
                <div>
                  <h2 className="font-bold text-base text-neutral-900 dark:text-neutral-50">
                    Your Shopping Bag
                  </h2>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {totalItems} {totalItems === 1 ? "item" : "items"} selected
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={closeCart}
                className="p-2 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-500 dark:text-neutral-400 transition-colors"
                aria-label="Close cart"
              >
                <X size={19} />
              </motion.button>
            </div>

            {/* Free Shipping Progress Indicator */}
            <div className="px-6 py-3 bg-neutral-50 dark:bg-neutral-900/60 border-b border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 font-medium text-neutral-700 dark:text-neutral-300">
                <Sparkles size={13} className="text-[#7B9E87]" />
                Complimentary Express Shipping
              </span>
              <span className="font-bold text-[#7B9E87]">Unlocked</span>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <AnimatePresence initial={false}>
                {items.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full gap-4 text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-3xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                      <ShoppingBag size={28} />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900 dark:text-neutral-100 text-base">
                        Your bag is currently empty
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 max-w-xs">
                        Configure your bespoke flask with custom finish and capacity to get started.
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={closeCart}
                      className="mt-2 px-6 py-2.5 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-bold hover:opacity-90 transition-opacity"
                    >
                      Start Exploring
                    </motion.button>
                  </motion.div>
                ) : (
                  items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.25 }}
                      className="flex gap-4 p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900/70 shadow-xs"
                    >
                      {/* Product Thumbnail */}
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50">
                        <Image
                          src={item.image}
                          alt={item.colorLabel}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </div>

                      {/* Details & Controls */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-sm leading-tight truncate">
                              Summit Series IV Flask
                            </h3>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-neutral-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors p-0.5"
                              aria-label="Remove item"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                          <div className="flex items-center gap-1.5 mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                            <span
                              className="w-2.5 h-2.5 rounded-full inline-block"
                              style={{ backgroundColor: item.colorHex }}
                            />
                            <span>{item.colorLabel}</span>
                            <span>·</span>
                            <span>{item.capacityLabel}</span>
                          </div>
                        </div>

                        {/* Price & Quantity Controls */}
                        <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                          <span className="text-sm font-black text-neutral-900 dark:text-neutral-50">
                            {formatPrice(item.price * item.quantity)}
                          </span>

                          <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-1 border border-neutral-200/60 dark:border-neutral-700/60">
                            <motion.button
                              whileTap={{ scale: 0.85 }}
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 rounded-md bg-white dark:bg-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={11} />
                            </motion.button>
                            <span className="text-xs font-bold w-5 text-center text-neutral-900 dark:text-neutral-100">
                              {item.quantity}
                            </span>
                            <motion.button
                              whileTap={{ scale: 0.85 }}
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-md bg-white dark:bg-neutral-700 flex items-center justify-center text-neutral-700 dark:text-neutral-200 hover:bg-neutral-200 dark:hover:bg-neutral-600 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={11} />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* Footer Summary & Checkout */}
            {items.length > 0 && (
              <div className="p-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40 space-y-4">
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
                    <span>Subtotal</span>
                    <span className="font-medium text-neutral-800 dark:text-neutral-200">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  <div className="flex justify-between text-neutral-500 dark:text-neutral-400">
                    <span>Shipping</span>
                    <span className="text-[#7B9E87] font-semibold">Free Express</span>
                  </div>
                  <div className="flex justify-between items-center text-base font-black text-neutral-900 dark:text-neutral-50 pt-2 border-t border-neutral-200 dark:border-neutral-800">
                    <span>Estimated Total</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 bg-[#7B9E87] hover:bg-[#688873] text-white font-bold rounded-2xl transition-all shadow-lg shadow-[#7B9E87]/30 flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight size={17} />
                </motion.button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-neutral-400 text-center">
                  <ShieldCheck size={13} className="text-[#7B9E87]" />
                  <span>256-Bit SSL Encrypted Checkout · Lifetime Guarantee</span>
                </div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
