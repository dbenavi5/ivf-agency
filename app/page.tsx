import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AboutUs } from "@/sections/about-us";
import { ContactUs } from "@/sections/contact-us";
import { Hero } from "@/sections/hero";
import { Pricing } from "@/sections/pricing";
import { Services } from "@/sections/services";

export default function Home() {
  return (
    <>
      <Header />
      {/* Hero */}
      <Hero />
      {/* About Us */}
      <AboutUs />
      {/* Services */}
      <Services />
      {/* Pricing */}
      <Pricing />
      {/* Contact Form */}
      <ContactUs />
      {/* Footer */}
      <Footer />
    </>
  );
}
