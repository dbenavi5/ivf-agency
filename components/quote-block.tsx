import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";
import { MotionDiv } from "@/components/motion-div";

export const QuoteBlock = () => {
  return (
    <div className="container mt-16">
      <MotionDiv
        whileInView={{opacity: 1, x: 0}}
        initial={{ opacity: 0, y: 700 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center h-full"
      >
        <blockquote className="flex text-xl lg:text-2xl italic font-medium text-gray-600 text-center">
          <FaQuoteLeft className="size-10" />
          Let us bring comfort to your IVF journey with our at-home medication
          administration today.
          <FaQuoteRight className="size-10" />
        </blockquote>
        <div className="text-xl lg:text-xl italic font-medium text-gray-600 mt-6">
          - InjectIVF
        </div>
      </MotionDiv>
    </div>
  );
};
