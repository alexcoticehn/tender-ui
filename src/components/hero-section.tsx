interface HeroSectionProps {
  headline: string;
  subheading: string;
}

export default function HeroSection({ headline, subheading }: HeroSectionProps) {
  return (
    <section className="relative w-full h-screen md:h-[600px] bg-[url(/images/hero-trees-cropped_1.png)] bg-cover bg-center flex items-center justify-center px-4 md:px-6 lg:px-10">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-light mb-6 text-white">
          {headline}
        </h1>
        <p className="text-lg md:text-xl text-white leading-relaxed">
          {subheading}
        </p>
      </div>
    </section>
  );
}
