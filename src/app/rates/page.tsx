export default function Rates() {
  return (
    <div className="min-h-screen text-black font-serif">
        <section className="mx-8 pt-24">
          <h2 className="text-4xl mb-4">Rates</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div className="flex flex-col">
              <p className="mb-4">$165</p>
              <p>50m Individual Therapy Session</p>
            </div>
            <div className="flex flex-col">
              <p className="mb-4">$185</p>
              <p>50m Relationship (couples, polycules, any relationship structure) Session</p>
            </div>
            <div className="flex flex-col">
              <p className="mb-4">$230</p>
              <p>90m Individual Therapy Session</p>
            </div>
            <div className="flex flex-col">
              <p className="mb-4">$250</p>
              <p>90m Relationship (couples, polycules, any relationship structure) Session</p>
            </div>
          </div>
        </section>
    </div>
  );
}