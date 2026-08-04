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
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D1E32] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Emergency CTA Strip */}
        <div className="bg-[#11253E] border border-slate-700/60 rounded-3xl p-6 sm:p-8 mb-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E6C6E]/40 border border-teal-500/40 text-teal-300 text-xs font-bold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>24/7 Rapid Emergency Response</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
              Need urgent care support within the next 24 hours?
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              Our clinical care coordinators are on standby 24/7 to provide immediate guidance, match dedicated carers, and arrange emergency respite or post-hospital discharge support.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <a
              href="tel:08001234567"
              className="px-6 py-3.5 rounded-full bg-[#0E6C6E] hover:bg-[#094E50] text-white text-xs font-bold uppercase tracking-wider text-center shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call 0800 123 4567</span>
            </a>
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold uppercase tracking-wider text-center border border-slate-600/50 transition-all flex items-center justify-center gap-2"
            >
              <span>Request Fast Callback</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-block bg-white px-4 py-2.5 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              <div className="relative h-9 w-40">
                <Image
                  src="/CarewebLogo.png"
                  alt="CareWeb Logo"
                  fill
                  className="object-contain"
                />
              </div>
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
                  124 Care Gardens, West Kensington, London, W14 8AS
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-white font-bold">0800 123 4567</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="text-xs">clinical@careweb.co.uk</span>
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

        {/* Accreditations Strip */}
        <div className="py-6 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5 text-teal-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              Accredited Care Providers
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              UKHCA Registered
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              Skills for Care Endorsed
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
              Enhanced DBS Checked Staff
            </span>
          </div>
          <div className="text-slate-400 text-xs">
            Headquarters: London • Services Across Greater London, Manchester & Home Counties
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} CareWeb UK Ltd. Dedicated to Excellence in Home Care. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/about" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/about" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
