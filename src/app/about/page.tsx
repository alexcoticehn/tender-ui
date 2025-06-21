import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] text-gray-900 font-sans">
        <section className="relative h-[80vh] w-full">
          <Image src="/hero-trees.jpg" alt="Forest path" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl font-bold mb-2">Megan Yerxa - Tender Counselling</h1>
            <p className="text-xl">Steady support across shifting waters</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image src="/megan-headshot.webp" alt="Megan headshot" width={500} height={500} className="rounded-2xl object-cover w-full" />
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
              <p>Heal distressing memories and emotional stuckness through a nervous-system-based approach.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold">Family Therapy</h3>
              <p>Navigate dynamics and deepen connection within family systems.</p>
            </div>
          </div>
        </section>
    </div>
  );
}
