"use client";

import { useState } from "react";
import { useMedia } from "react-use";
import Link from "next/link";

import { PiFlowerLotusLight } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  // SheetDescription,
  // SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const sections = [
  {
    id: "about-us",
    label: "About Us",
  },
  {
    id: "services",
    label: "Services",
  },
  {
    id: "pricing",
    label: "Pricing",
  },
  {
    id: "contact-us",
    label: "Contact Us",
  },
];

export const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMedia("(max-width: 1024px)", false);

  // Function to close the mobile nav sheet when a link is clicked
  const closeNav = () => {
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        {/* <SheetTitle className="hidden">
          title
        </SheetTitle>
        <SheetDescription className="hidden">Description</SheetDescription> */}
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 
            focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
            asChild
          >
            <PiFlowerLotusLight className="size-10" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6 ">
            {sections.map((section) => (
              <Button variant="secondary" key={section.id}>
                <Link
                  key={section.label}
                  href={`#${section.id}`}
                  className="text-black font-semibold"
                  onClick={closeNav} // Close nav on click
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
          className={"text-white hover:font-medium hover:text-[#ffcad4]"}
        >
          {section.label}
        </Link>
      ))}
    </nav>
  );
};
