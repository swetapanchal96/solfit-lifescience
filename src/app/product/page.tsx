"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Breadcrumb from "../components/Breadcrumb";
import marine from '@/app/assets/marine-oligopeptide.webp'
import beauty from '@/app/assets/beauty.webp'
import pharmaceutical from '@/app/assets/Pharmaceuticals.webp'
import nutraceutical from '@/app/assets/Collagen-Peptide-Nutra.webp'
import Image from "next/image";

export default function ProductSupportSection() {
    function CheckIcon() {
        return (
            <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 flex-none" fill="none">
                <path
                    d="M20 6L9 17l-5-5"
                    stroke="#0B63CE"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }


    const sectionRef = useRef<HTMLDivElement>(null);

    // 🔒 KEEP SAME ANIMATION LOGIC
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start center", "end center"],
    });

    const width = useTransform(scrollYProgress, [0, 0.6], ["90%", "100%"]);


    const [activeTab, setActiveTab] = useState(0);

    const TAB_DATA = [
        {
            title: "Nutraceuticals & Functional Foods",
            image: nutraceutical,
            applications: ["Capsules", "Sachets","Beverages", "Bars"],
            benefits:
                "Supports gut balance, immune resilience, skin vitality, and overall recovery with highly bioavailable bioactives.",
        },
        {
            title: "Pharmaceuticals",
            image: pharmaceutical,
            applications: ["Adjunct Nutrition", "Specialty Formulations"],
            benefits:
                "Enables patient-friendly, well-tolerated nutrition support; aids targeted wellness outcomes with standardized, high-purity peptide.",
        },
        {
            title: "Beauty & Personal Care",
            image: beauty,
            applications: ["Serums", "Creams", "Hair Tonics", "Nutricosmetics"],
            benefits:
                "Promotes visible skin firmness and brightness while helping scalp and hair vitality from within.",
        },
    ];

    return (
        <main>
            <Breadcrumb
                title="Marine Oligopeptide"
                subtitle="Solift  »  Marine Oligopeptide"
                image={marine}
            />
            <section className="bg-[#f3f8fd] py-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Description */}
                    <p className="text-[15px] leading-[1.7] text-[#031B4E] ">
                        Bioactive peptide derived from select marine sources, processed for
                        high purity and rapid absorption to deliver targeted functional
                        benefits.
                    </p>

                    {/* Supports */}
                    <div className="mt-6">
                        <h4 className="text-[15px] font-semibold text-[#031B4E] mb-4">
                            It Supports:
                        </h4>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4">
                            {/* Left column */}
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-[15px] text-[#031B4E]">
                                    <CheckIcon />
                                    <span>
                                        Cardiovascular Wellness (Helps Maintain Healthy Blood
                                        Pressure)
                                    </span>
                                </li>

                                <li className="flex items-start gap-3 text-[15px] text-[#031B4E]">
                                    <CheckIcon />
                                    <span>
                                        Skin Firmness, Brightness, and Scalp/Hair Vitality
                                    </span>
                                </li>
                            </ul>

                            {/* Right column */}
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-[15px] text-[#031B4E]">
                                    <CheckIcon />
                                    <span>
                                        Growth of Beneficial Gut Microbiota and Digestive Comfort
                                    </span>
                                </li>

                                <li className="flex items-start gap-3 text-[15px] text-[#031B4E]">
                                    <CheckIcon />
                                    <span>Overall Immune Resilience and Recovery</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={sectionRef} className="relative flex justify-center ">
                {/* Animated container (DO NOT TOUCH animation) */}
                <motion.div
                    style={{ width }}
                    className="bg-[#2b4171] rounded-t-4xl rounded-b-none transition-none"
                >
                    <div className="mx-auto max-w-7xl px-6 py-25  text-center">

                        {/* TOP BADGE */}
                        <div className="flex justify-center mb-6">
                            <span className="rounded-full bg-[#92bc2a] px-5.75 py-0.75 text-[12px] leading-6 font-semibold tracking-[0.6] text-[#031b4e]">
                                APPLICATIONS
                            </span>
                        </div>

                        {/* HEADING */}
                        <div>
                            <h2 className="mx-auto max-w-5xl text-[34px] md:text-[48px] font-light leading-[1.2] text-white">
                                <strong className="font-extrabold">
                                    Unlock Value
                                </strong>
                            </h2>
                            <p className="mt-7">Unlock targeted outcomes in skin vitality, gut balance, immune resilience, and performance. Highly compatible with nutrition, beauty-from-within, and holistic wellness applications.</p>
                        </div>

                        {/* TABS + CONTENT */}
                        <div className="mt-16  rounded-4xl overflow-hidden text-left">
                            {/* Tabs */}
                            <div className="flex bg-[#2b4171] mx-auto justify-center px-10 pt-6 gap-8">
                                {["Nutraceuticals & Functional Foods", "Pharmaceuticals", "Beauty & Personal Care"].map(
                                    (tab, i) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(i)}
                                            className={`relative px-6 py-4 text-[18px] font-bold rounded-t-3xl transition
            ${activeTab === i
                                                    ? "bg-white text-[#031b4e] "
                                                    : "text-white/80 hover:text-white"
                                                }`}
                                        >
                                            {tab}
                                        </button>
                                    )
                                )}
                            </div>

                            {/* Content */}
                            <div className="grid grid-cols-1  items-center bg-white rounded-4xl md:grid-cols-2 gap-14 p-12">
                                {/* IMAGE */}
                                <div className="rounded-4xl overflow-hidden bg-[#eaf3f6]">
                                    <Image
                                        width={570}
                                        height={438}
                                        src={TAB_DATA[activeTab].image}
                                        alt={TAB_DATA[activeTab].title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* TEXT */}
                                <div className="">
                                    <h3 className="text-[30px] font-bold text-[#031b4e] mb-6">
                                        {TAB_DATA[activeTab].title}
                                    </h3>

                                    {/* Applications */}
                                    <h4 className="text-[#92bc2a] font-semibold mt-9 mb-4 text-[18px]">
                                        Applications
                                    </h4>

                                    <div className=" grid grid-cols-2 gap-y-3 mb-8">
                                        {TAB_DATA[activeTab].applications.map((item) => (
                                            <div key={item} className="flex items-center gap-3 text-[#031b4e]">
                                                <span className="text-[#1d4ed8]"><CheckIcon/></span>
                                                {item}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Benefits */}
                                    <h4 className="text-[#92bc2a] font-semibold mt-9 text-[18px]">
                                        Benefits
                                    </h4>

                                    <div className="flex items-start gap-3 text-[#031b4e]">
                                        <span className="text-[#1d4ed8] mt-1"><CheckIcon/></span>
                                        <p>{TAB_DATA[activeTab].benefits}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </motion.div>
            </section>
        </main>
    );
}