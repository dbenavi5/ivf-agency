import { Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaYelp, FaInstagram } from "react-icons/fa6";

const LOGO_URL =
  "https://res.cloudinary.com/dpj6rkbus/image/upload/v1728158238/ivf_logo_jlerxf.webp";
export const Footer = () => {
  return (
    <footer className="bg-muted mt-10">
      <div className="container text-center justify-center px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className="space-y-4 mb-8 lg:mb-0">
            <p className="font-medium text-lg">Contact Us</p>
            <div className="flex flex-col space-y-2">
              <Link
                href="tel:+14152360074"
                className="flex items-center justify-center hover:text-primary"
              >
                <Phone className="size-5 mr-2 text-green-600 fill-current" />
                415.236.0074
              </Link>
              <Link
                href="mailto:info@injectivf.com"
                className="flex items-center hover:text-primary"
              >
                <Mail className="size-5 mr-2 text-indigo-600 fill-current stroke-white" />
                info@injectivf.com
              </Link>
            </div>
          </div>
          <Link href='/'>
            <div className="mb-8 lg:mb-0 cursor-pointer flex items-center justify-center h-[100px] w-[200px]">
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
          </Link>
          <div className="space-y-4">
            <p className="font-medium text-lg">Follow Us</p>
            <div className="flex items-center justify-center space-x-4">
              <Link
                href="https://www.yelp.com/biz/injectivf-san-francisco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-700 hover:text-primary"
              >
                <span className="sr-only">Yelp</span>
                <FaYelp className="size-6" />
              </Link>
              <Link
                href="https://www.instagram.com/injectivf/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-700 hover:text-primary"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="size-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-8 border-t border-muted-foreground/10">
          <p className="text-xs text-center text-zinc-800">
            &copy; {new Date().getFullYear()} InjectIVF, Concierge Services. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
