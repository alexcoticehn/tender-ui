import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "px-6 py-2 bg-earth-terracotta text-neutral-50 rounded-xl hover:bg-earth-brown transition-colors font-medium",
  secondary:
    "px-6 py-2 bg-neutral-200 text-neutral-950 rounded-xl hover:bg-neutral-300 transition-colors font-medium",
  tertiary:
    "px-6 py-2 border-2 border-earth-terracotta text-earth-terracotta rounded-xl hover:bg-earth-tan transition-colors font-medium",
};

export default function Button({
  href,
  children,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyles = variantStyles[variant];

  return (
    <Link href={href} onClick={onClick} className={`${baseStyles} ${className}`}>
      {children}
    </Link>
  );
}
