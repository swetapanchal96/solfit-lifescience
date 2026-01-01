// src/app/about-us/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import aboutHero from "@/app/assets/about.webp";
import aboutSectionImg from "@/app/assets/about-us-solfit.webp";
import Breadcrumb from "../components/Breadcrumb";

export const metadata: Metadata = {
    title: "About Us | Solift",
};

export default function AboutUsPage() {
    return (
        <main className="bg-[#e8f0fb]">
            <Breadcrumb
                title="About Us"
                subtitle="Solift  »  About Us"
                image={aboutHero}
            />

            {/* ABOUT SECTION */}
            <section className=" py-10  md:py-16">
                <div className="mx-auto  rounded-4xl  px-4 py-6  md:px-6 md:py-10">
                    <div className="flex w-full flex-col overflow-hidden rounded-4xl md:flex-row">
                        {/* LEFT IMAGE */}
                        <div className="relative flex items-center w-full md:w-1/2">
                            <div className="relative h-65 w-152 md:h-160">
                                <Image
                                    src={aboutSectionImg}
                                    alt="Advanced Collagen & Enzyme"
                                    fill
                                    className="object-cover rounded-[28px]"
                                    priority
                                />
                            </div>
                        </div>

                        {/* RIGHT TEXT */}
                        <div className="w-full md:w-1/2 px-5 md:px-8">
                            <span className="inline-flex rounded-full bg-[#8cc63f] px-5 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                                About Us
                            </span>

                            <h1 className="text-3xl text-[#031B4E] font-medium leading-tight md:text-5xl">
                                Advanced Collagen &amp; <strong className=""> Enzyme Solutions for a Healthier Future</strong>
                            </h1>

                            <div className="space-y-4 text-sm leading-relaxed text-[#1c355e] md:text-base">
                                <p className="mt-5 text-[16px] text-justify leading-[1.4] text-[#031B4E]">
                                    At Solift Lifesciences, we are committed to harnessing the unique
                                    potential of collagen and enzyme solutions through innovation,
                                    science, and sustainability.At Solfit Lifesciences, we are committed to harnessing the unique potential of collagen and enzyme solutions through innovation, science, and sustainability. We specialize in producing pure, high-quality Fish Collagen Peptide, Veg Collagen Peptide, Marine Oligopeptide, Undenatured Type II Collagen, Copper Tripeptide, Papain Enzyme, and Bromelain Enzyme. Utilizing cutting-edge enzymatic hydrolysis and advanced filtration techniques, we deliver superior bioavailability, purity, and effectiveness.
                                </p>
                                <p className="mt-5 text-[16px] text-justify leading-[1.4] text-[#031B4E]">
                                    Our advanced manufacturing facility, located in Ahmedabad, Gujarat, India, is equipped with state-of-the-art technologies and operates under stringent standard operating procedures (SOPs) to ensure top-tier quality, safety, and hygiene across every stage of production.
                                </p>
                                <p className="mt-5 text-[16px] text-justify leading-[1.4] text-[#031B4E]">
                                    We ethically source raw materials from well-regulated fisheries, aquaculture, poultry sources, and plant-based sources, ensuring full traceability and environmental responsibility. By blending innovation with a science-driven approach, Solfit Lifesciences empowers industries in health, beauty, food, and wellness, providing premium solutions that support skin health, joint mobility, muscle recovery, and overall vitality. We continue to evolve and innovate, meeting global demands with precision, sustainability, and excellence.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* rest of About page content here */}
        </main>
    );
}
