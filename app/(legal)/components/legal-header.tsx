"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

const DARK_LOGO_URL =
  "https://res.cloudinary.com/dpj6rkbus/image/upload/v1728704052/Inject_IVF_vgaaxs.png";

export const LegalHeader = () => {
  const router = useRouter();

  return (
    <header className="w-full h-[90px] bg-[#faf0e6]">
      <div className="">
        <div className="container">
          <div className="flex items-center justify-between -ml-10">
            <Link href="/" className="cursor-pointer" prefetch={false}>
              <div className="flex items-center justify-center h-[100px] w-[200px]">
                <Image
                  src={DARK_LOGO_URL}
                  alt="logo"
                  width={20}
                  height={20}
                  style={{ width: "auto", height: "auto" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  quality={75}
                />
              </div>
            </Link>
            <div>
              <Button
                variant="outline"
                size="sm"
                onClick={(e) => {
                  e.preventDefault();
                  router.back();
                }}
                className="font-normal bg-white/10 hover:bg-white/20 border-none focus-visible:ring-offset-0 
            focus-visible:ring-transparent outline-none focus:bg-white/30 transition flex items-center justify-center"
              >
                <IoMdArrowRoundBack className="size-4 m-2" />
                <p className="hidden lg:inline-flex">Go Back</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
