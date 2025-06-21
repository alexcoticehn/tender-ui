import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tender Counselling",
  description: "A warm, welcoming space for healing and growth.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-[#f9f5f0] text-[#3e3e3e]")}> 
        <Navbar />
        <main className="pt-20 px-4 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
