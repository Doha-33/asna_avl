"use client";

import { Check } from "lucide-react";

interface WaslHowWeHelpProps {
  title: string;
  subtitle: string;
  items: string[];
}

export function WaslHowWeHelp({ title, subtitle, items }: WaslHowWeHelpProps) {
  return (
    <section className="py-24 bg-gray-50 text-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">{title}</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">{subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-primary p-8 rounded-2xl flex items-center gap-6 group hover:bg-primary/90 transition-all">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-primary transition-all">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-lg leading-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
