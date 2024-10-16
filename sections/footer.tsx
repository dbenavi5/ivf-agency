"use client";

import { Phone, Mail } from "lucide-react";
import Image from "next/image";
import { FaYelp, FaInstagram } from "react-icons/fa6";
import { useToast } from "@/hooks/use-toast";

const LOGO_URL =
  "https://res.cloudinary.com/dpj6rkbus/image/upload/v1729052364/concierge_services2_wncgup.png";

export const Footer = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      variant: "success",
      title: "Copied to clipboard",
    });
  };

  return (
    <footer className="bg-secondMainColor mt-24 border-t border-muted-foreground/10">
      <div className="container text-center justify-center px-4 py-8 mx-auto sm:px-6 lg:px-8 ">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="space-y-4 mb-8 lg:mb-0">
            <p className="font-medium text-lg">Contact Us</p>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => copyToClipboard("415.236.0074")}
                className="flex items-center justify-center hover:text-primary"
              >
                <Phone className="size-5 mr-2 text-mainColor fill-current" />
                415.236.0074
              </button>
              <button
                onClick={() => copyToClipboard("info@injectivf.com")}
                className="flex items-center hover:text-primary"
              >
                <Mail className="size-5 mr-2 text-mainColor fill-current stroke-secondMainColor" />
                info@injectivf.com
              </button>
            </div>
          </div>
          <a href="/">
            <div className="mb-8 lg:mb-0 cursor-pointer flex items-center justify-center h-[150px] w-[250px]">
              <Image
                src={LOGO_URL}
                alt="logo"
                width={20}
                height={20}
                style={{ width: "auto", height: "auto" }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                quality={75}
              />
            </div>
          </a>
          <div className="space-y-4">
            <p className="font-medium text-lg">Follow Us</p>
            <div className="flex items-center justify-center space-x-4">
              <a
                href="https://www.yelp.com/biz/injectivf-san-francisco"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-400 text-mainColor transition duration-300"
              >
                <span className="sr-only">Yelp</span>
                <FaYelp className="size-6" />
              </a>
              <a
                href="https://www.instagram.com/injectivf/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-400 text-mainColor transition duration-300"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="size-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-muted-foreground/10">
          <p className="text-xs text-center text-zinc-800">
            &copy; {new Date().getFullYear()} InjectIVF, Concierge Services. All
            rights reserved.
          </p>
          <a
            href="/terms-and-privacy"
            className="text-xs underline text-mainColor"
          >
            Terms of Use & Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};
