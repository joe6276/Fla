import type { Metadata } from "next";
import { Montserrat, Allura } from "next/font/google";
import "./globals.css";

const sans = Montserrat({ subsets: ["latin"], variable: "--font-sans", weight: ["400", "500", "600", "700", "800", "900"] });
const script = Allura({ subsets: ["latin"], variable: "--font-script", weight: "400" });

export const metadata: Metadata = {
  title: "Future Labs Africa | Equip Talent, Shape Tomorrow",
  description:
    "Partner with us to hire Africa's top tech talent. We train professionals in LLM Engineering, Agentic AI, Full-Stack Development, DevOps and Cloud Computing.",
  keywords: ["African tech talent", "AI engineers Kenya", "LLM training Africa", "fullstack developers", "DevOps engineers", "tech recruitment Africa"],
  authors: [{ name: "Future Labs Africa" }],
  openGraph: {
    title: "Future Labs Africa - Equip Talent, Shape Tomorrow",
    description: "Partner with us to access Africa's top AI and tech talent. 5000+ graduates trained in cutting-edge technologies.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
