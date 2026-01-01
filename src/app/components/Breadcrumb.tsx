// src/app/components/PageBanner.tsx
"use client";

import Image, { StaticImageData } from "next/image";

type BreadcrumbProps = {
  title: string;
  subtitle: string;     // e.g. "Solift  »  About Us"
  image: StaticImageData | string;
};

export default function Breadcrumb({ title, subtitle, image }: BreadcrumbProps) {
  return (
    <section className="w-full ">
      <div className="mx-auto ">
        <div className="relative overflow-hidden rounded-4xl mx-5  text-white">
          {/* background image / right side */}
          <div className="relative h-65 w-full  md:h-125">
            <Image
              src={image}
              alt={title}
              fill
              priority
              className="object-cover"
            />
            {/* blue overlay to match the tint */}
            {/* <div className="absolute inset-0 bg-[#0a2f83]/70" /> */}
          </div>

          {/* left text block */}
          <div className="pointer-events-none absolute inset-0 flex flex-col justify-center px-6 py-6 md:px-12">
            <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
              {title}
            </h1>
            <p className="text-sm font-medium md:text-base text-white/80">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
