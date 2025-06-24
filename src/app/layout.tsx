import "@/styles/globals.css";
import { Footer } from "@/components/footer";
import { BookingLink } from "@/components/bookingLink";

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
      <body>
        <main className="space-y-10 container">
          {children}
        </main>
        <BookingLink />
        <Footer />
      </body>
    </html>
  );
}
