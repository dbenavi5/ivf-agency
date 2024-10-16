"use client";

import Link from "next/link";
import { NavLinks } from "@/components/nav-links";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { MotionImg } from "@/components/motion-div";

const DARK_LOGO_URL =
  "https://res.cloudinary.com/dpj6rkbus/image/upload/v1729052364/concierge_services2_wncgup.png";

const LIGHT_LOGO_URL =
  "https://res.cloudinary.com/dpj6rkbus/image/upload/v1729052106/concierge_services_b6jhzr.png";

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
            ? "bg-secondMainColor text-black shadow-md"
            : "bg-transparent text-white z-10"
        }`
      )}
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="container">
          <div className="flex items-center justify-between -ml-10">
            <Link href="/" className="cursor-pointer" prefetch={false}>
              <div className="flex items-center justify-center h-[100px] w-[200px]">
                <MotionImg
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  src={isScrolled ? `${DARK_LOGO_URL}` : `${LIGHT_LOGO_URL}`}
                  alt="logo"
                  width={20}
                  height={20}
                  style={{ width: "auto", height: "auto" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
              </div>
            </Link>
            <div>
              <NavLinks
                className={cn(
                  "hover:border-b-2 pb-2 border-mainColor",
                  isScrolled
                    ? "text-black "
                    : "text-secondMainColor"
                )}
                mobileIconClassName={
                  isScrolled ? "fill-mainColor" : "fill-secondMainColor"
                }
                desktopClassName={cn(
                  "hover:border-b-2 pb-2 border-mainColor",
                  isScrolled
                    ? "text-black "
                    : "text-white"
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
