"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/components/LanguageContext";

export default function BookDemoPage() {
  const router = useRouter();
  const { language } = useLanguage();

  useEffect(() => {
    router.replace(`/${language}/pricing`);
  }, [router, language]);

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
    </div>
  );
}
