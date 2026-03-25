"use client";

interface SecurityItem {
  title: string;
  desc: string;
  icon: any;
}

interface InspectionsSecurityGridProps {
  title: string;
  items: SecurityItem[];
}

export const InspectionsSecurityGrid = ({ title, items }: InspectionsSecurityGridProps) => (
  <section className="py-24 bg-primary text-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 relative">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-16">{title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-md p-10 rounded-[32px] text-center hover:bg-white/20 transition-colors border border-white/10">
            <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
              <item.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-white/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
