import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 font-sans">
          <div className="mx-auto px-4 py-4 flex flex-row md:ml-auto bg-[url(/images/hero-trees-cropped.png)] bg-cover bg-size-100 min-h-300 pointer-events-none">
          <Header />
          <div className="absolute inset-0 flex flex-col justify-center text-white px-4 pointer-events-none font-serif bottom-4">
            <h1 className="text-4xl font-bold mb-2">Megan Yerxa - Tender Counselling</h1>
            <p className="text-xl">Steady support across shifting waters</p>
          </div>
          </div>

        <section className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image src="/images/megan-headshot.webp" alt="Megan headshot" width={500} height={500} className="rounded-2xl object-cover w-full" />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Meet Megan</h2>
            <p className="mb-4">Hi, I&apos;m Megan. I&apos;m a counsellor with over 17 years of experience supporting people through grief, trauma, identity shifts, and major life transitions. I&apos;ve worked as a coroner, a victim support worker, and now as a therapist offering grounded, collaborative care.</p>
            <p className="mb-4">My approach is warm, inclusive, and shaped by real-world experience. I work with individuals, families, and people in relationships of all kinds. Together, we&apos;ll move at your pace and focus on what matters most to you.</p>
            <p className="mb-4">I identify as queer and genderqueer, and I&apos;m committed to creating a space where all identities are welcome.</p>
            <Link href="/about" className="inline-block bg-[#e2725b] text-white px-4 py-2 rounded-xl hover:bg-[#c95d4d] transition">Learn more</Link>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 space-y-8">
          <h2 className="text-3xl font-semibold">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold">Individual Counselling</h3>
              <p>Personalized support for trauma, anxiety, grief, and life transitions.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold">Relationship Therapy</h3>
              <p>Support for couples, polycules, and all relationship structures.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold">EMDR Therapy</h3>
              <p>Sometimes talk therapy isn&apos;t enough, especially when trauma lives in the body. EMDR (Eye Movement Desensitization and Reprocessing) helps you process painful experiences using gentle techniques like eye movements or tapping. It&apos;s especially helpful if you&apos;ve felt stuck, even with insight or coping tools. We&apos;ll move at your pace, with steady support every step of the way. <Link href="/emdr-therapy" className="text-[#e2725b] underline">Learn more about EMDR therapy →</Link></p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold">Family Therapy</h3>
              <p>Navigate dynamics and deepen connection within family systems.</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <Link href="/services" className="inline-block bg-[#e2725b] text-white px-6 py-3 rounded-xl hover:bg-[#c95d4d] transition">
              View All Services
            </Link>
          </div>
        </section>
    </div>
  );
}
