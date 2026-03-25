"use client";

interface CompatibilityItem {
  title: string;
  icon: any;
}

interface FuelCompatibilityProps {
  title: string;
  items: CompatibilityItem[];
}

export const FuelCompatibility = ({ title, items }: FuelCompatibilityProps) => (
  <section className="py-24 bg-gray-50 text-secondary">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-16 text-primary">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 flex flex-col items-center">
            <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6">
              <item.icon className="w-10 h-10 text-accent" />
            </div>
            <h3 className="text-xl font-bold text-primary">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);
