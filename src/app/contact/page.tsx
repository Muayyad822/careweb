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
  Loader2,
  AlertCircle,
} from "lucide-react";
import confetti from "canvas-confetti";
import { submitForm } from "@/lib/formSubmit";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Personal Care",
    urgency: "Soon",
    postcode: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const res = await submitForm({
      subject: `New Care Enquiry: ${formData.name} (${formData.service})`,
      data: {
        "Full Name": formData.name,
        "Phone Number": formData.phone,
        "Email Address": formData.email,
        "Care Service": formData.service,
        "Urgency / Timeframe": formData.urgency,
        "Postcode / Area": formData.postcode || "Not specified",
        "Clinical Notes / Message": formData.message || "None provided",
      },
    });

    setIsSubmitting(false);

    if (res.success) {
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0e6c6e", "#14b8a6", "#fbbf24"],
      });
    } else {
      setErrorMessage(res.message || "Failed to send inquiry. Please try again or call us.");
    }
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* 1. HERO SECTION */}
      <section className="pt-8 md:pt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
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

      {/* 2. CONSULTATION FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md">
          <div className="space-y-2 border-b border-slate-100 pb-6 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-slate-900">
              Speak with a Clinical Coordinator
            </h2>
            <p className="text-sm text-slate-600">
              Fill in your details below and our registered team will get in touch promptly to discuss your care requirements.
            </p>
          </div>
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
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit &amp; Request Callback</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </section>

      {/* 3. MAP AND CONTACT DETAILS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#3B1F4A] tracking-tight">
            Map and contact details
          </h2>
          <p className="text-sm text-slate-600">
            Find our registered office in Wolverhampton or get in touch directly with our clinical coordinators.
          </p>
        </div>

        {/* 3-Column Info Cards (Above the Map) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs space-y-2">
            <h3 className="text-xl font-bold font-heading text-[#3B1F4A]">
              CareWeb Limited
            </h3>
            <div className="text-sm text-slate-700 leading-relaxed space-y-0.5">
              <p>32 Greenock Crescent</p>
              <p>Wolverhampton</p>
              <p className="font-semibold text-slate-900">WV4 6BJ</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs space-y-2">
            <h3 className="text-xl font-bold font-heading text-[#3B1F4A]">
              Telephone
            </h3>
            <div>
              <a
                href="tel:+447448335889"
                className="text-lg font-bold text-[#0E6C6E] hover:underline"
              >
                +44 7448 335889
              </a>
              <p className="text-xs text-slate-500 mt-1">
                24/7 direct clinical coordinator line
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-slate-200 shadow-xs space-y-2">
            <h3 className="text-xl font-bold font-heading text-[#3B1F4A]">
              Enquiries
            </h3>
            <div>
              <a
                href="mailto:info@carewebhealthcare.com"
                className="text-base font-bold text-[#0E6C6E] hover:underline break-all"
              >
                info@carewebhealthcare.com
              </a>
              <p className="text-xs text-slate-500 mt-1">
                Fast response guarantee under 2 hours
              </p>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Map */}
        <div className="w-full h-96 sm:h-[460px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 relative">
          <iframe
            title="CareWeb Limited Office Location Map"
            src="https://maps.google.com/maps?q=32%20Greenock%20Crescent,%20Wolverhampton,%20WV4%206BJ&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
