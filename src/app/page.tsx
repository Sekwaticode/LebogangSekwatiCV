import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import Projects from "@/sections/Projects";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import FormToWhatsApp from "@/sections/FormToWhatsApp"; // Adjust path based on file location

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Projects />
      <Testimonials />
      <FormToWhatsApp />
      <CallToAction />
      <Footer />
    </>
  );
}
