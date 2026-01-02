import type { Metadata } from "next";
import Script from "next/script";
import Breadcrumb from "../components/Breadcrumb";
import Reveal from "../components/Reveal";
import contactHero from "@/app/assets/contact.webp";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
    title: "Inquiry | Solift",
};

const inputClass =
    "h-14 w-full rounded-full bg-[#eef6ff] px-7 text-[15px] font-medium text-[#031B4E] " +
    "placeholder:font-semibold placeholder:text-[#6b7fa3] outline-none " +
    "focus:ring-2 focus:ring-[#8cc63f]/40";

export default function InquiryPage() {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

    return (
        <main className="bg-[#e8f0fb]">
            <Breadcrumb title="Inquiry" subtitle="Solift  »  Inquiry" image={contactHero} />

            {/* Google reCAPTCHA script */}
            <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />

            <section className="py-10 md:py-16">
                <div className="mx-auto max-w-7xl px-4 md:px-6">
                    <div className="text-center">
                        <Reveal delay={60}>
                            <span className="font-sora inline-flex rounded-full bg-[#8cc63f] px-6 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                                Get in Touch with us
                            </span>
                        </Reveal>

                        <Reveal delay={120}>
                            <h1 className="mt-6 text-2xl font-semibold leading-tight text-[#031B4E] md:text-5xl">
                                Innovate with Solfit Lifesciences
                            </h1>
                        </Reveal>
                    </div>

                    {/* FORM CARD */}
                    <div className="mt-10 md:mt-14">
                        <div className="mx-auto max-w-5xl shadow-2xl rounded-[36px] bg-white p-6 shadow-[0_14px_35px_rgba(3,27,78,0.08)] md:p-10">
                            <Reveal delay={80}>
                                <h2 className=" text-center text-2xl  text-[#8cc63f] md:text-4xl">
                                    Tell Us Your Requirement &amp; We Will Connect with You
                                </h2>
                            </Reveal>

                            <form className="mt-8 md:mt-10">
                                {/* Company Name (full width like screenshot) */}
                                <Reveal delay={110}>
                                    <input type="text" placeholder="Company Name *" className={inputClass} />
                                </Reveal>

                                {/* 2-column inputs */}
                                <div className="mt-5 grid gap-5 md:grid-cols-2 md:gap-7">
                                    <Reveal delay={130}>
                                        <input type="text" placeholder="Your Name *" className={inputClass} />
                                    </Reveal>

                                    <Reveal delay={150}>
                                        <input type="email" placeholder="Your Email *" className={inputClass} />
                                    </Reveal>

                                    <Reveal delay={170}>
                                        <input type="tel" placeholder="Your Phone *" className={inputClass} />
                                    </Reveal>

                                    {/* Product Name select */}
                                    <Reveal delay={190}>
                                        <div className="relative">
                                            <select className={`${inputClass} appearance-none pr-12`} defaultValue="">
                                                <option value="" disabled>
                                                    Product Name
                                                </option>
                                                <option>Fish Collagen Peptide</option>
                                                <option>Veg Collagen Peptide</option>
                                                <option>Marine Oligopeptide</option>
                                                <option>Undenatured Type II Collagen</option>
                                                <option>Papain Enzyme</option>
                                                <option>Bromelain Enzyme</option>
                                            </select>

                                            <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#031B4E]" />
                                        </div>
                                    </Reveal>

                                    <Reveal delay={210}>
                                        <input type="text" placeholder="Quantity*" className={inputClass} />
                                    </Reveal>

                                    <Reveal delay={230}>
                                        <input type="text" placeholder="Country*" className={inputClass} />
                                    </Reveal>
                                </div>

                                {/* Message */}
                                <Reveal delay={250}>
                                    <textarea
                                        placeholder="Message"
                                        className="mt-6 h-56 w-full resize-none rounded-[28px] bg-[#eef6ff] px-7 py-6 text-[15px] font-medium text-[#031B4E]
                    placeholder:font-semibold placeholder:text-[#6b7fa3] outline-none focus:ring-2 focus:ring-[#8cc63f]/40 md:mt-7"
                                    />
                                </Reveal>

                                <Reveal delay={220}>
                                    <div className="mt-7 flex justify-center">
                                        <div className="flex h-[78px] w-[304px] items-center justify-center rounded-md border border-[#d9d9d9] bg-white text-sm text-[#031B4E]">
                                            reCAPTCHA here
                                        </div>
                                    </div>
                                </Reveal>

                                {/* Submit */}
                                <Reveal delay={290}>
                                    <button
                                        type="submit"
                                        className="mt-7 w-full rounded-full bg-[#8cc63f] hover:bg-[#010d27] cursor-pointer py-5 text-sm font-semibold uppercase tracking-widest text-white
                    shadow-[0_14px_30px_rgba(140,198,63,0.25)] hover:brightness-95"
                                    >
                                        Submit Now
                                    </button>
                                </Reveal>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
