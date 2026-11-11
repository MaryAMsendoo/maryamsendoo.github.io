export const RESUME_URL =
  "https://docs.google.com/document/d/1u-qIMyZe4_HYAbaa3gYRhCQYUuMHn4INdL3wezH-hQU/edit?usp=drivesdk";

export type Project = {
  title: string;
  description: string;
  image: string;
  alt: string;
  url: string;
};

export const projects: Project[] = [
  {
    title: "Attractions by Vera",
    description:
      "A full-stack e-commerce platform I led from development to production launch, built with Next.js, Node.js, Express and PostgreSQL, with Paystack payments and a complete admin system for products, inventory, orders and customers.",
    image: "/Assets/Images/attractionsbyvera.png",
    alt: "Attractions by Vera",
    url: "https://attractionsbyvera.com/",
  },
  {
    title: "Fastest Exchange",
    description:
      "Fastest exchange is an app that lets you instantly swap one currency & cryptocurrency for another. I implemented the multi-step exchange flow, SEO improvements and REST API integrations.",
    image: "/Assets/Images/fastest.png",
    alt: "Fastest Exchange",
    url: "https://app.fastest.exchange/",
  },
  {
    title: "Inqoins",
    description:
      "Inqoins is a cryptocurrency trading platform that enables users across Africa to buy, sell, and exchange Bitcoin and USDT using local currencies. I built the frontend from scratch with React, TypeScript and Tailwind CSS.",
    image: "/Assets/Images/inqoins.png",
    alt: "Inqoins",
    url: "https://inqoins.com/",
  },
  {
    title: "Chowbuddy",
    description:
      "A multi-sided food delivery platform that connects customers, food vendors, and riders. I led the development of the vendor dashboard and built the menu management module.",
    image: "/Assets/Images/chawbuddy.png",
    alt: "Chowbuddy",
    url: "https://chowbuddy.ng/",
  },
  {
    title: "Citizens Voices International",
    description:
      "A responsive, server-rendered website for Citizens Voices International, including Open Graph metadata for improved social sharing.",
    image: "/Assets/Images/cvi.png",
    alt: "Citizens Voices International",
    url: "https://cvi-nu.vercel.app/",
  },
  {
    title: "Bulk Feed",
    description:
      "An industrial feed manufacturing and supply company providing animal feed products and distribution services to businesses and customers.",
    image: "/Assets/Images/bulkfeed.png",
    alt: "Bulk Feed",
    url: "https://bulk-feed-supply.vercel.app/",
  },
  {
    title: "D-Online",
    description:
      "D-Online Harvest is an edutech platform providing online learning and skills development services. I built student dashboard features and responsive layouts.",
    image: "/Assets/Images/donline.png",
    alt: "D-Online",
    url: "https://d-online-harvest.vercel.app/dashboard",
  },
  // Hidden for now (was commented out in the original HTML) — uncomment to show it:
  // {
  //   title: "vita-health:",
  //   description:
  //     "A digital healthcare platform that connects patients, doctors, pharmacies, and diagnostics with secure medical records, telemedicine and e‑prescriptions.",
  //   image: "/Assets/Images/vitahealth.png",
  //   alt: "vita-health",
  //   url: "https://vita-health-three.vercel.app/",
  // },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Gandaria Ventures Limited",
    period: "04/2025 – Present",
    points: [
      "Built responsive web applications and administrative dashboards using React, Next.js and TypeScript, with a focus on reusable components and maintainable code.",
      "Contributed to Fastest Exchange, Speedax Admin and D-Online Harvest.",
      "Led the development and production launch of Attractions by Vera, a full-stack e-commerce platform.",
    ],
  },
  {
    role: "Frontend Developer (Volunteer)",
    company: "Calendula Technology",
    period: "06/2025 – Present",
    points: [
      "Led the development of the Chowbuddy vendor dashboard and built its menu management module.",
      "Identified and fixed a vendor onboarding bug, improving the registration experience.",
      "Developed a responsive, server-rendered website for Citizens Voices International.",
    ],
  },
  {
    role: "Frontend Developer (Contract)",
    company: "SAG Tech",
    period: "02/2026 – 08/2026",
    points: [
      "Built the frontend of Inqoins, a cryptocurrency trading platform, from scratch using React, TypeScript and Tailwind CSS.",
      "Designed and implemented the platform's planned frontend features independently without supplied design files.",
    ],
  },
];

