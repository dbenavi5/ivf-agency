import { AboutUs } from "@/sections/about-us";
import { Header } from "@/sections/header";
import { ContactUs } from "@/sections/contact-us";
import { Hero } from "@/sections/hero";
import { Pricing } from "@/sections/pricing";
import { Services } from "@/sections/services";
import { QuoteBlock } from "@/components/quote-block";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuoteBlock/>
        <AboutUs />
        <Services />
        <Pricing />
        <ContactUs />
      </main>
    </>
  );
}
