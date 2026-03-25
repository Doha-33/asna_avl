"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

interface FuelMapProps {
  title: string;
  isAr: boolean;
}

export const FuelMap = ({ title, isAr }: FuelMapProps) => (
  <section className="py-24 bg-gray-50 text-secondary">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-16 text-primary">{title}</h2>
      <div className="bg-white p-4 rounded-[40px] shadow-xl border border-gray-100 overflow-hidden h-[500px] relative">
        <Image 
          src="https://picsum.photos/seed/saudi-map/1200/800" 
          alt="Supported Stations Map" 
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
           <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-2xl shadow-2xl border border-white/20">
              <p className="text-primary font-bold text-lg flex items-center gap-2">
                <MapPin className="text-accent" />
                {isAr ? "أكثر من 2000 محطة مدعومة في جميع أنحاء المملكة" : "Over 2000 supported stations across the Kingdom"}
              </p>
           </div>
        </div>
      </div>
    </div>
  </section>
);
