"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopProgress() {
    const [visible, setVisible] = useState(false);
    const [progress, setProgress] = useState(0); // 0..1

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY || 0;
            const doc = document.documentElement;
            const total = Math.max(1, doc.scrollHeight - window.innerHeight);
            const p = Math.min(1, Math.max(0, y / total));

            setProgress(p);
            setVisible(y > 90);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Perfect for 48x48 button
    const { r, c, dashOffset } = useMemo(() => {
        const radius = 22; // ring sits on border
        const circumference = 2 * Math.PI * radius;
        const offset = circumference * (1 - progress);
        return { r: radius, c: circumference, dashOffset: offset };
    }, [progress]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <div
            className={[
                "fixed right-6 bottom-6 z-9999",
                "transition-all duration-300",
                visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-3 pointer-events-none",
            ].join(" ")}
        >
            <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="relative h-12 w-12 rounded-full shadow-[0_12px_26px_rgba(3,27,78,0.18)]"
            >
                {/* ✅ Inner green circle (so ring is NOT under it) */}
                <span className="absolute inset-0.75 rounded-full bg-[#8cc63f]" />

                {/* ✅ Ring exactly on border (same size as button) */}
                <svg
                    className="pointer-events-none absolute inset-0 z-10"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                >
                    {/* Track (light blue border like your screenshot) */}
                    <circle
                        cx="24"
                        cy="24"
                        r={r}
                        fill="none"
                        stroke="rgba(11,99,206,0.30)"
                        strokeWidth="2"
                    />

                    {/* Progress fill */}
                    <circle
                        cx="24"
                        cy="24"
                        r={r}
                        fill="none"
                        stroke="#0B63CE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeDasharray={c}
                        strokeDashoffset={dashOffset}
                        transform="rotate(-90 24 24)"
                    />
                </svg>

                {/* Icon on top */}
                <ChevronUp className="absolute inset-0 m-auto h-6 w-6 text-[#0B63CE] z-20" />
            </button>
        </div>
    );
}
