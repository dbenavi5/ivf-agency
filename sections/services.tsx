import Image from "next/image";

const URL_SERVICES =
  "https://res.cloudinary.com/dpj6rkbus/image/upload/v1727816812/mother-6986351_1280_xdcgzw.jpg";

export const Services = () => {
  return (
    <section id="services" className="relative mt-24 scroll-mt-20">
      <article className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#6260d9] flex items-center justify-center mb-16">
          Our Services
        </h2>
        <p className="mb-10 text-sm lg:text-xl">
          At InjectIVF, we provide personalized care to support you throughout
          your fertility journey. Whether you need professional injection
          administration, hands-on coaching to guide self-administration, or
          holistic wellness monitoring, our experienced nurses are here to help
          every step of the way.
        </p>
        <div className="relative flex flex-col md:flex-row justify-around pb-28 pt-10 mb-20 gap-y-8 md:gap-x-8">
          {/* First Div */}
          <div className="relative w-full h-[350px] md:w-[400px] md:h-[550px] bg-transparent rounded-md md:rounded-full overflow-hidden group transition-all duration-500 ease-in-out">
            <Image
              src={URL_SERVICES}
              alt="Services Image"
              fill
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-left transition-transform duration-500 group-hover:scale-105"
            />
            <div className="px-6 absolute inset-0 flex flex-col items-center justify-center bg-black/20 backdrop-blur-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
              <h2 className="text-xl mb-4 font-bold tracking-tighter text-[#c6d03a]">
                Injection Support
              </h2>
              <p className="text-white text-md tracking-tighter flex text-center">
                Our certified nurses will safely administer your fertility
                medication throughout your entire cycle, following your
                clinic&apos;s specific instructions. We ensure that each dose is
                prepared and delivered with precision, offering peace of mind so
                you can focus on your journey. If you have any questions or
                concerns, your nurse will be available to guide you every step
                of the way.
              </p>
            </div>
          </div>

          {/* Second Div */}
          <div className="relative w-full h-[350px] md:w-[400px] md:h-[550px] bg-transparent rounded-md md:rounded-full overflow-hidden group transition-all duration-500 ease-in-out">
            <Image
              src={URL_SERVICES}
              alt="Services Image"
              fill
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="px-6 absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
              <h2 className="text-xl mb-4 font-bold tracking-tighter text-[#c6d03a]">
                Coaching
              </h2>
              <p className="text-white text-md tracking-tighter flex text-center">
                Designed for those who prefer to self-administer injections but
                want professional support. During personalized coaching
                sessions, your nurse will walk you through each step of
                preparing and injecting your stimulation medications.
                You&apos;ll gain the confidence to manage the process on your
                own while having access to expert advice. We recommend 2-3
                sessions for patients to feel fully comfortable with
                self-administration.
              </p>
            </div>
          </div>

          {/* Third Div */}
          <div className="relative w-full h-[350px] md:w-[400px] md:h-[550px] bg-transparent rounded-md md:rounded-full overflow-hidden group transition-all duration-500 ease-in-out">
            <Image
              src={URL_SERVICES}
              alt="Services Image"
              fill
              sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-right transition-transform duration-500 group-hover:scale-105"
            />
            <div className="px-6 absolute inset-0 flex flex-col items-center justify-center bg-black/30 backdrop-blur-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
              <h2 className="text-xl mb-4 font-bold tracking-tighter text-[#c6d03a]">
                Monitoring & Wellness
              </h2>
              <p className="text-white text-md tracking-tighter flex text-center">
                Beyond injections, we provide ongoing wellness support to help
                you stay on track with your fertility journey. Your dedicated
                nurse can assist with medication schedule reminders, offer
                emotional support, and answer any questions about the process.
                This holistic approach ensures that both your physical and
                emotional well-being are cared for during your IVF experience.
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
