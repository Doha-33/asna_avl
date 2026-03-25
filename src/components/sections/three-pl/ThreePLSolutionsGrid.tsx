"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

interface SolutionItem {
  image: string;
  title: string;
  desc: string;
  icon: any;
}

interface ThreePLSolutionsGridProps {
  solutions: SolutionItem[];
}

const SolutionCard = ({ image, title, desc, icon: Icon }: SolutionItem) => {
  const { language } = useLanguage();
  const isAr = language === "ar";
  return (
    <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col h-full group">
      <div className="relative h-48 bg-gray-50 overflow-hidden">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8 flex flex-col flex-grow text-secondary">
        <h3 className="text-xl font-extrabold text-primary mb-4">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-6">{desc}</p>
        <button className="mt-auto flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors">
          <span>{isAr ? "اعرف المزيد" : "Learn More"}</span>
          {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
};

export const ThreePLSolutionsGrid = ({ solutions }: ThreePLSolutionsGridProps) => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((sol, i) => (
          <SolutionCard key={i} {...sol} />
        ))}
      </div>
    </div>
  </section>
);
