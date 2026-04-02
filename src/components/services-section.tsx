import ServiceCard from "./service-card";

interface ServiceCard {
  title: string;
  href: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}

interface ServicesProps {
  services?: ServiceCard[];
}

const defaultServices: ServiceCard[] = [
  {
    title: "Individual Counselling",
    href: "/services",
    image: "/images/individual_counselling.jpg",
    alt: "Individual Counselling",
    width: 375,
    height: 300,
  },
  {
    title: "EMDR Therapy",
    href: "/emdr",
    image: "/images/house_landscape.jpg",
    alt: "EMDR Therapy",
    width: 345,
    height: 280,
  },
  {
    title: "Group Counselling",
    href: "/services",
    image: "/images/relationship_counselling.jpg",
    alt: "Group Counselling",
    width: 350,
    height: 300,
  },
];

export default function ServicesSection({ services = defaultServices }: ServicesProps) {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 py-16 md:py-24">
        <h2 className="text-5xl md:text-6xl mb-12 text-center">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              href={service.href}
              image={service.image}
              alt={service.alt}
              width={service.width}
              height={service.height}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
