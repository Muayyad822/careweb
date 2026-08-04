"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Personal Care",
    urgency: "Soon",
    postcode: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#0e6c6e", "#14b8a6", "#fbbf24"],
    });
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-8 md:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCF2F2] border border-[#BDE3E3] text-[#0E6C6E] text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5" />
            <span>24/7 Clinical Support Available</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#0D1E32] tracking-tight leading-[1.12]">
            We&apos;re here to support you,{" "}
            <span className="text-[#0E6C6E] underline decoration-[#C9933B]/40 decoration-4 underline-offset-4">
              every step
            </span>{" "}
            of the way.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Speak with a registered clinical care coordinator today for honest, compassionate advice with zero obligation.
          </p>
        </div>
      </section>

      {/* 2. CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Details & Emergency Desk */}
          <div className="lg:col-span-5 space-y-6">
            {/* 24/7 Emergency Care Card */}
            <div className="bg-[#0D1E32] text-white rounded-3xl p-7 sm:p-8 navy-banner-pattern border border-slate-800 shadow-xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/80 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-700/50">
                <span className="w-2 h-2 rounded-full bg-teal-400 pulse-dot" />
                <span>Urgent Care Desk</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-white">
                Need Immediate Care Support?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                If you require crisis cover, emergency respite, or immediate hospital discharge support, call our dedicated clinical coordinator team directly.
              </p>
              <div className="pt-2">
                <a
                  href="tel:08001234567"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0E6C6E] hover:bg-[#094E50] text-white text-sm font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 0800 123 4567 (Free)</span>
                </a>
              </div>
            </div>

            {/* Office & Operations Card */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#0E6C6E] font-heading">
                Contact Information
              </h4>

              <div className="space-y-4 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#DCF2F2] text-[#0E6C6E] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                      Head Office
                    </h5>
                    <p className="text-xs text-slate-600 mt-0.5">
                      124 Care Gardens, West Kensington, London, W14 8AS
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#DCF2F2] text-[#0E6C6E] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                      Clinical Enquiries
                    </h5>
                    <p className="text-xs text-slate-600 mt-0.5">
                      clinical@careweb.co.uk
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#DCF2F2] text-[#0E6C6E] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                      Office Hours
                    </h5>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Mon – Sun: 07:00 – 21:00 (Emergency desk active 24/7)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#0E6C6E]">
                <ShieldCheck className="w-4 h-4" />
                <span>Accredited &amp; Fully Insured UK Care Provider</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-teal-100 text-[#0E6C6E] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-slate-900">
                    Enquiry Sent Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Our registered clinical coordinator will review your request and contact you within 30 minutes.
                  </p>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-[#0E6C6E] text-white text-xs font-bold uppercase tracking-wider"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0E6C6E] block">
                      Fast 30-Minute Callback
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-[#0D1E32]">
                      Send Us a Message or Book an Assessment
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. David Miller"
                        className="w-full bg-[#FAF8F5] border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0E6C6E]"
                      />
                    </div>

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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                        placeholder="e.g. david@example.com"
                        className="w-full bg-[#FAF8F5] border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#0E6C6E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Care Required
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full bg-[#FAF8F5] border border-slate-300 rounded-xl px-3.5 py-3 text-sm focus:outline-none focus:border-[#0E6C6E] cursor-pointer"
                      >
                        <option value="Personal Care">Personal Care</option>
                        <option value="Dementia Care">Dementia Care</option>
                        <option value="Live-In Care">24/7 Live-In Care</option>
                        <option value="Complex Clinical">Complex Clinical</option>
                        <option value="Respite Care">Respite Care</option>
                        <option value="Palliative Care">Palliative Care</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Client Postcode
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
                      How Can We Help? (Medical details, preferred visit times, etc.)
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Please let us know any specific clinical needs, schedule preferences, or questions..."
                      className="w-full bg-[#FAF8F5] border border-slate-300 rounded-xl p-4 text-sm focus:outline-none focus:border-[#0E6C6E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0E6C6E] hover:bg-[#094E50] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit &amp; Request Callback</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
