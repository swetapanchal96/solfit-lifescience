import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";
import Reveal from "../components/Reveal";
import careerHero from "@/app/assets/career.webp";

export const metadata: Metadata = {
    title: "Career | Solift",
};

export default function CareerPage() {
    return (
        <main className="bg-[#e8f0fb]">
            <Breadcrumb
                title="Career"
                subtitle="Solift  »  Career"
                image={careerHero}
            />

            {/* TOP CONTENT (same like screenshot) */}
            <section className="py-10 md:py-16">
                <div className="mx-auto max-w-7xl px-4 md:px-6">
                    <div className="text-center">
                        <Reveal delay={60}>
                            <span className="inline-flex rounded-full bg-[#8cc63f] px-6 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                                Career
                            </span>
                        </Reveal>

                        <Reveal delay={120}>
                            <h1 className="mt-6 text-3xl leading-tight text-[#031B4E] md:text-5xl">
                                Share Your Interests &amp; Stay Connected
                            </h1>
                        </Reveal>

                        <Reveal delay={180}>
                            <p className="mx-auto mt-5 text-start text-[15px] leading-7 text-[#031B4E] md:text-[16px]">
                                At Solfit, you will find opportunities to grow, innovate, and make an impact in the
                                world of health and wellness. Whether you are an experienced professional or just
                                starting your journey, we value creativity, collaboration, and passion. Be part of a
                                dynamic team that’s shaping the future of collagen and enzyme solutions while staying
                                committed to sustainability and innovation. Let’s build something remarkable together.
                            </p>
                        </Reveal>
                    </div>

                    {/* FORM CARD (same like screenshot) */}
                    <div className="mt-10 md:mt-14">
                        <div className="mx-auto max-w-6xl rounded-[36px] bg-white p-6 shadow-[0_14px_35px_rgba(3,27,78,0.08)] md:p-10">
                            <Reveal delay={80}>
                                <h2 className="text-center text-3xl font-semibold text-[#8cc63f] md:text-4xl">
                                    Reach out to us
                                </h2>
                            </Reveal>

                            <form className="mt-8 md:mt-10">
                                {/* 2 column inputs */}
                                <div className="grid gap-5 md:grid-cols-2 md:gap-7">
                                    <Reveal delay={120}>
                                        <input
                                            type="text"
                                            placeholder="Your Name *"
                                            className="h-14 w-full rounded-full bg-[#eef6ff] px-7 text-[15px] text-[#031B4E] placeholder:text-[#6b7fa3] outline-none ring-0 focus:outline-none focus:ring-2 focus:ring-[#8cc63f]/40"
                                        />
                                    </Reveal>

                                    <Reveal delay={140}>
                                        <input
                                            type="text"
                                            placeholder="Qualification *"
                                            className="h-14 w-full rounded-full bg-[#eef6ff] px-7 text-[15px] text-[#031B4E] placeholder:text-[#6b7fa3] outline-none ring-0 focus:outline-none focus:ring-2 focus:ring-[#8cc63f]/40"
                                        />
                                    </Reveal>

                                    <Reveal delay={160}>
                                        <input
                                            type="email"
                                            placeholder="Your Email *"
                                            className="h-14 w-full rounded-full bg-[#eef6ff] px-7 text-[15px] text-[#031B4E] placeholder:text-[#6b7fa3] outline-none ring-0 focus:outline-none focus:ring-2 focus:ring-[#8cc63f]/40"
                                        />
                                    </Reveal>

                                    <Reveal delay={180}>
                                        <input
                                            type="tel"
                                            placeholder="Your Phone *"
                                            className="h-14 w-full rounded-full bg-[#eef6ff] px-7 text-[15px] text-[#031B4E] placeholder:text-[#6b7fa3] outline-none ring-0 focus:outline-none focus:ring-2 focus:ring-[#8cc63f]/40"
                                        />
                                    </Reveal>
                                </div>

                                {/* message */}
                                <Reveal delay={200}>
                                    <textarea
                                        placeholder="message...."
                                        className="mt-6 h-44 w-full resize-none rounded-[28px] bg-[#eef6ff] px-7 py-5 text-[15px] text-[#031B4E] placeholder:text-[#6b7fa3] outline-none focus:ring-2 focus:ring-[#8cc63f]/40 md:mt-7"
                                    />
                                </Reveal>

                                {/* Recaptcha placeholder (same position like screenshot) */}
                                <Reveal delay={220}>
                                    <div className="mt-7 flex justify-center">
                                        <div className="flex h-19.5 w-76 items-center justify-center rounded-md border border-[#d9d9d9] bg-white text-sm text-[#031B4E]">
                                            reCAPTCHA here
                                        </div>
                                    </div>
                                </Reveal>

                                {/* Submit Button */}
                                <Reveal delay={240}>
                                    <button
                                        type="button"
                                        className="mt-7 w-full rounded-full bg-[#8cc63f]  hover:bg-[#010d27] cursor-pointer py-5 text-sm font-semibold uppercase tracking-widest text-white shadow-[0_14px_30px_rgba(140,198,63,0.25)] hover:brightness-95"
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
