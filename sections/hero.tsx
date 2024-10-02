import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <section
      className="relative overflow-hidden h-[550px] lg:h-[500px] -mt-[100px]"
    >
      <Image
        src="https://res.cloudinary.com/dpj6rkbus/image/upload/v1727816812/pregnant-6178270_1280_fctoiu.jpg" // Path to your image
        alt="Hero Image"
        layout="fill" // This makes the image fill the parent element
        objectFit="cover" // This ensures the image covers the section
        className="absolute inset-0 -z-10" // Position it behind other content
        quality={100} // Adjust based on your preference
        priority // Load this image first
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#001011]/70 z-0 " />
      <div className="container">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter bg-gradient-to-b from-white to-[#f4acb7] text-transparent bg-clip-text mt-32 z-10">
            Your Path to Parenthood Starts Here
          </h1>
          <p className="text-md lg:text-xl text-[#fce7ea] tracking-tight mt-6 z-10">
            At Inject IVF, we provide compassionate, personalized support
            throughout your IVF journey. From expert guidance to seamless
            coordination with top fertility clinics, we&apos;re here to help you
            every step of the way toward growing your family.
          </p>
          {/* Buttons */}
          <div className="flex justify-center gap-1 items-center mt-[30px]">
            <Button variant="primaryBtn">
              Send Inquiry
              <Send className="ml-2 size-4" />
            </Button>
          </div>
        </div>
        <div>{/* image */}</div>
      </div>
    </section>
  );
};
