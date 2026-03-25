"use client";

import { CheckCircle2 } from "lucide-react";

interface MaintenanceType {
  title: string;
  icon: any;
  colorClass: string;
  features: string[];
}

interface MaintenanceTypesGridProps {
  title: string;
  types: MaintenanceType[];
}

const MaintenanceTypeCard = ({ title, icon: Icon, features, colorClass }: MaintenanceType) => (
  <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
    <div className="flex items-center gap-4 mb-8">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${colorClass}`}>
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-2xl font-bold text-primary">{title}</h3>
    </div>
    <div className="space-y-4">
      {features.map((f, i) => (
        <div key={i} className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <span className="text-gray-600 text-sm leading-relaxed">{f}</span>
        </div>
      ))}
    </div>
  </div>
);

export const MaintenanceTypesGrid = ({ title, types }: MaintenanceTypesGridProps) => (
  <section className="py-24 bg-gray-50 text-secondary">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-16 text-primary">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {types.map((type, i) => (
          <MaintenanceTypeCard key={i} {...type} />
        ))}
      </div>
    </div>
  </section>
);
