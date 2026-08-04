"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  Clock,
  PoundSterling,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
  Briefcase,
  MapPin,
  Send,
  FileCheck,
  Sparkles,
  Loader2,
  AlertCircle,
} from "lucide-react";
import confetti from "canvas-confetti";
import { submitForm } from "@/lib/formSubmit";

export default function CareerPage() {
  const [selectedRole, setSelectedRole] = useState("all");
  const [applied, setApplied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Health Care Assistant",
    experience: "1-3 years",
    postcode: "",
    notes: "",
  });

  const vacancies = [
    {
      id: "hca-london",
      title: "Health Care Assistant (Domiciliary)",
      category: "carer",
      location: "Greater London (Various Boroughs)",
      salary: "£13.50 – £16.00 / hour",
      type: "Full-Time / Part-Time",
      description:
        "Providing compassionate personal care, meal preparation, and companionship to clients in their own homes. Full training provided.",
      requirements: [
        "Passionate, empathetic, and reliable",
        "Right to work in the UK",
        "Driving license preferred but not required for local walking rotas",
      ],
    },
    {
      id: "livein-carer",
      title: "24/7 Live-In Carer (Rotational)",
      category: "livein",
      location: "London, Surrey & Home Counties",
      salary: "£850 – £1,100 / week",
      type: "2 Weeks On / 2 Weeks Off (Flexible)",
      description:
        "Reside with a client to provide 24/7 care, companionship, and daily living support with dedicated daily breaks and private accommodation.",
      requirements: [
        "Minimum 6 months care experience",
        "Enhanced DBS will be processed",
        "Warm, respectful, and adaptable nature",
      ],
    },
    {
      id: "rgn-nurse",
      title: "Registered General Nurse (RGN / Complex Care)",
      category: "nursing",
      location: "London & Home Counties",
      salary: "£24.00 – £32.00 / hour (£42k - £48k equiv)",
      type: "Full-Time / Bank Shifts",
      description:
        "Overseeing complex clinical packages including tracheostomy care, PEG feeding, palliative medication administration, and clinical audits.",
      requirements: [
        "Valid NMC PIN registration",
        "Minimum 12 months clinical nursing experience",
        "Strong leadership and assessment skills",
      ],
    },
    {
      id: "senior-carer",
      title: "Senior Care Coordinator / Field Supervisor",
      category: "coordinator",
      location: "West London Office & Community",
      salary: "£28,000 – £33,000 / year",
      type: "Full-Time Permanent",
      description:
        "Conducting new client assessments, quality audits, carer spot-checks, and ensuring clinical excellence across all home care packages.",
      requirements: [
        "NVQ Level 3 in Health & Social Care (or working towards)",
        "Minimum 2 years supervisory experience",
        "Full UK driving license & own vehicle",
      ],
    },
  ];

  const benefits = [
    {
      icon: PoundSterling,
      title: "Industry-Leading Pay",
      desc: "Above National Living Wage, with enhanced weekend and bank holiday rates, plus paid travel allowance.",
    },
    {
      icon: GraduationCap,
      title: "Accredited Clinical Training",
      desc: "Fully funded Care Certificate, NVQ Level 2-5 qualifications, and specialist dementia/clinical certifications.",
    },
    {
      icon: Clock,
      title: "Flexible Rotas & Shifts",
      desc: "Full-time, part-time, weekend, or live-in rotations tailored around your lifestyle and family commitments.",
    },
    {
      icon: Award,
      title: "Rewards & NHS Discounts",
      desc: "Employee of the month bonuses, pension scheme, and access to Blue Light healthcare discount schemes.",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const res = await submitForm({
      recipient: "careers",
      subject: `New Job Application: ${formData.name} - ${formData.role}`,
      data: {
        "Applicant Name": formData.name,
        "Email Address": formData.email,
        "Phone Number": formData.phone,
        "Position Applied For": formData.role,
        "Location / Postcode": formData.postcode || "Not specified",
        "Experience & Notes": formData.notes || "None provided",
      },
    });

    setIsSubmitting(false);

    if (res.success) {
      setApplied(true);
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ["#0e6c6e", "#14b8a6", "#fbbf24"],
      });
    } else {
      setErrorMessage(res.message || "Failed to submit application. Please try again.");
    }
  };

  const filteredVacancies =
    selectedRole === "all"
      ? vacancies
      : vacancies.filter((v) => v.category === selectedRole);

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-8 md:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#0D1E32] tracking-tight leading-[1.12]">
              Build a rewarding career where your compassion is{" "}
              <span className="text-[#0E6C6E] underline decoration-[#C9933B]/40 decoration-4 underline-offset-4">
                valued
              </span>
              .
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Join a supportive, values-driven healthcare family. We offer industry-leading pay, accredited clinical progression, and genuine respect for every healthcare professional on our team.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#vacancies"
                className="px-7 py-3.5 rounded-full bg-[#0E6C6E] hover:bg-[#094E50] text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <span>View Open Positions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#apply-fast"
                className="px-6 py-3.5 rounded-full bg-white border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-2xs hover:bg-slate-50 transition-all"
              >
                Fast-Track Application
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative aspect-[4/3.5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/career-nurse-hero.png"
              alt="CareWeb nurse holding clinical tablet in modern care center"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. WHY WORK WITH US / BENEFITS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0E6C6E] block">
            Carer Benefits &amp; Culture
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#0D1E32]">
            Why Healthcare Professionals Choose CareWeb
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs space-y-4 hover:border-teal-500 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#DCF2F2] text-[#0E6C6E] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-heading text-slate-900">
                  {b.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. CURRENT VACANCIES LISTING (OneCall24-Inspired) */}
      <section id="vacancies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0E6C6E] block mb-1">
              Live Vacancies
            </span>
            <h2 className="text-3xl font-bold font-heading text-[#0D1E32]">
              Current Open Positions
            </h2>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {[
              { id: "all", label: "All Roles" },
              { id: "carer", label: "Care Assistants" },
              { id: "livein", label: "Live-In Carers" },
              { id: "nursing", label: "Nurses (RGN)" },
              { id: "coordinator", label: "Coordinators" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedRole(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedRole === tab.id
                    ? "bg-[#0E6C6E] text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredVacancies.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:border-teal-500 transition-colors"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-0.5 rounded-full bg-[#DCF2F2] text-[#0E6C6E] text-xs font-bold uppercase tracking-wider">
                    {job.type}
                  </span>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-0.5 rounded-full border border-emerald-200">
                    {job.salary}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0D1E32]">
                  {job.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span>{job.location}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {job.description}
                </p>
                <div className="pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Requirements:
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6C6E] shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:shrink-0 flex flex-col gap-2">
                <a
                  href="#apply-fast"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, role: job.title }))
                  }
                  className="px-6 py-3 rounded-xl bg-[#0E6C6E] hover:bg-[#094E50] text-white text-xs font-bold uppercase tracking-wider text-center transition-colors shadow-xs"
                >
                  Apply For Role
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. FAST-TRACK APPLICATION FORM */}
      <section id="apply-fast" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0E6C6E] block">
              Quick 2-Minute Application
            </span>
            <h2 className="text-3xl font-bold font-heading text-[#0D1E32]">
              Start Your CareWeb Journey
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Submit your details below and our recruitment coordinator will contact you within 24 hours.
            </p>
          </div>

          {applied ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-teal-100 text-[#0E6C6E] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-900">
                Application Received!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, {formData.name || "Candidate"}. Our recruitment team has received your application for {formData.role} and will be in touch shortly for an interview.
              </p>
              <button
                type="button"
                onClick={() => setApplied(false)}
                className="px-6 py-2.5 rounded-full bg-[#0E6C6E] text-white text-xs font-bold uppercase tracking-wider"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Rachel Adams"
                    className="w-full bg-[#FAF8F5] border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0E6C6E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. rachel@example.com"
                    className="w-full bg-[#FAF8F5] border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0E6C6E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="e.g. 07123 456789"
                    className="w-full bg-[#FAF8F5] border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0E6C6E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Position of Interest
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full bg-[#FAF8F5] border border-slate-300 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-[#0E6C6E] cursor-pointer"
                  >
                    <option value="Health Care Assistant (Domiciliary)">
                      Health Care Assistant
                    </option>
                    <option value="24/7 Live-In Carer">Live-In Carer</option>
                    <option value="Registered General Nurse (RGN)">
                      Registered Nurse (RGN)
                    </option>
                    <option value="Senior Care Coordinator">
                      Senior Coordinator
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Postcode / Location
                  </label>
                  <input
                    type="text"
                    value={formData.postcode}
                    onChange={(e) =>
                      setFormData({ ...formData, postcode: e.target.value })
                    }
                    placeholder="e.g. W14 8AS"
                    className="w-full bg-[#FAF8F5] border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0E6C6E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Brief Summary of Experience or Qualifications
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Tell us about your previous care experience, NVQ qualifications, or driving status..."
                  className="w-full bg-[#FAF8F5] border border-slate-300 rounded-xl p-4 text-sm focus:outline-none focus:border-[#0E6C6E]"
                />
              </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#0E6C6E] hover:bg-[#094E50] disabled:bg-[#0E6C6E]/70 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Application...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Fast-Track Application</span>
                      </>
                    )}
                  </button>
                </form>
          )}
        </div>
      </section>
    </div>
  );
}
