"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMail, FiChevronDown, FiChevronRight, FiMenu, FiX } from "react-icons/fi";
import { PiPhoneCall } from "react-icons/pi";
import logo from "../assets/headerlogo.png";

type MenuItem = {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
};

const PRODUCTS_MENU: MenuItem[] = [
    { label: "FISH COLLAGEN PEPTIDE", href: "/products/fish-collagen-peptide" },
    { label: "MARINE OLIGOPEPTIDE", href: "/product" },
    {
        label: "UNDENATURED TYPE II COLLAGEN (CHICKEN STERNUM)",
        href: "/products/undenatured-type-ii",
    },
    { label: "COPPER TRIPEPTIDE (GHK-CU)", href: "/products/copper-tripeptide" },
    {
        label: "VEG COLLAGEN PEPTIDE",
        href: "/products/veg-collagen-peptide",
        children: [
            { label: "BROCCOLI EXTRACT", href: "/products/broccoli-extract" },
            { label: "SWEET CORN EXTRACT", href: "/products/sweet-corn-extract" },
            { label: "KALONJI EXTRACT", href: "/products/kalonji-extract" },
        ],
    },
    { label: "PAPAIN ENZYME", href: "/products/papain-enzyme" },
    { label: "BROMELAIN ENZYME", href: "/products/bromelain-enzyme" },
];

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href} className="text-[12px] font-semibold tracking-wide text-slate-900 hover:text-slate-700">
        {children}
    </Link>
);

