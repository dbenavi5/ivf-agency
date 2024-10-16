import { Header } from "@/sections/header";
import { ContactUs } from "@/sections/contact-us";
import { Hero } from "@/sections/hero";
import { Pricing } from "@/sections/pricing";
import { Services } from "@/sections/services";
import { QuoteBlock } from "@/components/quote-block";
import { PrepSection } from "@/sections/prep-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuoteBlock />
        <Services />
        <PrepSection />
        <Pricing />
        <ContactUs />
      </main>
    </>
  );
}
