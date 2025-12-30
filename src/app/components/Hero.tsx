"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const HERO_IMAGES = [
  "/hero/hero-1.png",
  "/hero/hero-2.png",
  "/hero/hero-3.png",
];

export default function Hero() {
  const [active, setActive] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative mx-auto mt-6 max-w-350 overflow-hidden rounded-[28px] bg-[#f2f6fb]">
      <div className="relative grid min-h-135 grid-cols-1 items-center px-12 py-16 lg:grid-cols-2">
        {/* LEFT CONTENT */}
        <div className="relative z-10 max-w-xl">
          <p className="mb-4 text-[36px] font-light text-[#0b2b5e]">
            Enhancing Lives with
          </p>

          <h1 className="mb-6 text-[46px] font-extrabold leading-tight text-[#0b2b5e]">
            The Power of Science
          </h1>

          <p className="mb-8 max-w-md text-[16px] leading-6.5 text-[#0b2b5e]">
            Transforming health and wellness through sustainable collagen
            solutions.
          </p>

          <button className="rounded-full bg-[#8BC34A] px-8 py-3 text-sm font-bold text-white hover:brightness-95">
            CONTACT US
          </button>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="relative h-full w-full">
          {/* GREEN SHAPE */}
          <div className="absolute -right-22.5 top-1/2 h-110 w-110 -translate-y-1/2 rounded-full bg-[#0a9f3d]" />

          {/* SLIDER IMAGES */}
          <div className="relative z-10 h-full w-full">
            {HERO_IMAGES.map((src, idx) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  active === idx ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt="Hero image"
                  fill
                  priority={idx === 0}
                  className="object-contain object-right"
                />
              </div>
            ))}
          </div>

          {/* RIGHT DOTS (EXACT STYLE) */}
          <div className="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-3">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={`h-3 w-3 rounded-full border-2 transition ${
                  active === idx
                    ? "border-[#0b2b5e] bg-white"
                    : "border-[#0b2b5e] bg-transparent"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
