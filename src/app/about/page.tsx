import Image from "next/image";

export default function About() {
  return (
      <div className="min-h-screen text-black font-serif">
        <div className="mx-auto px-4 py-4 flex flex-col md:ml-auto bg-[url(/images/about_background.png)] bg-cover bg-size-75 bg-bottom min-h-150 pointer-events-none pt-24">
          <div className="relative inset-0 flex flex-col justify-end text-white px-4 sm:px-6 lg:px-8 pointer-events-none font-serif bottom-4 text-left mt-auto">
            <h1 className="text-4xl font-bold mb-2">About</h1>
          </div>
        </div>
        <div className="grid md:grid-cols-5 pt-5 gap-5 mx-8 my-8">
          <div className="flex flex-col md:col-span-2 order-1 md:order-none self-center">
            <Image src="/images/mountain_valley.png" alt="" width={500} height={500} className="object-cover w-full" />
          </div>
          <div className="flex flex-col mx-10 md:col-span-3 order-2 md:order-none">
            <h2 className="text-2xl font-semibold mb-8 mx-auto mt-6 w-full border-b-2 border-gray-600 pb-6 text-center">A Grounded, Compassionate Approach</h2>
            <p className="mb-4 text-xl mt-6">Starting therapy is an act of courage. Whether you&apos;re seeking support for the first time or returning after a break, 
                you deserve a space that feels safe, steady, and free of pressure. My approach is warm, collaborative, and rooted in deep respect for your experiences. 
                I offer counselling that meets you where you are, moves at your pace, and centres your voice every step of the way.
                I work with adults, youth, families, and people in all kinds of relationships.</p>
            <p className="mb-4 text-xl">My practice supports clients navigating trauma, anxiety, identity exploration, grief, life transitions, burnout, relationship challenges, and more. 
                I draw on a variety of approaches including EMDR, AEDP, parts work, and narrative therapy to help process emotional pain, strengthen connection to self and others, and foster inner resilience.
                Therapy with me is not about fixing you. It&apos;s about honouring the ways you&apos;ve already survived, building new resources, and exploring possibilities for healing, clarity, and change.</p>
          </div>
          <div className="flex flex-col mx-10 md:col-span-3 order-4 md:order-none">
            <h2 className="text-2xl font-semibold mb-8 mx-auto mt-6 w-full border-b-2 border-gray-600 pb-6 text-center">A Modern Real World Experience, Deep Understanding</h2>
            <p className="mb-4 text-xl mt-6">While I&apos;m newly in private practice, I am not new to client work. I bring over 17 years of frontline experience walking alongside people through some of life&apos;s most difficult moments.
                I&apos;ve worked as a coroner, a crisis response worker, and a victim support specialist in police and community-based settings.</p>
            <p className="mb-4 text-xl">Most recently, I worked in a specialized provincial unit that helps high-risk survivors of violence relocate and rebuild safely.
                These roles taught me what it means to sit with grief, fear, strength, and resilience and to do so with calm, care, and consistency. 
                They also shaped my belief that healing is never one size fits all. Each person comes with their own story, culture, and wisdom, and I do my best to honour that.
                As a queer person, I care deeply about creating a space where all identities, relationship structures, and lived experiences are seen and respected.
                My practice is actively inclusive, anti-oppressive, and grounded in ongoing reflection and accountability.</p>
          </div>
          <div className="flex flex-col md:col-span-2 order-3 md:order-none self-center">
            <Image src="/images/grass_mountain.png" alt="" width={500} height={500} className="object-cover w-full" />
          </div>
        </div>
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
