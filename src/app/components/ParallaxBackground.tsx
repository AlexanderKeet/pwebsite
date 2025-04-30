// Simple parallax effect using mouse movement
import React, { useRef, useEffect } from "react";

export default function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!ref.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      ref.current.style.backgroundPosition = `${50 + x}% ${50 + y}%`;
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);
  return (
    <div
      ref={ref}
      className="fixed inset-0 -z-30 pointer-events-none parallax-bg"
      style={{
        backgroundImage:
          "radial-gradient(circle at 60% 40%, rgba(59,130,246,0.10) 0, transparent 60%), " +
          "radial-gradient(circle at 30% 70%, rgba(236,72,153,0.10) 0, transparent 60%)",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        transition: "background-position 0.3s cubic-bezier(.4,0,.2,1)",
      }}
    />
  );
}