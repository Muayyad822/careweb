import React from "react";
import Link from "next/link";
import { HeartHandshake, Phone, Mail, ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safeguarding Statement | CareWeb",
  description: "Our commitment to safeguarding and promoting the welfare of vulnerable adults.",
};

export default function SafeguardingPage() {
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
            Safeguarding Statement
          </h1>
          <p className="text-sm text-slate-300">
            Commitment to safe, respectful, and dignified care across all our services.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-10">
          
          {/* Statement Intro */}
          <div className="bg-[#FAF5FF] border border-purple-100 rounded-2xl p-6 sm:p-8 flex items-start gap-4">
            <HeartHandshake className="w-8 h-8 text-[#3B1F4A] shrink-0 mt-1" />
            <p className="text-slate-800 font-medium text-base sm:text-lg leading-relaxed">
              CareWeb Ltd is committed to safeguarding and promoting the welfare of vulnerable adults.
            </p>
          </div>

          {/* Our Commitment */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              Our Commitment
            </h2>
            <ul className="space-y-3 text-slate-700 text-sm sm:text-base pl-2">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0E6C6E] mt-2 shrink-0" />
                <span>We follow safeguarding legislation and best practices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0E6C6E] mt-2 shrink-0" />
                <span>All staff receive safeguarding training</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#0E6C6E] mt-2 shrink-0" />
                <span>Concerns are taken seriously and acted upon promptly</span>
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* Reporting Concerns */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold font-heading text-[#3B1F4A]">
              Reporting Concerns
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Safeguarding concerns can be raised confidentially via our contact details.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-[#0E6C6E] font-bold text-xs uppercase tracking-wider">
                  <Phone className="w-4 h-4" />
                  Direct Telephone
                </div>
                <a
                  href="tel:07803465205"
                  className="text-base font-bold text-slate-900 hover:text-[#0E6C6E] transition-colors block"
                >
                  +44 7448 335889
                </a>
                <p className="text-xs text-slate-500">
                  24/7 clinical &amp; safeguarding desk
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 text-[#0E6C6E] font-bold text-xs uppercase tracking-wider">
                  <Mail className="w-4 h-4" />
                  Email Support
                </div>
                <a
                  href="mailto:info@carewebhealthcare.com"
                  className="text-base font-bold text-slate-900 hover:text-[#0E6C6E] transition-colors block break-all"
                >
                  info@carewebhealthcare.com
                </a>
                <p className="text-xs text-slate-500">
                  Confidential inbox
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[#0E6C6E] hover:bg-[#094E50] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
              >
                Go to Contact &amp; Enquiries
              </Link>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
