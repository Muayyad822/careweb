import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Phone,
  MapPin,
  Globe,
  Share2,
  Award,
  Heart,
  Clock,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D1E32] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Emergency CTA Strip */}
        <div className="bg-[#11253E] border border-slate-700/60 rounded-3xl p-6 sm:p-8 mb-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Need urgent care support within the next 24 hours?
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Our clinical care coordinators are on standby 24/7 to provide immediate guidance, match dedicated carers, and arrange emergency respite or post-hospital discharge support.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <a
              href="tel:+447448335889"
              className="px-6 py-3.5 rounded-full bg-[#0E6C6E] hover:bg-[#094E50] text-white text-xs font-bold uppercase tracking-wider text-center shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +44 7448 335889</span>
            </a>
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-block bg-white px-5 py-3 rounded-2xl hover:bg-slate-50 transition-all shadow-sm"
            >
              <img
                src="/CarewebLogo_v4.png"
                alt="CareWeb Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              Excellence in home-based clinical care, live-in support, and specialist dementia care delivered with empathy and professional integrity across the UK.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-teal-400 font-semibold text-xs bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800">
                <ShieldCheck className="w-4 h-4" />
                Quality Assured Healthcare
              </span>
            </div>
          </div>

          {/* Core Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-heading">
              Our Care Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Personal Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Specialist Dementia Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  24/7 Live-In Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Complex Clinical Support
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Respite & Hospital Discharge
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Palliative & End-of-Life
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-heading">
              Company & Careers
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About CareWeb
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-white transition-colors">
                  Join Our Carer Team
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-white transition-colors">
                  Current Vacancies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Office Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 font-heading">
              Clinical Contact
            </h4>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  32 Greenock Crescent, Wolverhampton, WV4 6BJ
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="tel:+447448335889" className="text-white font-bold hover:text-teal-300 transition-colors">
                  +44 7448 335889
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <a href="mailto:info@carewebhealthcare.com" className="text-xs hover:text-teal-300 transition-colors">
                  info@carewebhealthcare.com
                </a>
              </div>
              <div className="pt-2">
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                      Response Guarantee
                    </span>
                    <span className="text-teal-400 font-bold">Under 2 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Policies and Registered Office Strip */}
        <div className="py-6 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-teal-300 transition-colors text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-teal-300 transition-colors text-slate-300">
              Cookie Policy
            </Link>
            <Link href="/safeguarding" className="hover:text-teal-300 transition-colors text-slate-300">
              Safeguarding Statement
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-teal-300 transition-colors text-slate-300">
              Terms and Conditions
            </Link>
          </div>
          <div className="text-slate-400 text-xs">
             <p>
            © {new Date().getFullYear()} CareWeb Limited. Dedicated to Excellence in Home Care. All Rights Reserved.
          </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
