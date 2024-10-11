"use client";

import Link from "next/link";
import { NavLinks } from "@/components/nav-links";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
        `fixed w-full h-20 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#fcd0d8] text-black shadow-md"
            : "bg-transparent text-white z-10"
        }`
      )}
    >
      <div className="max-w-screen-2xl mx-auto py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="cursor-pointer" prefetch={false}>
              <h2 className="text-2xl font-semibold">
                Inject{" "}
                <span
                  className={cn(
                    isScrolled ? "text-[#d5415a]" : "text-[#ffcad4]"
                  )}
                >
                  IVF
                </span>
              </h2>
              <div
                className={cn(
                  "text-xs font-medium",
                  !isScrolled ? "text-zinc-300" : "text-zinc-500"
                )}
              >
                Concierge Services
              </div>
            </Link>
            <div>
              <NavLinks
                className={cn(
                  "hover:border-b-2 pb-2",
                  isScrolled
                    ? "text-black border-[#d5415a]"
                    : "text-white border-[#ffcad4]"
                )}
                mobileIconClassName={
                  isScrolled ? "fill-[#d5415a]" : "fill-[#ffffff]"
                }
                desktopClassName={cn(
                  "hover:border-b-2 pb-2",
                  isScrolled
                    ? "text-black border-[#d5415a]"
                    : "text-white border-[#ffcad4]"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
