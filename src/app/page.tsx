"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Head from "next/head";
import { TypingText } from "./components/LayoutClient";
import ParallaxBackground from "./components/ParallaxBackground";
import SparkleParticles from "./components/SparkleParticles";
import TiltCard from "./components/TiltCard";
import AnimateIn from "./components/AnimateIn";

// --- Dynamic title logic ---
export default function Home() {
  const [title, setTitle] = useState("Alexander Keet | Portfolio");
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
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.6 && rect.bottom > 120) {
            current = `Alexander Keet | ${s.label}`;
            break;
          }
        }
      }
      setTitle(current);
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
        <meta name="author" content="Alexander Keet" />
        <meta name="robots" content="index, follow" />
        {/* Use primary color variable for theme-color */}
        <meta name="theme-color" content="rgb(var(--primary-rgb))" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="[YOUR_PORTFOLIO_URL]" />
        <meta property="og:updated_time" content="2025-04-28T00:00:00.000Z" />
      </Head>
      {/* Remove redundant background/text colors, rely on body styles */}
      <div className="min-h-screen p-8 sm:p-12 flex flex-col items-center font-sans">
        {/* Profile Section */}
        <section className="w-full max-w-2xl flex flex-col items-center gap-4 mt-8 mb-8 p-4 rounded-lg glass-content about-hero-card" id="about">
          <div className="w-32 h-32 rounded-full profile-photo-bg flex items-center justify-center overflow-hidden shadow-lg ring-4 ring-blue-400/30 dark:ring-blue-700/30 animated-gradient-border">
            {/* <Image src="/your-photo.jpg" alt="Alexander Keet" width={128} height={128} /> */}
            <span className="text-gray-400">[Profile Photo]</span>
          </div>
          <h1 className="text-4xl font-bold text-center">
            <TypingText text="Alexander Keet" className="text-primary" />
          </h1>
          <h2 className="text-xl text-muted-foreground text-center"> CS Developer</h2>
          <LiveStatus statusMessages={["Open to opportunities!","Currently building something cool","Let’s connect!"]} />
          <p className="text-center text-lg mt-2 text-foreground"> A Talented, and Hardworking Programmer </p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.linkedin.com/in/alexanderkeet" className="hover:underline">LinkedIn</a>
            <a href="https://github.com/AlexanderKeet" className="hover:underline">GitHub</a>
          </div>
        </section>

        {/* Scroll to Next Section Button */}
        {/* Use primary color */}
        <ScrollToNextSection targetId="skills" colorClass="text-primary" />

        {/* Animated Wave Divider */}
        <WaveDivider />

        {/* Skills Section */}
        <section className="w-full max-w-2xl mt-12 p-4 rounded-lg glass-content skills-card" id="skills">
          <h3 className="section-heading text-2xl font-semibold mb-6">Skills</h3>
          <ul className="flex flex-wrap gap-3">
            <li className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md shadow-sm">Website Creation</li>
            <li className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md shadow-sm">Backend Development</li>
            <li className="bg-secondary text-secondary-foreground px-3 py-1 rounded-md shadow-sm">Design</li>
            {/* ...add more skills */}
          </ul>
        </section>

        {/* Animated Wave Divider */}
        <WaveDivider />

        {/* Projects Section */}
        <section className="w-full max-w-2xl mt-12 p-4 rounded-lg glass-content projects-card" id="projects">
          <h3 className="section-heading text-2xl font-semibold mb-6">Projects</h3>
          <div className="flex flex-col gap-8">
            <div className="project-card p-6 flex flex-col sm:flex-row gap-6">
              <div className="w-24 h-24 bg-secondary rounded-lg flex-shrink-0 flex items-center justify-center">
                 <span className="text-muted-foreground text-sm">[Img]</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary">[Project Title]</h4>
                <p className="text-muted-foreground mt-1">[Short project description]</p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs">[Tech 1]</span>
                  <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs">[Tech 2]</span>
                </div>
                <div className="flex gap-4 mt-3">
                  <a href="#" className="text-primary hover:underline font-medium">[Live Demo]</a>
                  <a href="#" className="text-accent hover:underline font-medium">[Source Code]</a>
                </div>
              </div>
            </div>
            <div className="project-card p-6 flex flex-col sm:flex-row gap-6">
              <div className="w-24 h-24 bg-secondary rounded-lg flex-shrink-0 flex items-center justify-center">
                 <span className="text-muted-foreground text-sm">[Img]</span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary">[Another Project]</h4>
                <p className="text-muted-foreground mt-1">[Description of the second project...]</p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs">[Tech 3]</span>
                  <span className="bg-secondary text-secondary-foreground px-2 py-0.5 rounded text-xs">[Tech 4]</span>
                </div>
                <div className="flex gap-4 mt-3">
                  <a href="#" className="text-primary hover:underline font-medium">[Live Demo]</a>
                  <a href="#" className="text-accent hover:underline font-medium">[Source Code]</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Wave Divider */}
        <WaveDivider />

        {/* Resume Section */}
        <section className="w-full max-w-2xl mt-12 flex flex-col items-center p-4 rounded-lg glass-content resume-card" id="resume">
          <SpotlightButton href="#" className="primary-button shimmer-btn">Download Resume (PDF)</SpotlightButton>
        </section>

        {/* Animated Wave Divider */}
        <WaveDivider />

        {/* Contact Section */}
        <section className="w-full max-w-2xl mt-12 mb-8 p-4 rounded-lg glass-content contact-form-card" id="contact">
          <h3 className="section-heading text-2xl font-semibold mb-6">Contact</h3>
          <ContactForm />
          <ul className="text-base mt-8 space-y-2 text-muted-foreground">
            <li>Email: <a href="mailto:akeet97@gmail.com" className="text-primary hover:underline">akeet97@gmail.com</a></li>
            <li>Phone: 780 202 7227</li>
            <li>Location: Edmonton, Alberta</li>
          </ul>
        </section>

        {/* Animated Wave Divider */}
        <WaveDivider />

        {/* Testimonials Section */}
        <section className="w-full max-w-2xl mt-12 p-4 rounded-lg glass-content testimonials-carousel" id="testimonials">
          <h3 className="section-heading text-2xl font-semibold mb-6 text-center">Testimonials</h3>
          <TestimonialsCarousel />
        </section>

        {/* Animated Wave Divider */}
        <WaveDivider />

        {/* Dynamic Tech Stack Section */}
        <section className="w-full max-w-2xl mt-12 p-4 rounded-lg glass-content tech-stack-card" id="tech-stack">
          <h3 className="section-heading text-2xl font-semibold mb-8 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Pass colors directly, TechIcon handles hover effect */} 
            <TechIcon name="React" color="#61dafb" icon={<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#222" /><g><ellipse rx="10" ry="4" cx="20" cy="20" fill="none" stroke="#61dafb" strokeWidth="2" /><ellipse rx="10" ry="4" cx="20" cy="20" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(60 20 20)" /><ellipse rx="10" ry="4" cx="20" cy="20" fill="none" stroke="#61dafb" strokeWidth="2" transform="rotate(120 20 20)" /><circle cx="20" cy="20" r="2.5" fill="#61dafb" /></g></svg>} />
            <TechIcon name="TypeScript" color="#3178c6" icon={<svg width="40" height="40" viewBox="0 0 40 40"><rect width="36" height="36" x="2" y="2" rx="8" fill="#222" /><text x="20" y="28" textAnchor="middle" fontSize="18" fill="#3178c6" fontWeight="bold">TS</text></svg>} />
            <TechIcon name="Next.js" color="#ffffff" icon={<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#222" /><text x="20" y="28" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">Next</text></svg>} />
            <TechIcon name="Tailwind" color="#38bdf8" icon={<svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="18" fill="#222" /><path d="M13 23c1.5-3 3.5-4.5 6-4.5s4.5 1.5 6 4.5c-1.5 3-3.5 4.5-6 4.5s-4.5-1.5-6-4.5z" fill="#38bdf8" /></svg>} />
            {/* ...add more TechIcon components for your stack */}
          </div>
        </section>

        {/* Animated Wave Divider */}
        <WaveDivider />

        {/* Timeline Section */}
        <section className="w-full max-w-2xl mt-12 p-4 rounded-lg glass-content timeline" id="timeline">
          <h3 className="section-heading text-2xl font-semibold mb-8 text-center">Timeline</h3>
          <Timeline />
        </section>
      </div>
    </>
  );
}

