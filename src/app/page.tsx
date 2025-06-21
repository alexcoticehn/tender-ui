"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HomePage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="space-y-20">
      <section className="text-center" data-aos="fade-up">
        <Image
          src="/images/portrait.jpg"
          alt="Your wife's portrait"
          width={200}
          height={200}
          className="rounded-full mx-auto shadow-md"
        />
        <h1 className="text-3xl font-bold mt-6 text-[#5c4a3c]">Welcome to Tender Counselling</h1>
        <p className="mt-4 text-base max-w-xl mx-auto text-[#6b5e54]">
          A warm, grounded space for you to reconnect with yourself, explore your emotions, and grow at your own pace.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10" data-aos="fade-up">
        <div>
          <h2 className="text-2xl font-semibold text-[#5c4a3c] mb-2">Compassionate, Client-Centered Therapy</h2>
          <p className="text-[#6b5e54]">
            We believe healing happens in a space where you're deeply seen, heard, and supported.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-[#5c4a3c] mb-2">Grounded in Presence</h2>
          <p className="text-[#6b5e54]">
            Our work is rooted in authenticity, mindfulness, and honoring the full range of human experience.
          </p>
        </div>
      </section>
    </div>
  );
}
