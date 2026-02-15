export default function DirectionA() {
  return (
    <div className="w-full">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-neutral-50 border-b border-neutral-600 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-4 flex justify-between items-center">
          <div className="text-2xl font-semibold text-primary-500">Tender</div>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-neutral-950 hover:text-primary-500 transition-colors">
              Home
            </a>
            <a href="#" className="text-neutral-950 hover:text-primary-500 transition-colors">
              Services
            </a>
            <a href="#" className="text-neutral-950 hover:text-primary-500 transition-colors">
              About
            </a>
            <a href="#" className="text-neutral-950 hover:text-primary-500 transition-colors">
              Contact
            </a>
          </nav>
          <button className="md:hidden text-neutral-950">≡</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-neutral-50 py-20 md:py-32">
        <div className="px-4 md:px-6 lg:px-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extralight text-neutral-950 mb-6">
            Counseling for <span className="text-primary-500">Healing</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Compassionate, professional therapy tailored to your needs. Find peace and clarity with evidence-based counseling.
          </p>
          <button className="bg-primary-500 text-neutral-50 px-8 py-3 rounded hover:bg-neutral-50 hover:text-primary-500 border border-primary-500 transition-all duration-200">
            Book a Session
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-neutral-400 py-16 md:py-24">
        <div className="px-4 md:px-6 lg:px-10">
          <h2 className="text-4xl font-extralight text-center mb-12">Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['EMDR Therapy', 'Talk Therapy', 'Couples Counseling'].map((service) => (
              <div key={service} className="bg-neutral-50 p-8 rounded border border-neutral-600 hover:shadow-lg transition-all">
                <h3 className="text-xl font-semibold text-primary-500 mb-3">{service}</h3>
                <p className="text-neutral-950 leading-relaxed">
                  Professional support tailored to your unique needs and goals. Confidential, compassionate care.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-neutral-50 py-16 text-center">
        <div className="px-4 md:px-6 lg:px-10">
        <h2 className="text-3xl font-normal mb-6">Ready to Take the Next Step?</h2>
        <p className="text-lg text-neutral-600 mb-8">
          Reach out today to schedule your first session.
        </p>
        <button className="border-2 border-primary-500 text-primary-500 px-8 py-3 rounded hover:bg-primary-500 hover:text-white transition-all duration-200">
          Get in Touch
        </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-white py-12">
        <div className="px-4 md:px-6 lg:px-10 text-center">
          <p>&copy; 2024 Tender Counselling. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