// SpotlightButton: Use primary-button styles, remove explicit bg/text colors
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
      // Apply btn-like for hover effects, remove explicit colors
      className={`spotlight-hover btn-like transition relative inline-block overflow-visible ${className || ""}`}
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

// ... existing ConfettiBurst ...
function ConfettiBurst() {
  // 12 confetti pieces, random color/angle
  const confetti = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i / 12) * 2 * Math.PI;
    const x = Math.cos(angle) * 60;
    const y = Math.sin(angle) * 60;
    // Use theme colors for confetti
    const colors = ["rgb(var(--primary-rgb))", "rgb(var(--accent-rgb))", "#f472b6", "#facc15", "#34d399", "#f87171"];
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


// ScrollToNextSection: Accept color class
function ScrollToNextSection({ targetId, colorClass }: { targetId: string; colorClass: string }) {
  return (
    <button
      aria-label={`Scroll to ${targetId}`}
      className={`mx-auto block mt-4 animate-bounce-slow ${colorClass} hover:opacity-80 transition`}
      style={{ fontSize: 36 }}
      onClick={() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      <svg width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
    </button>
  );
}

// ContactForm: Use CSS variables via Tailwind classes
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
      Object.entries(v).forEach(([k, ok]) => {
        if (!ok) {
          setShake(s => ({ ...s, [k]: true }));
          setTimeout(() => setShake(s => ({ ...s, [k]: false })), 500);
        }
      });
      return;
    }
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
      {/* Use primary-button class */}
      <button type="submit" className="spotlight-hover shimmer-btn primary-button self-start">Send Message</button>
    </form>
  );
}

