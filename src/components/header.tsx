"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

interface NavItem {
  href?: string;
  label: string;
  submenu?: NavItem[];
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
        <DesktopNav
          navLinks={navLinks}
          isActive={isActive}
          isParentActive={isParentActive}
        />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-20 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation */}
        <MobileNav
          navLinks={navLinks}
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          isActive={isActive}
          isParentActive={isParentActive}
        />
      </div>
    </header>
  );
}
