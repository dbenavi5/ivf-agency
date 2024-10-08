// components/FloatingIcon.tsx
'use client';
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

interface FloatingIconProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  servicesRef: React.RefObject<HTMLDivElement>;
  pricingRef: React.RefObject<HTMLDivElement>;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({
  aboutRef,
  servicesRef,
  pricingRef,
}) => {
  const [showIcon, setShowIcon] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = () => {
    // Get the distance of each section from the top of the page
    const aboutTop = aboutRef.current?.offsetTop || 0;
    const servicesTop = servicesRef.current?.offsetTop || 0;
    const pricingTop = pricingRef.current?.offsetTop || 0;

    const currentScroll = window.scrollY + window.innerHeight / 2; // Middle of the viewport

    // Check if user is in About Us, Services, or Pricing section
    if (
      (currentScroll >= aboutTop && currentScroll < servicesTop) ||
      (currentScroll >= servicesTop && currentScroll < pricingTop) ||
      currentScroll >= pricingTop
    ) {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aboutRef, servicesRef, pricingRef]);

  return (
    <>
      {showIcon && (
        <button
          className="fixed left-4 bottom-4 p-3 bg-blue-500 text-white rounded-full shadow-lg z-50 hover:bg-blue-700 transition duration-300"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default FloatingIcon;
