"use client";

import Image from "next/image";
import heroAbout from "@/app/assets/home-about.webp";

const HomeAbout: React.FC = () => {
    return (
        <section className="w-full py-12 md:py-30 overflow-x-hidden">
            {/* FULL WIDTH CONTAINER – NO MARGINS */}
            <div className="w-full px-4 md:px-8 ">

                {/* CARD */}
                <div className="flex w-full flex-col overflow-hidden rounded-4xl md:flex-row">

                    {/* LEFT IMAGE */}
                    <div className="relative w-full md:w-1/2">
                        <div className="relative w-full h-105 md:h-full">
                            <Image
                                src={heroAbout}
                                alt="Collagen powder and enzymes"
                                fill
                                className="object-cover rounded-[28px]"
                                priority
                            />
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="w-full md:w-1/2 px-5 md:px-8">
                        <button
                            type="button"
                            className="rounded-full bg-[#92bc2a] px-5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-white"
                        >
                            About us
                        </button>

                        <h1 className="mt-3 text-[32px] leading-[1.2] font-medium text-[#031B4E] md:text-[48px]">
                            Advanced Collagen &amp; <br />
                            <strong>
                                Enzyme Solutions for a <br />
                                Healthier Future
                            </strong>
                        </h1>

                        <p className="mt-5 text-[16px] text-justify leading-[1.4] text-[#031B4E]">
                            At Solfit Lifesciences, we are at the forefront of collagen innovation, utilizing cutting-edge biotechnology to develop premium collagen-based ingredients. Our product portfolio includes Fish Collagen Peptide, Veg Collagen Peptide, Marine Oligopeptide, Undenatured Type II Collagen, Copper Tripeptide, Papain Enzyme, and Bromelain Enzyme, all meticulously formulated for superior bioavailability, purity, and efficacy.
                        </p>

                        <p className="mt-3 text-[16px] text-justify leading-[1.4] text-[#031B4E]">
                            Our state-of-the-art manufacturing facility in Ahmedabad, Gujarat (India) is equipped with advanced extraction technologies and adheres to the most stringent quality and hygiene standards. With a focus on scientific precision and sustainable practices, we deliver certified and high-performance collagen ingredients tailored for Nutraceutical, Pharmaceutical, Beauty, and Food applications worldwide.
                        </p>

                        {/* BULLETS */}
                        <div className="mt-8 grid grid-cols-1 gap-y-6 gap-x-10 text-[16px] text-[#031B4E] leading-[1.4] md:grid-cols-2 ">
                            {[
                                "Leading manufacturer of advanced collagen & enzyme solutions",
                                "Innovation with advanced biotechnology",
                                "State-of-the-art manufacturing facility",
                                "Purity, safety, and sustainability at every stage",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    {/* Blue check icon */}
                                    <span className="mt-1 items-center text-[#031B4E] text-[16px] ">
                                        ✓
                                    </span>

                                    {/* Text */}
                                    <p className=" leading-[1.6]">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {/* BUTTON */}
                        <div className="mt-8">
                            <button
                                type="button"
                                className="rounded-full bg-[#7bc043] px-8.75 py-4.5 text-[14px] font-semibold uppercase tracking-[0.15em] text-white shadow-md hover:bg-[#031B4E]"
                            >
                                Know more
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
