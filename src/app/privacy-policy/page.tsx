import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CareWeb",
  description: "Learn how CareWeb / Lizor Care Ltd collects, protects, and manages your personal data under UK GDPR.",
};

export default function PrivacyPolicyPage() {
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
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="text-sm font-medium text-teal-300 uppercase tracking-wide">
              (UK GDPR COMPLIANT)
            </p>
          </div>
          <p className="text-sm text-slate-300">
            Last updated: 10/02/2026
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-10">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              1. Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Lizor Care Ltd is committed to protecting your privacy and personal data. This policy explains how we collect, use, and protect your information in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              2. Data Controller
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Lizor Care Ltd is the data controller responsible for your personal data.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              3. Personal Data We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We may collect:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-sm sm:text-base pl-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>Information submitted via contact or enquiry forms</li>
              <li>IP address and website usage data</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              4. How We Collect Data
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We collect data when you:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-sm sm:text-base pl-2">
              <li>Complete a form on our website</li>
              <li>Contact us by email or phone</li>
              <li>Browse our website (via cookies and analytics)</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              5. Lawful Basis for Processing
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We process personal data based on:
            </p>
            <ul className="space-y-2 text-slate-600 text-sm sm:text-base pl-2">
              <li>
                <strong className="text-slate-900">Consent</strong> – when you submit an enquiry
              </li>
              <li>
                <strong className="text-slate-900">Legitimate interests</strong> – to respond to enquiries and improve services
              </li>
              <li>
                <strong className="text-slate-900">Legal obligation</strong> – where required by law
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              6. How We Use Your Data
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Your data is used to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-sm sm:text-base pl-2">
              <li>Respond to enquiries</li>
              <li>Provide information about our services</li>
              <li>Improve website functionality</li>
              <li>Meet legal and regulatory obligations</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              7. Data Sharing
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We do not sell your data. We may share data with:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-sm sm:text-base pl-2">
              <li>IT and website service providers</li>
              <li>Regulatory authorities where required by law</li>
            </ul>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base pt-1">
              All third parties are required to protect your data.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              8. Data Retention
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Personal data is retained only for as long as necessary for the purpose collected or as required by law.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              9. Your Rights
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Under UK GDPR, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-600 text-sm sm:text-base pl-2">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
              <li>Object to processing</li>
              <li>Lodge a complaint with the ICO</li>
            </ul>
            <div className="pt-2">
              <a
                href="https://ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E6C6E] hover:underline"
              >
                ICO website: https://ico.org.uk
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* Section 10 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              10. Data Security
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We use appropriate technical and organisational measures to protect personal data against loss, misuse, or unauthorised access.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* Section 11 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              11. Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              If you have questions about this policy or your data, please contact us using the details on our website or via our{" "}
              <Link href="/contact" className="text-[#0E6C6E] font-semibold hover:underline">
                Contact Page
              </Link>
              .
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
