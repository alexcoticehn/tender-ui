import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f5f0] text-gray-900 font-sans">
      <Head>
        <title>Megan Yerxa – Tender Counselling</title>
        <meta name="description" content="Steady support across shifting waters. Megan Yerxa offers trauma-informed counselling, EMDR therapy, and relationship support in Vancouver and across BC." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="space-y-20">
        <section className="relative h-[80vh] w-full">
          <Image src="/hero-trees.jpg" alt="Forest path" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl font-bold mb-2">Megan Yerxa – Tender Counselling</h1>
            <p className="text-xl">Steady support across shifting waters</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Image src="/megan-headshot.webp" alt="Megan headshot" width={500} height={500} className="rounded-2xl object-cover w-full" />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Meet Megan</h2>
            <p className="mb-4">Hi, I’m Megan. I’m a counsellor with over 17 years of experience supporting people through grief, trauma, identity shifts, and major life transitions. I’ve worked as a coroner, a victim support worker, and now as a therapist offering grounded, collaborative care.</p>
            <p className="mb-4">My approach is warm, inclusive, and shaped by real-world experience. I work with individuals, families, and people in relationships of all kinds. Together, we’ll move at your pace and focus on what matters most to you.</p>
            <p className="mb-4">I identify as queer and genderqueer, and I’m committed to creating a space where all identities are welcome.</p>
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

        <section className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Book your free 15 minute consultation</h2>
          <Link href="/contact" className="inline-block bg-[#e2725b] text-white px-6 py-3 rounded-xl hover:bg-[#c95d4d] transition">Contact Me</Link>
        </section>

        <footer className="bg-[#eae4dc] py-8 mt-12">
          <div className="text-center text-sm text-gray-600">
            <p>Tender Counselling – Megan Yerxa</p>
            <p>Located on the unceded territories of the xʷməθkʷəy̓əm (Musqueam), Sḵwx̱wú7mesh (Squamish), and səl̓ílwətaʔɬ (Tsleil-Waututh) Nations.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}