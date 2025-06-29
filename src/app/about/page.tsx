import Header from "@/components/header";
import Image from "next/image";

export default function About() {
  return (
      <div className="min-h-screen text-gray-900 font-serif">
          <div className="mx-auto px-4 py-4 flex flex-col md:ml-auto bg-[url(/images/hero-trees-cropped_1.png)] bg-cover bg-size-75 min-h-150 pointer-events-none">
          <div className="relative flex flex-row">
          <Header />
          </div>
          <div className="relative inset-0 flex flex-col justify-end text-white px-4 sm:px-6 lg:px-8 pointer-events-none font-serif bottom-4 text-left mt-auto">
            <h1 className="text-4xl font-bold mb-2">About</h1>
          </div>
          </div>
          <section className="mx-auto px-4 grid md:grid-cols-7 gap-2">
            <div className="md:col-span-4">
              <p>A Grounded, Compassionate Approach 
                Starting therapy is an act of courage. Whether you&apos;re seeking support for the first time or returning after a break, 
                you deserve a space that feels safe, steady, and free of pressure. My approach is warm, collaborative, and rooted in deep respect for your experiences. 
                I offer counselling that meets you where you are, moves at your pace, and centres your voice every step of the way.
                I work with adults, youth, families, and people in all kinds of relationships. 
                My practice supports clients navigating trauma, anxiety, identity exploration, grief, life transitions, burnout, relationship challenges, and more. 
                I draw on a variety of approaches including EMDR, AEDP, parts work, and narrative therapy to help process emotional pain, strengthen connection to self and others, and foster inner resilience.
                Therapy with me is not about fixing you. It&apos;s about honouring the ways you&apos;ve already survived, building new resources, and exploring possibilities for healing, clarity, and change.</p>
            </div>
            <div className="md:col-span-3">
              <Image src="/images/logo.png" alt="Tender Counselling Logo" width={200} height={200} />
            </div>
            <div className="md:col-span-4">
              <Image src="/images/logo.png" alt="Tender Counselling Logo" width={200} height={200} />
            </div>
            <div className="md:col-span-3">
              <p>A modern Real World Experience, Deep Understanding
                While I&apos;m newly in private practice, I am not new to client work. I bring over 17 years of frontline experience walking alongside people through some of life&apos;s most difficult moments.
                I&apos;ve worked as a coroner, a crisis response worker, and a victim support specialist in police and community-based settings. 
                Most recently, I worked in a specialized provincial unit that helps high-risk survivors of violence relocate and rebuild safely.
                These roles taught me what it means to sit with grief, fear, strength, and resilience and to do so with calm, care, and consistency. 
                They also shaped my belief that healing is never one size fits all. Each person comes with their own story, culture, and wisdom, and I do my best to honour that.
                As a queer person, I care deeply about creating a space where all identities, relationship structures, and lived experiences are seen and respected. 
                My practice is actively inclusive, anti-oppressive, and grounded in ongoing reflection and accountability.</p>
            </div>
          </section>
          <section className="mx-auto bg-[#495a58] flex flex-col gap-4">
            <h2 className="text-4xl mx-auto justify-center text-[#d4967d] flex flex-row pt-15">
              My Credentials
            </h2>
            <p className="flex flex-row justify-start text-[#d4967d] ml-20 pt-20 text-lg">Education</p>
            <p className="flex flex-row justify-start text-white ml-20">Master of Counselling, City University of Canada -with Honours</p>
            <p className="flex flex-row justify-start text-white ml-20">Bachelor of Arts, Simon Fraser University (International Studies with a focus on International Development and Sustainability)</p>
            <p className="flex flex-row justify-start text-white ml-20">Certificate in Sustainable Community Development</p>
            <p className="flex flex-row justify-start text-[#d4967d] ml-20 pt-20 text-lg">Clinical Training Highlights</p>
            <p className="flex flex-row justify-start text-white ml-20">EMDR Basic Training (EMDRIA)</p>
            <p className="flex flex-row justify-start text-white ml-20">Accelerated Experiential Dynamic Psychotherapy (AEDP) Immersion and Essentials</p>
            <p className="flex flex-row justify-start text-white ml-20">Internal Family Systems (IFS) informed approaches for complex trauma</p>
            <p className="flex flex-row justify-start text-white ml-20">Flash Technique for trauma processing</p>
            <p className="flex flex-row justify-start text-white ml-20">Integrative Trauma and Attachment Treatment (ITATM)</p>
            <p className="flex flex-row justify-start text-white ml-20">Narrative Therapy (trauma and violence informed, Levels I-III)</p>
            <p className="flex flex-row justify-start text-white ml-20">Polyvagal Theory and nervous system regulation (Deb Dana)</p>
            <p className="flex flex-row justify-start text-white ml-20">Dialectical Behavioural Therapy (DBT) Skills</p>
            <p className="flex flex-row justify-start text-white ml-20">Response-Based Practice and narrative informed approaches (Allan Wade)</p>
            <p className="flex flex-row justify-start text-white ml-20 pb-15">Additional training in Emotion Freedom Tapping, inner child work, cultural safety, and non-violent communication</p>
          </section>

      </div>
  );
}
