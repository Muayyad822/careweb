"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useConsultation } from "@/context/ConsultationContext";
import {
  ShieldCheck,
  Heart,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  Stethoscope,
  Sparkles,
  Target,
  FileCheck,
  Phone,
} from "lucide-react";

export default function AboutPage() {
  const { openConsultation } = useConsultation();

  const values = [
    {
      icon: Heart,
      title: "Uncompromising Compassion",
      desc: "We treat every client as our own family, listening deeply to their wishes and honoring their independence every single day.",
    },
    {
      icon: Stethoscope,
      title: "Clinical Excellence",
      desc: "Our nurse-led protocols, ongoing training, and clinical audits ensure the safest, highest-standard medical and personal care.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Transparency",
      desc: "No hidden charges, open communication with family members, and complete compliance with national healthcare standards.",
    },
    {
      icon: Award,
      title: "Continuous Innovation",
      desc: "Using modern digital care management to keep families informed in real-time while empowering our carers to excel.",
    },
  ];

  const leadership = [
    {
      name: "Dr. Eleanor Davies",
      role: "Clinical Director & Registered Nurse (RGN)",
      desc: "20+ years NHS and private community healthcare leadership specializing in palliative and complex neuro-rehabilitation.",
    },
    {
      name: "Marcus Vance",
      role: "Head of Care Operations",
      desc: "Former senior healthcare quality director with 15 years experience designing person-centered home care delivery networks.",
    },
    {
      name: "Amina Al-Mansoor",
      role: "Head of Carer Training & Quality Assurance",
      desc: "Leads our accredited training academy ensuring all carers exceed National Minimum Training standards.",
    },
  ];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-8 md:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCF2F2] border border-[#BDE3E3] text-[#0E6C6E] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story &amp; Purpose</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#0D1E32] tracking-tight leading-[1.12]">
              Compassion is at the{" "}
              <span className="text-[#0E6C6E] underline decoration-[#C9933B]/40 decoration-4 underline-offset-4">
                heart
              </span>{" "}
              of our care.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Founded by healthcare clinicians who believed that home care should be as clinically rigorous as it is compassionate. Today, CareWeb supports hundreds of families across the UK with unwavering dignity.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => openConsultation()}
                type="button"
                className="px-7 py-3.5 rounded-full bg-[#0E6C6E] hover:bg-[#094E50] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full bg-white border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-2xs hover:bg-slate-50 transition-all"
              >
                Contact Our Clinical Team
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3.8] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/care-team-portrait.png"
              alt="CareWeb clinical care team portrait"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. 5 KEY CLINICAL QUALITY PILLARS */}
      <section className="bg-[#11253E] text-white py-14 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 block">
              Quality Assurance Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              The 5 Pillars of Our Clinical Governance
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {["Safe", "Effective", "Caring", "Responsive", "Well-Led"].map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#0D1E32] border border-slate-700/60 rounded-2xl p-5 space-y-2 hover:border-teal-400/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-teal-900/60 text-teal-300 mx-auto flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-sm text-white font-heading">{pillar}</h4>
                <p className="text-[11px] text-slate-400">
                  Strictly monitored against national healthcare benchmarks
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0E6C6E] block">
            What Drives Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0D1E32]">
            Our Guiding Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs space-y-4 hover:border-teal-500 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#DCF2F2] text-[#0E6C6E] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. LEADERSHIP & CLINICAL DIRECTORS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0E6C6E] block mb-1">
              Clinical Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0D1E32]">
              Meet Our Governance Team
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Our registered managers, clinical nurses, and care coordinators hold over 50 years of collective UK healthcare experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-[#0E6C6E] text-white flex items-center justify-center font-bold text-lg font-heading">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#0E6C6E]">{member.role}</p>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                  {member.desc}
                </p>
              </div>

              <div className="pt-3 flex items-center gap-1.5 text-xs text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0E6C6E]" />
                <span>Registered Care Lead</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BOTTOM CONSULTATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D1E32] text-white rounded-3xl p-8 sm:p-12 navy-banner-pattern border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400 block">
              Speak With A Care Specialist
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Ready to discuss care for yourself or a loved one?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Our clinical advisory desk is available 24/7 for confidential, obligation-free guidance.
            </p>
          </div>
          <button
            onClick={() => openConsultation()}
            className="px-8 py-4 rounded-full bg-[#0E6C6E] hover:bg-[#094E50] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            Arrange Free Home Visit
          </button>
        </div>
      </section>
    </div>
  );
}
