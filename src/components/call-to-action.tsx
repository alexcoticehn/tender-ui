import Button from "./button";

export default function CallToAction() {
  return (
    <section className="w-full bg-earth-tan py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-accent">
          Ready to begin?
        </h2>
        <h6 className="text-accent-sage mt-4 mb-8">
          Schedule your guilt-free 15 minute introductory call now.
        </h6>
        <Button href="/contact" variant="primary">
          Get in Touch
        </Button>
      </div>
    </section>
  );
}
