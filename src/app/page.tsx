import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-900 font-sans">
          <div className="mx-auto px-4 py-4 flex flex-col md:ml-auto bg-[url(/images/hero-trees-cropped_1.png)] bg-cover bg-size-75 min-h-150 pointer-events-none">
          <div className="relative flex flex-row">
          <Header />
          </div>
          <div className="relative inset-0 flex flex-col justify-end text-white px-4 sm:px-6 lg:px-8 pointer-events-none font-serif bottom-4 text-left mt-auto">
            <h1 className="text-4xl font-bold mb-2">Megan Yerxa - Tender Counselling</h1>
            <p className="text-xl">Steady support across shifting waters</p>
          </div>
          </div>

        <section className="max-w-5xl mx-auto mt-12">
          <h2 className="text-6xl mb-4 font-serif">Meet Megan</h2>
          <div className="grid md:grid-cols-6">
            <div className="md:col-span-2 flex items-center justify-center">
          <Image src="/images/megan-headshot.webp" alt="Megan headshot" width={500} height={500} className="object-cover w-full" />
          </div>
          <div className="flex flex-col justify-center font-serif md:col-start-4 md:col-span-3">
            <p className="mb-4">Hi, I&apos;m Megan. I&apos;m a counsellor with over 17 years of experience supporting people through grief, trauma, identity shifts, and major life transitions. I&apos;ve worked as a coroner, a victim support worker, and now as a therapist offering grounded, collaborative care.</p>
            <p className="mb-4">My approach is warm, inclusive, and shaped by real-world experience. I work with individuals, families, and people in relationships of all kinds. Together, we&apos;ll move at your pace and focus on what matters most to you.</p>
            <p className="mb-4">I identify as queer and genderqueer, and I&apos;m committed to creating a space where all identities are welcome.</p>
          </div>
          </div>
        </section>

        <section className="mx-auto mt-12 bg-[#495a58] text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-6xl mb-4 font-serif">Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center">
                Content
              </div>
              <div className="flex items-center justify-center">
                Content
              </div>
              <div className="flex items-center justify-center">
                Content
              </div>
            </div>
          </div>
        </section>

    </div>
  );
}
