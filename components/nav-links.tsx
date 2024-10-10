/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import { useMedia } from "react-use";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  // Function to scroll smoothly to a section and remove the hash fragment
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // Use router.replace to remove the hash after the scroll
      setTimeout(() => {
        router.replace(""); // Removes the fragment from the URL
      }, 300);
    }
  };

  // Close the mobile navigation after a link is clicked
  const closeNav = () => {
    setIsOpen(false);
  };

  // Handle automatic scrolling when a URL hash is present
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      scrollToSection(hash);
    }
  }, []);

  // Reapply scroll functionality when the Sheet is opened or URL is changed
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        scrollToSection(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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
          <nav className="flex flex-col gap-y-2 pt-6">
            {sections.map((section) => (
              <Button variant="secondary" key={section.id}>
                <Link
                  key={section.label}
                  href={`#${section.id}`}
                  className="text-black font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(`#${section.id}`);
                    closeNav(); // Close after clicking
                  }}
                >
                  {section.label}
                </Link>
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
        <Link
          key={section.label}
          href={`#${section.id}`}
          className={className}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(`#${section.id}`);
          }}
        >
          {section.label}
        </Link>
      ))}
    </nav>
  );
};
