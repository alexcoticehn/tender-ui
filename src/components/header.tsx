import Link from "next/link";
import Image from "next/image";

export default function Header() {
return (
        <header>
        <nav>
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative flex py-8">
                        <div className="relative z-10">
                        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Tender Counselling Logo"
            width={40}
            height={10}
          />
        </Link>
        </div>
        <div className="hidden lg:flex lg:gap-10 lg:pl-3 font-serif text-lg pt-1">
          <Link href="/" className="hover:text-[#e2725b] text-black duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#e2725b] text-black duration-300">
            About
          </Link>
          <Link href="/services" className="hover:text-[#e2725b] text-black duration-300">
            Services
          </Link>
          <Link href="/emdr" className="hover:text-[#e2725b] text-black duration-300">
            EMDR
          </Link>
          <Link href="/faqs" className="hover:text-[#e2725b] text-black duration-300">
            FAQs
          </Link>
          <Link href="/rates" className="hover:text-[#e2725b] text-black duration-300">
            Rates
          </Link>
          <Link href="/contact" className="hover:text-[#e2725b] text-black duration-300">
            Contact
          </Link>
          </div>
            </div>
        </nav>
        </header>
    )
}

