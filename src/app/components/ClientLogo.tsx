"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import halal from "@/app/assets/Halal.webp";
import capexil from "@/app/assets/capexil.webp";
import iso22000 from "@/app/assets/ISO-22000.webp";
import mpeda from "@/app/assets/MPEDA.webp";
import kosher from "@/app/assets/kosher.webp";
import fda from "@/app/assets/FDA.webp";
import exports from "@/app/assets/export-inspection-council.webp";

const logos = [
  halal,
  capexil,
  iso22000,
  mpeda,
  exports,
  kosher,
  fda
];

export default function ClientLogo() {
  return (
    <section className="bg-[#f2f8fc] py-25 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">

        {/* BADGE */}
        <div className="flex justify-center mb-3.75">
          <span className="rounded-full bg-[#8DC63F] px-5.75 py-0.75  text-[12px] font-semibold leading-6 tracking-[0.6px] text-white">
            CERTIFICATIONS
          </span>
        </div>

        {/* HEADING */}
        <h2 className="mb-12.5 text-center text-[34px] md:text-[48px] font-medium text-[#031b4e]">
          Fully Compliant Products
        </h2>

        {/* SLIDER */}
        <Swiper
          modules={[Autoplay]}
          loop
          slidesPerView={1}
          spaceBetween={24}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="w-full"
        >
          {[...logos, ...logos].map((logo, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center rounded-[28px] mb-1 bg-white h-51 shadow-sm">
                <Image
                  src={logo}
                  alt="Certification Logo"
                  className="object-contain"
                  width={200}
                  height={200}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
