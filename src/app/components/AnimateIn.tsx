import React, { useState, useEffect } from "react";

export default function AnimateIn({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);
  return (
    <div className={className + (show ? " animate-fade-in-up" : " opacity-0")}>{children}</div>
  );
}
