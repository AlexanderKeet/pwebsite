"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import { TypingText } from "./components/LayoutClient";

export default function Home() {
  // Dynamic title logic
  const [title, setTitle] = useState("Alexander Keet | Portfolio");
  const [activeSection, setActiveSection] = useState<string | null>(null);
  useEffect(() => {
    const sections = [
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
      { id: "testimonials", label: "Testimonials" },
      { id: "tech-stack", label: "Tech Stack" },
      { id: "timeline", label: "Timeline" },
    ];
    const handleScroll = () => {
      let current = "Alexander Keet | Portfolio";
      let currentSection: string | null = null;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2 && rect.bottom > 80) {
            current = `Alexander Keet | ${s.label}`;
            currentSection = s.id;
            break;
          }
        }
      }
      setTitle(current);
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="A stunning portfolio to showcase your work. Replace all placeholders with your real info!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="A stunning portfolio to showcase your work. Replace all placeholders with your real info!" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/your-og-image.png" />
        <meta property="og:url" content="[YOUR_PORTFOLIO_URL]" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content="A stunning portfolio to showcase your work. Replace all placeholders with your real info!" />
        <meta name="twitter:image" content="/your-og-image.png" />
        <meta name="author" content="[Your Name]" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#6366f1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="[YOUR_PORTFOLIO_URL]" />
        <meta property="og:updated_time" content="2025-04-24T00:00:00.000Z" />
      </Head>
      <div className="min-h-screen p-8 sm:p-20 flex flex-col items-center font-sans bg-white dark:bg-black text-black dark:text-white">
        {/* Profile Section */}
        <section className={`w-full max-w-2xl flex flex-col items-center gap-4 mt-8${activeSection==="about"?" active-section":""}`} id="about">
          {/* TODO: Replace with your profile photo */}
          <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden shadow-lg ring-4 ring-blue-400/30 dark:ring-blue-700/30 animate-fade-in-up animated-gradient-border">
            {/* <Image src="/your-photo.jpg" alt="Your Name" width={128} height={128} /> */}
            <span className="text-gray-400">[Profile Photo]</span>
          </div>
          <h1 className="text-3xl font-bold text-center">
            {/* Animated typing effect for your name */}
            <TypingText text="[Your Name]" className="text-blue-700 dark:text-blue-300" />
          </h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-400 text-center animate-fade-in-up delay-200"> CS Developer</h2>
          <LiveStatus statusMessages={["Open to opportunities!","Currently building something cool","Let’s connect!"]} />
          <p className="text-center text-lg mt-2 animate-fade-in-up delay-300"> A Talented, and Hardworking Programmer </p>
          <div className="flex gap-4 mt-2 animate-fade-in-up delay-400">
            {/* TODO: Add your social links */}
            <a href="#" className="text-blue-500 hover:underline">[LinkedIn]</a>
            <a href="#" className="text-blue-400 hover:underline">[GitHub]</a>
            <a href="#" className="text-pink-500 hover:underline">[Twitter/X]</a>
          </div>
        </section>

        {/* Scroll to Next Section Button */}
        <ScrollToNextSection />

        {/* Animated Wave Divider */}
        <WaveDivider />

        {/* Skills Section */}
        <SectionReveal delay={200} effect="slide-left">
        <section className={`w-full max-w-2xl mt-12${activeSection==="skills"?" active-section":""}`} id="skills">
          <h3 className="section-heading text-2xl font-semibold mb-4">Skills</h3>
          <ul className="flex flex-wrap gap-3">
            {/* TODO: List your main skills */}
            <li className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">Website Creation</li>
            <li className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">Backend Development</li>
            <li className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded">Design</li>
            {/* ...add more skills */}
          </ul>
        </section>
        </SectionReveal>

        {/* Animated Wave Divider */}
        <WaveDivider />

        {/* Projects Section */}
        <SectionReveal delay={400} effect="slide-right">
        <section className={`w-full max-w-2xl mt-12${activeSection==="projects"?" active-section":""}`} id="projects">
          <h3 className="section-heading text-2xl font-semibold mb-4">Projects</h3>
          <div className="flex flex-col gap-8">
            {/* TODO: Duplicate this block for each project */}
            <div className="project-card border rounded-lg p-4 flex flex-col sm:flex-row gap-4 bg-gray-50 dark:bg-gray-900 transition-transform duration-300">
              {/* <Image src="/project-image.jpg" alt="Project Title" width={96} height={96} className="rounded" /> */}
              <div>
                <h4 className="text-xl font-bold">[Project Title]</h4>
                <p className="text-gray-600 dark:text-gray-400">[Short project description]</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {/* TODO: List tech stack */}
                  <span className="bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded text-xs">[Tech 1]</span>
                  <span className="bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded text-xs">[Tech 2]</span>
                </div>
                <div className="flex gap-3 mt-2">
                  {/* TODO: Add project links */}
                  <a href="#" className="text-blue-500 hover:underline">[Live Demo]</a>
                  <a href="#" className="text-blue-400 hover:underline">[Source Code]</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        </SectionReveal>

        {/* Animated Wave Divider */}
        <WaveDivider />

        {/* Resume Section */}
        <SectionReveal delay={600} effect="zoom">
        <section className={`w-full max-w-2xl mt-12 flex flex-col items-center${activeSection==="resume"?" active-section":""}`} id="resume">
          {/* TODO: Add your resume link */}
          <SpotlightButton href="#" className="shimmer-btn">Download Resume (PDF)</SpotlightButton>
        </section>
        </SectionReveal>

        {/* Animated Wave Divider */}
        <WaveDivider />

        {/* Contact Section */}
        <SectionReveal delay={800} effect="slide-left">
        <section className={`w-full max-w-2xl mt-12 mb-8${activeSection==="contact"?" active-section":""}`} id="contact">
          <h3 className="section-heading text-2xl font-semibold mb-4">Contact</h3>
          <ContactForm />
          <ul className="text-lg mt-8">
            {/* TODO: Add your contact details */}
            <li>Email: <a href="mailto:your@email.com" className="text-blue-500 hover:underline">your@email.com</a></li>
            <li>Phone: 780 202 7227</li>
            <li>Location: Edmonton, Alberta</li>
          </ul>
        </section>
        </SectionReveal>

        {/* Animated Wave Divider */}
        <WaveDivider />

        {/* Testimonials Section */}
        <SectionReveal delay={1000} effect="slide-right">
        <section className={`w-full max-w-2xl mt-12${activeSection==="testimonials"?" active-section":""}`} id="testimonials">
          <h3 className="section-heading text-2xl font-semibold mb-4 text-center">Testimonials</h3>
          <TestimonialsCarousel />
        </section>
        </SectionReveal>

        {/* Animated Wave Divider */}
        <WaveDivider />

        {/* Dynamic Tech Stack Section */}
        <SectionReveal delay={1200} effect="zoom">
        <section className={`w-full max-w-2xl mt-12${activeSection==="tech-stack"?" active-section":""}`} id="tech-stack">
          <h3 className="section-heading text-2xl font-semibold mb-4 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {/* TODO: Replace with your favorite tech icons */}
            <TechIcon name="React" color="#61dafb" icon={<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#222" /><g><ellipse rx="10" ry="4" cx="20" cy="20" fill="none" stroke="#61dafb" strokeWidth="2" /><ellipse rx="10" ry="4" cx="20" cy="20" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(60 20 20)" /><ellipse rx="10" ry="4" cx="20" cy="20" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(120 20 20)" /><circle cx="20" cy="20" r="2.5" fill="#61dafb" /></g></svg>} />
            <TechIcon name="TypeScript" color="#3178c6" icon={<svg width="40" height="40" viewBox="0 0 40 40"><rect width="36" height="36" x="2" y="2" rx="8" fill="#222" /><text x="20" y="28" textAnchor="middle" fontSize="18" fill="#3178c6" fontWeight="bold">TS</text></svg>} />
            <TechIcon name="Next.js" color="#fff" icon={<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#222" /><text x="20" y="28" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">Next</text></svg>} />
            <TechIcon name="Tailwind" color="#38bdf8" icon={<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#222" /><path d="M13 23c1.5-3 3.5-4.5 6-4.5s4.5 1.5 6 4.5c-1.5 3-3.5 4.5-6 4.5s-4.5-1.5-6-4.5z" fill="#38bdf8" /></svg>} />
            {/* ...add more TechIcon components for your stack */}
          </div>
        </section>
        </SectionReveal>

        {/* Animated Wave Divider */}
        <WaveDivider />

        {/* Timeline Section */}
        <SectionReveal delay={1400} effect="flip">
        <section className={`w-full max-w-2xl mt-12${activeSection==="timeline"?" active-section":""}`} id="timeline">
          <h3 className="section-heading text-2xl font-semibold mb-4 text-center">Timeline</h3>
          <Timeline />
        </section>
        </SectionReveal>
      </div>
    </>
  );
}

function SpotlightButton({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [confetti, setConfetti] = useState(false);
  const handleClick = (e: React.MouseEvent) => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 1200);
  };
  return (
    <a
      href={href}
      className={`spotlight-hover bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition relative inline-block overflow-visible ${className || ""}`}
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
      onClick={handleClick}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="spotlight"
        style={{
          '--x': `${pos.x}%`,
          '--y': `${pos.y}%`,
        } as React.CSSProperties}
      />
      {confetti && <ConfettiBurst />}
    </a>
  );
}

// --- ConfettiBurst animation ---
function ConfettiBurst() {
  // 12 confetti pieces, random color/angle
  const confetti = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i / 12) * 2 * Math.PI;
    const x = Math.cos(angle) * 60;
    const y = Math.sin(angle) * 60;
    const colors = ["#60a5fa", "#a78bfa", "#f472b6", "#facc15", "#34d399", "#f87171"];
    const color = colors[i % colors.length];
    const delay = Math.random() * 0.2;
    return (
      <span
        key={i}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 8,
          height: 8,
          background: color,
          borderRadius: 2,
          transform: `translate(-50%, -50%) rotate(${angle}rad)`,
          animation: `confetti-burst 1s ${delay}s cubic-bezier(.6,0,.4,1) forwards`,
          zIndex: 20,
        }}
      />
    );
  });
  return <>{confetti}</>;
}

