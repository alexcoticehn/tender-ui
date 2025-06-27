import Header from "@/components/header";

export default function About() {
  return (
      <div className="min-h-screen text-gray-900 font-sans">
          <div className="mx-auto px-4 py-4 flex flex-col md:ml-auto bg-[url(/images/hero-trees-cropped_1.png)] bg-cover bg-size-75 min-h-150 pointer-events-none">
          <div className="relative flex flex-row">
          <Header />
          </div>
          <div className="relative inset-0 flex flex-col justify-end text-white px-4 sm:px-6 lg:px-8 pointer-events-none font-serif bottom-4 text-left mt-auto">
            <h1 className="text-4xl font-bold mb-2">About</h1>
          </div>
          </div>
          </div>
  );
}
