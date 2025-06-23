import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/footer";
import { BookingLink } from "@/components/bookingLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tender Counselling",
  description: "Steady support across shifting waters. Megan Yerxa offers trauma-informed counselling, EMDR therapy, and relationship support in Vancouver and across BC.",
  keywords: ["EMDR", "Eye Movement Desensitization and Reprocessing", "Therapy", "Counselling", "Vancouver", "Online Counselling", "Trauma Counselling", "EMDR Counselling Vancouver"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className={cn(inter.className)}>
        <main className="mx-auto px-6 py-12 space-y-10">
          {children}
        </main>
        <BookingLink />
        <Footer />
      </body>
    </html>
  );
}
