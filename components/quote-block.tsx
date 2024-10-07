import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

export const QuoteBlock = () => {
  return (
    <div className="container mt-16">
      <div className="flex flex-col items-center justify-center h-full">
        <blockquote className="flex text-xl lg:text-2xl italic font-medium text-gray-600 text-center">
          <FaQuoteLeft className="size-10" />
          Let us bring comfort to your IVF journey with our at-home medication
          administration today.
          <FaQuoteRight className="size-10" />
        </blockquote>
        <div className="text-xl lg:text-xl italic font-medium text-gray-600 mt-6">- InjectIVF</div>
      </div>
    </div>
  );
};
