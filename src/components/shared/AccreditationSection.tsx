"use client";

interface AccreditationSectionProps {
  title: string;
  logos?: string[]; // If we want to use images instead of text
}

export const AccreditationSection = ({ title }: AccreditationSectionProps) => {
  return (
    <section className="py-12 bg-white/5 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-8 font-bold">{title}</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="text-2xl font-black">TGA</div>
          <div className="text-2xl font-black">TAMM</div>
          <div className="text-2xl font-black">WASL</div>
          <div className="text-2xl font-black">SFDA</div>
        </div>
      </div>
    </section>
  );
};
