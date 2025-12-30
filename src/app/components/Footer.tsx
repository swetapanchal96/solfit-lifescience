"use client";

import Image from "next/image";
import Link from "next/link";
import logo from '@/app/assets/logo (1).webp'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Logo + Description */}
          <div className="lg:col-span-2">
            <Image
              src={logo}
              alt="Solfit Lifesciences"
              width={190}
              height={55}
              className="mb-7.5"
            />

            <p className="text-[16px] text-justify text-[#031B4E] leading-6.5 max-w-md mb-6">
              With a passion for advancing health and beauty, Solfit Lifesciences
              specializes in manufacturing advanced collagen & enzyme solutions.
            </p>

            <div className="flex gap-3">
              {[
                { icon: FaFacebookF, href: "https://www.facebook.com/" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/company/solfit-lifesciences/" },
                { icon: FaInstagram, href: "https://www.instagram.com/solfit_lifesciences/" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#0A2C6D] text-[#0A2C6D] hover:bg-[#0A2C6D] hover:text-white transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Green Heading */}
          <div className="lg:col-span-3">
            <h2 className="text-[28px] font-semibold text-[#92BC2A] mb-10">
              Premium Quality Collagen and Enzyme Ingredients
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Address */}
              <div>
                <h4 className="text-[#3368C6] font-sora text-[18px] mb-3">
                  Address
                </h4>
                <p className="text-[#0A2C6D] text-[15px] font-light text-justify">
                  <strong className="text-[#031B4E] font-semibold">Solfit Lifesciences</strong>
                  <br />
                  Plot No. 15,
                  <br />
                  Super Industrial Park, Dhanwada,
                  <br />
                  Bavla, Ahmedabad – 382220,
                  <br />
                  Gujarat, INDIA
                </p>
              </div>

              {/* Phone */}
              <div>
                <h4 className="text-[#3368C6] font-normal text-[18px] mb-3">
                  Phone No.
                </h4>
                <p className="text-[#6e778c] hover:text-[#3368c6] text-[16px]">
                  +91 99797 97828
                </p>
              </div>

              {/* Email */}
              <div>
                <h4 className="text-[#3368C6] font-normal text-[18px] mb-3">
                  Email
                </h4>
                <p className="text-[#6e778c] hover:text-[#3368c6] text-[16px]">
                  info@solfitlifesciences.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-7.5 flex flex-col md:flex-row justify-between text-[14px] text-gray-500">
          <span>Copyright © 2025 Solfit Lifesciences</span>
          <span className="text-[#031B4E]">
            Design & Developed By :{" "}
            <a href="https://www.purplephase.in/" target="_blank" className="text-[#6E778C] hover:text-[#3368c6]">
              Purple Phase Communications
            </a>
          </span>
        </div>
      </div>

      {/* Scroll To Top Button */}
      {/* <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#9BC53D] border-4 border-[#1F4ED8] flex items-center justify-center shadow-lg hover:scale-105 transition"
        aria-label="Scroll to top"
      >
        <ArrowUp className="text-[#1F4ED8]" size={24} />
      </button> */}
    </footer>
  );
}
