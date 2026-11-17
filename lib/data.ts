// ============================================================
// MOCK DATA — Swap out images, copy & prices in < 10 minutes
// ============================================================

export const BRAND = {
  name: "Summit",
  tagline: "Built for Altitude.",
  subTagline: "Engineered stainless steel flasks for the ones who never stop moving.",
  storeAddress: "12 High Street, Shimla, HP 171001",
  instagramHandle: "@summitflasks",
  email: "hello@summitflasks.in",
};

export type ColorVariant = {
  id: string;
  label: string;
  color: string;        // Tailwind bg color class
  hex: string;
  image: string;        // Product image URL — swap to real assets
};

export type CapacityVariant = {
  id: string;
  label: string;
  ml: number;
  priceINR: number;
};

export const COLOR_VARIANTS: ColorVariant[] = [
  {
    id: "alpine-sage",
    label: "Alpine Sage",
    color: "bg-[#7B9E87]",
    hex: "#7B9E87",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=90",
  },
  {
    id: "forest-black",
    label: "Forest Black",
    color: "bg-[#1C1C1E]",
    hex: "#1C1C1E",
    image:
      "https://images.unsplash.com/photo-1575377427642-087cf684ad09?w=800&q=90",
  },
  {
    id: "glacier-silver",
    label: "Glacier Silver",
    color: "bg-[#C4C4C4]",
    hex: "#C4C4C4",
    image:
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800&q=90",
  },
];

export const CAPACITY_VARIANTS: CapacityVariant[] = [
  { id: "750ml", label: "750 ml", ml: 750, priceINR: 2499 },
  { id: "950ml", label: "950 ml", ml: 950, priceINR: 2999 },
  { id: "1200ml", label: "1.2 L", ml: 1200, priceINR: 3499 },
];

export const FEATURES = [
  {
    id: "lid",
    size: "large",
    title: "Leakproof Chug Lid",
    description:
      "Precision-engineered silicone gasket. Flip it open, drink deep — zero drips. Built to handle trails, trains, and turbulence.",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=900&q=85",
    icon: "Droplets",
  },
  {
    id: "finish",
    size: "medium",
    title: "Powder Coat Finish",
    description:
      "Military-grade texture that grips like a handshake and resists scratches like armor.",
    icon: "Layers",
    badge: "30+ Colors",
  },
  {
    id: "steel",
    size: "medium",
    title: "18/8 Pro-Grade Steel",
    description:
      "Food-safe, BPA-free stainless steel — no metallic taste, ever.",
    icon: "Shield",
    badge: "Grade 304",
  },
  {
    id: "metrics",
    size: "metrics",
    title: "By the Numbers",
    stats: [
      { label: "Capacity", value: "950 ml" },
      { label: "Cold Retention", value: "24 hrs" },
      { label: "Heat Retention", value: "12 hrs" },
      { label: "Warranty", value: "Lifetime" },
    ],
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: "Priya S.",
    location: "Bangalore",
    rating: 5,
    text: "Took it to Spiti last winter — kept my chai warm for 10 hours at -8°C. Absolute beast.",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rahul M.",
    location: "Mumbai",
    rating: 5,
    text: "Best flask I've ever owned. The Glacier Silver looks stunning on my desk. Zero leaks after 6 months of daily use.",
    avatar: "RM",
  },
  {
    id: 3,
    name: "Ananya K.",
    location: "Delhi",
    rating: 5,
    text: "Worth every rupee. The chug lid design is chef's kiss — smooth flow, no spill.",
    avatar: "AK",
  },
];

export const SPECS = [
  { label: "Material", value: "18/8 Grade 304 Stainless Steel" },
  { label: "Insulation", value: "Double-wall vacuum insulation" },
  { label: "Cold Retention", value: "Up to 24 hours" },
  { label: "Heat Retention", value: "Up to 12 hours" },
  { label: "Lid Type", value: "Leakproof Chug Lid + Dust Cap" },
  { label: "Finish", value: "Matte Powder Coat" },
  { label: "Warranty", value: "Lifetime Guarantee" },
  { label: "BPA Free", value: "Yes" },
];

export const NAV_LINKS = [
  { label: "Overview", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Specs", href: "#purchase" },
  { label: "Reviews", href: "#reviews" },
];
