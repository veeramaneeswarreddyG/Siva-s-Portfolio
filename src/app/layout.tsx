import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Cinzel, Plus_Jakarta_Sans, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const notoSansTelugu = Noto_Sans_Telugu({
  subsets: ["telugu"],
  variable: "--font-noto-telugu",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Custom Telugu Heading Font: Syamala Ramana Regular (Regal, Display, Calligraphic)
const syamalaRamana = localFont({
  src: "./fonts/syamala_ramana_regular.otf",
  variable: "--font-telugu-heading",
  display: "swap",
  weight: "400",
});

// Custom Telugu Body Font: Potti Sreeramulu Regular (Clean, Highly Legible, Graceful)
const pottiSreeramulu = localFont({
  src: "./fonts/potti-sreeramulu-regular.otf",
  variable: "--font-telugu-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sivarami Reddy Gadikota | From Soil to Significance",
  description: "A cinematic legacy portfolio honoring Sivarami Reddy Gadikota, LIC Chief Advisor, Jammalamadugu. A life of quiet perseverance, verified honour, and enduring trust.",
  keywords: ["Sivarami Reddy Gadikota", "LIC Chief Advisor", "Jammalamadugu", "Legacy Portfolio", "LIAFI", "CLIA", "Andhra Pradesh"],
  authors: [{ name: "Gadikota Family Archive" }],
  openGraph: {
    title: "Sivarami Reddy Gadikota | From Soil to Significance",
    description: "Honour is Earned. Legacy is Left Behind. A cinematic journey of work, trust, and legacy.",
    locale: "en_IN",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c1611",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${plusJakarta.variable} ${notoSansTelugu.variable} ${syamalaRamana.variable} ${pottiSreeramulu.variable}`}>
      <body className="bg-soil-900 text-ivory-200 antialiased selection:bg-gold-500 selection:text-soil-900">
        {children}
      </body>
    </html>
  );
}
