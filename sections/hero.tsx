import DynamicImages from "@/components/dynamicImages";
import { MotionDiv } from "@/components/motion-div";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";

const URL =
  "https://res.cloudinary.com/dpj6rkbus/image/upload/v1727816812/pregnant-6178270_1280_fctoiu.jpg";
export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden min-h-[600px] h-[90vh] lg:h-[80vh] -mt-[100px]"
    >
      <DynamicImages
        url={URL}
        alt="Hero Image"
        containerClass="absolute inset-0 -z-10 w-full h-full"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0 " />
      {/* Fading Bottom Effect with White */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
      <div className="container">
        <div className="relative z-10 text-center justify-center">
          <MotionDiv
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter bg-gradient-to-b to-[#faf0e6] from-[#d9b99b] text-transparent bg-clip-text mt-60 z-10">
              Your Path to Parenthood Starts Here
            </h1>
            <p className="text-md lg:text-xl text-[#fce7ea] tracking-tight mt-6 lg:mt-10 z-10">
              Experience the comfort and care of InjectIVF, a female-owned
              business offering reliable fertility injection services right at
              home. With compassionate support, we’re here to make managing your
              fertility care as stress-free as possible.
            </p>
          </MotionDiv>
          {/* Buttons */}
          <MotionDiv
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0 }}
            className="flex justify-center gap-1 items-center mt-6 lg:mt-16"
          >
            <Button
              variant="primaryBtn"
              className="flex justify-center items-center text-sm lg:text-lg p-4 lg:p-6"
            >
              <Link
                href="#contact-us"
                className="flex items-center justify-center"
              >
                Send Inquiry
                <Send className="ml-[10px] size-5" />
              </Link>
            </Button>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};
