"use client";

import React, { createContext, useContext, useState } from "react";

interface ConsultationContextType {
  isConsultationOpen: boolean;
  isInquiryOpen: boolean;
  preselectedService: string;
  openConsultation: (service?: string) => void;
  closeConsultation: () => void;
  openInquiry: (service?: string) => void;
  closeInquiry: () => void;
}

const ConsultationContext = createContext<ConsultationContextType | undefined>(
  undefined
);

export function ConsultationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  const openConsultation = (service?: string) => {
    if (service) setPreselectedService(service);
    setIsConsultationOpen(true);
  };

  const closeConsultation = () => {
    setIsConsultationOpen(false);
  };

  const openInquiry = (service?: string) => {
    if (service) setPreselectedService(service);
    setIsInquiryOpen(true);
  };

  const closeInquiry = () => {
    setIsInquiryOpen(false);
  };

  return (
    <ConsultationContext.Provider
      value={{
        isConsultationOpen,
        isInquiryOpen,
        preselectedService,
        openConsultation,
        closeConsultation,
        openInquiry,
        closeInquiry,
      }}
    >
      {children}
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const context = useContext(ConsultationContext);
  if (!context) {
    throw new Error(
      "useConsultation must be used within a ConsultationProvider"
    );
  }
  return context;
}
