import Button from "./button";

export default function CallToAction() {
  return (
    <section className="w-full bg-earth-tan py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light text-neutral-950 mb-6 font-serif">
          Ready to begin?
        </h2>
        <p className="text-base md:text-lg text-accent-sage mb-8 leading-relaxed font-serif">
          There's no rush, and no expectations. You can move at your own pace, and there's no commitment until you're ready. I'm here to listen and support you.
        </p>
        <Button href="/contact" variant="primary">
          Get in Touch
        </Button>
      </div>
    </section>
  );
}
