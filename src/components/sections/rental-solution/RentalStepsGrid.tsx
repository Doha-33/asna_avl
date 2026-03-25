"use client";

interface StepItem {
  number: string;
  title: string;
  desc: string;
}

interface RentalStepsGridProps {
  title: string;
  subtitle: string;
  items: StepItem[];
}

const StepCard = ({ number, title, desc }: StepItem) => (
  <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-4 hover:shadow-md transition-all">
    <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-lg">
      {number}
    </div>
    <h3 className="text-lg font-extrabold text-primary">{title}</h3>
    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
  </div>
);

export const RentalStepsGrid = ({ title, subtitle, items }: RentalStepsGridProps) => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-extrabold text-primary mb-6">{title}</h2>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((step, i) => (
          <StepCard key={i} {...step} />
        ))}
      </div>
    </div>
  </section>
);
