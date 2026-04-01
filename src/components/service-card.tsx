import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  href: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

export default function ServiceCard({
  title,
  href,
  image,
  alt,
  width,
  height,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link 
        href={href} 
        className="text-lg md:text-xl mb-5 hover:text-[#eae4dc] underline-offset-2 hover:underline transition-colors duration-200"
      >
        {title}
      </Link>
      <Image 
        src={image} 
        alt={alt} 
        width={width} 
        height={height}
        className="w-full object-cover rounded-md"
      />
    </div>
  );
}
