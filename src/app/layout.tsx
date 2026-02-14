import "@/styles/globals.css";
import { Montserrat, Nothing_You_Could_Do, Quicksand, Shadows_Into_Light_Two } from "next/font/google";
import Header from "@/components/header";
import { Footer } from "@/components/footer";

// Primary font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

// Accent font
const nothingYouCouldDo = Nothing_You_Could_Do({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["400"],
});

// Alternate fonts
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-alternate-1",
  weight: ["300", "400", "500", "600", "700"],
});

const shadowsIntoLightTwo = Shadows_Into_Light_Two({
  subsets: ["latin"],
  variable: "--font-alternate-2",
  weight: ["400"],
});

export const metadata = {
  title: "Tender Counselling",
  description: "Steady support across shifting waters. Megan Yerxa offers trauma-informed counselling, EMDR therapy, and relationship support in Vancouver and across BC.",
  keywords: ["EMDR", "Eye Movement Desensitization and Reprocessing", "Therapy", "Counselling", "Vancouver", "Online Counselling", "Trauma Counselling", "EMDR Counselling Vancouver"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${nothingYouCouldDo.variable} ${quicksand.variable} ${shadowsIntoLightTwo.variable}`}
    >
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body>
        <Header />
        <main className="space-y-10 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
