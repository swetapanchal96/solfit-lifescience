import type { Metadata } from "next";
import Breadcrumb from "../components/Breadcrumb";
import Reveal from "../components/Reveal";
import contactHero from "@/app/assets/contact.webp";
import { TfiEmail } from "react-icons/tfi";
import { PiMapPinAreaBold } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";

export const metadata: Metadata = {
    title: "Get in Touch | Solift",
};

const MAP_SRC =
    "https://www.google.com/maps?q=Super%20Industrial%20Park%20Bhayla-Sakodara%20Road%20NH%208A%20Gujarat%20382220&output=embed";

function ContactCard({
    icon,
    title,
    children,
    href,
}: {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    href?: string;
}) {
    const Wrapper: any = href ? "a" : "div";

    return (
        <Wrapper
            {...(href ? { href } : {})}
            className={[
                "group block h-full rounded-[28px] bg-white p-8",
                "shadow-[0_10px_30px_rgba(3,27,78,0.06)]",
                "transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(3,27,78,0.10)]",
                "focus:outline-none focus:ring-2 focus:ring-[#8cc63f]/40",
            ].join(" ")}
        >
            {/* Internal layout fixed so all cards same height */}
            <div className="flex min-h-60 flex-col">
                {/* Icon */}
                <div className="flex items-center gap-3">
                    <div className="text-[#8cc63f] opacity-90">{icon}</div>
                </div>

                {/* Line + dot (hover fill left->right) */}
                <div className="mt-4">
                    <div className="relative h-0.5 w-full bg-[#dfe8d0]">
                        <div className="absolute left-0 top-0 h-full w-0 bg-[#8cc63f] transition-all duration-700 group-hover:w-full" />
                        <div className="absolute right-0 -top-1.75 h-3 w-3 rounded-full bg-[#8cc63f]" />
                    </div>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-semibold text-[#8cc63f]">{title}</h3>

                {/* Body */}
                <div className="mt-6 flex-1 text-[15px] leading-7 text-[#031B4E]">
                    {children}
                </div>
            </div>
        </Wrapper>
    );
}

export default function ContactPage() {
    return (
        <main className="bg-[#e8f0fb]">
            <Breadcrumb
                title="Get in Touch"
                subtitle="Solift  »  Contact Us"
                image={contactHero}
            />

            <section className="py-10 md:py-16">
                <div className="mx-auto max-w-8xl px-4 md:px-7">
                    {/* Cards Row */}
                    <div className="mt-2 grid items-stretch gap-8 md:grid-cols-3">
                        <Reveal delay={80}>
                            <ContactCard
                                icon={<TfiEmail className="h-7 w-7" />}
                                title="Mail us"
                                href="mailto:info@solfitlifesciences.com"
                            >
                                info@solfitlifesciences.com
                            </ContactCard>
                        </Reveal>

                        <Reveal delay={140}>
                            <ContactCard
                                icon={<FiPhoneCall className="h-7 w-7" />}
                                title="Customer Care"
                                href="tel:+919979797828"
                            >
                                +91 99797 97828
                            </ContactCard>
                        </Reveal>

                        <Reveal delay={200}>
                            <ContactCard icon={<PiMapPinAreaBold className="h-8 w-8" />} title="Our Location">
                                <div className="whitespace-pre-line">
                                    Plot No. 15,{"\n"}
                                    Super Industrial Park, Dhanwada, Bavla,{"\n"}
                                    Ahmedabad - 382220, Gujarat, INDIA
                                </div>
                            </ContactCard>
                        </Reveal>
                    </div>

                    {/* Map */}
                    <Reveal delay={240}>
                        <div className="mt-10 overflow-hidden rounded-[18px] border border-[#dfe7f3] bg-white">
                            <div className="relative h-150 w-full">
                                <iframe
                                    src={MAP_SRC}
                                    width="100%"
                                    height="100%"
                                    loading="lazy"
                                    className="absolute inset-0 h-full w-full"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Solift Location Map"
                                />
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
}
