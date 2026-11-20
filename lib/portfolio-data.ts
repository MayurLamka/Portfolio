export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: string;
  badge: string;
  year: string;
  techStack: string[];
  description: string;
  architecture: string;
  keyFeatures: string[];
  metrics: string[];
  githubUrl: string;
  demoUrl?: string;
  gradient: string;
  accentColor: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number; tags?: string }[];
}

export const PERSONAL_INFO = {
  name: "Mayur Lamka",
  firstName: "Mayur",
  lastName: "Lamka",
  brandName: "Mayur®",
  role: "Aspiring Full Stack Developer",
  headline: "Building Scalable Full-Stack Systems & High-Impact Digital Experiences",
  statement: "I BUILD SCALABLE FULL-STACK WEB APPS & INTUITIVE DIGITAL EXPERIENCES THAT ARE SIMPLE, SMART AND IMPACTFUL",
  email: "mayurlamka9664@gmail.com",
  github: "https://github.com/MayurLamka",
  githubHandle: "@MayurLamka",
  linkedin: "https://linkedin.com/in/mayur-lamka",
  linkedinHandle: "mayur-lamka",
  location: "India • Available for Global & Remote Roles",
  status: "Available for Full-Time Roles & Opportunities",
  year: "©2026",
  aboutSummary:
    "Aspiring Full Stack Developer with a strong foundation in web development and programming. Experienced in building practical projects, developing backend functionality, and working with relational and NoSQL databases. Passionate about learning new technologies, solving algorithmic challenges, and creating impactful web applications.",
  leetcodeSolved: "150+",
  activeProjects: "3+",
  gmailComposeUrl: (subject = "Portfolio Inquiry — Mayur Lamka", body = "Hi Mayur,\n\nI came across your portfolio and would love to connect with you regarding...") =>
    `https://mail.google.com/mail/?view=cm&fs=1&to=mayurlamka9664@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`,
};

