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
    <Link href={href}>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-earth-moss h-full">
        {/* Top section with title */}
        <div className="pt-6 px-4 pb-4">
          <h3 className="text-lg font-medium text-center text-white">
            {title}
          </h3>
        </div>

        {/* Image section */}
        <div className="relative w-full h-40">
          <Image 
            src={image} 
            alt={alt} 
            width={width} 
            height={height}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bottom section with Learn More */}
        <div className="pt-4 px-4 pb-6 flex items-center justify-center gap-2">
          <span className="text-white font-medium">Learn More</span>
          <span className="text-xl text-white">»</span>
        </div>
      </div>
    </Link>
  );
}
