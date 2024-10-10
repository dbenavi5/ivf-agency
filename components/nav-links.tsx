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
  { id: "about-us", label: "About Us" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "contact-us", label: "Contact Us" },
];

type Props = {
  className?: string;
  mobileIconClassName?: string;
};

export const NavLinks = ({ className, mobileIconClassName }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMedia("(max-width: 1024px)", false);

  // Function to scroll smoothly to a section
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close the mobile nav sheet after clicking a link
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
        <SheetContent
          side="left"
          className="px-2"
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <SheetTitle className="hidden">title</SheetTitle>
          <SheetDescription className="hidden">Description</SheetDescription>
          <nav className="flex flex-col space-y-4 pt-6 ">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="secondary"
                className="text-black font-semibold"
                onClick={() => {
                  scrollToSection(`#${section.id}`);
                  closeNav(); // Close the nav after clicking the button
                }}
              >
                {section.label}
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
          href={`#${section.id}`}
          className={className}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(`#${section.id}`);
          }}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
};
