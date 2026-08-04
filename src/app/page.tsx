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
  UserCheck,
  CalendarCheck,
  CheckCircle2,
  Phone,
  ChevronLeft,
  ChevronRight,
  Activity,
  Award,
  Stethoscope,
  Brain,
  Home,
  Users,
  Compass,
  FileCheck,
  Plus,
  Minus,
  Search,
  MapPin,
} from "lucide-react";

export default function HomePage() {
  const { openConsultation, openInquiry } = useConsultation();
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Quick Care Matcher state
  const [selectedCategory, setSelectedCategory] = useState("Personal Care");
  const [selectedUrgency, setSelectedUrgency] = useState("Within 48 hours");
  const [postcode, setPostcode] = useState("");

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleMatcherSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openConsultation(`${selectedCategory} (${selectedUrgency}, Postcode: ${postcode || "Not provided"})`);
  };

  const careCategories = [
    {
      id: "personal-care",
      title: "Personal Care & Daily Support",
      icon: Sparkles,
      tag: "Foundational Care",
      colorBadge: "bg-[#DCF2F2] text-[#0E6C6E] border-[#BDE3E3]",
      description:
        "Assistance with morning and evening routines, bathing, dressing, medication management, and nutritional support in the comfort of home.",
      features: [
        "Dignified hygiene & personal grooming",
        "Prescription & medication administration",
        "Nutritious meal preparation & hydration",
        "Mobility & gentle exercise assistance",
      ],
      image: "/images/kitchen-care.png",
    },
    {
      id: "dementia-care",
      title: "Specialist Dementia & Memory Care",
      icon: Brain,
      tag: "Specialist Clinical",
      colorBadge: "bg-amber-50 text-amber-800 border-amber-200",
      description:
        "Therapeutic memory support designed to maintain cognitive stimulation, daily familiarity, and emotional comfort in safe surroundings.",
      features: [
        "Consistent, familiar dedicated carers",
        "Sensory & reminiscence therapy activities",
        "Safety management & wander prevention",
        "Compassionate routine preservation",
      ],
      image: "/images/hero-carer-senior.png",
    },
    {
      id: "live-in-care",
      title: "24/7 Live-In Care Support",
      icon: Home,
      tag: "Full-Time Resident",
      colorBadge: "bg-teal-50 text-teal-800 border-teal-200",
      description:
        "A dedicated, professional live-in carer residing in your home to provide continuous round-the-clock assistance and genuine companionship.",
      features: [
        "One-on-one personalized attention 24/7",
        "Alternative to residential care homes",
        "Couples care & domestic management",
        "24/7 clinical coordinator oversight",
      ],
      image: "/images/companionship-card.png",
    },
    {
      id: "complex-care",
      title: "Complex Clinical & Nursing Care",
      icon: Stethoscope,
      tag: "Nurse-Led",
      colorBadge: "bg-blue-50 text-blue-800 border-blue-200",
      description:
        "Clinical care delivered under registered nurse oversight for tracheostomy, PEG feeding, catheter care, stoma support, and neurological conditions.",
      features: [
        "Registered nurse (RGN) supervision",
        "Post-stroke & neurological rehabilitation",
        "Ventilator & airway management",
        "Direct liaison with NHS multidisciplinary teams",
      ],
      image: "/images/care-team-portrait.png",
    },
    {
      id: "respite-care",
      title: "Respite & Hospital Discharge",
      icon: Clock,
      tag: "Rapid Dispatch",
      colorBadge: "bg-emerald-50 text-emerald-800 border-emerald-200",
      description:
        "Flexible short-term support giving family caregivers a well-deserved rest, or providing fast-track assistance following hospital discharge.",
      features: [
        "Fast-track emergency start within 2 hours",
        "Post-operative reablement plans",
        "Temporary relief for primary family carers",
        "Prevent hospital readmission",
      ],
      image: "/images/wheelchair-support.png",
    },
    {
      id: "palliative-care",
      title: "Palliative & End-of-Life Care",
      icon: Heart,
      tag: "Compassionate Support",
      colorBadge: "bg-rose-50 text-rose-800 border-rose-200",
      description:
        "Empathetic, sensitive end-of-life care focused on pain management, comfort, dignity, and holistic emotional support for the entire family.",
      features: [
        "Symptom & pain relief management",
        "Close coordination with district nurses & hospices",
        "Dignified spiritual & emotional family support",
        "24-hour dedicated clinical helpline",
      ],
      image: "/images/hands-care.png",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Free Needs Assessment",
      subtitle: "Within 24 Hours",
      desc: "Our registered clinical manager visits you at home or consults via video call to understand your specific medical, lifestyle, and emotional preferences.",
    },
    {
      num: "02",
      title: "Personalized Care Plan",
      subtitle: "Bespoke & Transparent",
      desc: "We co-design a detailed care routine tailored around your schedule, dietary preferences, clinical needs, and family dynamics with transparent pricing.",
    },
    {
      num: "03",
      title: "Dedicated Carer Matching",
      subtitle: "Compatibility First",
      desc: "We handpick qualified, DBS-vetted carers based not only on clinical competence but on shared hobbies, personality compatibility, and warm temperament.",
    },
    {
      num: "04",
      title: "Continuous 24/7 Quality Review",
      subtitle: "Peace of Mind",
      desc: "Regular supervisory visits, digital family updates, and proactive plan adjustments ensure your care consistently meets the highest quality standards.",
    },
  ];

  const testimonials = [
    {
      quote:
        "The team at CareWeb didn't just care for my mother, they became part of our family. Their clinical oversight and genuine warmth gave us peace of mind during her dementia diagnosis.",
      author: "Sarah Walker",
      role: "Daughter of client • London",
      initials: "SW",
      stars: 5,
      service: "Specialist Dementia Care",
    },
    {
      quote:
        "Finding a reliable live-in carer was our biggest anxiety. CareWeb matched us with Sarah within 24 hours. She is knowledgeable, patient, and truly kind to my father.",
      author: "James Wilson",
      role: "Family Sponsor • Surrey",
      initials: "JW",
      stars: 5,
      service: "24/7 Live-In Care",
    },
    {
      quote:
        "The clinical excellence shown during my post-op recovery was outstanding. The carers were punctual, deeply respectful, and helped me regain full mobility at my own pace.",
      author: "Robert Thompson",
      role: "Post-Op Client • Manchester",
      initials: "RT",
      stars: 5,
      service: "Rehabilitation & Personal Care",
    },
  ];

  const faqs = [
    {
      q: "How quickly can CareWeb arrange home care support?",
      a: "For urgent situations (such as hospital discharges or sudden loss of primary care), our rapid-response team can arrange an assessment and deploy qualified carers within 2 to 24 hours. For planned care, we conduct a comprehensive in-home assessment at a time convenient for your family.",
    },
    {
      q: "How are CareWeb carers vetted and trained?",
      a: "Every CareWeb carer undergoes rigorous Enhanced DBS checks, full employment verification, reference audits, and completes our accredited Platinum Healthcare Training curriculum covering dementia support, medication administration, moving & handling, and safeguarding.",
    },
    {
      q: "How do you guarantee quality and safety in your care delivery?",
      a: "Our clinical care practices, safety protocols, management oversight, and staff qualifications are held to the highest national healthcare standards, backed by regular supervisory audits and transparent family reporting.",
    },
    {
      q: "Will we always have the same dedicated carers?",
      a: "Yes. Continuity of care is central to our philosophy. We assign a small, consistent team of dedicated carers so that genuine relationships, trust, and deep understanding of daily routines develop naturally.",
    },
    {
      q: "How does funding for home care work in the UK?",
      a: "We support both private funding and local authority direct payments / NHS Continuing Healthcare (CHC) funding. Our care advisory team will happily explain available funding pathways during your free consultation.",
    },
  ];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HERO SECTION WITH ONE-CALL24 & LIZOR CARE INSPIRATION */}
      <section className="pt-8 md:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#0D1E32] tracking-tight leading-[1.12]">
              Compassionate Care in the{" "}
              <span className="text-[#0E6C6E] underline decoration-[#C9933B]/40 decoration-4 underline-offset-4">
                Comfort
              </span>{" "}
              of Your Own Home
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              From daily personal care and companionship to complex clinical nursing and live-in support. We combine clinical precision with familial warmth so your loved ones live with dignity and independence.
            </p>

            {/* Main CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => openConsultation()}
                type="button"
                className="px-7 py-3.5 rounded-full bg-[#0E6C6E] hover:bg-[#094E50] text-white text-sm font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center gap-2.5 group"
              >
                <span>Arrange Free Home Visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                href="/services"
                className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-sm font-semibold shadow-2xs transition-all active:scale-95 text-center"
              >
                Explore All Services
              </Link>
            </div>

            {/* Trust & Social Proof Row */}
            <div className="flex flex-wrap items-center gap-6 pt-3">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#0E6C6E] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    CW
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#0D1E32] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    99%
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-[#C9933B] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    5★
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-600 font-semibold mt-0.5">
                    Rated Excellent by 500+ UK Families
                  </p>
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Clock className="w-4 h-4 text-[#0E6C6E]" />
                <span>Rapid Response Under 2 Hours</span>
              </div>
            </div>
          </div>

          {/* Right Column Hero Image with Floating Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/4.5] w-full max-w-md mx-auto">
              <Image
                src="/images/hero-carer-senior.png"
                alt="Compassionate carer with senior client enjoying warm conversation"
                fill
                priority
                className="object-cover"
              />

              {/* Floating Quality Assurance Card */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-[#DCF2F2] text-[#0E6C6E] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-900 font-heading">
                      Quality Assured Provider
                    </h4>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs text-slate-500">
                    100% Enhanced DBS & Nurse-Led Supervision
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 1.1 INTERACTIVE QUICK CARE MATCHER BAR (OneCall24-Inspired) */}
        {/* <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E6C6E] block">
                Instant Care Recommendation
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0D1E32]">
                Find the Right Care Plan for Your Loved One
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Select your care requirements below for instant matching with our local clinical team.
            </p>
          </div>

          <form onSubmit={handleMatcherSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 items-end">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                1. Service Needed
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-slate-300 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:border-[#0E6C6E] cursor-pointer"
              >
                <option value="Personal Care">Personal Care & Hygiene</option>
                <option value="Specialist Dementia Care">Dementia & Alzheimer&apos;s</option>
                <option value="24/7 Live-In Care">24/7 Live-In Care</option>
                <option value="Complex Clinical Care">Complex Clinical Nursing</option>
                <option value="Respite & Hospital Discharge">Respite / Hospital Discharge</option>
                <option value="Palliative Care">Palliative & End of Life</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                2. When is care required?
              </label>
              <select
                value={selectedUrgency}
                onChange={(e) => setSelectedUrgency(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-slate-300 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:border-[#0E6C6E] cursor-pointer"
              >
                <option value="Urgent (Within 2-24 Hours)">Urgent (Within 2-24 Hours)</option>
                <option value="Within 48 hours">Within 48 hours</option>
                <option value="Within 1-2 weeks">Within 1-2 weeks</option>
                <option value="Exploring options / Future planning">Exploring options / Future</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. UK Town or Postcode
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. W14, SW1, Manchester"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="w-full bg-[#FAF8F5] border border-slate-300 rounded-xl pl-9 pr-3.5 py-3 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#0E6C6E]"
                />
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-[#0E6C6E] hover:bg-[#094E50] text-white py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Find Matched Care</span>
              </button>
            </div>
          </form>
        </div> */}
      </section>

      {/* 2. UK ACCREDITATIONS & HEALTHCARE TRUST STRIP */}
      <section className="bg-[#11253E] text-white py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-400 block mb-1">
              Independent Clinical Governance
            </span>
            <h3 className="text-2xl font-bold font-heading text-white">
              Regulated to the Highest National UK Care Standards
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-[#0D1E32]/80 border border-slate-700/60 rounded-2xl p-6 space-y-2 hover:border-teal-500/50 transition-colors">
              <ShieldCheck className="w-8 h-8 text-teal-400 mx-auto" />
              <h4 className="font-bold text-sm text-white font-heading">Quality Assured</h4>
              <p className="text-xs text-slate-400">Strict clinical standards & regular supervisory oversight</p>
            </div>

            <div className="bg-[#0D1E32]/80 border border-slate-700/60 rounded-2xl p-6 space-y-2 hover:border-teal-500/50 transition-colors">
              <Award className="w-8 h-8 text-amber-400 mx-auto" />
              <h4 className="font-bold text-sm text-white font-heading">UKHCA Member</h4>
              <p className="text-xs text-slate-400">Committed to the Homecare Association Code of Practice</p>
            </div>

            <div className="bg-[#0D1E32]/80 border border-slate-700/60 rounded-2xl p-6 space-y-2 hover:border-teal-500/50 transition-colors">
              <UserCheck className="w-8 h-8 text-teal-400 mx-auto" />
              <h4 className="font-bold text-sm text-white font-heading">100% Enhanced DBS</h4>
              <p className="text-xs text-slate-400">Full background vetting & ongoing clinical supervision</p>
            </div>

            <div className="bg-[#0D1E32]/80 border border-slate-700/60 rounded-2xl p-6 space-y-2 hover:border-teal-500/50 transition-colors">
              <Stethoscope className="w-8 h-8 text-amber-400 mx-auto" />
              <h4 className="font-bold text-sm text-white font-heading">NHS Alignment</h4>
              <p className="text-xs text-slate-400">Seamless coordination with GPs, OTs & Hospital Discharge</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SPECIALIST CARE CATEGORIES (OneCall24-Inspired Bento Grid) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0D1E32]">
              Specialist Domiciliary &amp; Clinical Services
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-md leading-relaxed">
            Every care plan is custom-built around individual medical requirements, daily habits, and emotional well-being.
          </p>
        </div>

        {/* 6-Card Bento Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm sector-card-hover overflow-hidden flex flex-col justify-between group"
              >
                {/* Card Top / Image Banner */}
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${cat.colorBadge}`}>
                        {cat.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 text-white">
                      <div className="w-9 h-9 rounded-xl bg-[#0E6C6E] text-white flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold font-heading text-white leading-tight">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cat.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                        Key Inclusions:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {cat.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6C6E] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => openConsultation(cat.title)}
                    type="button"
                    className="w-full py-3 rounded-xl bg-[#FAF8F5] hover:bg-[#0E6C6E] text-slate-800 hover:text-white border border-slate-300/80 hover:border-[#0E6C6E] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group/btn"
                  >
                    <span>Inquire About {cat.title.split(" ")[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. THE 4-STEP CARE JOURNEY (Lizor Care-Inspired) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF8F5] border border-[#E8E2D5] rounded-3xl p-8 sm:p-12 lg:p-16 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0E6C6E] block">
              Clear, Transparent & Compassionate
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0D1E32]">
              How We Work: Your 4-Step Journey to Peace of Mind
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Arranging care can feel overwhelming. We make the entire process effortless, reassuring, and completely transparent from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs relative flex flex-col justify-between space-y-4 hover:border-teal-400 transition-colors group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold font-heading text-[#0E6C6E]">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#DCF2F2] text-[#0E6C6E]">
                      {step.subtitle}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#0E6C6E]">
                  <span>Step {idx + 1} of 4</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => openConsultation()}
              type="button"
              className="px-8 py-4 rounded-full bg-[#0E6C6E] hover:bg-[#094E50] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer inline-flex items-center gap-2"
            >
              <span>Begin Your Free Assessment Today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. HIGH-IMPACT PERFORMANCE STATS MATRIX (OneCall24-Inspired) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0D1E32] rounded-3xl p-8 sm:p-12 text-white navy-banner-pattern border border-slate-800 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-700/60">
            <div className="space-y-1 pt-4 md:pt-0">
              <span className="text-4xl sm:text-5xl font-extrabold font-heading text-teal-400 block">
                &lt; 2h
              </span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Emergency Dispatch
              </h4>
              <p className="text-xs text-slate-400">Rapid response for urgent crisis care</p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <span className="text-4xl sm:text-5xl font-extrabold font-heading text-white block">
                100%
              </span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Fully DBS &amp; Vetted
              </h4>
              <p className="text-xs text-slate-400">Strict background and clinical checks</p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <span className="text-4xl sm:text-5xl font-extrabold font-heading text-amber-400 block">
                98.6%
              </span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Family Satisfaction
              </h4>
              <p className="text-xs text-slate-400">Consistently rated 5 stars by families</p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0">
              <span className="text-4xl sm:text-5xl font-extrabold font-heading text-teal-400 block">
                500+
              </span>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                Families Supported
              </h4>
              <p className="text-xs text-slate-400">Across Greater London &amp; UK regions</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0E6C6E] block mb-1">
              Real Family Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0D1E32]">
              What Families Say About CareWeb
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setActiveTestimonialIdx(
                  (prev) => (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="p-2.5 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length)
              }
              className="p-2.5 rounded-full border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-1.5 text-amber-500">
              {[...Array(testimonials[activeTestimonialIdx].stars)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E6C6E] ml-2 px-2.5 py-0.5 rounded-full bg-[#DCF2F2]">
                {testimonials[activeTestimonialIdx].service}
              </span>
            </div>

            <blockquote className="text-xl sm:text-2xl font-medium font-heading text-[#0D1E32] leading-relaxed">
              &ldquo;{testimonials[activeTestimonialIdx].quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-3.5 pt-2 border-t border-slate-100">
              <div className="w-11 h-11 rounded-full bg-[#0E6C6E] text-white font-bold flex items-center justify-center text-sm">
                {testimonials[activeTestimonialIdx].initials}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm font-heading">
                  {testimonials[activeTestimonialIdx].author}
                </h4>
                <p className="text-xs text-slate-500">
                  {testimonials[activeTestimonialIdx].role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. DUAL PATHWAY BANNER: FAMILIES VS CARERS (OneCall24-Inspired) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Box 1: For Families */}
          <div className="bg-[#FAF8F5] border-2 border-[#0E6C6E]/20 rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-sm hover:border-[#0E6C6E] transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#DCF2F2] text-[#0E6C6E] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-[#0D1E32]">
                Looking for Care for a Loved One?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Receive personalized guidance from our registered clinical coordinators. We design bespoke domiciliary, dementia, and live-in care plans tailored to your loved one&apos;s routine.
              </p>
            </div>
            <button
              onClick={() => openConsultation()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#0E6C6E] hover:bg-[#094E50] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book a Free Home Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Box 2: For Carers / Recruitment */}
          <div className="bg-[#0D1E32] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6 shadow-sm hover:border-slate-600 transition-all">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-900/60 text-teal-300 flex items-center justify-center border border-teal-700/50">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">
                Join Our Award-Winning Healthcare Team
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                We offer industry-leading pay rates (£12.50 - £15.00/hr or £38k-£44k for nurses), accredited clinical training, flexible rotas, and an empowering healthcare community.
              </p>
            </div>
            <Link
              href="/career"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Carer Jobs &amp; Apply</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0E6C6E] block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-bold font-heading text-[#0D1E32]">
            Everything You Need to Know About Arranging Care
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 font-heading hover:text-[#0E6C6E] transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
