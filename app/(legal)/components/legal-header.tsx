"use client";

import { useRouter } from "next/navigation";

export const LegalHeader = () => {
  const router = useRouter();

  return (
    <header className="w-full h-20 bg-[#c6d03a]">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <a href="/" className="cursor-pointer">
              <h2 className="text-2xl font-semibold">
                Inject <span className="text-[#6260d9]">IVF</span>
              </h2>
              <div className="text-xs font-medium text-zinc-600">
                Concierge Services
              </div>
            </a>
            <div>
              <button
                onClick={() => router.back()}
                className="hover:border-b-2 border-[#6260d9] pb-2"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
