import React, { useRef } from "react";

export default function TiltCard({ children, className = "", ...props }: React.PropsWithChildren<{ className?: string }>) {
  const ref = useRef<HTMLDivElement>(null);
  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * -8;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  }
  function handleLeave() {
    const card = ref.current;
    if (card) card.style.transform = "";
  }
  return (
    <div
      ref={ref}
      className={"tilt-card " + className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: "transform 0.25s cubic-bezier(.4,0,.2,1)" }}
      {...props}
    >
      {children}
    </div>
  );
}
