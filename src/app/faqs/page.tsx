import Header from "@/components/header";

export default function FAQs() {
  return (
    <div className="min-h-screen text-black font-serif">
      <div className="mx-auto px-4 py-4 flex flex-col md:ml-auto bg-cover bg-center pointer-events-none">
          <div className="relative flex flex-row">
          <Header />
          </div>
      </div>
      <section className="mx-50">
          <h2 className="text-4xl mb-10 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-2 mb-20">
            <div className="flex flex-col text-2xl text-center">
              What are your session fees?
            </div>
            <div className="flex flex-col text-lg">
              <p><span className="font-bold">50 minute session:</span> $150</p>
              <p><span className="font-bold">80 minute extended session:</span> $240</p>
              <p>I offer a limited number of sliding scale spots. If cost is a barrier, feel free to reach out to explore options.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-2 mb-20">
            <div className="flex flex-col text-2xl text-center">
              Do you offer a free consultation?
            </div>
            <div className="flex flex-col text-lg">
              Yes. I offer a free 15 minute phone or video consultation. This is a chance for us to connect, answer your questions, 
              and see if working together feels like a good fit. There is no pressure to book ongoing sessions.
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-2 mb-20">
            <div className="flex flex-col text-2xl text-center">
              Do you offer virtual or in-person sessions?
            </div>
            <div className="flex flex-col text-lg">
              <p>Yes. I offer virtual counselling to clients anywhere in British Columbia using a secure video platform.</p>
              <p>If you are looking for in-person sessions, I see clients at the EMDR Therapy Group in Vancouver. You can view my schedule and book in-person appointments through <a href="https://emdrbc.janeapp.com/" className="text-blue-600">EMDR Therapy Group</a>.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-2 mb-20">
            <div className="flex flex-col text-2xl text-center">
              Can I use insurane to cover therapy?
            </div>
            <div className="flex flex-col text-lg">
              Most insurance plans in BC will provide reimbursement.
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-2 mb-20">
            <div className="flex flex-col text-2xl text-center">
              What is your cancellation policy?
            </div>
            <div className="flex flex-col text-lg">
              Cancellations require at least 24 hours&apos; notice. Sessions cancelled with less than 24 hours&apos; notice will be charged the full session fee. I understand that unexpected things come up and will do my best to accommodate occasional emergencies.
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-2 mb-20">
            <div className="flex flex-col text-2xl text-center">
              What if you&apos;ve never done therapy before?
            </div>
            <div className="flex flex-col text-lg">
              That is completely okay. Many of my clients are new to therapy. You don&apos;t need to have the “right” words or know exactly where to start. It is normal to feel nervous or unsure. My role is to create a space that feels supportive and steady so you can ease into the process at your own pace. There is no expectation to share anything before you feel ready.
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-2 mb-20">
            <div className="flex flex-col text-2xl text-center">
              What is the first session like?
            </div>
            <div className="flex flex-col text-lg">
              The first session is a chance to get to know each other and start building a sense of safety and trust. We will talk about what is bringing you in, what you are hoping for, and any questions you have about the process. I will ask a few gentle questions to help guide us, but there is no pressure to share more than you are comfortable with. By the end of the session, we will check in together about what the next steps might look like.
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-2 mb-20">
            <div className="flex flex-col text-2xl text-center">
              How often should I come to therapy?
            </div>
            <div className="flex flex-col text-lg">
              It depends on what you are needing and what is realistic for your schedule. Many people start with weekly or biweekly sessions, and we can adjust as things unfold. You are always in charge of the pace and frequency of your care.
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-2 mb-20">
            <div className="flex flex-col text-2xl text-center">
              Is therapy confidential?
            </div>
            <div className="flex flex-col text-lg">
              Yes. Everything we talk about in session is confidential, with a few exceptions required by law. These include situations where there is a risk of serious harm to yourself or others, or where there is disclosure of abuse involving a child or vulnerable adult. If any of these situations arise, I will always aim to be open with you about what steps need to be taken and why.
            </div>
          </div>
      </section>
    </div>
  );
}