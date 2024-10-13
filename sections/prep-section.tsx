import Image from "next/image";

const PREGNANT_WOMEN =
  "https://res.cloudinary.com/dpj6rkbus/image/upload/v1727898564/woman-6785370_640_cd5mzj.jpg";

export const PrepSection = () => {
  return (
    <section id="prep" className="relative my-24 scroll-mt-24">
      <div className="container">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#d5415a] flex items-center justify-center mb-10 md:mb-16">
          Prepare for IVF
        </h2>
        <div className="text-sm lg:text-base flex flex-col-reverse md:flex-row items-center justify-center mb-16 py-0 lg:py-10 space-x-6">
          <div
            // whileInView={{ opacity: 1, x: 0 }}
            // initial={{ opacity: 0, x: -100 }}
            // transition={{ duration: 1 }}
            className="md:w-1/2 space-y-5"
          >
            <div className="space-y-5 mt-10 lg:mt-0">
              <h3 className="mb-5 font-semibold text-xl">Comfort & Readiness</h3>
              <p>
                Please have your medication calendar/instructions readily
                available in order for your nurse to accurately administer your
                dose ordered by your Primary MD.
              </p>
              <p>
                Find a place at home where you feel most comfortable for the
                nurse to prepare and administer your medications. Upon your
                nurse's arrival, for extra comfort if needed, you can apply an
                ice pack while your nurse prepares your medication. For
                intramuscular injections, sometimes applying a heating pad may
                help with discomfort after your nurse has administered the
                medication.
              </p>
            </div>
            <div>
              <h3 className="mb-5 font-semibold text-xl">Verification</h3>
              <p>
                Your nurse will verify your medication dose for the night and
                will prepare everything as needed. Your nurse will bring her own
                gloves for your protection (we do not have access to extra
                supplies such as needles, syringes, extra medication or medical
                supplies needed for the preparation and administration as those
                should be supplied by your pharmacy). Your nurse will verify
                your medication dose again prior to administering your nightly
                medications.
              </p>
            </div>
          </div>
          <div
            // whileInView={{ opacity: 1, x: 0 }}
            // initial={{ opacity: 0, x: 100 }}
            // transition={{ duration: 1 }}
            className="md:w-[400px]"
          >
            <Image
              src={PREGNANT_WOMEN}
              alt="Pregnant Women"
              width={400}
              height={300}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              quality={75}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
