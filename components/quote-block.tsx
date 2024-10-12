import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { MotionDiv } from "@/components/motion-div";

export const QuoteBlock = () => {
  return (
    <div className="container mt-16 text-[#19070a] quoteFont">
      <MotionDiv
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, y: 700 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center justify-center h-full"
      >
        <blockquote className="flex text-xl lg:text-3xl font-medium  text-center">
          <FaQuoteLeft className="size-10 text-[#d77485]" />
          Let us bring comfort to your IVF journey with our at-home medication
          administration today.
          <FaQuoteRight className="size-10 text-[#d77485]" />
        </blockquote>
        <div className="text-xl lg:text-2xl font-medium text-[#d77485] mt-6">
          - Inject <span className="text-[#d5415a]">IVF</span>
        </div>
      </MotionDiv>
    </div>
  );
};
