"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "./button";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/emdr", label: "EMDR" },
    { href: "/rates", label: "Rates" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-earth-tan shadow-sm relative">
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-10 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center">
          <div className="w-[100px] h-[100px] md:w-[250px] md:h-[250px] relative">
            <Image
              src="/images/logo_full_transparent.png"
              alt="Tender Counselling Logo"
              fill
              sizes="(max-width: 768px) 100px, 250px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all ${
                  isActive(link.href)
                    ? "text-earth-terracotta underline decoration-earth-terracotta underline-offset-4"
                    : "text-neutral-950 hover:text-earth-terracotta hover:underline hover:decoration-earth-terracotta hover:underline-offset-4"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button href="/contact" className="ml-4">
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-20 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-earth-tan border-b border-neutral-600 flex flex-col items-center gap-4 p-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-lg transition-all ${
                  isActive(link.href)
                    ? "text-earth-terracotta underline decoration-earth-terracotta underline-offset-4"
                    : "text-neutral-950 hover:text-earth-terracotta hover:underline hover:decoration-earth-terracotta hover:underline-offset-4"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" onClick={() => setMobileOpen(false)} className="mt-4">
              Book Now
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
