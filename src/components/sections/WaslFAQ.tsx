"use client";

interface FAQItemProps {
  question: string;
  answer: string;
}

interface WaslFAQProps {
  title: string;
  items: FAQItemProps[];
}

const FAQItem = ({ question, answer }: FAQItemProps) => (
  <div className="bg-primary p-8 rounded-3xl border border-white/10 mb-4">
    <h3 className="text-xl font-bold text-white mb-4">{question}</h3>
    <p className="text-white/60 leading-relaxed">{answer}</p>
  </div>
);

export function WaslFAQ({ title, items }: WaslFAQProps) {
  return (
    <section className="py-24 bg-gray-50 text-secondary">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-primary">{title}</h2>
        <div className="space-y-4">
          {items.map((item, i) => (
            <FAQItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
