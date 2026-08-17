import CTABanner from "./components/CTABanner";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
