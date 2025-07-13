import Header from "@/components/header";
import Image from "next/image";

export default function Services() {
  return (
    <div className="min-h-screen font-serif">
        <section className="mx-auto px-4 py-4 flex flex-col bg-[#495a58] bg-cover pointer-events-none">
          <Header />
          <h1 className="text-3xl mt-4 text-[#d4967d] mx-auto flex flex-row">Services</h1>
          <div className="grid md:grid-cols-3 gap-6 mt-4 content-start">
            <div className="flex flex-col bg-white mx-auto pt-5">
            <Image src="/images/individual_counselling.jpg" alt="" width={435} height={435} className="mx-auto" />
            <h2 className="text-2xl text-center text-[#d4967d]">Individual Counselling</h2>
            <p className="text-center mt-4 text-black">
            Individual counselling is a space just for you. Whether you&apos;re working through trauma, anxiety, 
            identity exploration, grief, burnout, or major life transitions, our sessions will be shaped by your goals and values. 
            Together, we&apos;ll move at a pace that feels right for you, using a mix of supportive conversation, evidence-based tools, 
            and gentle curiosity to help you reconnect with yourself and what matters most.
            </p>
            </div>
            <div className="flex flex-col bg-white mx-auto pt-5">
            <Image src="/images/house_landscape.jpg" alt="" height={400} width={400} className="mx-auto" />
            <h2 className="text-2xl text-center text-[#d4967d]">EMDR Therapy</h2>
            <p className="text-center mt-4 text-black">
            EMDR, or Eye Movement Desensitization and Reprocessing, is an evidence-based approach that helps people heal from trauma, 
            distressing experiences, and stuck emotional patterns. Unlike traditional talk therapy, EMDR doesn&apos;t require you to go into detail about what happened.
            </p>
            <p className="text-center text-black mt-4">
            Instead, it uses bilateral stimulation (such as eye movements or tapping) to support your brain in reprocessing painful memories in a way that feels safer and less overwhelming. 
            This process allows your nervous system to shift out of survival mode and into a place where you can access clarity, choice, and calm. 
            Many people find EMDR especially helpful when they feel like they understand something logically but still feel stuck emotionally or physically. 
            It can be effective for PTSD, anxiety, grief, phobias, low self-worth, and a wide range of other concerns.
            </p>
            <p className="text-center text-black mt-4">
            Before we begin EMDR, we&apos;ll take time to build trust, strengthen coping tools, and ensure you feel ready and supported. Like all parts of therapy, EMDR is always guided by your comfort and consent.
            </p>
            </div>
            <div className="flex flex-col bg-white mx-auto pt-5">
            <Image src="/images/relationship_counselling.jpg" alt="" width={400} height={400} className="mx-auto" />
            <h2 className="text-2xl text-center text-[#d4967d]">Relationship Counselling</h2>
            <p className="text-center mt-4 text-black">
            I offer counselling for people in all kinds of relationships — couples, polycules, co-parents, chosen family, and more. Relationship work can be helpful if you&apos;re facing communication challenges, 
            navigating conflict, rebuilding trust, or simply wanting to feel more connected. Our sessions will focus on understanding each other&apos;s needs, strengthening emotional safety, and building a foundation of care and collaboration.
            </p>
            </div>
          </div>
        </section>
    </div>
  );
}
