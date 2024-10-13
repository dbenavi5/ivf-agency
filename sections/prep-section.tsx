import Image from "next/image";

type Props = {};

const SYRING_IMAGE =
  "https://res.cloudinary.com/dpj6rkbus/image/upload/v1728799050/ivf_afpxdu_ubqg6g.png";

export const PrepSection = ({}: Props) => {
  return (
    <section id="services" className="relative my-24 scroll-mt-20">
      <h2 className="text-3xl lg:text-4xl font-bold text-[#d5415a] flex items-center justify-center mb-16">
        Prepare for IVF
      </h2>
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between px-4 my-20 space-x-5">
        {/* Text Section */}
        <div className="md:w-1/2 space-y-5 text-xl ml-20">
          <p>
            Please have your medication calendar/instructions readily available
            in order for your nurse to accurately administer your dose ordered
            by your Primary MD.
          </p>
          <p>
            Find a place at home where you feel most comfortable for the nurse
            to prepare and administer your medications. Upon your nurse's
            arrival, for extra comfort if needed, you can apply an ice pack
            while your nurse prepares your medication. For intramuscular
            injections, sometimes applying a heating pad may help with
            discomfort after your nurse has administered the medication.
          </p>
          <p>
            Your nurse will verify your medication dose for the night and will
            prepare everything as needed. Your nurse will bring her own gloves
            for your protection (we do not have access to extra supplies such as
            needles, syringes, extra medication or medical supplies needed for
            the preparation and administration as those should be supplied by
            your pharmacy). Your nurse will verify your medication dose again
            prior to administering your nightly medications.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <Image
            src={SYRING_IMAGE}
            alt="syringe image"
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};
