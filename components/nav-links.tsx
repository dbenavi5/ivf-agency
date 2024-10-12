"use client";

import { useEffect, useState } from "react";
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
import { useRouter } from "next/navigation";

const sections = [
  {
    id: "#services",
    label: "Services",
  },
  // {
  //   id: "#prep",
  //   label: "How to Prepare",
  // },
  {
    id: "#pricing",
    label: "Pricing",
  },
  {
    id: "#contact-us",
    label: "Contact Us",
  },
];

type Props = {
  className?: string;
  mobileIconClassName?: string;
  desktopClassName?: string;
};
export const NavLinks = ({
  className,
  mobileIconClassName,
  desktopClassName,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMedia("(max-width: 1024px)", false);
  const router = useRouter();

  // Function to scroll smoothly to a section using getElementById
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.replace("#", ""));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle navigation click for mobile view and refresh the page
  const handleNavClick = (sectionId: string) => {
    closeNav(); // Close the mobile navigation sheet first
    setTimeout(() => {
      router.push(sectionId); // Navigate to the section
      router.refresh(); // Force a page refresh to update the content
    }, 100); // Delay to ensure the sheet closes before navigation
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
        <SheetContent side="left" className="px-2 mx-auto">
          <SheetTitle className="hidden">title</SheetTitle>
          <SheetDescription className="hidden">Description</SheetDescription>
          <nav className="flex flex-col gap-y-2 pt-6 ">
            {sections.map((section) => (
              <Button variant="secondary" key={section.id} className="bg-[#faf0e6]">
                <Link
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-[#d5415a] font-semibold"
                  onClick={() => handleNavClick(section.id)}
                >
                  {section.label}
                </Link>
              </Button>
            ))}
            <Button variant="secondary" className="bg-[#faf0e6]">
              <Link
                href={`/about-us`}
                className="text-[#d5415a] font-semibold"
                onClick={() => handleNavClick("/about-us")}
              >
                About Us
              </Link>
            </Button>
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center justify-between gap-6">
      {sections.map((section) => (
        <Link key={section.id} href={`${section.id}`} className={className}>
          {section.label}
        </Link>
      ))}
      <Link
        href={`/about-us`}
        className={desktopClassName}
        onClick={() => handleNavClick("/about-us")}
      >
        About Us
      </Link>
    </nav>
  );
};
