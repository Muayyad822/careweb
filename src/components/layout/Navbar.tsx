"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useConsultation } from "@/context/ConsultationContext";
import {
  Menu,
  X,
  Phone,
  ShieldCheck,
  Clock,
  ArrowRight,
  Sparkles,
  ChevronRight,
  HeartHandshake,
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { openConsultation, openInquiry } = useConsultation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Career & Jobs", href: "/career" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* 1. TOP ANNOUNCEMENT & URGENT CARE HELPLINE STRIP (OneCall24 Inspired) */}
      <div className="bg-[#0D1E32] text-slate-300 text-xs border-b border-slate-800/80 px-4 sm:px-6 lg:px-8 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left badge & Care Status */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-teal-400 font-semibold bg-[#0E6C6E]/30 px-2.5 py-0.5 rounded-full border border-teal-700/50">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 pulse-dot" />
              Dedicated Healthcare & Home Support
            </span>
            <span className="hidden sm:inline text-slate-400">
              Professional Carers • Fast 2-Hour Rapid Matching
            </span>
          </div>

          {/* Right Direct Emergency Dials */}
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-teal-400" />
              <span className="hidden md:inline">24/7 Clinical Desk:</span>
            </div>
            <a
              href="tel:08001234567"
              className="flex items-center gap-1.5 font-bold text-white hover:text-teal-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400 fill-teal-400" />
              <span>0800 123 4567</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md shadow-md border-b border-[#E8E2D5]"
            : "bg-[#FAF8F5]/90 backdrop-blur-sm border-b border-[#EFECE4]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center group focus:outline-none"
            >
              <div className="relative h-12 w-40 sm:w-44">
                <Image
                  src="/CarewebLogo.png"
                  alt="CareWeb Logo"
                  fill
                  priority
                  className="object-contain object-left group-hover:scale-102 transition-transform"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all relative ${
                      active
                        ? "text-[#0E6C6E] bg-[#DCF2F2]/60"
                        : "text-slate-700 hover:text-[#0E6C6E] hover:bg-slate-100/70"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => openInquiry()}
                type="button"
                className="px-4 py-2.5 rounded-full border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider hover:border-[#0E6C6E] hover:text-[#0E6C6E] hover:bg-white transition-all active:scale-95 cursor-pointer shadow-2xs"
              >
                Quick Inquiry
              </button>
              <button
                onClick={() => openConsultation()}
                type="button"
                className="px-5 py-2.5 rounded-full bg-[#0E6C6E] hover:bg-[#094E50] text-white text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2 group"
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="tel:08001234567"
                className="p-2 rounded-lg bg-[#0E6C6E] text-white shadow-xs"
                aria-label="Call emergency hotline"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="p-2 rounded-lg text-slate-700 hover:text-[#0E6C6E] hover:bg-slate-100 focus:outline-none cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E6E0D4] px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between p-3 rounded-xl bg-[#DCF2F2] border border-[#BDE3E3]">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0E6C6E]">
              <ShieldCheck className="w-4 h-4" />
              <span>Professional Healthcare Team</span>
            </div>
            <a
              href="tel:08001234567"
              className="text-xs font-bold text-[#0E6C6E] underline flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              0800 123 4567
            </a>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-xl text-base font-semibold transition-colors ${
                    active
                      ? "bg-[#0E6C6E] text-white"
                      : "text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${active ? "text-white" : "text-slate-400"}`} />
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openInquiry();
              }}
              type="button"
              className="w-full py-3 rounded-xl border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors"
            >
              Quick Inquiry
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultation();
              }}
              type="button"
              className="w-full py-3 rounded-xl bg-[#0E6C6E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#094E50] transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
