"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useConsultation } from "@/context/ConsultationContext";
import {
  ShieldCheck,
  ArrowRight,
  Star,
  Sparkles,
  Heart,
  Clock,
  Home,
  CheckCircle2,
  Activity,
  Brain,
  HandHeart,
  Accessibility,
  Check,
  ChevronRight,
  Stethoscope,
  Award,
  Phone,
} from "lucide-react";

export default function ServicesPage() {
  const { openConsultation } = useConsultation();
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Services" },
    { id: "essentials", label: "Home Care Essentials" },
    { id: "specialist", label: "Specialist & Clinical" },
    { id: "livein", label: "24/7 Live-In Care" },
  ];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-8 md:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCF2F2] border border-[#BDE3E3] text-[#0E6C6E] text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Accredited Healthcare &amp; Professional Personal Care</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#0D1E32] tracking-tight leading-[1.12]">
              Care precisely tailored to your life and clinical needs.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              From daily companionship to complex clinical nursing, we provide expert-led care that preserves dignity, safety, and independence in the comfort of your own home.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => openConsultation()}
                type="button"
                className="px-7 py-3.5 rounded-full bg-[#0E6C6E] hover:bg-[#094E50] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span>Arrange Free Clinical Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:08001234567"
                className="px-6 py-3.5 rounded-full bg-white border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-2xs hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#0E6C6E]" />
                <span>Call 0800 123 4567</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#11253E] text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-700/60 shadow-lg">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-4 h-4" />
              <span>Fast-Track Placement</span>
            </div>
            <h3 className="text-xl font-bold font-heading text-white">
              Emergency Care Start Within 2-24 Hours
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              If a loved one is being discharged from hospital or requires immediate care coverage, our clinical team can deploy verified carers rapidly.
            </p>
            <button
              onClick={() => openConsultation("Emergency Care Coverage")}
              className="w-full py-2.5 rounded-xl bg-[#0E6C6E] hover:bg-teal-700 text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Request Emergency Coverage
            </button>
          </div>
        </div>
      </section>

      {/* 2. FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedFilter === tab.id
                  ? "bg-[#0E6C6E] text-white shadow-xs"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. CATEGORY 01: HOME CARE ESSENTIALS */}
      {(selectedFilter === "all" || selectedFilter === "essentials") && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0E6C6E] block mb-1">
                Category 01
              </span>
              <h2 className="text-3xl font-bold font-heading text-[#0D1E32]">
                Home Care Essentials
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Foundational support for everyday living, ensuring safety, comfort, and emotional well-being at home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Companionship (Spans 2 cols) */}
            <div className="md:col-span-2 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-5 relative aspect-square sm:aspect-auto sm:h-full min-h-[220px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/companionship-card.png"
                  alt="Senior lady and carer smiling over tea"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="sm:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#DCF2F2] text-[#0E6C6E] text-[10px] font-bold uppercase tracking-wider">
                  <span>Social & Emotional</span>
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  Companionship & Wellbeing
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Preventing isolation through meaningful social interaction, shared hobbies, accompanied outings, and empathetic conversation.
                </p>
                <ul className="space-y-1.5 text-xs font-medium text-slate-700">
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-teal-100 text-[#0E6C6E] flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>Accompanying to appointments, shops & community groups</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-teal-100 text-[#0E6C6E] flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>Cognitive stimulation, board games & gentle walks</span>
                  </li>
                </ul>
                <button
                  onClick={() => openConsultation("Companionship Care")}
                  className="text-xs font-bold uppercase tracking-wider text-[#0E6C6E] hover:text-[#094E50] inline-flex items-center gap-1.5 pt-1 cursor-pointer"
                >
                  <span>Arrange Companionship</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 2: Meal Preparation & Domestic */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Meal Prep & Domestic Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Nutritious, home-cooked meal preparation aligned with dietary preferences, light housekeeping, laundry, and grocery shopping.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6C6E]" />
                    <span>Hydration & dietary tracking</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6C6E]" />
                    <span>Kitchen hygiene & pantry stock</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openConsultation("Domestic & Meal Prep Care")}
                className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider hover:bg-[#0E6C6E] hover:text-white hover:border-[#0E6C6E] transition-colors"
              >
                Inquire Now
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 4. CATEGORY 02: SPECIALIST & COMPLEX CLINICAL CARE */}
      {(selectedFilter === "all" || selectedFilter === "specialist") && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0E6C6E] block mb-1">
                Category 02
              </span>
              <h2 className="text-3xl font-bold font-heading text-[#0D1E32]">
                Specialist &amp; Clinical Support
              </h2>
            </div>
            <p className="text-sm text-slate-600 max-w-md">
              Nurse-led medical support, dementia therapies, and palliative care for complex health needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Dementia Care */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-amber-400 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Specialist Dementia Support
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Person-centered memory care designed to reduce anxiety, provide stability, and support families navigating Alzheimer&apos;s and related conditions.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6C6E]" />
                    <span>Consistent dedicated carer teams</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6C6E]" />
                    <span>Sensory and reminiscence therapy</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openConsultation("Dementia Care")}
                className="w-full py-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#0E6C6E] hover:text-white border border-slate-300 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Book Dementia Assessment
              </button>
            </div>

            {/* Card 2: Complex Clinical Care */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-blue-400 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Complex Clinical Care
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Advanced clinical assistance overseen by Registered General Nurses (RGNs) for PEG feeding, catheter care, tracheostomy, and neurological conditions.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6C6E]" />
                    <span>Nurse-supervised medication & vitals</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6C6E]" />
                    <span>Post-stroke & Spinal injury rehabilitation</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openConsultation("Complex Clinical Care")}
                className="w-full py-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#0E6C6E] hover:text-white border border-slate-300 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Discuss Clinical Needs
              </button>
            </div>

            {/* Card 3: Palliative & End-of-Life */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-rose-400 transition-colors">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-800 flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Palliative &amp; End of Life
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sensitive, dignified support prioritizing pain relief, comfort, emotional reassurance, and continuous family support during final stages.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6C6E]" />
                    <span>Symptom control & comfort positioning</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6C6E]" />
                    <span>Multidisciplinary hospice & GP liaison</span>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => openConsultation("Palliative Care")}
                className="w-full py-2.5 rounded-xl bg-[#FAF8F5] hover:bg-[#0E6C6E] hover:text-white border border-slate-300 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Request Sensitive Consultation
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 5. CATEGORY 03: 24/7 LIVE-IN CARE */}
      {(selectedFilter === "all" || selectedFilter === "livein") && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0D1E32] text-white rounded-3xl p-8 sm:p-12 lg:p-14 navy-banner-pattern border border-slate-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E6C6E]/40 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider">
                <Home className="w-3.5 h-3.5" />
                <span>Full-Time Residential Alternative</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
                24/7 Live-In Care in Your Own Cherished Home
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                A dedicated, professional carer lives with you or your loved one, providing continuous support, personal care, cooking, and companionship while maintaining independence in familiar surroundings.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>One-on-one personalized care 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Keep beloved pets & home routines</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Cost-effective for couples care</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>24/7 Registered Nurse on-call</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => openConsultation("24/7 Live-In Care")}
                  className="px-7 py-3.5 rounded-full bg-[#0E6C6E] hover:bg-[#094E50] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Book Free Live-In Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl">
              <Image
                src="/images/luxury-lounge.png"
                alt="Comfortable warm home living room with live-in care support"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