// --- ScrollToNextSection component ---
function ScrollToNextSection() {
  return (
    <button
      aria-label="Scroll to skills"
      className="mx-auto block mt-4 animate-bounce-slow text-blue-500 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-400 transition"
      style={{ fontSize: 36 }}
      onClick={() => {
        const el = document.getElementById("skills");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
    </button>
  );
}

// --- ContactForm with animated validation ---
function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState<{[k:string]:boolean}>({});
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState<{[k:string]:boolean}>({});
  const [shake, setShake] = useState<{[k:string]:boolean}>({});

  function validate() {
    return {
      name: fields.name.trim().length > 1,
      email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fields.email),
      message: fields.message.trim().length > 5,
    };
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }));
    setTouched(t => ({ ...t, [e.target.name]: true }));
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement>) {
    setTouched(t => ({ ...t, [e.target.name]: true }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    setValid(v);
    setSubmitted(true);
    const allValid = Object.values(v).every(Boolean);
    if (!allValid) {
      // Animate shake for invalid fields
      Object.entries(v).forEach(([k, ok]) => {
        if (!ok) {
          setShake(s => ({ ...s, [k]: true }));
          setTimeout(() => setShake(s => ({ ...s, [k]: false })), 500);
        }
      });
      return;
    }
    // TODO: Handle actual form submission (e.g., email or API)
    alert("Message sent! (This is a placeholder)");
    setFields({ name: "", email: "", message: "" });
    setTouched({});
    setSubmitted(false);
    setValid({});
  }

  const v = validate();
  return (
    <form className="flex flex-col gap-6 mt-4" onSubmit={handleSubmit} noValidate>
      <FloatingLabelInput
        label="Your Name"
        type="text"
        name="name"
        autoComplete="name"
        required
        value={fields.name}
        onChange={handleChange}
        onBlur={handleBlur}
        valid={submitted ? v.name : undefined}
        shake={!!shake.name}
      />
      <FloatingLabelInput
        label="Your Email"
        type="email"
        name="email"
        autoComplete="email"
        required
        value={fields.email}
        onChange={handleChange}
        onBlur={handleBlur}
        valid={submitted ? v.email : undefined}
        shake={!!shake.email}
      />
      <FloatingLabelInput
        label="Message"
        type="textarea"
        name="message"
        required
        value={fields.message}
        onChange={handleChange}
        onBlur={handleBlur}
        valid={submitted ? v.message : undefined}
        shake={!!shake.message}
      />
      <button type="submit" className="spotlight-hover shimmer-btn bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition relative inline-block">Send Message</button>
    </form>
  );
}

// Update FloatingLabelInput to fix onFocus
function FloatingLabelInput({ label, type, name, autoComplete, required, value, onChange, onBlur, onFocus, valid, shake }: {
  label: string, type: string, name: string, autoComplete?: string, required?: boolean,
  value?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void, onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void, valid?: boolean, shake?: boolean
}) {
  const [focus, setFocus] = useState(false);
  const isActive = focus || (value && value.length > 0);
  let border = "border-gray-300 dark:border-gray-700";
  if (valid === true) border = "border-green-400";
  if (valid === false) border = "border-red-400";
  return (
    <div className={`relative ${shake ? "animate-shake" : ""}`}>
      {type === "textarea" ? (
        <textarea
          name={name}
          autoComplete={autoComplete}
          required={required}
          className={`w-full bg-white/70 dark:bg-black/40 border ${border} rounded-lg px-4 pt-6 pb-2 text-base outline-none focus:ring-2 focus:ring-blue-400 transition`}
          value={value}
          onFocus={e => { setFocus(true); if (typeof onFocus === 'function') onFocus(e); }}
          onBlur={e => { setFocus(false); if (typeof onBlur === 'function') onBlur(e); }}
          onChange={onChange}
          rows={4}
        />
      ) : (
        <input
          type={type}
          name={name}
          autoComplete={autoComplete}
          required={required}
          className={`w-full bg-white/70 dark:bg-black/40 border ${border} rounded-lg px-4 pt-6 pb-2 text-base outline-none focus:ring-2 focus:ring-blue-400 transition`}
          value={value}
          onFocus={e => { setFocus(true); if (typeof onFocus === 'function') onFocus(e); }}
          onBlur={e => { setFocus(false); if (typeof onBlur === 'function') onBlur(e); }}
          onChange={onChange}
        />
      )}
      <label
        className={`absolute left-4 top-4 text-gray-500 dark:text-gray-400 pointer-events-none transition-all duration-200 ${isActive ? "-translate-y-3 scale-90 bg-white/80 dark:bg-black/60 px-1" : ""}`}
        style={{ zIndex: 2 }}
      >
        {label}
      </label>
    </div>
  );
}

// --- TestimonialsCarousel component ---
function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "My Dad",
      title: "CEO and Founder of MEF inc.",
      quote: "Ive never meet a more talented developer",
      avatar: null, // e.g. "/avatar1.jpg"
    },
    {
      name: "[Person 2]",
      title: "[Their Title/Company]",
      quote: "[Another impressive endorsement goes here. You can add as many as you like! ]",
      avatar: null,
    },
    // ...add more testimonials
  ];
  const [idx, setIdx] = useState(0);
  // Auto-advance every 6s
  useEffect(() => {
    const t = setTimeout(() => setIdx(i => (i + 1) % testimonials.length), 6000);
    return () => clearTimeout(t);
  }, [idx, testimonials.length]);
  const t = testimonials[idx];
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[180px]">
      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-400 via-purple-300 to-pink-400 dark:from-blue-900 dark:via-purple-800 dark:to-pink-700 flex items-center justify-center mb-4 overflow-hidden shadow-lg">
        {t.avatar ? <Image src={t.avatar} alt={t.name} width={80} height={80} /> : <span className="text-3xl text-white/60">👤</span>}
      </div>
      <blockquote className="text-lg italic text-center animate-fade-in-up min-h-[60px]">“{t.quote}”</blockquote>
      <div className="mt-3 text-base font-semibold text-blue-700 dark:text-blue-300">{t.name}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{t.title}</div>
      <div className="flex gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === idx ? "bg-blue-500 scale-125" : "bg-gray-300 dark:bg-gray-700"}`}
            onClick={() => setIdx(i)}
            aria-label={`Show testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// --- LiveStatus component ---
function LiveStatus({ statusMessages }: { statusMessages: string[] }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setIdx(i => (i + 1) % statusMessages.length), 3500);
    return () => clearTimeout(t);
  }, [idx, statusMessages.length]);
  return (
    <div className="flex items-center justify-center gap-2 mt-1 animate-fade-in-up delay-250">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <span className="text-sm font-medium text-green-700 dark:text-green-300 transition-all duration-500">{statusMessages[idx]}</span>
    </div>
  );
}

// --- TechIcon component ---
function TechIcon({ name, color, icon }: { name: string, color: string, icon: React.ReactNode }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`flex flex-col items-center group transition-transform duration-300 ${hover ? "scale-110" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ filter: hover ? `drop-shadow(0 0 16px ${color}99)` : undefined }}
    >
      <div className={`rounded-full bg-white/80 dark:bg-black/60 shadow-lg p-2 transition-all duration-300 ${hover ? "ring-4 ring-["+color+"]" : ""}`}>{icon}</div>
      <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-[${color}] transition-colors duration-300">{name}</span>
    </div>
  );
}

