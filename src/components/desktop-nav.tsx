import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Button from "./button";

interface NavItem {
  href?: string;
  label: string;
  submenu?: NavItem[];
}

interface DesktopNavProps {
  navLinks: NavItem[];
  isActive: (href: string) => boolean;
  isParentActive: (item: NavItem) => boolean;
}

export default function DesktopNav({
  navLinks,
  isActive,
  isParentActive,
}: DesktopNavProps) {
  const [hoveredDesktopMenu, setHoveredDesktopMenu] = useState<string | null>(
    null
  );

  return (
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
  );
}
