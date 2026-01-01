"use client";

import React, { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;     // ms
  duration?: number;  // ms
  y?: number;         // px
  once?: boolean;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  duration = 700,
  y = 18,
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          if (once) io.disconnect();
        } else if (!once) {
          setShow(false);
        }
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={[
        "will-change-transform will-change-opacity transition-all ease-out",
        show ? "opacity-100 translate-y-0" : "opacity-0",
        className,
      ].join(" ")}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transform: show ? "translateY(0px)" : `translateY(${y}px)`,
      }}
    >
      {children}
    </div>
  );
}
