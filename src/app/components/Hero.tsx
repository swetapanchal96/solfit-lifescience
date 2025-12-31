"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import slider1 from "@/app/assets/slider1.webp";
import slider2 from "@/app/assets/slider2.webp";
import slider3 from "@/app/assets/slider3.webp";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="px-4 md:px-5 lg:px-5">
      <div className="relative h-[85vh] overflow-hidden rounded-4xl bg-white">

        <Swiper
          modules={[Pagination]}
          pagination={{
             clickable: true,
             el: ".hero-pagination",}}
          loop
          speed={1400} // 👈 slow slide transition (VERY IMPORTANT)
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full h-full"
        >

          {/* ================= SLIDE 1 ================= */}
          <SwiperSlide>
            <Image src={slider3} alt="Slide 1" fill className="object-cover" priority />

            <div className="relative z-10 h-full flex py-20">
              <div className="max-w-7xl px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* LEFT CONTENT */}
                <motion.div
                  key={`slide-1-${activeIndex}`}
                  initial={{
                    opacity: 0,
                    x: 180,       // 👈 strong visible movement
                    scale: 0.92,  // 👈 depth effect
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1.6,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <h4 className="text-[#031b4e] font-normal mb-2 leading-[1.15] text-[50px]">
                    Global Reach <br />
                    <strong>Trusted Quality</strong>
                  </h4>

                  <p className="mt-5 mb-6 pt-5 border-t border-[#031b4e1a] text-[#031b4e] max-w-md">
                    Certified collagen products for health, beauty, and beyond.
                  </p>

                  <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 1.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="px-8 py-4 rounded-full bg-[#92BC2A] hover:bg-[#031b4e] text-white"
                  >
                    CONTACT US
                  </motion.button>
                </motion.div>

                <div className="hidden lg:block" />
              </div>
            </div>
          </SwiperSlide>

          {/* ================= SLIDE 2 ================= */}
          <SwiperSlide>
            <Image src={slider2} alt="Slide 2" fill className="object-cover" />

            <div className="relative z-10 h-full flex py-20">
              <div className="max-w-7xl px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

                <motion.div
                  key={`slide-2-${activeIndex}`}
                  initial={{ opacity: 0, x: 180, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    duration: 1.6,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <h4 className="text-[#031b4e] font-normal mb-2 leading-[1.15] text-[50px]">
                    Precision Driven <br />
                    <strong>Scientific Formulations</strong>
                  </h4>

                  <p className="mt-5 mb-6 pt-5 border-t border-[#031b4e1a] text-[#031b4e] max-w-md">
                    Sustainably sourced for superior purity and bioavailability
                  </p>

                  <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 1.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="px-8 py-4 rounded-full bg-[#92BC2A] hover:bg-[#031b4e] text-white"
                  >
                    CONTACT US
                  </motion.button>
                </motion.div>

                <div className="hidden lg:block" />
              </div>
            </div>
          </SwiperSlide>

          {/* ================= SLIDE 3 ================= */}
          <SwiperSlide>
            <Image src={slider1} alt="Slide 3" fill className="object-cover" />

            <div className="relative z-10 h-full flex py-20">
              <div className="max-w-7xl px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">

                <motion.div
                  key={`slide-3-${activeIndex}`}
                  initial={{ opacity: 0, x: 180, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{
                    duration: 1.6,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <h4 className="text-[#031b4e] font-normal mb-2 leading-[1.15] text-[50px]">
                    Enhancing Lives with <br />
                    <strong>The Power of Science</strong>
                  </h4>

                  <p className="mt-5 mb-6 pt-5 border-t border-[#031b4e1a] text-[#031b4e] max-w-md">
                    Sustainably sourced for superior purity and bioavailability
                  </p>

                  <motion.button
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.9,
                      delay: 1.2,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="px-8 py-4 rounded-full bg-[#92BC2A] hover:bg-[#031b4e] text-white"
                  >
                    CONTACT US
                  </motion.button>
                </motion.div>

                <div className="hidden lg:block" />
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
        <div className="hero-pagination absolute right-9 top-2/3 -translate-y-1/2 z-20 flex flex-col gap-3" />
      </div>
    </section>
  );
}
