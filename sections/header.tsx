"use client";

import Link from "next/link";
import { NavLinks } from "@/components/nav-links";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

const DARK_LOGO_URL =
  "https://res.cloudinary.com/dpj6rkbus/image/upload/v1728704052/Inject_IVF_vgaaxs.png";

const LIGHT_LOGO_URL =
  "https://res.cloudinary.com/dpj6rkbus/image/upload/v1728704826/Inject_IVF_3_asfkey.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Trigger scroll effect after 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={cn(
        `fixed w-full h-[90px] top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#faf0e6] text-black shadow-md"
            : "bg-transparent text-white z-10"
        }`
      )}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="cursor-pointer" prefetch={false}>
              <div className="flex items-center justify-center h-[100px] w-[200px]">
                <Image
                  src={isScrolled ? `${DARK_LOGO_URL}` : `${LIGHT_LOGO_URL}`}
                  alt="logo"
                  width={20}
                  height={20}
                  style={{ width: "auto", height: "auto" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  quality={75}
                />
              </div>
            </Link>
            <div>
              <NavLinks
                className={cn(
                  "hover:border-b-2 pb-2",
                  isScrolled
                    ? "text-black border-[#d5415a]"
                    : "text-white border-[#feb3e4]"
                )}
                mobileIconClassName={
                  isScrolled ? "fill-[#d5415a]" : "fill-[#feb3e4]"
                }
                desktopClassName={cn(
                  "hover:border-b-2 pb-2",
                  isScrolled
                    ? "text-black border-[#d5415a]"
                    : "text-white border-[#feb3e4]"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
