'use client';

import Link from "next/link";
import { NavLinks } from "@/components/nav-links";
import { useEffect, useState } from "react";

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
      className={`fixed w-full h-20 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#9d8189] text-white shadow-md fixed" : "bg-transparent text-white z-10"
        }`}
        style={{
          backgroundColor: isScrolled ? '#9d8189' : 'transparent',
        }}
    >
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Link href="/" className="cursor-pointer" prefetch={false}>
              <h2 className="text-2xl font-semibold">
                Inject <span className="text-[#ffcad4]">IVF</span>
              </h2>
              <div className="text-xs text-[#d8e2dc]">Concierge Services</div>
            </Link>
            <NavLinks />
          </div>
        </div>
      </div>
    </header>
  );
};