export default function SolfitHeader() {
    const [open, setOpen] = useState(false);

    // desktop dropdown state
    const [productsOpen, setProductsOpen] = useState(false);
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    // mobile accordion
    const [mobProductsOpen, setMobProductsOpen] = useState(false);
    const [mobVegOpen, setMobVegOpen] = useState(false);

    const closeTimer = useRef<any>(null);

    const openProducts = () => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setProductsOpen(true);
    };

    const closeProducts = () => {
        closeTimer.current = setTimeout(() => {
            setProductsOpen(false);
            setActiveIdx(null);
        }, 140);
    };

    const activeChildren = activeIdx != null ? PRODUCTS_MENU[activeIdx]?.children : undefined;

    // language dropdown code.
    const [langOpen, setLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState({
        label: "English",
        flag: "🇺🇸",
    });
    const langRef = useRef<HTMLDivElement>(null);

    const LANGUAGES = [
        { label: "English", flag: "🇺🇸" },
        { label: "Japanese", flag: "🇯🇵" },
        { label: "French", flag: "🇫🇷" },
        { label: "Spanish", flag: "🇪🇸" },
        { label: "German", flag: "🇩🇪" },
        { label: "Russian", flag: "🇷🇺" },
        { label: "Korean", flag: "🇰🇷" },
    ];



    return (
        <header className="w-full">
            {/* Top bar */}
            <div className="w-full h-40 md:h-16 border-b border-black bg-[#eef6fd]">
                <div className="mx-auto flex flex-col-reverse md:flex-row max-w-[1320] items-center justify-between px-9 py-2">
                    {/* left */}
                    <div className="flex items-center gap-3">
                        <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-slate-800 shadow-sm">
                            <FiMail className="h-6 w-6 text-[#031B4E]" />
                        </span>
                        <a href="mailto:info@solfitlifesciences.com" className="text-[16px] font-semibold  text-[#031B4E] hover:underline">
                            info@solfitlifesciences.com
                        </a>
                    </div>

                    {/* right */}
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <div ref={langRef} className="relative">
                            <button
                                type="button"
                                onClick={() => setLangOpen((v) => !v)}
                                className="flex items-center w-40 h-9 gap-2 rounded-md bg-[#92BC2A] px-4 text-sm font-semibold text-white shadow-sm cursor-pointer"
                            >
                                <span className="text-base leading-none">{selectedLang.flag}</span>
                                <span className="flex-1 text-left">{selectedLang.label}</span>
                                <FiChevronDown
                                    className={`opacity-90 transition-transform ${langOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            {/* Dropdown */}
                            {langOpen && (
                                <div className="absolute -right-6 z-50 mt-2 w-44 rounded-md border border-gray-200 bg-white shadow-lg">
                                    <ul className="py-1">
                                        {LANGUAGES.map((lang) => (
                                            <li key={lang.label}>
                                                <button
                                                    onClick={() => {
                                                        setSelectedLang(lang);
                                                        setLangOpen(false);
                                                    }}
                                                    className="flex w-full items-center gap-3 px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                                >
                                                    <span className="text-base">{lang.flag}</span>
                                                    {lang.label}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-3">
                            <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-slate-800 shadow-sm">
                                <PiPhoneCall className="h-6 w-6 text-[#031B4E]" />
                            </span>
                            <a href="tel:+919979797828" className="text-[16px] font-semibold text-[#031B4E] hover:underline">
                                +91 99797 97828
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main header */}
            <div className="w-full ">
                <div className="mx-auto flex max-w-[1320] h-25 items-center justify-between px-8 py-4">
                    {/* logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={logo} alt="Solfit Lifesciences" width={185} height={55} className="h-12 w-auto" priority />
                    </Link>

                    {/* desktop nav */}
                    <nav className="hidden items-center gap-8 lg:flex">
                        <NavLink href="/about-us">ABOUT US</NavLink>
                        <NavLink href="/infrastructure">INFRASTRUCTURE</NavLink>

                        {/* PRODUCTS dropdown (desktop) */}
                        <div className="relative" onMouseEnter={openProducts} onMouseLeave={closeProducts}>
                            <button
                                type="button"
                                className="flex items-center gap-1 text-[12px] font-semibold tracking-wide text-slate-900 hover:text-slate-700"
                                aria-haspopup="menu"
                                aria-expanded={productsOpen}
                            >
                                PRODUCTS
                                <FiChevronDown
                                    className={`text-slate-600 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                                />
                            </button>

                            <AnimatePresence>
                                {productsOpen && (
                                    <motion.div
                                        className="absolute left-1/2 top-full z-50 mt-4 -translate-x-1/2"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.18, ease: "easeOut" }}
                                        onMouseEnter={openProducts}
                                        onMouseLeave={closeProducts}
                                    >
                                        <div className="relative">
                                            {/* main menu box */}
                                            <div className="w-[290] overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/5">
                                                <div className="h-[3] w-full bg-[#1f6feb]" />

                                                <motion.ul
                                                    className="p-3"
                                                    initial="hidden"
                                                    animate="show"
                                                    variants={{
                                                        hidden: {},
                                                        show: { transition: { staggerChildren: 0.05, delayChildren: 0.03 } },
                                                    }}
                                                >
                                                    {PRODUCTS_MENU.map((item, idx) => {
                                                        const isActive = activeIdx === idx && !!item.children;

                                                        return (
                                                            <motion.li
                                                                key={item.label}
                                                                onMouseEnter={() => setActiveIdx(item.children ? idx : null)}
                                                                className={[
                                                                    "group flex items-center justify-between gap-3 rounded-lg px-3 py-3",
                                                                    "text-[11px] font-extrabold tracking-wide text-[#0b2b5e]",
                                                                    "hover:bg-slate-50",
                                                                    isActive ? "bg-slate-50" : "",
                                                                ].join(" ")}
                                                                variants={{
                                                                    hidden: { opacity: 0, x: -12 },
                                                                    show: { opacity: 1, x: 0, transition: { duration: 0.18 } },
                                                                }}
                                                                whileHover="hover"
                                                            >
                                                                <Link href={item.href} className="flex-1">
                                                                    <motion.span
                                                                        className="inline-flex items-center gap-2"
                                                                        variants={{ hover: { x: 10 } }}
                                                                        transition={{ duration: 0.18, ease: "easeOut" }}
                                                                    >
                                                                        <motion.span variants={{ hover: { width: "15px" } }} transition={{ duration: 0.2 }} className="h-[2] bg-[#0b2b5e]/60" />
                                                                        <span>{item.label}</span>
                                                                    </motion.span>


                                                                </Link>

                                                                {item.children ? (

                                                                    <motion.span
                                                                        variants={{ hover: { x: 4 } }}
                                                                        transition={{ duration: 0.18 }}
                                                                        className="text-[#0b2b5e] opacity-80"
                                                                    >
                                                                        <FiChevronRight />
                                                                    </motion.span>
                                                                ) : null}
                                                            </motion.li>
                                                        );
                                                    })}
                                                </motion.ul>
                                            </div>

                                            {/* submenu box */}
                                            <AnimatePresence>
                                                {activeChildren && (
                                                    <motion.div
                                                        className="absolute top-[165] left-[290]"
                                                        initial={{ opacity: 0, x: 10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        exit={{ opacity: 0, x: 10 }}
                                                        transition={{ duration: 0.18, ease: "easeOut" }}
                                                        onMouseEnter={openProducts}
                                                        onMouseLeave={closeProducts}
                                                    >
                                                        <div className="w-[260] overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/5">
                                                            <div className="h-[3] w-full bg-[#1f6feb]" />
                                                            <motion.ul
                                                                className="p-3"
                                                                initial="hidden"
                                                                animate="show"
                                                                variants={{
                                                                    hidden: {},
                                                                    show: { transition: { staggerChildren: 0.05, delayChildren: 0.03 } },
                                                                }}
                                                            >
                                                                {activeChildren.map((c) => (
                                                                    <motion.li
                                                                        key={c.label}
                                                                        className="rounded-lg px-3 py-3 text-[11px] font-extrabold tracking-wide text-[#0b2b5e] hover:bg-slate-50"
                                                                        variants={{
                                                                            hidden: { opacity: 0, x: -10 },
                                                                            show: { opacity: 1, x: 0, transition: { duration: 0.18 } },
                                                                        }}
                                                                        whileHover="hover"
                                                                    >

                                                                        <Link href={c.href} className="flex items-center gap-3">

                                                                            <motion.span
                                                                                className="h-[2] w-0 bg-[#0b2b5e]/60"
                                                                                variants={{ hover: { width: "15px" } }}
                                                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                                            />

                                                                            <motion.span
                                                                                className="inline-block"
                                                                                variants={{ hover: { x: 10 } }}
                                                                                transition={{ duration: 0.18, ease: "easeOut" }}
                                                                            >
                                                                                {c.label}
                                                                            </motion.span>
                                                                        </Link>

                                                                    </motion.li>
                                                                ))}
                                                            </motion.ul>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <NavLink href="/career">CAREER</NavLink>
                        <NavLink href="/contact-us">CONTACT US</NavLink>
                    </nav>

                    {/* CTA */}
                    <div className="hidden lg:block">
                        <Link
                            href="/inquiry"
                            className="rounded-full bg-[#92BC2A] hover:bg-[#031b4e] px-9 py-5 text-sm font-medium text-white shadow-sm "
                        >
                            INQUIRE NOW
                        </Link>
                    </div>

                    {/* mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setOpen((v) => !v)}
                        className="grid h-10 w-10 place-items-center rounded-lg border border-slate-200 text-slate-800 lg:hidden"
                        aria-label="Toggle menu"
                    >
                        {open ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* mobile nav */}
                {open && (
                    <div className="border-t border-slate-200 bg-white lg:hidden">
                        <div className="mx-auto max-w-[1320] px-4 py-4">
                            <div className="flex flex-col gap-4">
                                <Link href="/about" className="font-semibold" onClick={() => setOpen(false)}>
                                    ABOUT US
                                </Link>
                                <Link href="/infrastructure" className="font-semibold" onClick={() => setOpen(false)}>
                                    INFRASTRUCTURE
                                </Link>

                                {/* Mobile Products accordion */}
                                <button
                                    type="button"
                                    onClick={() => setMobProductsOpen((v) => !v)}
                                    className="flex items-center justify-between font-semibold"
                                >
                                    PRODUCTS
                                    <FiChevronDown className={`transition-transform ${mobProductsOpen ? "rotate-180" : ""}`} />
                                </button>

                                {mobProductsOpen && (
                                    <div className="ml-3 flex flex-col gap-2 border-l border-slate-200 pl-3">
                                        {PRODUCTS_MENU.map((p) => {
                                            const hasChildren = !!p.children?.length;
                                            const isVeg = p.label === "VEG COLLAGEN PEPTIDE";

                                            return (
                                                <div key={p.label} className="flex flex-col">
                                                    <div className="flex items-center justify-between">
                                                        <Link
                                                            href={p.href}
                                                            onClick={() => setOpen(false)}
                                                            className="text-sm font-semibold text-slate-800"
                                                        >
                                                            {p.label}
                                                        </Link>

                                                        {hasChildren && isVeg ? (
                                                            <button type="button" onClick={() => setMobVegOpen((v) => !v)} className="p-2">
                                                                <FiChevronDown className={`transition-transform ${mobVegOpen ? "rotate-180" : ""}`} />
                                                            </button>
                                                        ) : null}
                                                    </div>

                                                    {hasChildren && isVeg && mobVegOpen && (
                                                        <div className="ml-3 mt-2 flex flex-col gap-2 border-l border-slate-200 pl-3">
                                                            {p.children!.map((c) => (
                                                                <Link
                                                                    key={c.label}
                                                                    href={c.href}
                                                                    onClick={() => setOpen(false)}
                                                                    className="text-sm font-semibold text-slate-700"
                                                                >
                                                                    {c.label}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                <Link href="/career" className="font-semibold" onClick={() => setOpen(false)}>
                                    CAREER
                                </Link>
                                <Link href="/contact" className="font-semibold" onClick={() => setOpen(false)}>
                                    CONTACT US
                                </Link>

                                <Link
                                    href="/contact"
                                    className="mt-2 inline-flex w-fit rounded-full bg-[#8BC34A] px-6 py-3 text-sm font-extrabold text-white"
                                    onClick={() => setOpen(false)}
                                >
                                    INQUIRE NOW
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
