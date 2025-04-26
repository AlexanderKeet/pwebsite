"use client";
import React, { useEffect, useState, useRef } from "react";
// --- Theme Switcher ---
function ThemeSwitcher() {
  // Use system preference only on first load, then use localStorage or default to light
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark" || stored === "light") return stored;
    }
    return "light";
  };
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <button
      aria-label="Toggle theme"
      className="ml-4 p-2 rounded-full bg-white/70 dark:bg-black/40 shadow hover:scale-110 transition"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <svg width="24" height="24" fill="currentColor"><path d="M12 3a9 9 0 0 0 0 18c4.97 0 9-4.03 9-9 0-4.97-4.03-9-9-9zm0 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"/></svg>
      ) : (
        <svg width="24" height="24" fill="currentColor"><path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.45 10.45l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zm1.79-10.45l-1.8 1.79 1.42 1.42 1.79-1.8-1.41-1.41zm-10.45 10.45l-1.79 1.8 1.41 1.41 1.8-1.79-1.42-1.42zM12 5a7 7 0 0 1 0 14 7 7 0 0 1 0-14z"/></svg>
      )}
    </button>
  );
}
// --- Section Reveal ---
function SectionReveal({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);
  return (
    <div className={show ? "animate-fade-in-up" : "opacity-0"}>{children}</div>
  );
}
// --- Resume CTA ---
function ResumeCTA() {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <a
      href="#"
      className="fixed bottom-8 left-8 z-50 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition animate-fade-in-up flex items-center gap-2 spotlight-hover pulse-shadow"
      style={{ animationDelay: '1.2s' }}
      ref={ref}
      onMouseMove={e => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          setPos({ x, y });
        }
      }}
      onMouseLeave={() => setPos({ x: 50, y: 50 })}
    >
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 16v-8m0 8l-4-4m4 4l4-4"/><rect x="4" y="4" width="16" height="16" rx="4"/></svg>
      Download Resume
      <span
        className="spotlight"
        style={{
          '--x': `${pos.x}%`,
          '--y': `${pos.y}%`,
        } as React.CSSProperties}
      />
    </a>
  );
}
// --- TypingText ---
function TypingText({ text, className }: { text: string; className?: string }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [text]);
  return <span className={className}>{displayed}<span className="animate-pulse">|</span></span>;
}
// --- Scroll Progress Bar ---
function ScrollProgressBar() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[999]">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-200"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}
// --- SpotlightLink ---
function SpotlightLink({ href, children }: { href: string; children: React.ReactNode }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <a
      href={href}
      className="spotlight-hover hover:text-blue-600 dark:hover:text-blue-300 transition relative px-2 py-1 rounded"
      ref={ref}
      onMouseMove={e => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
          const x = ((e.clientX - rect.left) / rect.width) * 100;
          const y = ((e.clientY - rect.top) / rect.height) * 100;
          setPos({ x, y });
        }
      }}
      onMouseLeave={() => setPos({ x: 50, y: 50 })}
    >
      <span className="relative z-10 nav-underline">{children}</span>
      <span
        className="spotlight"
        style={{
          '--x': `${pos.x}%`,
          '--y': `${pos.y}%`,
        } as React.CSSProperties}
      />
    </a>
  );
}
// --- GlowOnScroll ---
function GlowOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [intensity, setIntensity] = useState(0.3);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Increase glow as container is more centered in viewport
      const center = rect.top + rect.height / 2;
      const dist = Math.abs(windowHeight / 2 - center);
      const maxDist = windowHeight / 2 + rect.height / 2;
      setIntensity(0.3 + 0.5 * (1 - Math.min(dist / maxDist, 1)));
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      ref={ref}
      style={{
        boxShadow: `0 0 64px 0 rgba(99,102,241,${intensity}), 0 0 128px 0 rgba(236,72,153,${intensity * 0.5})`,
        transition: 'box-shadow 0.4s cubic-bezier(.4,0,.2,1)',
        borderRadius: '1.5rem',
      }}
    >
      {children}
    </div>
  );
}
// --- HelpButton and HelpModal ---
function HelpButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 text-white shadow-xl hover:scale-110 transition animate-fade-in-up pulse-shadow"
        aria-label="Show help/info"
        onClick={() => setOpen(true)}
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 16v-1m0-4a1 1 0 1 1 2 0c0 1-2 1-2 3"/></svg>
      </button>
      {open && <HelpModal onClose={() => setOpen(false)} />}
    </>
  );
}
function HelpModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white dark:bg-black rounded-2xl shadow-2xl max-w-lg w-full p-8 animate-fade-in-up">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-pink-500 text-2xl font-bold"
          aria-label="Close help"
          onClick={onClose}
        >×</button>
        <h2 className="text-2xl font-bold mb-4 text-blue-700 dark:text-blue-300">How to Personalize Your Portfolio</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>Replace all <span className="font-mono bg-gray-100 px-1 rounded">[placeholders]</span> with your real info, skills, projects, and links in <span className="font-mono">src/app/page.tsx</span>.</li>
          <li>Update your profile photo by replacing the image in the profile section.</li>
          <li>Add or edit project cards, testimonials, timeline events, and tech stack icons as needed.</li>
          <li>Customize colors, gradients, and animations in <span className="font-mono">globals.css</span> for your unique style.</li>
          <li>For advanced changes, edit layout, navigation, and section order in <span className="font-mono">layout.tsx</span>.</li>
          <li>Print or save as PDF for a beautiful, branded resume version.</li>
        </ul>
        <div className="mt-6 text-center text-sm text-gray-500">Need more help? <a href="https://nextjs.org/docs" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Read the Next.js docs</a></div>
      </div>
    </div>
  );
}
// --- PageLoader ---
function PageLoader() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => setLoading(false);
    if (document.readyState === "complete") setLoading(false);
    else window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);
  if (!loading) return null;
  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-white/80 dark:bg-black/80 backdrop-blur-xl animate-fade-in">
      <div className="loader-spinner" aria-label="Loading...">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <circle cx="32" cy="32" r="28" stroke="#60a5fa" strokeWidth="6" opacity="0.2" />
          <circle cx="32" cy="32" r="28" stroke="#a78bfa" strokeWidth="6" strokeDasharray="44 88" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="0 32 32" to="360 32 32" dur="1.2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </div>
  );
}
// --- BackgroundGrid ---
function BackgroundGrid() {
  return (
    <svg className="w-full h-full" style={{ opacity: 0.13 }}>
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6366f1" strokeWidth="0.5" />
        </pattern>
        <linearGradient id="grid-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#6366f1" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#grid-fade)" />
      <animateTransform attributeName="transform" type="translate" from="0 0" to="40 40" dur="18s" repeatCount="indefinite" />
    </svg>
  );
}
// --- ScrollIndicator ---
function ScrollIndicator() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY < 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[999] flex flex-col items-center pointer-events-none animate-fade-in">
      <div className="w-8 h-8 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5"><path d="M12 6v12m0 0l-5-5m5 5l5-5"/></svg>
      </div>
      <span className="text-xs text-blue-700 dark:text-blue-300 mt-1 animate-pulse">Scroll</span>
    </div>
  );
}
// --- SectionNavMenu ---
function SectionNavMenu() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.key === 'Tab' || e.key === 'F6') && window.scrollY < 40) {
        setShow(true);
      }
      if (e.key === 'Escape') setShow(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);
  if (!show) return null;
  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
    { id: "testimonials", label: "Testimonials" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "timeline", label: "Timeline" },
  ];
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[9999] bg-white/95 dark:bg-black/95 rounded-2xl shadow-2xl px-8 py-6 flex flex-col gap-3 border border-blue-200 dark:border-blue-900 animate-fade-in">
      <span className="text-base font-semibold text-blue-700 dark:text-blue-300 mb-2">Jump to section</span>
      {sections.map(s => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400 rounded px-2 py-1 transition"
          tabIndex={0}
          onClick={() => setShow(false)}
        >
          {s.label}
        </a>
      ))}
      <button className="mt-3 text-xs text-gray-400 hover:text-pink-500" onClick={() => setShow(false)} autoFocus>Close (Esc)</button>
    </div>
  );
}
// --- BackToTopProgressCircle ---
function BackToTopProgressCircle() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) : 0);
      setVisible(scrollTop > 200);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!visible) return null;
  const radius = 28;
  const stroke = 4;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - progress * circumference;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 p-0 rounded-full bg-white/80 dark:bg-black/80 shadow-xl hover:scale-110 transition animate-fade-in-up"
      aria-label="Back to top"
      style={{ width: 56, height: 56 }}
    >
      <svg width={56} height={56}>
        <circle
          cx={28}
          cy={28}
          r={normalizedRadius}
          stroke="#e0e7ef"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={28}
          cy={28}
          r={normalizedRadius}
          stroke="#6366f1"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.3s cubic-bezier(.4,0,.2,1)' }}
        />
        <polyline
          points="22,30 28,24 34,30"
          fill="none"
          stroke="#6366f1"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  // --- All client-side logic and components from layout.tsx go here ---
  // This now mirrors the structure of layout.tsx, but is fully client-side.
  return (
    <>
      <a href="#main-content" className="skip-link absolute left-4 top-2 z-[10000] bg-blue-600 text-white px-4 py-2 rounded-full font-semibold focus:translate-y-0 -translate-y-16 focus:outline-none focus:ring-4 ring-blue-300 transition-transform duration-300">Skip to main content</a>
      <ScrollProgressBar />
      {/* Animated Glassmorphic Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-4xl rounded-2xl glass-navbar flex items-center justify-between px-8 py-3 animate-fade-in">
        <div className="flex items-center gap-3">
          {/* TODO: Replace with your logo */}
          <span className="font-bold text-xl tracking-tight text-blue-700 dark:text-blue-300">[Logo]</span>
          <span className="font-mono text-sm text-gray-500 dark:text-gray-400">Portfolio</span>
        </div>
        <div className="flex gap-6 text-base font-medium">
          <SpotlightLink href="#about">About</SpotlightLink>
          <SpotlightLink href="#skills">Skills</SpotlightLink>
          <SpotlightLink href="#projects">Projects</SpotlightLink>
          <SpotlightLink href="#contact">Contact</SpotlightLink>
        </div>
        {/* Theme Switcher */}
        <ThemeSwitcher />
      </nav>
      {/* Animated Background Grid Overlay */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <BackgroundGrid />
      </div>
      {/* Main Content Container */}
      <main id="main-content" className="flex flex-col items-center justify-center min-h-screen pt-32 pb-16 px-2 animate-fade-in">
        <GlowOnScroll>
          <div className="relative w-full max-w-3xl rounded-3xl p-[2px] glass-content animate-fade-in-up">
            <div className="rounded-[22px] bg-white/80 dark:bg-black/60 shadow-2xl p-8 sm:p-12 backdrop-blur-xl border border-white/30 dark:border-white/10">
              <SectionReveal>{children}</SectionReveal>
            </div>
          </div>
        </GlowOnScroll>
      </main>
      {/* Floating Resume CTA Button */}
      <ResumeCTA />
      {/* Floating Help Button */}
      <HelpButton />
      {/* Footer */}
      <footer className="w-full flex flex-col items-center gap-2 py-8 text-gray-500 dark:text-gray-400 animate-fade-in-up">
        <div className="flex gap-4 mb-2">
          {/* TODO: Add your social links */}
          <a href="#" aria-label="GitHub" className="hover:text-black dark:hover:text-white transition"><svg width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 dark:hover:text-blue-300 transition"><svg width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-400 dark:hover:text-blue-400 transition"><svg width="24" height="24" fill="currentColor"><path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72c-.95.56-2 .97-3.13 1.19a4.92 4.92 0 0 0-8.39 4.48A13.97 13.97 0 0 1 1.67 3.15a4.93 4.93 0 0 0 1.52 6.57c-.8-.02-1.56-.25-2.22-.62v.06a4.93 4.93 0 0 0 3.95 4.83c-.39.11-.8.17-1.22.17-.3 0-.59-.03-.87-.08a4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 21.54a13.94 13.94 0 0 0 7.56 2.22c9.05 0 14-7.5 14-14v-.64A9.93 9.93 0 0 0 24 4.56z"/></svg></a>
        </div>
        <span className="text-xs">© {new Date().getFullYear()} [Your Name]. All rights reserved.</span>
      </footer>
      <PageLoader />
      <SectionNavMenu />
      <BackToTopProgressCircle />
    </>
  );
}

export {
  ThemeSwitcher,
  SectionReveal,
  ResumeCTA,
  ScrollProgressBar,
  SpotlightLink,
  GlowOnScroll,
  HelpButton,
  PageLoader,
  BackgroundGrid,
  ScrollIndicator,
  SectionNavMenu,
  BackToTopProgressCircle,
  TypingText
};
