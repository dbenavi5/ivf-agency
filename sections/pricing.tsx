import React from "react";
import { FaSyringe, FaUserMd } from "react-icons/fa"; // Import icons
import { MdOutlineAddLocation } from "react-icons/md";
import { LiaSuperpowers } from "react-icons/lia";
import { Metrics } from "@/components/metrics";

export const Pricing = () => {
  return (
    <section id="pricing" className="relative mb-24 scroll-mt-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#d5415a] flex items-center justify-center mb-6 lg:mb-12">
        Pricing
      </h2>
      <div className="container mx-auto">
        {/* Background with gradient */}
        <div className="relative w-full max-w-4xl p-8 rounded-[30px] bg-[#d9b99b]/10 overflow-hidden">
          <h3 className="flex items-center justify-center  mb-6 font-semibold text-xl">
            Choose an Option:
          </h3>
          {/* Content section */}
          <div className="relative z-10 grid gap-8 grid-cols-1 lg:grid-cols-2 text-center">
            {/* Pricing Card 1 */}
            <div className="bg-white bg-opacity-10 text-center p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-opacity-20">
              <div className="flex items-center justify-center">
                <FaSyringe className="text-4xl text-[#d5415a] mb-4" />
              </div>

              <h3 className="text-lg font-bold">
                Standard Daily Injections, Per Visit
              </h3>
              <p className="text-xl font-semibold mt-2">$150</p>
            </div>

            {/* Pricing Card 2 */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-opacity-20">
              <div className="flex items-center justify-center">
                <LiaSuperpowers className="text-4xl text-[#d5415a] mb-4" />
              </div>
              <h3 className="text-lg font-bold">Trigger Shot Only</h3>
              <p className="text-xl font-semibold mt-2">$225</p>
            </div>

            {/* Pricing Card 3 */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-opacity-20">
              <div className="flex items-center justify-center">
                <FaUserMd className="text-4xl text-[#d5415a] mb-4" />
              </div>
              <h3 className="text-lg font-bold">Coaching Session</h3>
              <p className="text-xl font-semibold mt-2">$175</p>
            </div>

            {/* Pricing Card 4 */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-opacity-20">
              <div className="flex items-center justify-center">
                <MdOutlineAddLocation className="text-4xl text-[#d5415a] mb-4" />
              </div>
              <h3 className="text-lg font-bold">
                Daily Injections, 2 Visits a Day
              </h3>
              <p className="text-xl font-semibold mt-2">$280</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-8">
        <Metrics />
      </div>
    </section>
  );
};
