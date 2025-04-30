import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ThemeSwitcher,
  ResumeCTA,
  ScrollProgressBar,
  SpotlightLink,
  GlowOnScroll,
  PageLoader,
  BackgroundGrid,
  SectionNavMenu,
  BackToTopProgressCircle
} from "./components/LayoutClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexander Keet | Portfolio",
  description: "A stunning portfolio to showcase your work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen relative transition-colors duration-700`}>
        <a href="#main-content" className="skip-link absolute left-4 top-2 z-[10000] bg-blue-600 text-white px-4 py-2 rounded-full font-semibold focus:translate-y-0 -translate-y-16 focus:outline-none focus:ring-4 ring-blue-300 transition-transform duration-300">Skip to main content</a>
        <ScrollProgressBar />
        {/* <AnimatedCursor /> */}
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

        {/* Animated Background Particles */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          {/* <BackgroundParticles /> */}
          {/* <BackgroundBlobs /> */}
          {/* <BackgroundSparkles /> */}
        </div>

        {/* Animated Background Grid Overlay */}
        <div className="fixed inset-0 -z-20 pointer-events-none">
          <BackgroundGrid />
        </div>

        {/* Main Content Container */}
        <main id="main-content" className="flex flex-col items-center justify-center min-h-screen pt-32 pb-16 px-2 animate-fade-in">
          <GlowOnScroll>
            <div className="relative w-full max-w-3xl rounded-3xl p-[2px] glass-content animate-fade-in-up">
              <div className="rounded-[22px] bg-white/80 dark:bg-black/60 shadow-2xl p-8 sm:p-12 backdrop-blur-xl border border-white/30 dark:border-white/10">
                {children}
              </div>
            </div>
          </GlowOnScroll>
        </main>

        {/* Floating Resume CTA Button */}
        <ResumeCTA />

        {/* Footer */}
        <footer className="w-full flex flex-col items-center gap-2 py-8 text-gray-500 dark:text-gray-400 animate-fade-in-up">
          <div className="flex gap-4 mb-2">
            {/* TODO: Add your social links */}
            <a href="#" aria-label="GitHub" className="hover:text-black dark:hover:text-white transition"><svg width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 dark:hover:text-blue-300 transition"><svg width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400 dark:hover:text-blue-400 transition"><svg width="24" height="24" fill="currentColor"><path d="M24 4.56c-.89.39-1.84.65-2.84.77a4.93 4.93 0 0 0 2.16-2.72c-.95.56-2 .97-3.13 1.19a4.92 4.92 0 0 0-8.39 4.48A13.97 13.97 0 0 1 1.67 3.15a4.93 4.93 0 0 0 1.52 6.57c-.8-.02-1.56-.25-2.22-.62v.06a4.93 4.93 0 0 0 3.95 4.83c-.39.11-.8.17-1.22.17-.3 0-.59-.03-.87-.08a4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 0 21.54a13.94 13.94 0 0 0 7.56 2.22c9.05 0 14-7.5 14-14v-.64A9.93 9.93 0 0 0 24 4.56z"/></svg></a>
          </div>
          <span className="text-xs">© {new Date().getFullYear()} Alexander Keet. All rights reserved.</span>
        </footer>
        <PageLoader />
        <SectionNavMenu />
        <BackToTopProgressCircle />
      </body>
    </html>
  );
}