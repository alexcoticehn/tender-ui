"use client";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-[#f7f5f0] sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Tender Counselling Logo"
            width={160}
            height={40}
          />
        </Link>
        <nav className="space-x-6 text-sm md:text-base">
          <Link href="/" className="hover:text-[#e2725b] transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#e2725b] transition">
            About
          </Link>
          <Link href="/services" className="hover:text-[#e2725b] transition">
            Services
          </Link>
          <Link href="/faqs" className="hover:text-[#e2725b] transition">
            FAQs
          </Link>
          <Link href="/contact" className="hover:text-[#e2725b] transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
