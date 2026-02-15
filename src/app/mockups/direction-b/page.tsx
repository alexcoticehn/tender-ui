export default function DirectionB() {
  return (
    <div className="w-full">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-primary-500 shadow-lg">
        <div className="px-4 md:px-6 lg:px-10 py-6 flex justify-between items-center">
          <div className="text-3xl font-semibold text-neutral-50">Tender</div>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="text-neutral-50 hover:opacity-80 transition-opacity">
              Home
            </a>
            <a href="#" className="text-neutral-50 hover:opacity-80 transition-opacity">
              Services
            </a>
            <a href="#" className="text-neutral-50 hover:opacity-80 transition-opacity">
              About
            </a>
            <a href="#" className="text-neutral-50 hover:opacity-80 transition-opacity">
              Contact
            </a>
          </nav>
          <button className="md:hidden text-neutral-50">≡</button>
        </div>
      </header>

      {/* Hero Section - Warm background */}
      <section className="bg-gradient-to-b from-earth-tan to-earth-brown py-20 md:py-32">
        <div className="px-4 md:px-6 lg:px-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extralight text-neutral-950 mb-6">
            Your Path to <span className="text-primary-500">Healing</span>
          </h1>
          <p className="text-lg text-neutral-950 max-w-2xl mx-auto mb-4 leading-relaxed">
            In a warm, welcoming space, we explore your deepest concerns and discover new possibilities for growth and peace.
          </p>
          <div className="flex justify-center gap-4 mt-12">
            <button className="bg-primary-500 text-neutral-50 px-8 py-3 rounded hover:shadow-lg transition-all duration-200">
              Book Now
            </button>
            <button className="border-2 border-primary-500 text-primary-500 px-8 py-3 rounded hover:bg-primary-500 hover:text-white transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why Counseling */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="px-4 md:px-6 lg:px-10">
          <h2 className="text-4xl font-extralight text-center text-neutral-950 mb-12">
            Why Counseling Helps
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-earth-sage rounded-full flex items-center justify-center text-white flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-950 mb-2">Safe Space</h3>
                  <p className="text-neutral-600">A confidential environment where you can be fully yourself.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-earth-sage rounded-full flex items-center justify-center text-white flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-950 mb-2">Expert Guidance</h3>
                  <p className="text-neutral-600">Evidence-based approaches tailored to your unique situation.</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-ochre rounded-full flex items-center justify-center text-white flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-950 mb-2">Real Progress</h3>
                  <p className="text-neutral-600">Concrete tools and strategies for lasting change.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent-ochre rounded-full flex items-center justify-center text-white flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-neutral-950 mb-2">Peace & Clarity</h3>
                  <p className="text-neutral-600">Find clarity in confusion and peace in difficulty.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Colored cards */}
      <section className="bg-neutral-400 py-16 md:py-24">
        <div className="px-4 md:px-6 lg:px-10">
          <h2 className="text-4xl font-extralight text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 p-8 rounded-lg border-l-4 border-primary-500">
              <h3 className="text-2xl font-semibold text-primary-500 mb-4">EMDR Therapy</h3>
              <p className="text-neutral-950 leading-relaxed">
                Eye Movement Desensitization and Reprocessing for trauma recovery and emotional healing.
              </p>
            </div>
            <div className="bg-gradient-to-br from-earth-sage/20 to-earth-sage/10 p-8 rounded-lg border-l-4 border-earth-sage">
              <h3 className="text-2xl font-semibold text-earth-sage mb-4">Individual Therapy</h3>
              <p className="text-neutral-950 leading-relaxed">
                One-on-one sessions to explore thoughts, feelings, and build coping strategies.
              </p>
            </div>
            <div className="bg-gradient-to-br from-accent-ochre/20 to-accent-ochre/10 p-8 rounded-lg border-l-4 border-accent-ochre">
              <h3 className="text-2xl font-semibold text-accent-ochre mb-4">Couples Counseling</h3>
              <p className="text-neutral-950 leading-relaxed">
                Strengthen your relationship through communication and understanding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with warm gradient */}
      <section className="bg-gradient-to-r from-primary-500 to-earth-sage py-16 md:py-24">
        <div className="px-4 md:px-6 lg:px-10 text-center">
          <h2 className="text-4xl font-extralight text-white mb-6">Start Your Journey Today</h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Take the first step toward healing. Schedule your free consultation.
          </p>
          <button className="bg-neutral-50 text-primary-500 px-10 py-4 rounded font-semibold hover:shadow-lg transition-all duration-200">
            Book a Free Consultation
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
