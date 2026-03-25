"use client";

import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface OrganizationFAQProps {
  items: FAQItem[];
}

const FAQItemComponent = ({ question, answer }: FAQItem) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-primary p-8 rounded-3xl border border-white/10 mb-4"
  >
    <h3 className="text-xl font-bold text-white mb-4">{question}</h3>
    <p className="text-white/60 leading-relaxed">{answer}</p>
  </motion.div>
);

export function OrganizationFAQ({ items }: OrganizationFAQProps) {
  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <FAQItemComponent key={i} {...item} />
      ))}
    </div>
  );
}
