"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import world from '@/app/assets/World-Class-Quality.webp';
import proprietary from '@/app/assets/Proprietary-Peptide-Formulation.webp';
import sustainable from '@/app/assets/Sustainable-Sourcing.webp';
import stable from '@/app/assets/Stable-Supply.webp';
import quality from '@/app/assets/Quality-Assurance.webp';
import sustainability from '@/app/assets/Sustainability-&-Innovation.webp';
import Image from "next/image";

const features = [
    {
        title: "World Class Quality",
        desc:
            "We uphold world-class standards, producing premium collagen & enzyme solutions that meet the highest global certifications, ensuring unmatched purity, safety, and effectiveness across all applications.",
        icon: world,
    },
    {
        title: "Proprietary Peptide Formulations",
        desc:
            "Our proprietary formulations enhance the solubility, absorption, and functionality of our collagen and enzyme solutions, ensuring tailored solutions for diverse industry needs, from beauty to health and nutrition.",
        icon: proprietary,
    },
    {
        title: "Sustainable Sourcing",
        desc:
            "Whether from wild-caught fish, aquaculture, poultry sources, or plant-based sources, our ingredients are derived with full traceability and environmental responsibility, ensuring the purest, most sustainable products for our customers.",
        icon: sustainable,
    },
    {
        title: "Stable Supply",
        desc:
            "Our state-of-the-art manufacturing facility ensures a reliable supply of marine collagen peptide, plant-based collagens, and enzyme solutions. With consistent production and delivery, we meet global demand efficiently while upholding the highest quality standards.",
        icon: stable,
    },
    {
        title: "Quality Assurance",
        desc:
            "Rigorous raw material testing, in-process monitoring, and advanced microbial and heavy metal analysis ensure every batch meets international safety standards for purity, solubility, and bioavailability.",
        icon: quality,
    },
    {
        title: "Sustainability & Innovation",
        desc:
            "Through waste management, water recycling, and by-product reuse, we minimize our environmental footprint. Continuous research drives innovation, supporting sustainable practices and global standards in collagen production.",
        icon: sustainability,
    },
];

export default function WhyChooseUs() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // 🔒 KEEP SAME ANIMATION LOGIC
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"],
    });

    const width = useTransform(scrollYProgress, [0, 0.6], ["90%", "100%"]);

    return (
        <section ref={sectionRef} className="relative flex justify-center ">
            {/* Animated container (DO NOT TOUCH animation) */}
            <motion.div
                style={{ width }}
                className="bg-[#2b4171] rounded-t-4xl rounded-b-none transition-none"
            >
                <div className="mx-auto max-w-7xl px-6 py-25 md:px-12 text-center">

                    {/* TOP BADGE */}
                    <div className="flex justify-center mb-6">
                        <span className="rounded-full bg-[#92bc2a] px-5.75 py-0.75 text-[12px] leading-6 font-semibold tracking-[0.6] text-[#031b4e]">
                            WHY CHOOSE US
                        </span>
                    </div>

                    {/* HEADING */}
                    <h2 className="mx-auto max-w-5xl text-[34px] md:text-[48px] font-light leading-[1.2] text-white">
                        Your Trusted Partner in <br />
                        <strong className="font-extrabold">
                            Premium Collagen & Enzyme Solutions
                        </strong>
                    </h2>

                    {/* FEATURES GRID */}
                    <div className="mt-20 grid grid-cols-1 gap-x-18 gap-y-16 md:grid-cols-3">
                        {features.map((item, i) => (
                            <div
                                key={i}
                                className="text-center transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-4">
                                {/* ICON CIRCLE */}
                                <div className="mx-auto mb-6 flex h-25 w-25 items-center justify-center rounded-full bg-[#7bc043]">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>

                                {/* TITLE */}
                                <h3 className="mb-3.75 text-[26px] font-semibold text-white">
                                    {item.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="text-[16px] leading-[1.7] text-white/80">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>


                </div>
            </motion.div>
        </section>
    );
}
