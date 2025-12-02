"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className="max-w-screen-xl px-4 sm:px-6 lg:px-8 py-6 flex justify-between pointer-events-auto">
        <div className="flex items-center gap-5">
          <Link href="/" className="z-20 relative">
            <Image
              src="/images/logo_transparent.png"
              alt="Tender Counselling Logo"
              width={50}
              height={20}
            />
          </Link>
          
          <div className="hidden md:flex gap-10 font-serif text-lg">
            <Link href="/" className="hover:text-[#e2725b]">Home</Link>
            <Link href="/about" className="hover:text-[#e2725b]">About</Link>
            <Link href="/services" className="hover:text-[#e2725b]">Services</Link>
            <Link href="/emdr" className="hover:text-[#e2725b]">EMDR</Link>
            <Link href="/rates" className="hover:text-[#e2725b]">Rates</Link>
            <Link href="/faqs" className="hover:text-[#e2725b]">FAQs</Link>
            <Link href="/contact" className="hover:text-[#e2725b]">Contact</Link>
          </div>
        </div>

        <button
          className="md:hidden z-20 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} className="cursor-pointer" /> : <Menu size={28} />}
        </button>

        {mobileOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 text-2xl font-serif z-10">
            <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-[#e2725b]">Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="hover:text-[#e2725b]">About</Link>
            <Link href="/services" onClick={() => setMobileOpen(false)} className="hover:text-[#e2725b]">Services</Link>
            <Link href="/emdr" onClick={() => setMobileOpen(false)} className="hover:text-[#e2725b]">EMDR</Link>
            <Link href="/rates" onClick={() => setMobileOpen(false)} className="hover:text-[#e2725b]">Rates</Link>
            <Link href="/faqs" onClick={() => setMobileOpen(false)} className="hover:text-[#e2725b]">FAQs</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="hover:text-[#e2725b]">Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