// --- Timeline component ---
function Timeline() {
  const events = [
    {
      year: "2026",
      title: "Future Project",
      description: "latest achievement, job, or project milestone here.",
      icon: <svg width="24" height="24" fill="#60a5fa"><circle cx="12" cy="12" r="10" /></svg>,
    },
    {
      year: "2025",
      title: "Homework Chatbot",
      description: "created a chatbot designed to ask young students question for their homework",
      icon: <svg width="24" height="24" fill="#a78bfa"><rect x="4" y="4" width="16" height="16" rx="8" /></svg>,
    },
    {
      year: "2024",
      title: "Text Based Story Game",
      description: "First real project, created a game...",
      icon: <svg width="24" height="24" fill="#f472b6"><polygon points="12,2 22,22 2,22" /></svg>,
    },
    // ...add more events as needed
  ];
  return (
    <ol className="relative border-l-4 border-blue-200 dark:border-blue-900 ml-6">
      {events.map((e, i) => (
        <li key={i} className="mb-12 ml-6 animate-fade-in-up" style={{ animationDelay: `${i * 0.2 + 0.2}s` }}>
          <span className="absolute -left-8 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-black shadow-lg ring-4 ring-blue-200 dark:ring-blue-900">
            {e.icon}
          </span>
          <div className="mb-1 text-lg font-bold text-blue-700 dark:text-blue-300">{e.year}</div>
          <div className="text-base font-semibold">{e.title}</div>
          <div className="text-gray-600 dark:text-gray-400">{e.description}</div>
        </li>
      ))}
    </ol>
  );
}

// --- SectionReveal component ---
export function SectionReveal({ children, delay, effect }: { children: React.ReactNode, delay?: number, effect?: 'fade'|'slide-left'|'slide-right'|'zoom'|'flip' }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay || 0);
    return () => clearTimeout(t);
  }, [delay]);
  let anim = 'animate-fade-in-up';
  if (effect === 'slide-left') anim = 'animate-slide-in-left';
  if (effect === 'slide-right') anim = 'animate-slide-in-right';
  if (effect === 'zoom') anim = 'animate-zoom-in';
  if (effect === 'flip') anim = 'animate-flip-in';
  return (
    <div className={show ? anim : 'opacity-0'} style={delay ? { animationDelay: `${delay}ms` } : {}}>{children}</div>
  );
}

// --- WaveDivider component ---
function WaveDivider() {
  return (
    <div className="w-full max-w-3xl mx-auto -mb-8 -mt-4">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
        <path fill="url(#wave-gradient)" fillOpacity="0.7" d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z"/>
        <defs>
          <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60a5fa" />
            <stop offset="0.5" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#f472b6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
