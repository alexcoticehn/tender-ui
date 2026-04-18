import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Button from "./button";

interface NavItem {
  href?: string;
  label: string;
  submenu?: NavItem[];
}

interface MobileNavProps {
  navLinks: NavItem[];
  isOpen: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
  isParentActive: (item: NavItem) => boolean;
}

export default function MobileNav({
  navLinks,
  isOpen,
  onClose,
  isActive,
  isParentActive,
}: MobileNavProps) {
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
    null
  );

  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-earth-tan border-b border-neutral-600 flex flex-col items-stretch gap-0 p-0 md:hidden">
      {navLinks.map((link) => (
        <div key={link.label} className="border-b border-neutral-400 last:border-b-0">
          <div className="flex items-center justify-between">
            <Link
              href={link.href || "#"}
              onClick={() => !link.submenu && onClose()}
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
                  onClick={() => onClose()}
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
      <Button href="/contact" onClick={() => onClose()} className="mx-4 my-3">
        Book Now
      </Button>
    </div>
  );
}
