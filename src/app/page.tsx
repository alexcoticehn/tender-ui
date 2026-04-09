import HeroSection from "@/components/hero-section";
import MeetMeganSection from "@/components/meet-megan-section";
import ServicesSection from "@/components/services-section";
import CallToAction from "@/components/call-to-action";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900">
        <HeroSection 
          headline="Megan Yerxa - EMDR Integrative Therapy"
          subheading="Steady support across shifting waters"
        />

        <MeetMeganSection />

        <ServicesSection />

        <CallToAction />

    </div>
  );
}
