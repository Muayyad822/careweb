import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ConsultationProvider } from "@/context/ConsultationContext";
import { ConsultationModal } from "@/components/modals/ConsultationModal";
import { InquiryModal } from "@/components/modals/InquiryModal";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CareWeb | Trusted Domiciliary, Live-In & Complex Healthcare Across the UK",
  description:
    "Excellence in home-based clinical care, personal care, live-in support and specialist dementia care delivered with compassion and integrity across the UK.",
  keywords: [
    "home care",
    "live-in care",
    "specialist dementia care",
    "professional home care",
    "personal care UK",
    "overnight care",
    "clinical care at home",
    "healthcare staffing UK",
    "complex care",
  ],
  icons: {
    icon: "/CarewebLogo.png",
    shortcut: "/CarewebLogo.png",
    apple: "/CarewebLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${plusJakarta.variable} ${outfit.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-[#FAF8F5] text-[#1E293B] antialiased selection:bg-[#0E6C6E]/20 selection:text-[#0E6C6E]">
        <ConsultationProvider>
          <Navbar />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <ConsultationModal />
          <InquiryModal />
        </ConsultationProvider>
      </body>
    </html>
  );
}
