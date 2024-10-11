"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";

export const AboutHeader = () => {
  const router = useRouter();

  return (
    <header className="w-full h-20 bg-[#fcd0d8]">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <a href="/" className="cursor-pointer">
              <h2 className="text-2xl font-semibold">
                Inject <span className="text-[#d5415a]">IVF</span>
              </h2>
              <div className="text-xs font-medium text-zinc-600">
                Concierge Services
              </div>
            </a>
            <div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.back()}
                className="font-normal bg-white/10 hover:bg-white/20  border-none focus-visible:ring-offset-0 
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
