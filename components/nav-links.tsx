import { useEffect, useState } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();

  // Scroll to section logic with URL fragment handling
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", " "); // Clean the URL
    }
  };

  // Close the sheet when a link is clicked
  const closeNav = () => {
    setIsOpen(false);
  };

  // Handle scrolling based on URL hash changes
  useEffect(() => {
    if (router.asPath.includes("#")) {
      const sectionId = router.asPath.split("#")[1];
      scrollToSection(`#${sectionId}`);
    }
  }, [router.asPath]);

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
              <Button variant="secondary" key={section.id}>
                <Link
                  key={section.label}
                  href={`#${section.id}`}
                  className="text-black font-semibold"
                  onClick={() => {
                    scrollToSection(`#${section.id}`);
                    closeNav();
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
