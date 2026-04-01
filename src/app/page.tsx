import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/hero-section";
import MeetMeganSection from "@/components/meet-megan-section";
import CallToAction from "@/components/call-to-action";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900">
        <HeroSection 
          headline="Megan Yerxa - Tender Counselling"
          subheading="Steady support across shifting waters"
        />

        <MeetMeganSection />

        <section className="mx-auto mt-12 bg-[#495a58] text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-6xl mb-4 text-center">Services</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-5">
              <div className="flex flex-col items-center justify-center">
                <Link href="/services" className="text-xl mb-5 hover:text-[#eae4dc] underline-offset-2 hover:underline transition-colors duration-200">Individual Counselling</Link>
                <Image src="/images/individual_counselling.jpg" alt="Individual Counselling" width={375} height={300} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <Link href="/emdr" className="text-xl mb-5 hover:text-[#eae4dc] underline-offset-2 hover:underline transition-colors duration-200">EMDR Therapy</Link>
                <Image src="/images/house_landscape.jpg" alt="EMDR Therapy" width={345} height={280} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <Link href="/services" className="text-xl mb-5 hover:text-[#eae4dc] underline-offset-2 hover:underline transition-colors duration-200">Group Counselling</Link>
                <Image src="/images/relationship_counselling.jpg" alt="Group Counselling" width={350} height={300} />
              </div>
            </div>
          </div>
        </section>

        <CallToAction />

    </div>
  );
}
