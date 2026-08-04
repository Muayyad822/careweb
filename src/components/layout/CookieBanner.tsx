"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X, Settings2, Check } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

  useEffect(() => {
    // Check if user has already set cookie preference
    const consent = localStorage.getItem("careweb_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "careweb_cookie_consent",
      JSON.stringify({ essential: true, analytics: true, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem(
      "careweb_cookie_consent",
      JSON.stringify({ essential: true, analytics: false, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem(
      "careweb_cookie_consent",
      JSON.stringify({ essential: true, analytics: analyticsEnabled, timestamp: new Date().toISOString() })
    );
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-8 duration-500"
    >
      <div className="bg-[#0D1E32]/95 backdrop-blur-md text-white rounded-3xl p-6 shadow-2xl border border-slate-700/80 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold font-heading text-white">
                We Value Your Privacy
              </h2>
              <span className="text-xs text-slate-400">
                UK GDPR &amp; Cookie Compliance
              </span>
            </div>
          </div>
          <button
            onClick={handleEssentialOnly}
            className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
            title="Dismiss with essential cookies only"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Text */}
        {!showPreferences ? (
          <p className="text-xs text-slate-300 leading-relaxed">
            We use strictly necessary cookies to ensure our website functions correctly, and optional analytics cookies to help us improve our care services. You can read more in our{" "}
            <Link href="/cookie-policy" className="text-teal-300 underline hover:text-teal-200 font-medium">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-teal-300 underline hover:text-teal-200 font-medium">
              Privacy Policy
            </Link>
            .
          </p>
        ) : (
          /* Preferences Panel */
          <div className="space-y-3 pt-2 text-xs">
            <div className="bg-slate-800/60 rounded-2xl p-3.5 border border-slate-700/50 flex items-center justify-between gap-3">
              <div>
                <span className="font-semibold text-white block">Strictly Necessary</span>
                <span className="text-[11px] text-slate-400">Required for core functionality and security</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 font-bold text-[10px] uppercase">
                Always Active
              </span>
            </div>

            <div className="bg-slate-800/60 rounded-2xl p-3.5 border border-slate-700/50 flex items-center justify-between gap-3">
              <div>
                <span className="font-semibold text-white block">Analytics &amp; Performance</span>
                <span className="text-[11px] text-slate-400">Helps us understand website usage to improve care</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={analyticsEnabled}
                  onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#0E6C6E]"></div>
              </label>
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="space-y-2 pt-1">
          {!showPreferences ? (
            <>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#0E6C6E] hover:bg-[#094E50] text-white font-bold text-xs shadow-md transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  Accept All
                </button>
                <button
                  type="button"
                  onClick={handleEssentialOnly}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-all text-center"
                >
                  Essential Only
                </button>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="w-full text-center text-[11px] text-slate-400 hover:text-teal-300 transition-colors py-1 flex items-center justify-center gap-1"
              >
                <Settings2 className="w-3 h-3" />
                Customize Preferences
              </button>
            </>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleSaveCustom}
                className="w-full py-2.5 px-3 rounded-xl bg-[#0E6C6E] hover:bg-[#094E50] text-white font-bold text-xs shadow-md transition-all text-center"
              >
                Save Preferences
              </button>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-all text-center"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
