"use client";

import React, { useState, useEffect } from "react";
import { useConsultation } from "@/context/ConsultationContext";
import { X, Calendar, CheckCircle2, Phone, User, Clock, ShieldCheck, Heart, ArrowRight, Sparkles, Loader2, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { submitForm } from "@/lib/formSubmit";

export function ConsultationModal() {
  const { isConsultationOpen, closeConsultation, preselectedService } =
    useConsultation();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [service, setService] = useState("");
  const [careFor, setCareFor] = useState("parent");
  const [urgency, setUrgency] = useState("soon");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    postcode: "",
    notes: "",
  });

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  useEffect(() => {
    if (isConsultationOpen) {
      setStep(1);
      setErrorMessage("");
    }
  }, [isConsultationOpen]);

  if (!isConsultationOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const res = await submitForm({
      subject: `New Care Consultation: ${formData.name} (${service || "General Care"})`,
      data: {
        "Full Name": formData.name,
        "Phone Number": formData.phone,
        "Email Address": formData.email,
        "Service Required": service || "General Consultation",
        "Care Recipient": careFor === "parent" ? "Parent" : careFor === "spouse" ? "Spouse / Partner" : careFor === "relative" ? "Other Relative" : "Myself",
        "Urgency": urgency === "immediate" ? "Immediate / Urgent" : urgency === "soon" ? "Within Next 2-4 Weeks" : "Exploring Options / Future",
        "Postcode / Area": formData.postcode,
        "Notes & Requirements": formData.notes || "None provided",
      },
    });

    setIsSubmitting(false);

    if (res.success) {
      setStep(3);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0e6c6e", "#14b8a6", "#fbbf24"],
      });
    } else {
      setErrorMessage(res.message || "Failed to submit booking. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden relative">
        {/* Header */}
        <div className="bg-[#0E6C6E] text-white p-6 relative">
          <button
            onClick={closeConsultation}
            className="absolute top-5 right-5 text-teal-100 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <h3 className="text-2xl font-bold font-heading">Book a Free Care Consultation</h3>
          <p className="text-teal-100 text-xs sm:text-sm mt-1">
            Speak with a clinical care coordinator for confidential, tailored advice.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Who requires care?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "parent", label: "My Parent" },
                    { id: "partner", label: "My Partner" },
                    { id: "myself", label: "Myself" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setCareFor(option.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider border text-center transition-all cursor-pointer ${
                        careFor === option.id
                          ? "bg-[#0E6C6E] text-white border-[#0E6C6E] shadow-xs"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  What service is required?
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E6C6E]"
                >
                  <option value="">Select a primary service...</option>
                  <option value="Personal Care">Personal Care & Hygiene</option>
                  <option value="Specialist Dementia Care">Specialist Dementia & Memory Support</option>
                  <option value="Live-in Care">24/7 Live-in Care</option>
                  <option value="Complex Clinical Care">Complex Clinical Nursing</option>
                  <option value="Overnight / Respite Care">Overnight & Respite Care</option>
                  <option value="Companionship & Housekeeping">Companionship & Housekeeping</option>
                  <option value="Post-Operative Recovery">Post-Operative Recovery</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  How quickly is care needed?
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "urgent", label: "Within 2-24 Hours" },
                    { id: "soon", label: "Within 2 Weeks" },
                    { id: "planning", label: "Planning Ahead" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setUrgency(option.id)}
                      className={`py-2.5 px-2 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                        urgency === option.id
                          ? "bg-[#0E6C6E] text-white border-[#0E6C6E] shadow-xs"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3.5 rounded-xl bg-[#0E6C6E] hover:bg-[#094E50] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continue to Step 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Full name"
                    className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E6C6E]"
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
                    placeholder="07123 456789"
                    className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E6C6E]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
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
                    placeholder="name@example.com"
                    className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E6C6E]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Client Postcode *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.postcode}
                    onChange={(e) =>
                      setFormData({ ...formData, postcode: e.target.value })
                    }
                    placeholder="e.g. W14 8AS"
                    className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E6C6E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Specific Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  placeholder="Any mobility concerns, medical diagnosis, or preferred times..."
                  className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0E6C6E]"
                />
              </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => setStep(1)}
                      className="py-3 px-4 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 disabled:opacity-50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 py-3 rounded-xl bg-[#0E6C6E] hover:bg-[#094E50] disabled:bg-[#0E6C6E]/70 disabled:cursor-not-allowed text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <span>Confirm Consultation Booking</span>
                      )}
                    </button>
                  </div>
                </form>
          )}

          {step === 3 && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-teal-100 text-[#0E6C6E] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold font-heading text-slate-900">
                Consultation Request Confirmed
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, {formData.name}. Our registered clinical care coordinator will call you shortly on {formData.phone} to finalize your assessment.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={closeConsultation}
                  className="px-6 py-2.5 rounded-full bg-[#0E6C6E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#094E50]"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
