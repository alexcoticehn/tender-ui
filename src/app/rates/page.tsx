export default function Rates() {
  return (
    <div className="min-h-screen bg-[#fffaf4] text-[#4b3f32] font-sans">
      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold mb-6 text-center">Session Rates</h1>
        <p className="mb-6 text-lg">
          As a pre-licensed clinical counsellor, I&apos;m currently offering reduced-rate sessions while I complete my registration.
        </p>

        <div className="space-y-4 text-base">
          <p><strong>50-minute individual session:</strong> $120 (pre-licensed rate)</p>
          <p><strong>80-minute extended session:</strong> $192 (pre-licensed rate)</p>
          <p className="italic">Once I receive my full RCC registration, rates will be:</p>
          <p><strong>50-minute session:</strong> $165</p>
          <p><strong>80-minute extended session:</strong> $264</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Sliding Scale</h2>
        <p className="mb-6">
          I offer a limited number of sliding scale spots based on financial need. If cost is a barrier to accessing therapy, please feel free to reach out. We can explore options together to find something that works.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Insurance Coverage</h2>
        <p className="mb-6">
          While I&apos;m pre-licensed, some extended health plans may offer coverage for therapy with supervised therapists or interns. Please check with your provider. Once I&apos;m fully registered, most plans in BC will reimburse for counselling with an RCC (Registered Clinical Counsellor).
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Payment and Policies</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Payment is due at the end of each session by e-transfer or credit card.</li>
          <li>Receipts will be provided for insurance or tax purposes.</li>
          <li>24 hours notice is required for cancellations to avoid being charged the full session fee.</li>
        </ul>
      </main>
    </div>
  );
}