// src/app/about-us/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import aboutHero from "@/app/assets/about.webp";
import aboutSectionImg from "@/app/assets/about-us-solfit.webp";
import Breadcrumb from "../components/Breadcrumb";
import visionImg from "@/app/assets/icons8-vision-70.webp";
import missionImg from "@/app/assets/icons8-mission-70.webp";
import valuesImg from "@/app/assets/icons8-diamond-70.webp";

export const metadata: Metadata = {
    title: "About Us | Solift",
};

export default function AboutUsPage() {
    return (
        <main className="">
            <Breadcrumb
                title="About Us"
                subtitle="Solift  »  About Us"
                image={aboutHero}
            />

            {/* ABOUT SECTION */}
            <section className="py-10 md:py-16">
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

            {/* VISION / MISSION / VALUES */}
            <section className="mb-25">
                <div className="mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* CARD */}
                        <div className="group bg-white rounded-4xl px-8 py-10
                transition-transform duration-300 ease-out
                hover:-translate-y-4">
                            <Image
                                src={visionImg}
                                alt="Vision"
                                width={70}
                                height={70}

                            />
                            <div className="mt-4">
                                <div className="relative h-0.5 w-full bg-[#dfe8d0]">
                                    <div className="absolute left-0 top-0 h-full w-0 bg-[#92bc2a] transition-all duration-700 ease-out group-hover:w-full" />
                                    <div className="absolute right-0 -top-1.25 h-3 w-3 rounded-full bg-[#92bc2a]" />
                                </div>
                            </div>
                            <h3 className="text-[26px] pt-3.75 font-semibold text-[#92bc2a] mb-4">
                                Vision
                            </h3>
                            <p className="text-[16px] text-justify leading-[1.7] text-[#031B4E]">
                                To become a globally recognized leader in premium collagen solutions, empowering industries with sustainable and innovative life science solutions that enhance the quality of life.
                            </p>
                        </div>

                        {/* CARD */}
                        <div className="group bg-white rounded-4xl px-8 py-10
                transition-transform duration-300 ease-out
                hover:-translate-y-4">
                            <Image
                                src={missionImg}
                                alt="Mission"
                                width={70}
                                height={70}

                            />
                            <div className="mt-4">
                                <div className="relative h-0.5 w-full bg-[#dfe8d0]">
                                    <div className="absolute left-0 top-0 h-full w-0 bg-[#92bc2a] transition-all duration-700 ease-out group-hover:w-full" />
                                    <div className="absolute right-0 -top-1.25 h-3 w-3 rounded-full bg-[#92bc2a]" />
                                </div>
                            </div>
                            <h3 className="text-[26px] pt-3.75 font-semibold text-[#92bc2a] mb-4">
                                Mission
                            </h3>
                            <p className="text-[16px] text-justify leading-[1.7] text-[#031B4E]">
                                At Solfit Lifesciences, we are dedicated to developing high-quality, research-driven active ingredients that meet the global standards of safety, efficacy, and sustainability.
                            </p>
                        </div>

                        {/* CARD */}
                        <div className="group bg-white rounded-4xl px-8 py-10
                transition-transform duration-300 ease-out
                hover:-translate-y-4">
                            <Image
                                src={valuesImg}
                                alt="Values"
                                width={70}
                                height={70}
                            />

                            <div className="mt-4">
                                <div className="relative h-0.5 w-full bg-[#dfe8d0]">
                                    <div className="absolute left-0 top-0 h-full w-0 bg-[#92bc2a] transition-all duration-700 ease-out group-hover:w-full" />

                                    <div className="absolute right-0 -top-1.25 h-3 w-3 rounded-full bg-[#92bc2a]" />
                                </div>
                            </div>

                            <h3 className="text-[26px] pt-3.75 font-semibold text-[#92bc2a] mb-4">
                                Values
                            </h3>

                            <p className="text-[16px] text-justify leading-[1.7] text-[#031B4E]">
                                Quality, Innovation and Ethics are the founding pillars of Solfit upon which we have built our work culture.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
