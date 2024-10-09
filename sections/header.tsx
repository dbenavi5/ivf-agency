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
            ? "bg-[#c6d03a] text-black shadow-md"
            : "bg-transparent text-white z-10"
        }`
      )}
    >
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="cursor-pointer" prefetch={false}>
              <motion.h2
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
                className="text-2xl font-semibold"
              >
                Inject{" "}
                <span
                  className={cn(
                    isScrolled ? "text-[#6260d9]" : "text-[#c6d03a]"
                  )}
                >
                  IVF
                </span>
              </motion.h2>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className={cn(
                  "text-xs font-medium",
                  !isScrolled ? "text-zinc-300" : "text-zinc-600"
                )}
              >
                Concierge Services
              </motion.div>
            </Link>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0 }}
            >
              <NavLinks
                className={cn(
                  "hover:border-b-2 pb-2",
                  isScrolled
                    ? "text-black border-[#6260d9]"
                    : "text-white border-[#c6d03a]"
                )}
                mobileIconClassName={
                  isScrolled ? "fill-[#6260d9]" : "fill-[#ffffff]"
                }
              />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};
