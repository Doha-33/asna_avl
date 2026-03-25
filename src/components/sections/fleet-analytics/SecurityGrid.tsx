"use client";

interface SecurityItem {
  title: string;
  desc: string;
  icon: any;
}

interface SecurityGridProps {
  title: string;
  items: SecurityItem[];
}

export const SecurityGrid = ({ title, items }: SecurityGridProps) => (
  <section className="py-24 bg-primary text-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-16">{title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-[32px] border border-white/10 relative group hover:bg-white/20 transition-all">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary mb-6">
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-4">{item.title}</h3>
            <p className="text-white/60 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
