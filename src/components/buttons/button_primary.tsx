import Link from "next/link";

interface ButtonPrimaryProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function ButtonPrimary({
  href,
  children,
  onClick,
  className = "",
}: ButtonPrimaryProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-6 py-2 bg-earth-terracotta text-neutral-50 rounded-xl hover:bg-earth-brown transition-colors font-medium ${className}`}
    >
      {children}
    </Link>
  );
}
