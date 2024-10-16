import { MotionH3, MotionImg, MotionP } from "@/components/motion-div";

const URL_MISSION =
  "https://res.cloudinary.com/dpj6rkbus/image/upload/w_600,h_400,c_fill,q_auto,f_auto/v1727898564/pregnancy-7214373_640_otfc4m.jpg";
const URL_STORY =
  "https://res.cloudinary.com/dpj6rkbus/image/upload/w_600,h_400,c_fill,q_auto,f_auto/v1727897644/nurse-748186_1280_s76gab.jpg";

export const AboutUs = () => {
  return (
    <div className="mt-20 z-0 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-mainColor flex items-center justify-center mb-16">
          Who are we?
        </h2>
        {/* Our Mission Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 my-16 lg:my-40">
          <div className="md:w-1/2">
            <MotionH3
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="text-2xl lg:text-3xl font-bold mb-4"
            >
              Our Mission
            </MotionH3>
            <MotionP
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="text-sm lg:text-lg leading-relaxed"
            >
              At InjectIVF, we treat every patient like family. That means
              reliable, compassionate care that goes beyond just administering
              injections—it&apos;s about making you feel supported, heard, and
              cared for, every step of the way. We&apos;re here to help you take
              back control of your fertility journey, with a service that&apos;s
              as comforting as it is professional.
            </MotionP>
          </div>
          <div className="md:w-1/2">
            <MotionImg
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              src={URL_MISSION}
              alt="Mission Image"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Our Story Section */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 my-16 lg:my-40">
          <div className="md:w-1/2">
            <MotionImg
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              src={URL_STORY}
              alt="Story Image"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <MotionH3
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 2, delay: 2 }}
              className="text-2xl lg:text-3xl font-bold mb-4"
            >
              Our Story
            </MotionH3>
            <MotionP
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 2, delay: 2 }}
              className="text-sm lg:text-lg leading-relaxed"
            >
              InjectIVF was founded by a close-knit group of women who deeply
              understood the stress and uncertainty of fertility treatments.
              After seeing loved ones go through IVF, we wanted to create a
              service that would bring care directly to the comfort of
              patients&apos; homes. Today, InjectIVF is all about providing
              compassionate, reliable support for every step of your fertility
              journey.
            </MotionP>
          </div>
        </div>
      </div>
    </div>
  );
};