export type Skill = {
  name: string;
  /** Image logo, or a Font Awesome class in `icon` */
  logo?: string;
  icon?: string;
  alt: string;
  description: string;
  /** Logos that need a white backing to be visible on the dark section */
  whiteBg?: boolean;
};

export const coreSkills: Skill[] = [
  {
    name: "HTML",
    logo: "/Assets/Images/html2.png",
    alt: "HTML5",
    description: "Semantic markup, accessibility, responsive web design",
  },
  {
    name: "CSS3",
    logo: "/Assets/Images/css.png",
    alt: "CSS3",
    description: "Flexbox, Grid, Animations, Responsive Design",
  },
  {
    name: "JavaScript",
    logo: "/Assets/Images/js.png",
    alt: "JavaScript",
    description: "ES6+, DOM Manipulation, Async/Await, APIs",
  },
  {
    name: "React",
    logo: "/Assets/Images/rct2 (1).png",
    alt: "React",
    description: "Hooks, Context API, React Router, Components",
  },
];

export const additionalSkills: Skill[] = [
  {
    name: "Next.js",
    logo: "/Assets/Images/nextjs.jfif",
    alt: "Next.js",
    description: "App Router, Server Components, API Routes",
    whiteBg: true,
  },
  {
    name: "TypeScript",
    logo: "/Assets/Images/ts.png",
    alt: "TypeScript",
    description: "Type Safety, Interfaces, Generics, TypeScript with React",
    whiteBg: true,
  },
  {
    name: "Bootstrap",
    logo: "/Assets/Images/bstp1.png",
    alt: "Bootstrap",
    description: "Responsive Grid, Components, Utilities",
  },
  {
    name: "Tailwind CSS",
    logo: "/Assets/Images/tailwind.png",
    alt: "Tailwind CSS",
    description: "Utility-first CSS, Responsive Design, Custom Configurations",
    whiteBg: true,
  },
];

export const backendSkills: Skill[] = [
  {
    name: "Node.js",
    icon: "fab fa-node-js",
    alt: "Node.js",
    description: "Server-side JavaScript, Session-Based Authentication, RBAC",
  },
  {
    name: "Express.js",
    icon: "fas fa-server",
    alt: "Express.js",
    description: "REST API Design, Validation with Zod, Payment Webhooks",
  },
  {
    name: "PostgreSQL",
    icon: "fas fa-database",
    alt: "PostgreSQL",
    description: "SQL, Database Migrations, Database Integration Testing",
  },
  {
    name: "Payments & Integrations",
    icon: "fas fa-credit-card",
    alt: "Payments",
    description: "Paystack, Refund Processing, Resend, S3-Compatible Storage",
  },
];

export const tools: { icon: string; label: string }[] = [
  { icon: "fab fa-git-alt", label: "Git & GitHub" },
  { icon: "fab fa-github", label: "GitHub Actions" },
  { icon: "fab fa-microsoft", label: "Fluent UI" },
  { icon: "fas fa-code", label: "APIs Integration" },
  { icon: "fas fa-paper-plane", label: "Postman & Swagger" },
  { icon: "fas fa-vial", label: "Automated Testing" },
  { icon: "fas fa-terminal", label: "CLI" },
  { icon: "fab fa-figma", label: "Figma" },
  { icon: "fas fa-cloud-upload-alt", label: "Vercel & Railway" },
  { icon: "fas fa-heartbeat", label: "UptimeRobot Monitoring" },
  { icon: "fas fa-search", label: "SEO" },
  { icon: "fas fa-mobile-alt", label: "Responsive Design" },
  { icon: "fas fa-bug", label: "Debugging" },
  { icon: "fas fa-magic", label: "Framer Motion" },
];

export const socials: { href: string; icon: string; label: string }[] = [
  { href: "mailto:marymsen05@gmail.com", icon: "fas fa-envelope", label: "Email" },
  {
    href: "https://www.linkedin.com/in/apenumbemarymsendoo?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmAw%2FmDjxQxG5bBS8A0M1lw%3D%3D",
    icon: "fab fa-linkedin-in",
    label: "LinkedIn",
  },
  { href: "https://www.facebook.com/marymsendoo.apenumb", icon: "fab fa-facebook", label: "Facebook" },
  { href: "https://wa.me/qr/AOKRZKEABLW4F1", icon: "fab fa-whatsapp", label: "WhatsApp" },
  { href: "https://x.com/MaryAMsendoo", icon: "fab fa-twitter", label: "X (Twitter)" },
  { href: "https://github.com/maryamsendoo", icon: "fab fa-github", label: "GitHub" },
];
