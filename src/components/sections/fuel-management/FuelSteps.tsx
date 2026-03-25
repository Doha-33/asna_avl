"use client";

interface StepItem {
  step: string;
  title: string;
  desc: string;
}

interface FuelStepsProps {
  title: string;
  items: StepItem[];
}

export const FuelSteps = ({ title, items }: FuelStepsProps) => (
  <section className="py-24 bg-primary text-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-16">{title}</h2>
      <div className="grid md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-[32px] border border-white/10 relative group hover:bg-white/20 transition-all">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary font-black text-2xl mb-6">
              {item.step}
            </div>
            <h3 className="text-lg font-bold mb-4">{item.title}</h3>
            <p className="text-white/60 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
