import Link from "next/link";

export default function Footer() {
  return (
      <footer className="bg-neutral-950 text-neutral-400 pt-12 pb-6 mt-16 border-t border-neutral-300">
        <div className="px-4 md:px-6 lg:px-10 max-w-7xl mx-auto max-w-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Left: Business Blurb */}
          <div className="md:col-span-2">
              <h4 className="mb-2 font-alternate-1">Tender Counselling</h4>
            <small className="max-w-md">
              Online counselling services available across British Columbia and most of Canada.
            </small>
          </div>
          {/* Right: Page Links in Two Columns */}
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/" className="hover:text-neutral-50 transition-colors">Home</Link>
            <Link href="/services" className="hover:text-neutral-50 transition-colors">Services</Link>
            <Link href="/about" className="hover:text-neutral-50 transition-colors">About</Link>
            <Link href="/emdr" className="hover:text-neutral-50 transition-colors">EMDR</Link>
          </nav>
          <nav className="flex flex-col gap-2 text-sm">
            <Link href="/rates" className="hover:text-neutral-50 transition-colors">Rates</Link>
            <Link href="/faqs" className="hover:text-neutral-50 transition-colors">FAQs</Link>
            <Link href="/contact" className="hover:text-neutral-50 transition-colors">Contact</Link>
          </nav>
          </div>
          {/* Bottom: Copyright & Land Acknowledgement */}
          <div className="mt-10 border-t border-neutral-400 pt-6 text-neutral-400">
          <p className="xsmall">&copy; 2026 Tender Counselling. All rights reserved.</p>
          <p className="mt-2 xsmall">
            I respectfully acknowledge that I occupy the unceded, ancestral territories of the xʷməθkwəy̓əm (Musqueam), Skwxwú7mesh (Squamish), S’ólh Téméxw (Stó:lō), Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh), Qayqayt, and kʷikʷəƛ̓əm (Kwikwetlem) peoples.
          </p>
          </div>
        </div>
      </footer>
  );
}
