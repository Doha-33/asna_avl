"use client";

import { X } from "lucide-react";
import Image from "next/image";

interface Manufacturer {
  name: string;
  logo: string;
}

interface TrackingManufacturersFilterProps {
  title: string;
  clearText: string;
  items: Manufacturer[];
  selectedManufacturer: string | null;
  setSelectedManufacturer: (name: string | null) => void;
}

export function TrackingManufacturersFilter({
  title,
  clearText,
  items,
  selectedManufacturer,
  setSelectedManufacturer
}: TrackingManufacturersFilterProps) {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary">{title}</h2>
        {selectedManufacturer && (
          <button 
            onClick={() => setSelectedManufacturer(null)}
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors font-bold"
          >
            <X className="w-4 h-4" />
            {clearText}
          </button>
        )}
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((m, i) => (
          <button 
            key={i}
            onClick={() => setSelectedManufacturer(m.name)}
            className={`p-8 rounded-[32px] border transition-all flex flex-col items-center gap-4 group ${selectedManufacturer === m.name ? "border-accent bg-accent/5 shadow-lg" : "border-gray-100 hover:border-primary/20"}`}
          >
            <div className="w-20 h-20 relative grayscale group-hover:grayscale-0 transition-all">
              <Image 
                src={m.logo} 
                alt={m.name} 
                fill 
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-bold text-sm text-gray-500 group-hover:text-primary">{m.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
