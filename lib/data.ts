// ============================================================
// MOCK DATA — Configured for < 10 minute store customizations
// ============================================================

export const BRAND = {
  name: "Summit",
  tagline: "Built for Altitude.",
  subTagline:
    "Engineered stainless steel flasks for explorers, creators, and everyday commuters.",
  storeAddress: "12 High Ridge Pass, Aspen, CO 81611",
  instagramHandle: "@summitflask",
  instagramUrl: "https://instagram.com/summitflask",
  email: "concierge@summitflask.com",
};

export const CURRENCY = {
  symbol: "$",
  code: "USD",
};

export function formatPrice(amount: number): string {
  return `${CURRENCY.symbol}${amount}`;
}

export type ColorVariant = {
  id: string;
  label: string;
  colorClass: string;
  hex: string;
  image: string;
};

export type CapacityVariant = {
  id: string;
  label: string;
  ml: number;
  price: number;
};

export const COLOR_VARIANTS: ColorVariant[] = [
  {
    id: "alpine-sage",
    label: "Alpine Sage",
    colorClass: "bg-[#7B9E87]",
    hex: "#7B9E87",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=1000&q=90&auto=format&fit=crop",
  },
  {
    id: "forest-black",
    label: "Forest Black",
    colorClass: "bg-[#1C1C1E]",
    hex: "#1C1C1E",
    image:
      "https://images.unsplash.com/photo-1575377427642-087cf684ad09?w=1000&q=90&auto=format&fit=crop",
  },
  {
    id: "glacier-silver",
    label: "Glacier Silver",
    colorClass: "bg-[#C4C4C4]",
    hex: "#C4C4C4",
    image:
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=1000&q=90&auto=format&fit=crop",
  },
];

export const CAPACITY_VARIANTS: CapacityVariant[] = [
  { id: "750ml", label: "750 ml", ml: 750, price: 34 },
  { id: "950ml", label: "950 ml", ml: 950, price: 40 },
  { id: "1200ml", label: "1.2 L", ml: 1200, price: 48 },
];

export const FEATURES = [
  {
    id: "lid",
    title: "Leakproof Chug Lid",
    description:
      "Precision-engineered food-grade silicone seal with rapid magnetic latch. Flip, hydrate, snap shut — guaranteed zero leaks under extreme pressure.",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=900&q=85&auto=format&fit=crop",
    tag: "Aero-Seal Tech",
  },
  {
    id: "finish",
    title: "Powder Coat Finish",
    description:
      "Matte ceramic-infused exterior that stays condensation-free, delivers rock-solid grip in rain or snow, and resists chipping.",
    tag: "Tactile Grip",
  },
  {
    id: "steel",
    title: "18/8 Pro-Grade Steel",
    description:
      "Double-walled 18/8 stainless steel prevents flavor transfer and shields cold drinks for 24h or piping coffee for 12h.",
    tag: "Grade 304",
  },
];

export const METRICS = [
  { label: "Cold Retention", value: "24 hrs" },
  { label: "Heat Retention", value: "12 hrs" },
  { label: "Capacity Options", value: "Up to 1.2 L" },
  { label: "Warranty", value: "Lifetime" },
];

export const REVIEWS = [
  {
    id: 1,
    name: "Elena Rostova",
    location: "Boulder, CO",
    rating: 5,
    text: "Carried the Alpine Sage on a 3-day backcountry trail. Ice was still rattling in the flask on day two. The ergonomics and lid lock are unmatched.",
    avatar: "ER",
  },
  {
    id: 2,
    name: "Marcus Vance",
    location: "Seattle, WA",
    rating: 5,
    text: "Sleek enough for executive meetings, tough enough for weekend mountaineering. The Glacier Silver finish looks like modern industrial sculpture.",
    avatar: "MV",
  },
  {
    id: 3,
    name: "Aria Chen",
    location: "San Francisco, CA",
    rating: 5,
    text: "Zero metallic taste, the chug mouth is perfectly proportioned, and it fits smoothly into standard vehicle cup holders. Absolute 10/10.",
    avatar: "AC",
  },
];

export const SPECS = [
  { label: "Material Grade", value: "18/8 (304) Pro Stainless Steel" },
  { label: "Insulation Rating", value: "TempShield™ Double-Wall Vacuum" },
  { label: "Cold Retention", value: "Up to 24 Hours with Ice" },
  { label: "Heat Retention", value: "Up to 12 Hours Hot" },
  { label: "Lid Architecture", value: "Magnetic Flow Chug + Leakproof Cap" },
  { label: "Exterior Coat", value: "Electrostatically Baked Powder Shield" },
  { label: "Warranty Coverage", value: "Lifetime Manufacturer Guarantee" },
  { label: "Safety Standard", value: "BPA-Free, Phthalate-Free & Food-Safe" },
];

export const NAV_LINKS = [
  { label: "Overview", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Specs", href: "#purchase" },
  { label: "Reviews", href: "#reviews" },
];
