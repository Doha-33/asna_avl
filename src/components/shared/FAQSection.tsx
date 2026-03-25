"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { fetchApi, FAQ } from "@/lib/api";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-start group"
      >
        <span className="text-lg font-bold group-hover:text-accent transition-colors">{question}</span>
        {isOpen ? <Minus className="w-5 h-5 text-accent" /> : <Plus className="w-5 h-5 text-gray-500" />}
      </button>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="pb-6 text-gray-400 leading-relaxed"
        >
          {answer}
        </motion.div>
      )}
    </div>
  );
};

interface FAQSectionProps {
  title: string;
  items?: FAQItemProps[];
  className?: string;
}

export const FAQSection = ({ title, items: initialItems, className = "" }: FAQSectionProps) => {
  const { language } = useLanguage();
  const [items, setItems] = useState<FAQItemProps[]>(initialItems || []);
  const [loading, setLoading] = useState(!initialItems);

  useEffect(() => {
    if (!initialItems) {
      const loadFAQs = async () => {
        const data = await fetchApi("/api/fqa");
        if (data) {
          const formattedItems = data.map((faq: FAQ) => ({
            question: language === "ar" ? faq.questionAr : faq.questionEn,
            answer: language === "ar" ? faq.answerAr : faq.answerEn,
          }));
          setItems(formattedItems);
        }
        setLoading(false);
      };
      loadFAQs();
    }
  }, [language, initialItems]);

  if (loading) return null;
  if (items.length === 0) return null;
  return (
    <section className={`py-24 bg-white/5 ${className}`}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">{title}</h2>
        <div className="space-y-2">
          {items.map((item, i) => (
            <FAQItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
