"use client";

import { useState } from "react";
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
  {
    name: "about-us",
    label: "About Us",
  },
  {
    name: "services",
    label: "Services",
  },
  {
    name: "pricing",
    label: "Pricing",
  },
  {
    name: "contact-us",
    label: "Contact Us",
  },
];

type Props = {
  className?: string;
  mobileIconClassName?: string;
};
export const NavLinks = ({ className, mobileIconClassName }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMedia("(max-width: 1024px)", false);

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      // Remove the URL fragment after scrolling
      history.replaceState(null, "", window.location.pathname);
    }
  };

  // Function to close the mobile nav sheet when a link is clicked
  const closeNav = () => {
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTitle className="hidden">title</SheetTitle>
        <SheetDescription className="hidden">Description</SheetDescription>
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
          <nav className="flex flex-col gap-y-2 pt-6 ">
            {sections.map((section) => (
              <Button
                key={section.name}
                variant="secondary"
                className="text-black font-semibold"
              >
                <a
                  href={`#${section.name}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(`#${section.name}`);
                    closeNav(); // Close the nav after scroll on mobile
                  }}
                >
                  {section.label}
                </a>
              </Button>
            ))}
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
          href={`#${section.name}`}
          className={className}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(`#${section.name}`);
          }}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
};
