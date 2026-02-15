export default function DirectionC() {
  return (
    <div className="w-full">
      {/* Header - Minimal modern */}
      <header className="sticky top-0 z-50 bg-neutral-50 border-b-2 border-primary-500">
        <div className="px-4 md:px-6 lg:px-10 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-primary-500">Tender</span> <span className="text-neutral-950">Counselling</span>
          </div>
          <nav className="hidden md:flex gap-12 font-semibold text-sm tracking-wide">
            <a href="#" className="text-neutral-950 hover:text-primary-500 transition-colors">
              HOME
            </a>
            <a href="#" className="text-neutral-950 hover:text-primary-500 transition-colors">
              SERVICES
            </a>
            <a href="#" className="text-neutral-950 hover:text-primary-500 transition-colors">
              ABOUT
            </a>
            <a href="#" className="text-neutral-950 hover:text-primary-500 transition-colors">
              CONTACT
            </a>
          </nav>
          <button className="md:hidden text-neutral-950 text-2xl">≡</button>
        </div>
      </header>

      {/* Hero - Bold typography with color block */}
      <section className="grid md:grid-cols-2">
        <div className="bg-neutral-50 py-20 md:py-32 px-4 md:px-6 lg:px-10 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-extralight leading-tight mb-6 text-neutral-950">
            Mental Health is <span className="block text-primary-500 font-bold">Self-Care</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-md mb-8 leading-relaxed">
            Professional, compassionate therapy that meets you where you are.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary-500 text-white px-8 py-3 font-semibold hover:shadow-lg transition-all">
              BOOK NOW
            </button>
            <button className="border-2 border-neutral-950 text-neutral-950 px-8 py-3 font-semibold hover:bg-neutral-950 hover:text-white transition-all">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-primary-500 via-earth-sage to-accent-ochre py-20 md:py-32 px-4 md:px-6 lg:px-10 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-6xl mb-4">💭</div>
            <p className="text-xl font-light">Find clarity in your journey</p>
          </div>
        </div>
      </section>

      {/* Services - Bold Grid */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="px-4 md:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-5xl font-bold text-neutral-950 mb-6">
                What We <span className="text-primary-500">Offer</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Evidence-based therapies delivered by licensed professionals with specialized training and compassionate expertise.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-100 p-6 rounded border-l-4 border-primary-500">
                <div className="text-3xl font-bold text-primary-500 mb-2">15+</div>
                <p className="text-sm font-semibold text-neutral-950">Years Experience</p>
              </div>
              <div className="bg-earth-sage/20 p-6 rounded border-l-4 border-earth-sage">
                <div className="text-3xl font-bold text-earth-sage mb-2">500+</div>
                <p className="text-sm font-semibold text-neutral-950">Clients Helped</p>
              </div>
              <div className="bg-accent-ochre/20 p-6 rounded border-l-4 border-accent-ochre">
                <div className="text-3xl font-bold text-accent-ochre mb-2">100%</div>
                <p className="text-sm font-semibold text-neutral-950">Confidential</p>
              </div>
              <div className="bg-neutral-200 p-6 rounded border-l-4 border-neutral-600">
                <div className="text-3xl font-bold text-neutral-700 mb-2">3+</div>
                <p className="text-sm font-semibold text-neutral-950">Specializations</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 border-t-2 border-primary-500 pt-12">
            <div className="p-8 rounded">
              <div className="w-12 h-12 bg-primary-500 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-neutral-950 mb-2">EMDR</h3>
              <p className="text-neutral-600">Specialized trauma processing</p>
            </div>
            <div className="p-8 rounded">
              <div className="w-12 h-12 bg-earth-sage rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-neutral-950 mb-2">Talk Therapy</h3>
              <p className="text-neutral-600">Evidence-based counseling</p>
            </div>
            <div className="p-8 rounded">
              <div className="w-12 h-12 bg-accent-ochre rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-neutral-950 mb-2">Couples Work</h3>
              <p className="text-neutral-600">Strengthen your relationship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Split section */}
      <section className="grid md:grid-cols-2">
        <div className="bg-primary-500 text-white py-16 md:py-24 px-4 md:px-6 lg:px-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Tender?</h2>
          <ul className="space-y-4 text-lg">
            <li>✓ Licensed, experienced therapists</li>
            <li>✓ Flexible scheduling options</li>
            <li>✓ Evidence-based approaches</li>
            <li>✓ Secure, confidential care</li>
          </ul>
        </div>
        <div className="bg-neutral-950 text-white py-16 md:py-24 px-4 md:px-6 lg:px-10 flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Start?</h3>
          <p className="mb-8 text-lg leading-relaxed">
            Your first step toward healing is just one click away. Schedule a free, no-obligation consultation today.
          </p>
          <button className="bg-primary-500 text-white px-8 py-4 font-bold rounded hover:shadow-lg transition-all w-fit">
            BOOK CONSULTATION
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-50 border-t-2 border-primary-500 py-12">
        <div className="px-4 md:px-6 lg:px-10 text-center">
          <p className="text-neutral-950 font-semibold">&copy; 2024 Tender Counselling</p>
        </div>
      </footer>
    </div>
  );
}
