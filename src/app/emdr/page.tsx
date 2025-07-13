import Header from "@/components/header";
import Image from "next/image";

export default function EMDRTherapy() {
  return (
    <div className="min-h-screen text-black font-serif">
      <div className="mx-auto px-4 py-4 flex flex-col md:ml-auto bg-[url(/images/emdr_background.jpg)] bg-cover bg-center bg-size-75 min-h-150 pointer-events-none">
          <div className="relative flex flex-row">
          <Header />
          </div>
          <div className="relative inset-0 flex flex-col justify-end text-white px-4 sm:px-6 lg:px-8 pointer-events-none font-serif bottom-4 text-left mt-auto">
            <h1 className="text-4xl font-bold mb-2">EMDR Therapy</h1>
            <p className="text-xl">Healing the past - safely and at your pace</p>
          </div>
      </div>
        <div className="mx-10 pt-20 text-2xl">
          <p className="mb-4">EMDR (Eye Movement Desensitization and Reprocessing) is a research-supported therapy that helps people process distressing experiences and reconnect with a sense of calm and safety in the present. It is widely recognized by the World Health Organization and American Psychiatric Association as an effective treatment for trauma, anxiety, and other emotional difficulties.</p>
          <p className="mb-4">Unlike traditional talk therapy, EMDR works directly with the nervous system. If you&apos;ve ever felt stuck, logically knowing something is over but still feeling it in your body, EMDR may help bridge that gap.</p>
        </div>

        <div className="grid md:grid-cols-2 pt-5 gap-3 mx-4">
          <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">How EMDR Works</h2>
          <p className="mb-4 text-xl">When we experience trauma, the brain&apos;s ability to process information can become overwhelmed. Instead of fully integrating what happened, the experience may get stuck, showing up later as anxiety, emotional reactivity, or shutdown.</p>
          <p className="mb-4 text-xl">EMDR uses bilateral stimulation, like tapping or eye movements, to support the brain&apos;s natural healing process. This is similar to what happens during REM sleep. Over time, EMDR helps reduce the emotional charge of difficult memories, so they feel more like something that happened and less like something that is still happening.</p>
          </div>
          <div className="flex flex-col">
            <Image src="/images/emdr_process.jpeg" alt="" width={500} height={500} className="object-cover w-full" />
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-4">What to Expect</h2>
          <p className="mb-4">EMDR is more than just eye movements. It is a carefully structured process designed to support safety, readiness, and trust. We&apos;ll move through eight flexible phases, always guided by your comfort and goals.</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Phase 1: History and Mapping -</strong> Explore your history, themes, and patterns to create a roadmap for our work.</li>
            <li><strong>Phase 2: Preparation and Safety -</strong> Build grounding skills, practice bilateral stimulation, and strengthen internal resources.</li>
            <li><strong>Phase 3: Assessment -</strong> Identify a target memory and its associated thoughts, emotions, and body sensations.</li>
            <li><strong>Phase 4: Desensitization -</strong> Begin processing using bilateral stimulation in a structured and contained way.</li>
            <li><strong>Phase 5: Installation -</strong> Strengthen adaptive beliefs, such as moving from &quot;I&apos;m not safe&quot; to &quot;I can protect myself.&quot;</li>
            <li><strong>Phase 6: Body Scan -</strong> Release lingering tension and integrate healing physically and emotionally.</li>
            <li><strong>Phase 7: Closure -</strong> End with grounding, reflection, and stabilization.</li>
            <li><strong>Phase 8: Re-Evaluation -</strong> Revisit the target memory in future sessions to assess changes and readiness.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Is EMDR Right for You?</h2>
          <p className="mb-4">EMDR can support a wide range of concerns including:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>PTSD and complex trauma</li>
            <li>Anxiety and panic</li>
            <li>Grief and loss</li>
            <li>Chronic stress or burnout</li>
            <li>Low self-worth or shame</li>
            <li>Distressing memories or flashbacks</li>
          </ul>
          <p className="mt-4">You don&apos;t need to have a “big T” trauma to benefit. EMDR is about helping you feel more at ease in your own mind and body.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Your Role in EMDR</h2>
          <p className="mb-4">You do not have to do it perfectly. You do not even need to have the words. Your job is simply to notice what comes up, and I will be there to guide, support, and adapt the process to your needs.</p>
          <p>If you&apos;re curious about whether EMDR is a good fit for you, we can talk more during a free consultation.</p>
        </section>
    </div>
  );
}
