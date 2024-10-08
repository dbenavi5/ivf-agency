import { Metrics } from "@/components/metrics";
import Image from "next/image";

const URL_MISSION =
  "https://res.cloudinary.com/dpj6rkbus/image/upload/w_600,h_400,c_fill,q_auto,f_auto/v1727898564/pregnancy-7214373_640_otfc4m.jpg";
const URL_STORY =
  "https://res.cloudinary.com/dpj6rkbus/image/upload/w_600,h_400,c_fill,q_auto,f_auto/v1727897644/nurse-748186_1280_s76gab.jpg";

export const AboutUs = () => {
  return (
    <section id="about-us" className="mt-24 z-0 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#6260d9] flex items-center justify-center mb-16">
          Who are we?
        </h2>
        {/* Our Mission Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16 py-0 lg:py-10">
          <div className="md:w-1/2">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-sm lg:text-lg leading-relaxed">
              At InjectIVF, we treat every patient like family. That means
              reliable, compassionate care that goes beyond just administering
              injections—it&apos;s about making you feel supported, heard, and
              cared for, every step of the way. We&apos;re here to help you take
              back control of your fertility journey, with a service that&apos;s
              as comforting as it is professional.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src={URL_MISSION}
              alt="Mission Image"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={75}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Our Story Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-10">
          <div className="md:w-1/2">
            <Image
              src={URL_STORY}
              alt="Story Image"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={75}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Our Story</h3>
            <p className="text-sm lg:text-lg leading-relaxed">
              InjectIVF was founded by a close-knit group of women who deeply
              understood the stress and uncertainty of fertility treatments.
              After seeing loved ones go through IVF, we wanted to create a
              service that would bring care directly to the comfort of patients&apos;
              homes. Today, InjectIVF is all about providing compassionate,
              reliable support for every step of your fertility journey.
            </p>
          </div>
        </div>

        <Metrics/>
      </div>
    </section>
  );
};