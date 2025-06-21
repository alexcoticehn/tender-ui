import Link from 'next/link';

export function BookingLink() {
    return (
        <section className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Book your free 15 minute consultation</h2>
          <Link href="/contact" className="inline-block bg-[#e2725b] text-white px-6 py-3 rounded-xl hover:bg-[#c95d4d] transition">Contact Me</Link>
        </section>
    )
}