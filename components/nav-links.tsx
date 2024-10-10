"use client";

import { useState, useEffect } from "react";
import { useMedia } from "react-use";
import Link from "next/link";
import { PiFlowerLotusLight } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const sections = [
  { id: "#about-us", label: "About Us" },
  { id: "#services", label: "Services" },
  { id: "#pricing", label: "Pricing" },
  { id: "#contact-us", label: "Contact Us" },
];

type Props = {
  className?: string;
  mobileIconClassName?: string;
};

export const NavLinks = ({ className, mobileIconClassName }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMedia("(max-width: 1024px)", false);

  // Function to scroll smoothly to a section using getElementById
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.replace("#", ""));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close the mobile nav sheet after clicking a link with a delay for scroll
  const handleNavClick = (sectionId: string) => {
    closeNav(); // Close the sheet first
    setTimeout(() => scrollToSection(sectionId), 100); // Add a small delay to ensure the scroll occurs after the sheet closes
  };

  // Close the sheet
  const closeNav = () => {
    setIsOpen(false);
  };

  // Handle hash changes on page load or if the URL is updated manually
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      scrollToSection(hash);
    }
  }, []);

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 
            focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
            asChild
          >
            <PiFlowerLotusLight
              className={cn("size-12", mobileIconClassName)}
            />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <SheetTitle className="hidden">title</SheetTitle>
          <SheetDescription className="hidden">Description</SheetDescription>
          <nav className="flex flex-col space-y-4 pt-6 ">
            <Link
              href={"#about-us"}
              className="text-black font-semibold"
              onClick={closeNav}
            >
              About Us
            </Link>
            <Link
              href={"#services"}
              className="text-black font-semibold"
              onClick={closeNav}
            >
              Services
            </Link>
            <Link
              href={"#pricing"}
              className="text-black font-semibold"
              onClick={closeNav}
            >
              Pricing
            </Link>
            <Link
              href={"#contact-us"}
              className="text-black font-semibold"
              onClick={closeNav}
            >
              Contact Us
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center justify-between gap-6">
      {sections.map((section) => (
        <a
          key={section.label}
          href={`#${section.id}`}
          className={className}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(`${section.id}`);
          }}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
};
