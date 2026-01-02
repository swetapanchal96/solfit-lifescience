"use client";

import { useState } from "react";
import Reveal from "../components/Reveal";
import RecaptchaBox from "../components/RecaptchaBox";

export default function CareerForm() {
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);

    return (
        <form className="mt-8 md:mt-10">
            <div className="grid gap-5 md:grid-cols-2 md:gap-7">
                <Reveal delay={120}>
                    <input
                        type="text"
                        placeholder="Your Name *"
                        className="h-14 w-full rounded-full bg-[#eef6ff] px-7 text-[15px] text-[#031B4E] placeholder:font-semibold placeholder:text-[#6b7fa3] outline-none focus:ring-2 focus:ring-[#8cc63f]/40"
                    />
                </Reveal>

                <Reveal delay={140}>
                    <input
                        type="text"
                        placeholder="Qualification *"
                        className="h-14 w-full rounded-full bg-[#eef6ff] px-7 text-[15px] text-[#031B4E] placeholder:font-semibold placeholder:text-[#6b7fa3] outline-none focus:ring-2 focus:ring-[#8cc63f]/40"
                    />
                </Reveal>

                <Reveal delay={160}>
                    <input
                        type="email"
                        placeholder="Your Email *"
                        className="h-14 w-full rounded-full bg-[#eef6ff] px-7 text-[15px] text-[#031B4E] placeholder:font-semibold placeholder:text-[#6b7fa3] outline-none focus:ring-2 focus:ring-[#8cc63f]/40"
                    />
                </Reveal>

                <Reveal delay={180}>
                    <input
                        type="tel"
                        placeholder="Your Phone *"
                        className="h-14 w-full rounded-full bg-[#eef6ff] px-7 text-[15px] text-[#031B4E] placeholder:font-semibold placeholder:text-[#6b7fa3] outline-none focus:ring-2 focus:ring-[#8cc63f]/40"
                    />
                </Reveal>
            </div>

            <Reveal delay={200}>
                <textarea
                    placeholder="message...."
                    className="mt-6 h-44 w-full resize-none rounded-[28px] bg-[#eef6ff] px-7 py-5 text-[15px] text-[#031B4E] placeholder:font-semibold placeholder:text-[#6b7fa3] outline-none focus:ring-2 focus:ring-[#8cc63f]/40 md:mt-7"
                />
            </Reveal>

            {/* ✅ Real "I'm not a robot" */}
            <RecaptchaBox onVerify={setCaptchaToken} />

            {/* ✅ Keep only ONE button (you had two) */}
            <Reveal delay={240}>
                <button
                    type="button"
                    disabled={!captchaToken}
                    className="mt-7 w-full rounded-full bg-[#8cc63f] py-5 text-sm font-semibold uppercase tracking-widest text-white
          shadow-[0_14px_30px_rgba(140,198,63,0.25)] hover:brightness-95
          disabled:cursor-not-allowed disabled:opacity-60"
                >
                    Submit Now
                </button>
            </Reveal>
        </form>
    );
}
