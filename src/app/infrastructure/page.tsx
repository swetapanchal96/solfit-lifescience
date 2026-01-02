import Image, { StaticImageData } from "next/image";
import InfrastructureHero from "@/app/assets/Infrastructure.webp";
import Breadcrumb from "../components/Breadcrumb";
import Reveal from "../components/Reveal";
import advance from "@/app/assets/advance.webp";
import qualityImg from "@/app/assets/qc.webp";
import sustainabilityImg from "@/app/assets/sustainability.webp";
import innovativeImg from "@/app/assets/innovation.webp";

export const metadata = {
    title: "Infrastructure | Solift",
};

type Point = { title: string; desc: string };

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

function InfraSection({
    title,
    intro,
    points,
    image,
    imageAlt,
    imageSide = "right",
    imageCard = false, // use true for the Sustainability block if you want grey card look
}: {
    title: string;
    intro?: string;
    points: Point[];
    image: StaticImageData;
    imageAlt: string;
    imageSide?: "left" | "right";
    imageCard?: boolean;
}) {
    return (
        <div
            className={[
                "mt-14 flex flex-col gap-5 md:flex-row md:flex-nowrap md:items-start md:justify-between",
                imageSide === "left" ? "" : "md:flex-row-reverse",
            ].join(" ")}
        >
            {/* TEXT */}
            <div className="w-full md:flex-1 md:min-w-0">
                <Reveal delay={80}>
                    <h2 className="text-2xl  tracking-tight text-[#8cc63f] md:text-4xl">
                        {title}
                    </h2>
                </Reveal>

                {intro ? (
                    <Reveal delay={160}>
                        <p className="mt-4 text-[15px] leading-7 text-[#031B4E] md:text-[16px]">
                            {intro}
                        </p>
                    </Reveal>
                ) : null}

                <ul className="mt-8 space-y-6">
                    {points.map((item, i) => (
                        <li key={item.title} className="flex items-start gap-4">
                            <CheckIcon />
                            <Reveal delay={220 + i * 90}>
                                <div className="text-[15px] leading-7 text-[#031B4E] md:text-[16px]">
                                    <span className="font-semibold">{item.title}</span>{" "}
                                    <span className="text-[#1c355e]">{item.desc}</span>
                                </div>
                            </Reveal>
                        </li>
                    ))}
                </ul>
            </div>

            {/* IMAGE (fixed width like screenshot) */}
            <div className="w-full md:w-130 lg:w-140 md:shrink-0">

                <div
                    className={[
                        "relative w-full overflow-hidden rounded-[36px]",
                        imageCard ? "bg-[#ececec] " : "",
                    ].join(" ")}
                >
                    <div className="relative h-82.75 w-full">
                        <Image
                            src={image}
                            alt={imageAlt}
                            fill
                            className="object-cover"
                            priority
                            sizes="(min-width: 1024px) 560px, (min-width: 768px) 520px, 331px"
                        // style={{ height: "331px" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ✅ Your sections data */
const advancedPoints: Point[] = [
    { title: "Enzymatic Hydrolysis:", desc: "Precise molecular control for enhanced bioavailability." },
    { title: "Spray Drying Technology:", desc: "Consistent particle size for easy integration into formulations." },
    { title: "Ultra-Filtration Systems:", desc: "Ensuring high purity and removal of contaminants." },
    { title: "Automated Granulation:", desc: "Uniform granule size for optimal product handling and dissolution." },
];

// Example placeholders (use your real text/images like screenshots)
const qualityPoints: Point[] = [
    { title: "Raw Material Testing:", desc: "Rigorous screening for purity, safety, and traceability." },
    { title: "In-Process Monitoring:", desc: "Ensures every batch meets specifications for molecular weight, bioavailability, and consistency." },
    { title: "Advanced Testing:", desc: "Microbial, heavy metal, and residual solvent testing guarantee product safety." },
    { title: "Final Product Testing:", desc: "Comprehensive testing for solubility, odor, color, and peptide content." },
];

const sustainabilityPoints: Point[] = [
    { title: "Waste Management & Recycling:", desc: "Comprehensive strategies for minimizing waste, reusing by-products, and reducing environmental impact." },
    { title: "Water Recycling:", desc: "Advanced systems to reduce water usage and protect local resources." },
    { title: "R&D for Sustainability:", desc: "Continuous innovation in eco-friendly practices to support a circular economy." },
];

const innovativePoints: Point[] = [
    { title: "Proprietary Peptide Formulation:", desc: "Tailored formulations for improved solubility and absorption across beauty, health, and nutrition industries." },
    { title: "Sustainable Extraction Techniques:", desc: "Eco-friendly methods that reduce environmental impact while preserving product efficacy." },
    { title: "High-Precision Analytical Techniques:", desc: "Using HPLC and mass spectrometry for rigorous quality control and batch consistency." },
];

export default function Page() {
    return (
        <main className="bg-[#e8f0fb]">
            <Breadcrumb
                title="Infrastructure"
                subtitle="Solift  »  Infrastructure"
                image={InfrastructureHero}
            />

            <section className="py-10 md:py-16">
                <div className="mx-auto max-w-7xl px-4 md:px-0">
                    <Reveal delay={0}>
                        <p className="text-[15px] leading-7 text-[#031B4E] md:text-[16px]">
                            Located in Gujarat, India, our advanced manufacturing facility is designed
                            to meet the highest industry standards. It’s equipped with cutting-edge
                            technology and driven by sustainable practices that ensure the purity,
                            bioavailability, and efficacy of our collagen peptide and enzymes.
                            Empowering nutraceuticals to cosmetics, our facility is at the forefront
                            of innovation.
                        </p>
                    </Reveal>

                    {/* ✅ Like screenshot: text left, image right */}
                    <InfraSection
                        title="Advanced Technology"
                        intro="We employ innovative technologies that ensure superior product performance across all applications:"
                        points={advancedPoints}
                        image={advance}
                        imageAlt="Advanced Technology"
                        imageSide="left"
                    />

                    {/* ✅ Like screenshot: image left, text right */}

                    <InfraSection
                        title="Unmatched Quality Control & Assurance"
                        points={qualityPoints}
                        image={qualityImg}
                        imageAlt="Quality Control"
                        imageSide="right"
                    />


                    {/* ✅ Like screenshot: text left, image right (with grey card style) */}

                    <InfraSection
                        title="Sustainability at the Core"
                        intro="We prioritize sustainability in all aspects of our production:"
                        points={sustainabilityPoints}
                        image={sustainabilityImg}
                        imageAlt="Sustainability"
                        imageSide="left"
                        imageCard={true}
                    />


                    {/* ✅ Like screenshot: image left, text right */}

                    <InfraSection
                        title="Innovative Processes for Superior Products"
                        intro="We have designed processes that drive the highest standards of quality and innovation:"
                        points={innovativePoints}
                        image={innovativeImg}
                        imageAlt="Innovative Processes"
                        imageSide="right"
                    />

                </div>
            </section>
        </main>
    );
}
