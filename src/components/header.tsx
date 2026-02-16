"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 bg-neutral-50 border-b border-neutral-600 shadow-sm">
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-10 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo_transparent.png"
            alt="Tender Counselling Logo"
            width={40}
            height={40}
          />
          <span className="text-xl text-primary-500 hidden sm:inline">Tender Counselling</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                isActive(link.href)
                  ? "text-primary-500 font-semibold"
                  : "text-neutral-950 hover:text-primary-500"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

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
          <div className="absolute top-full left-0 w-full bg-neutral-50 border-b border-neutral-600 flex flex-col gap-4 p-4 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-lg transition-colors ${
                  isActive(link.href)
                    ? "text-primary-500 font-semibold"
                    : "text-neutral-950 hover:text-primary-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
