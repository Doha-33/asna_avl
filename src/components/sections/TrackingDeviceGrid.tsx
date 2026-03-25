"use client";

import { Check } from "lucide-react";
import Image from "next/image";

interface Tag {
  text: string;
  color: string;
}

interface Device {
  image: string;
  title: string;
  tags: Tag[];
  features: string[];
}

interface TrackingDeviceGridProps {
  devices: Device[];
}

const DeviceCard = ({ image, title, tags, features }: Device) => (
  <div className="bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col h-full group">
    <div className="relative h-64 bg-gray-50 flex items-center justify-center p-8 overflow-hidden">
      <Image 
        src={image} 
        alt={title} 
        width={300} 
        height={200} 
        className="object-contain group-hover:scale-110 transition-transform duration-500"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-8 flex flex-col flex-grow">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span key={i} className={`text-[10px] font-bold px-3 py-1 rounded-full ${tag.color}`}>
            {tag.text}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-extrabold text-primary mb-6">{title}</h3>
      <div className="space-y-3 mt-auto">
        {features.map((f, i) => (
          <div key={i} className="flex items-start gap-2">
            <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
            <span className="text-gray-600 text-sm">{f}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export function TrackingDeviceGrid({ devices }: TrackingDeviceGridProps) {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {devices.map((device, i) => (
          <DeviceCard key={i} {...device} />
        ))}
      </div>
    </div>
  );
}
