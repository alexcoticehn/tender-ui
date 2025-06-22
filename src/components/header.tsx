import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-transparent top-0 z-50">
      <div className="mx-auto px-4 py-4 flex items-center flex-row md:ml-auto">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Tender Counselling Logo"
            width={40}
            height={10}
          />
        </Link>
        <nav className="space-x-6 text-sm md:text-base ml-3">
          <Link href="/" className="hover:text-[#e2725b] text-black font-serif transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#e2725b] text-black font-serif transition">
            About
          </Link>
          <Link href="/services" className="hover:text-[#e2725b] text-black font-serif transition">
            Services
          </Link>
          <Link href="/emdr" className="hover:text-[#e2725b] text-black font-serif transition">
            EMDR
          </Link>
          <Link href="/faqs" className="hover:text-[#e2725b] text-black font-serif transition">
            FAQs
          </Link>
          <Link href="/rates" className="hover:text-[#e2725b] text-black font-serif transition">
            Rates
          </Link>
          <Link href="/contact" className="hover:text-[#e2725b] text-black font-serif transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
