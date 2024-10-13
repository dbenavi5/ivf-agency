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
import { FaYelp, FaInstagram } from "react-icons/fa6";

const sections = [
  {
    id: "#services",
    label: "Services",
  },
  {
    id: "#prep",
    label: "IVF Prep",
  },
  {
    id: "#pricing",
    label: "Pricing",
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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId.replace("#", ""));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (sectionId: string) => {
    closeNav();
    setTimeout(() => {
      router.push(sectionId);
      router.refresh();
    }, 100);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

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
        <SheetContent
          side="left"
          className="px-2 mx-auto flex flex-col justify-between h-full"
        >
          <SheetTitle className="hidden">title</SheetTitle>
          <SheetDescription className="hidden">Description</SheetDescription>
          {/* Navigation Links */}
          <nav className="flex-grow">
            <div className="flex flex-col gap-y-2 pt-6">
              {sections.map((section) => (
                <Button
                  variant="secondary"
                  key={section.id}
                  className="bg-[#faf0e6]"
                >
                  <Link
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-[#d5415a] font-semibold"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(section.id);
                    }}
                  >
                    {section.label}
                  </Link>
                </Button>
              ))}
              <Button variant="secondary" className="bg-[#faf0e6]">
                <Link
                  href={`/about-us`}
                  className="text-[#d5415a] font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("/about-us");
                  }}
                >
                  About Us
                </Link>
              </Button>
              <Button variant="formBtn">
                <Link
                  href={`#contact-us`}
                  className="text-white font-semibold"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("#contact-us");
                  }}
                >
                  Contact Us
                </Link>
              </Button>
            </div>
          </nav>
          {/* Social Icons - Fixed at Bottom */}
          <div className="flex items-center justify-center space-x-4 mt-auto pb-4">
            <a
              href="https://www.yelp.com/biz/injectivf-san-francisco"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-400 text-[#d5415a] transition duration-300"
            >
              <span className="sr-only">Yelp</span>
              <FaYelp className="size-6" />
            </a>
            <a
              href="https://www.instagram.com/injectivf/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-400 text-[#d5415a] transition duration-300"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="size-6" />
            </a>
          </div>
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
