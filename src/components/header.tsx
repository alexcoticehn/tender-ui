"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import Button from "./button";

interface NavItem {
  href?: string;
  label: string;
  submenu?: NavItem[];
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const [hoveredDesktopMenu, setHoveredDesktopMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const navLinks: NavItem[] = [
    {
      label: "Services",
      href: "/services",
      submenu: [
        { href: "/services/individual", label: "Individual Counselling" },
        { href: "/services/emdr", label: "EMDR Therapy" },
        { href: "/services/group", label: "Group Counselling" },
        { href: "/services/first-responders", label: "First Responders Support" },
      ],
    },
    { href: "/about", label: "About" },
    { href: "/emdr", label: "EMDR" },
    { href: "/rates", label: "Rates" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => pathname === href;

  const isParentActive = (item: NavItem) => {
    // Check if exact href matches
    if (item.href && isActive(item.href)) return true;
    // Check if any submenu item is active
    if (item.submenu) {
      return item.submenu.some((subitem) => isActive(subitem.href || ""));
    }
    return false;
  };

  return (
    <header className="bg-earth-tan shadow-sm relative z-40">
      <div className="max-w-container mx-auto px-4 md:px-6 lg:px-10 flex justify-between items-center">
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center">
          <div className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] relative">
            <Image
              src="/images/emdr_transparent.png"
              alt="EMDR Integrative Therapy Logo"
              fill
              sizes="(max-width: 768px) 100px, 130px"
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <nav className="flex gap-8">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() =>
                  link.submenu && setHoveredDesktopMenu(link.label)
                }
                onMouseLeave={() => setHoveredDesktopMenu(null)}
              >
                <Link
                  href={link.href || "#"}
                  className={`transition-all inline-flex items-center gap-1 ${
                    isParentActive(link)
                      ? "text-earth-terracotta underline decoration-earth-terracotta underline-offset-4"
                      : "text-neutral-950 hover:text-earth-terracotta hover:underline hover:decoration-earth-terracotta hover:underline-offset-4"
                  }`}
                >
                  {link.label}
                  {link.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        hoveredDesktopMenu === link.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Desktop Submenu */}
                {link.submenu && (
                  <div
                    className={`absolute left-0 mt-0 w-48 bg-earth-tan border border-neutral-300 rounded-md shadow-lg overflow-hidden transition-all duration-200 z-50 ${
                      hoveredDesktopMenu === link.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {link.submenu.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href || "#"}
                        className={`block px-4 py-2 text-sm transition-all first:border-t-0 border-t border-neutral-300 ${
                          isActive(subitem.href || "")
                            ? "text-earth-terracotta underline decoration-earth-terracotta underline-offset-4"
                            : "text-neutral-950 hover:text-earth-terracotta hover:underline hover:decoration-earth-terracotta hover:underline-offset-4"
                        }`}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
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
          <div className="absolute top-full left-0 w-full bg-earth-tan border-b border-neutral-600 flex flex-col items-stretch gap-0 p-0 md:hidden">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-neutral-400 last:border-b-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={link.href || "#"}
                    onClick={() => !link.submenu && setMobileOpen(false)}
                    className={`flex-1 px-4 py-3 text-lg transition-all ${
                      isParentActive(link)
                        ? "text-earth-terracotta"
                        : "text-neutral-950 hover:text-earth-terracotta"
                    }`}
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <button
                      onClick={() =>
                        setExpandedMobileMenu(
                          expandedMobileMenu === link.label ? null : link.label
                        )
                      }
                      className="px-4 py-3 text-neutral-950 hover:text-earth-terracotta"
                      aria-label={`Toggle ${link.label} submenu`}
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${
                          expandedMobileMenu === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu */}
                {link.submenu && expandedMobileMenu === link.label && (
                  <div className="bg-earth-tan">
                    {link.submenu.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href || "#"}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-6 py-2 text-sm transition-all border-t border-neutral-400 ${
                          isActive(subitem.href || "")
                            ? "text-earth-terracotta underline decoration-earth-terracotta underline-offset-4"
                            : "text-neutral-950 hover:text-earth-terracotta hover:underline hover:decoration-earth-terracotta hover:underline-offset-4"
                        }`}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button href="/contact" onClick={() => setMobileOpen(false)} className="mx-4 my-3">
              Book Now
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
