"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
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

type Props = {
  className?: string;
  mobileIconClassName?: string;
};

export const NavLinks = ({ className, mobileIconClassName }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMedia("(max-width: 1024px)", false);
  const router = useRouter();

  // Function to close the mobile nav sheet and navigate to the section
  const handleLinkClick = (sectionId: string) => {
    setIsOpen(false); // Close the nav sheet
    // Using setTimeout to ensure the sheet closes before navigation occurs
    setTimeout(() => {
      router.push(`#${sectionId}`); // Navigates to the section
    }, 100);
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
          <nav className="flex flex-col gap-y-2 pt-6">
            {sections.map((section) => (
              <Button
                variant="secondary"
                key={section.id}
                onClick={() => handleLinkClick(section.id)}
              >
                <span className="text-black font-semibold">
                  {section.label}
                </span>
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
        <Link key={section.label} href={`#${section.id}`} className={className}>
          {section.label}
        </Link>
      ))}
    </nav>
  );
};
