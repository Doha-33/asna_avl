"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface CommunicationFAQProps {
  items: FAQItem[];
}

const FAQItemComponent = ({ question, answer }: FAQItem) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-start group"
      >
        <span className="text-lg font-bold group-hover:text-accent transition-colors">{question}</span>
        <div className="shrink-0 ml-4">
          {isOpen ? <Minus className="w-5 h-5 text-accent" /> : <Plus className="w-5 h-5 text-gray-500" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export function CommunicationFAQ({ items }: CommunicationFAQProps) {
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <FAQItemComponent key={i} {...item} />
      ))}
    </div>
  );
}
