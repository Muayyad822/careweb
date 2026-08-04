import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | CareWeb",
  description: "Understand how CareWeb uses cookies and how you can manage your cookie preferences.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      {/* Top Banner */}
      <section className="bg-gradient-to-b from-[#3B1F4A] to-[#2A1535] text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-teal-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-white">
            Cookie Policy
          </h1>
          <p className="text-sm text-slate-300">
            Last updated: 04/08/2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-10">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              1. What Are Cookies?
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Cookies are small text files stored on your device when you visit a website. They help websites function properly and improve user experience.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              2. Cookies We Use
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We may use:
            </p>
            <ul className="space-y-2 text-slate-600 text-sm sm:text-base pl-2">
              <li>
                <strong className="text-slate-900">Strictly necessary cookies</strong> – required for website functionality
              </li>
              <li>
                <strong className="text-slate-900">Analytics cookies</strong> – to understand website usage and performance
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              3. Managing Cookies
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              You can control or delete cookies via your browser settings. Disabling cookies may affect website functionality.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              4. Consent
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              When you first visit our website, you will be asked to consent to non-essential cookies.
            </p>
          </section>

          <hr className="border-slate-100" />

          <div className="pt-2 text-xs text-slate-500">
            For more details regarding data privacy, please review our{" "}
            <Link href="/privacy-policy" className="text-[#0E6C6E] font-semibold hover:underline">
              Privacy Policy
            </Link>
            .
          </div>

        </div>
      </main>
    </div>
  );
}
