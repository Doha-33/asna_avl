"use client";

interface CapabilityItem {
  title: string;
  desc: string;
  icon: any;
  highlight?: boolean;
}

interface ThreePLCapabilitiesGridProps {
  title: string;
  subtitle: string;
  items: CapabilityItem[];
}

const CapabilityCard = ({ title, desc, icon: Icon, highlight = false }: CapabilityItem) => (
  <div className={`p-8 rounded-[32px] border transition-all ${highlight ? "bg-primary text-white border-white/10 shadow-2xl" : "bg-white text-secondary border-gray-100 shadow-sm"}`}>
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${highlight ? "bg-white/10 text-accent" : "bg-primary/5 text-primary"}`}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-extrabold mb-4">{title}</h3>
    <p className={`text-sm leading-relaxed ${highlight ? "text-white/70" : "text-gray-500"}`}>{desc}</p>
  </div>
);

export const ThreePLCapabilitiesGrid = ({ title, subtitle, items }: ThreePLCapabilitiesGridProps) => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-6">{title}</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {items.map((cap, i) => (
          <CapabilityCard key={i} {...cap} />
        ))}
      </div>
    </div>
  </section>
);
