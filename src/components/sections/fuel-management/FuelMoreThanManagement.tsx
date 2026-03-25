"use client";

interface MoreItem {
  title: string;
  icon: any;
}

interface FuelMoreThanManagementProps {
  title: string;
  items: MoreItem[];
}

export const FuelMoreThanManagement = ({ title, items }: FuelMoreThanManagementProps) => (
  <section className="py-24 bg-white text-secondary">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-16 text-primary">{title}</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {items.map((item, i) => (
          <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center hover:border-accent transition-all">
            <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-bold text-primary">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);
