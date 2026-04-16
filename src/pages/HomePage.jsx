import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import SafetyStats from "../components/SafetyStats";
import MobileApp from "../components/MobileApp";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ProblemSection from "../components/ProblemSection";
import SafetyTrust from "../components/SafetyTrust";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQSection from "../components/FAQSection";


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <WhyChooseUs/>
        <Features />
        <HowItWorks />
        <SafetyStats />
        <SafetyTrust />
        <MobileApp />
        <FAQSection/>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}