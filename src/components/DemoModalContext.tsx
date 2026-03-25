"use client";

import React, { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "./LanguageContext";

interface DemoModalContextType {
  openDemoModal: () => void;
  closeDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export const DemoModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { language } = useLanguage();

  const openDemoModal = () => {
    router.push(`/${language}/pricing`);
  };
  const closeDemoModal = () => {};

  return (
    <DemoModalContext.Provider value={{ openDemoModal, closeDemoModal }}>
      {children}
    </DemoModalContext.Provider>
  );
};

export const useDemoModal = () => {
  const context = useContext(DemoModalContext);
  if (context === undefined) {
    throw new Error("useDemoModal must be used within a DemoModalProvider");
  }
  return context;
};