// FloatingLabelInput: Use CSS variables, manage active state for label
function FloatingLabelInput({ label, type, name, autoComplete, required, value, onChange, onBlur, onFocus, valid, shake }: {
  label: string, type: string, name: string, autoComplete?: string, required?: boolean,
  value?: string, onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void, onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void, onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void, valid?: boolean, shake?: boolean
}) {
  const [focus, setFocus] = useState(false);
  const isActive = focus || (value != null && value.length > 0);

  let borderClass = "border-card-border focus:border-primary focus:ring-primary/20"; // Use CSS vars via Tailwind config (requires setup) or direct rgb()
  if (valid === true) borderClass = "border-green-500 focus:border-green-500 focus:ring-green-500/20";
  if (valid === false) borderClass = "border-red-500 focus:border-red-500 focus:ring-red-500/20";

  // Define base input/textarea classes using theme variables
  const inputBaseClasses = `w-full bg-secondary/50 border rounded-lg px-4 pt-6 pb-2 text-base text-foreground outline-none focus:ring-2 transition duration-200 ${borderClass}`;

  return (
    <div className={`relative ${shake ? "animate-shake" : ""}`}>
      {type === "textarea" ? (
        <textarea
          name={name}
          autoComplete={autoComplete}
          required={required}
          className={`${inputBaseClasses}`}
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
          className={`${inputBaseClasses}`}
          value={value}
          onFocus={e => { setFocus(true); if (typeof onFocus === 'function') onFocus(e); }}
          onBlur={e => { setFocus(false); if (typeof onBlur === 'function') onBlur(e); }}
          onChange={onChange}
        />
      )}
      <label
        // Add text shadow for better contrast against any background without needing a background color
        className={`absolute left-4 top-4 text-muted-foreground pointer-events-none transition-all duration-200 ${isActive ? "-translate-y-3 scale-90 text-primary font-medium" : ""}`}
        style={{ 
          zIndex: 2,
          textShadow: isActive ? '0 0 4px rgba(var(--card-rgb), 0.8)' : 'none'
        }}
      >
        {label}
      </label>
    </div>
  );
}

