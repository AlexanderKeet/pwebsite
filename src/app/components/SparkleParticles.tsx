import React, { useState, useEffect } from "react";

type Particle = {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
};

export default function SparkleParticles({ count = 32 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    setParticles(
      Array.from({ length: count }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 6 + Math.random() * 8,
        delay: Math.random() * 3,
        duration: 2.5 + Math.random() * 2,
      }))
    );
  }, [count]);
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/80 shadow animate-sparkle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0.7,
            filter: "blur(0.5px)",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
