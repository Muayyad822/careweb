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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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
            <span className="inline-flex items-center gap-2 text-teal-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 pulse-dot" />
              Dedicated Healthcare &amp; Home Support
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
              href="tel:+447448335889"
              className="flex items-center gap-1.5 font-bold text-white hover:text-teal-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400 fill-teal-400" />
              <span>+44 7448 335889</span>
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
          <div className="flex items-center justify-between h-20 sm:h-24">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center group focus:outline-none shrink-0 py-1"
            >
              <img
                src="/CarewebLogo_v4.png"
                alt="CareWeb Logo"
                className="h-13 sm:h-15 md:h-18 w-auto object-contain group-hover:scale-102 transition-transform"
              />
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
                href="tel:+447448335889"
                className="p-2 rounded-lg bg-[#0E6C6E] text-white shadow-xs"
                aria-label="Call emergency hotline"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(true)}
                type="button"
                className="p-2 rounded-lg text-slate-700 hover:text-[#0E6C6E] hover:bg-slate-100 focus:outline-none cursor-pointer"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MOBILE SIDE DRAWER & OVERLAY */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-over Panel from Right (where hamburger is) */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-xs sm:max-w-sm bg-[#FAF8F5] z-50 shadow-2xl flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="p-5 space-y-6">
          {/* Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E8E2D5]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center"
            >
              <img
                src="/CarewebLogo_v4.png"
                alt="CareWeb Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              type="button"
              className="p-2 rounded-full text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 transition-colors focus:outline-none cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Emergency / Helpline Banner */}
          <div className="p-3.5 rounded-2xl bg-[#DCF2F2] border border-[#BDE3E3] space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-[#0E6C6E]">
              <ShieldCheck className="w-4 h-4" />
              <span>24/7 Clinical Support</span>
            </div>
            <a
              href="tel:+447448335889"
              className="text-xs font-extrabold text-[#0D1E32] hover:text-[#0E6C6E] flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#0E6C6E]" />
              <span>+44 7448 335889</span>
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all ${
                    active
                      ? "bg-[#0E6C6E] text-white shadow-xs"
                      : "text-slate-800 hover:bg-slate-100/80 active:bg-slate-200/60"
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight
                    className={`w-4 h-4 ${active ? "text-white" : "text-slate-400"}`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom CTA Actions */}
        <div className="p-5 border-t border-[#E8E2D5] bg-[#F5F1E9]/60 space-y-2.5">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openInquiry();
            }}
            type="button"
            className="w-full py-3.5 rounded-xl border border-slate-300 bg-white text-slate-800 text-xs font-bold uppercase tracking-wider hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
          >
            Quick Inquiry
          </button>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openConsultation();
            }}
            type="button"
            className="w-full py-3.5 rounded-xl bg-[#0E6C6E] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#094E50] transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