// TestimonialsCarousel: Use theme variables
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
    <div className="relative flex flex-col items-center justify-center min-h-[200px]">
      {/* Use gradient with theme variables */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-accent via-primary to-pink-400 flex items-center justify-center mb-4 overflow-hidden shadow-lg">
        {t.avatar ? <Image src={t.avatar} alt={t.name} width={80} height={80} /> : <span className="text-3xl text-primary-foreground/60">👤</span>}
      </div>
      {/* Use foreground color */}
      <blockquote className="text-lg italic text-center text-foreground animate-fade-in-up min-h-[60px]">“{t.quote}”</blockquote>
      {/* Use primary color */}
      <div className="mt-3 text-base font-semibold text-primary">{t.name}</div>
      {/* Use muted foreground */}
      <div className="text-sm text-muted-foreground">{t.title}</div>
      <div className="flex gap-2 mt-4">
        {testimonials.map((_, i) => (
          <button
            key={i}
            // Use primary and secondary colors for dots
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === idx ? "bg-primary scale-125" : "bg-secondary"}`}
            onClick={() => setIdx(i)}
            aria-label={`Show testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// LiveStatus: Use theme variables for colors
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
      {/* Use green text colors directly as they indicate status, not theme */} 
      <span className="text-sm font-medium text-green-700 dark:text-green-300 transition-all duration-500">{statusMessages[idx]}</span>
    </div>
  );
}

// TechIcon: Use tech-icon-bg class, adjust hover effect
function TechIcon({ name, color, icon }: { name: string, color: string, icon: React.ReactNode }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`flex flex-col items-center group transition-transform duration-300 ${hover ? "scale-110" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ filter: hover ? `drop-shadow(0 0 12px ${color}aa)` : undefined }}
    >
      {/* Use tech-icon-bg class and CSS custom property for ring color */}
      <div
        className={`rounded-full tech-icon-bg shadow-lg p-3 transition-all duration-300 ${hover ? "ring-2 ring-offset-2 ring-offset-background-start ring-[--ring-color]" : ""}`}
        style={{ '--ring-color': color } as React.CSSProperties} // Set custom property
      >
        {icon}
      </div>
      {/* Use muted foreground, hover uses direct color */}
      <span className={`mt-2 text-sm font-medium text-muted-foreground group-hover:text-[${color}] transition-colors duration-300`} style={hover ? { color: color } : {}}>{name}</span>
    </div>
  );
}

// Timeline: Use timeline-border and timeline-icon-bg classes
function Timeline() {
  const events = [
    {
      year: "2026",
      title: "Future Project",
      description: "latest achievement, job, or project milestone here.",
      icon: <svg width="24" height="24" fill="rgb(var(--primary-rgb))"><circle cx="12" cy="12" r="10" /></svg>,
    },
    {
      year: "2025",
      title: "Homework Chatbot",
      description: "created a chatbot designed to ask young students question for their homework",
      icon: <svg width="24" height="24" fill="rgb(var(--accent-rgb))"><rect x="4" y="4" width="16" height="16" rx="8" /></svg>,
    },
    {
      year: "2024",
      title: "Text Based Story Game",
      description: "First real project, created a game...",
      icon: <svg width="24" height="24" fill="#f472b6"><polygon points="12,2 22,22 2,22" /></svg>,
    },
  ];
  return (
    // Use timeline-border class
    <ol className="relative border-l-4 timeline-border ml-6">
      {events.map((e, i) => (
        <li key={i} className="mb-12 ml-8 pl-16 animate-fade-in-up" style={{ animationDelay: `${i * 0.2 + 0.2}s` }}>
          {/* Use timeline-icon-bg class */}
          <span className="absolute -left-10 flex items-center justify-center w-12 h-12 rounded-full timeline-icon-bg shadow-lg">
            {e.icon}
          </span>
          {/* Use primary color for year */}
          <div className="mb-1 text-lg font-bold text-primary">{e.year}</div>
          {/* Use foreground color for title */}
          <div className="text-base font-semibold text-foreground">{e.title}</div>
          {/* Use muted foreground for description */}
          <div className="text-muted-foreground">{e.description}</div>
        </li>
      ))}
    </ol>
  );
}

// --- SectionReveal component ---
// Modified to always render children without scroll-triggered animation
function SectionReveal({ children }: { children: React.ReactNode, delay?: number, effect?: 'fade'|'slide-left'|'slide-right'|'zoom'|'flip' }) {
  return <>{children}</>;
}

// --- WaveDivider component ---
function WaveDivider() {
  return (
    <div className="w-full max-w-4xl mx-auto -mb-8 -mt-4 opacity-80">
      <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16">
        {/* Define gradient using CSS variables */} 
        <defs>
          <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgb(var(--accent-rgb))" />
            <stop offset="50%" stopColor="rgb(var(--primary-rgb))" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>
        <path fill="url(#wave-gradient)" fillOpacity="0.6" d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z"/>
      </svg>
    </div>
  );
}