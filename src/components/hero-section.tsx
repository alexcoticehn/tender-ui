interface HeroSectionProps {
  headline: string;
  subheading: string;
}

export default function HeroSection({ headline, subheading }: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen md:h-[600px] bg-earth-moss flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="md:text-6xl font-light mb-6 text-white">
          {headline}
        </h1>
        <h6 className="md:text-xl text-white leading-relaxed font-normal">
          {subheading}
        </h6>
      </div>
    </section>
  );
}