export const PROJECTS: Project[] = [
  {
    id: "algocraft",
    title: "AlgoCraft",
    subtitle: "DSA Practice & Coding Platform",
    tagline: "Full-stack algorithmic challenge platform with secure Dockerized code execution sandbox",
    category: "Full Stack Platform",
    badge: "✻ ALGOCRAFT /Full Stack Platform",
    year: "2025",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Docker",
      "Monaco Editor",
      "JWT",
      "REST APIs",
      "Git & GitHub",
    ],
    description:
      "AlgoCraft is an end-to-end algorithmic problem-solving and coding platform modeled after modern competitive programming systems. It empowers developers to practice coding challenges, submit solutions in multiple programming languages, and receive instant test-case feedback running inside isolated Docker containers.",
    architecture:
      "React frontend connected to an Express.js API gateway. Submissions are queued and dispatched into ephemeral, secure Docker containers that compile and execute code with strict CPU/memory limits. Relational problem sets, user submissions, and analytics are persisted in MySQL with JWT session verification.",
    keyFeatures: [
      "Secure Docker container sandbox preventing malicious system calls during user code execution",
      "Monaco Editor integration with syntax highlighting, autocomplete, and theme toggling",
      "Automated test-case verification comparing outputs against hidden test suites",
      "JWT-based user authentication, role-based authorization, and protected REST APIs",
      "Comprehensive user dashboard tracking solved problems, submission history, and performance stats",
      "Normalized MySQL database schema optimized for high-frequency submission logging",
    ],
    metrics: ["Isolated Docker Sandbox", "Monaco IDE Integration", "Instant Automated Evals"],
    githubUrl: "https://github.com/MayurLamka",
    demoUrl: "https://github.com/MayurLamka",
    gradient: "from-amber-500 via-orange-500 to-red-600",
    accentColor: "#f97316",
  },
  {
    id: "wanderlust",
    title: "WanderLust",
    subtitle: "Airbnb-Style Property Listing Platform",
    tagline: "Vacation rental marketplace featuring geospatial search, cloud image pipeline & review ratings",
    category: "Full Stack Marketplace",
    badge: "✻ WANDERLUST /Marketplace",
    year: "2024",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "EJS",
      "Bootstrap",
      "Passport.js",
      "Cloudinary",
      "Mapbox",
    ],
    description:
      "WanderLust is a full-featured vacation rental web platform where hosts can publish unique accommodations and travelers can explore stays around the world. Designed with complete CRUD flows, interactive geolocation mapping, and authenticated user reviews.",
    architecture:
      "Node.js & Express server paired with MongoDB Atlas for flexible document storage. Integrated Mapbox Forward Geocoding API for precision location rendering and Cloudinary CDN for optimized multi-image uploads. Passport.js handles user sessions with bcrypt hashing.",
    keyFeatures: [
      "Full CRUD operations for property listings with image upload management via Cloudinary CDN",
      "Interactive Mapbox integration displaying property pins and regional neighborhood views",
      "Star-rating review system with server-side schema validation and authenticated author protection",
      "Robust authorization middleware ensuring only listing owners can edit or remove properties",
      "Passport.js authentication with session cookies, flash notifications, and password hashing",
      "Responsive layout built with Bootstrap grid and customized modern CSS components",
    ],
    metrics: ["Cloudinary Image Pipeline", "Mapbox Geospatial Maps", "MongoDB Document Store"],
    githubUrl: "https://github.com/MayurLamka",
    demoUrl: "https://github.com/MayurLamka",
    gradient: "from-rose-500 via-pink-600 to-orange-500",
    accentColor: "#f43f5e",
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone",
    subtitle: "Music Streaming Web Application",
    tagline: "High-fidelity recreation of Spotify's streaming interface with interactive Web Audio player",
    category: "Frontend & Web Audio",
    badge: "✻ SPOTIFY /Web Audio Player",
    year: "2024",
    techStack: ["HTML5", "CSS3", "JavaScript", "Web Audio API", "Responsive Design"],
    description:
      "A pixel-perfect, interactive recreation of the Spotify web desktop and mobile experience. Built with native web technologies to provide a lightning-fast music streaming player with interactive queue control, seeking, and responsive navigation.",
    architecture:
      "Modular JavaScript audio state controller coupled with responsive CSS Grid and Flexbox layouts. Audio playback is managed through HTML5 Audio APIs with custom event listeners for timeline synchronization and volume attenuation.",
    keyFeatures: [
      "Custom audio playback controller with play, pause, next, previous, and volume sliders",
      "Interactive timeline scrubber allowing users to seek to exact timestamps seamlessly",
      "Dynamic playlist browsing with music cards, album art, and artist metadata",
      "Collapsible sidebar navigation and bottom docked music player bar matching Spotify's dark aesthetic",
      "Pure JavaScript implementation with zero heavy external library overhead for 60fps responsiveness",
    ],
    metrics: ["Pixel-Perfect Dark UI", "Realtime Audio Controller", "60fps Responsive Layout"],
    githubUrl: "https://github.com/MayurLamka",
    demoUrl: "https://github.com/MayurLamka",
    gradient: "from-emerald-500 via-green-600 to-teal-700",
    accentColor: "#22c55e",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "code",
    skills: [
      { name: "JavaScript", level: 90, tags: "ES6+, Async, DOM" },
      { name: "Python", level: 85, tags: "Data Structures, OOP, Scripting" },
      { name: "Java", level: 82, tags: "OOP, Collections, Algorithms" },
      { name: "C++", level: 85, tags: "STL, Memory, DSA Practice" },
      { name: "C", level: 80, tags: "Pointers, Systems Programming" },
    ],
  },
  {
    category: "Frontend & Web",
    icon: "layout",
    skills: [
      { name: "React.js", level: 88, tags: "Hooks, State, Components" },
      { name: "HTML5", level: 95, tags: "Semantic, Accessible" },
      { name: "CSS3", level: 90, tags: "Flexbox, Grid, Animations" },
      { name: "Bootstrap", level: 88, tags: "Responsive Layouts" },
      { name: "EJS", level: 85, tags: "Server Templates" },
      { name: "Tailwind CSS", level: 90, tags: "Modern Utility Styling" },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "server",
    skills: [
      { name: "Node.js", level: 88, tags: "Event Loop, Express Engines" },
      { name: "Express.js", level: 90, tags: "Routing, Middleware, APIs" },
      { name: "RESTful APIs", level: 92, tags: "Endpoints, Status Codes, JSON" },
      { name: "JWT", level: 86, tags: "Auth Tokens, Guards" },
      { name: "Passport.js", level: 84, tags: "Sessions, Strategies" },
    ],
  },
  {
    category: "Databases & DevOps",
    icon: "database",
    skills: [
      { name: "MySQL", level: 88, tags: "Relational Modeling, Joins, Indexing" },
      { name: "MongoDB", level: 86, tags: "Documents, Aggregations" },
      { name: "Docker", level: 80, tags: "Containers, Sandbox Execution" },
      { name: "Git & GitHub", level: 92, tags: "Version Control, Branching, PRs" },
      { name: "Monaco Editor", level: 82, tags: "Web IDE Embeds" },
    ],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "150+ LeetCode Problems Solved",
    description: "Consistent problem solving covering Arrays, Strings, Recursion, Sorting, Trees and Graphs.",
    badge: "150+ Solved",
    icon: "trophy",
    color: "#f59e0b",
  },
  {
    title: "Dockerized Sandbox Execution",
    description: "Architected a secure code execution pipeline for AlgoCraft to execute code in ephemeral containers.",
    badge: "Production Architecture",
    icon: "box",
    color: "#06b6d4",
  },
  {
    title: "Full-Stack Geospatial Engineering",
    description: "Implemented Mapbox geospatial mapping and Cloudinary CDN for WanderLust marketplace.",
    badge: "Cloud Integration",
    icon: "map-pin",
    color: "#ec4899",
  },
];
