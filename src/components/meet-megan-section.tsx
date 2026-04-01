import Image from "next/image";

export default function MeetMeganSection() {
  return (
    <section className="w-full py-16 md:py-24 px-4 md:px-6 lg:px-10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl mb-8 text-center">Meet Megan</h2>
        <div className="grid md:grid-cols-6 gap-8 md:gap-6">
          <div className="md:col-span-2 flex items-center justify-center">
            <Image 
              src="/images/megan-headshot.webp" 
              alt="Megan headshot" 
              width={500} 
              height={500} 
              className="object-cover w-full rounded-lg shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center md:col-start-4 md:col-span-3">
            <p className="mb-4 text-base leading-relaxed">Hi, I&apos;m Megan. I&apos;m a counsellor with over 17 years of experience supporting people through grief, trauma, identity shifts, and major life transitions. I&apos;ve worked as a coroner, a victim support worker, and now as a therapist offering grounded, collaborative care.</p>
            <p className="mb-4 text-base leading-relaxed">My approach is warm, inclusive, and shaped by real-world experience. I work with individuals, families, and people in relationships of all kinds. Together, we&apos;ll move at your pace and focus on what matters most to you.</p>
            <p className="text-base leading-relaxed">I identify as queer and genderqueer, and I&apos;m committed to creating a space where all identities are welcome.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
