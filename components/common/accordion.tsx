"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the shape of each FAQ item
interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion p-2 space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="faq-item shadow rounded"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <button
            className="faq-question w-full text-left py-4 px-2"
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
          </button>

          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                key="answer"
                className="faq-answer py-4 px-2 text-gray-500 bg-gray-50"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.answer}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQAccordion;
