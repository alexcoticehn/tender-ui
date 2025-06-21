"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-semibold text-[#5c4a3c]">Tender Counselling</div>
        <ul className="flex space-x-4 text-sm">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "hover:text-[#c2976d]",
                  pathname === href ? "font-medium text-[#a87d5d]" : "text-[#5c4a3c]"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
