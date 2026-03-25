"use client";

import { CheckCircle2 } from "lucide-react";

export const FeatureItem = ({ text, className = "" }: { text: string, className?: string }) => (
  <div className={`flex items-start gap-3 group ${className}`}>
    <div className="mt-1 bg-accent/20 p-1 rounded-full group-hover:bg-accent/40 transition-colors">
      <CheckCircle2 className="w-4 h-4 text-accent" />
    </div>
    <span className="text-gray-300 group-hover:text-white transition-colors">{text}</span>
  </div>
);
