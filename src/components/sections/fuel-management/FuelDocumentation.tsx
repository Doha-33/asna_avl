"use client";

import { CheckCircle2 } from "lucide-react";

interface FuelDocumentationProps {
  title: string;
  description: string;
  features: string[];
}

export const FuelDocumentation = ({ title, description, features }: FuelDocumentationProps) => (
  <section className="py-24 bg-white text-secondary">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-primary">{title}</h2>
      <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-16">
        {description}
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center group hover:border-accent transition-all">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
              <CheckCircle2 className="w-6 h-6 text-accent group-hover:text-primary" />
            </div>
            <p className="font-bold text-base text-primary">{f}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
