'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What age groups and school years is the summer programme for?",
      answer: "Our programme is tailored for students across Primary school, Key Stage 3, and GCSE preparation levels."
    },
    {
      question: "Are the lessons live or pre-recorded?",
      answer: "All tuition sessions are live, interactive online classes led by qualified UK tutors, allowing students to ask questions and participate in real-time."
    },
    {
      question: "What happens if my child misses a live session?",
      answer: "Missed sessions are rescheduled at your convenience."
    },
    {
      question: "How do I track my child's progress throughout the 6 weeks?",
      answer: "Parents receive weekly progress feedback, assessment summaries, and tutor notes to monitor improvement closely."
    },
    {
      question: "How do I secure my child's place in the summer programme?",
      answer: "Simply click on any 'Secure Your Place' button on this page to complete our quick online booking form."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 lg:py-28 max-w-7xl mx-auto px-5 md:px-8">
      <div className="bg-whiteCard p-8 md:p-14 rounded-[36px] shadow-soft border border-slate-100">
        <SectionHeading 
          eyebrow="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about the My Own Tutor Milton Keynes Summer Tuition Programme."
        />
        
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              {/* Question/Header */}
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 bg-white hover:bg-slate-50 transition-colors duration-200 flex items-center justify-between gap-4"
                whileHover={{ backgroundColor: "rgba(241, 245, 249, 0.8)" }}
              >
                <span className="font-semibold text-slate-900 text-base sm:text-lg">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-blue-600 text-2xl font-light flex-shrink-0"
                >
                  {openIndex === index ? '−' : '+'}
                </motion.span>
              </motion.button>

              {/* Answer with Animation */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      transition: {
                        height: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.3, delay: 0.05 }
                      }
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      transition: {
                        height: { duration: 0.3, ease: "easeInOut" },
                        opacity: { duration: 0.2 }
                      }
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="px-6 pb-5 pt-1 bg-slate-50/50"
                    >
                      <p className="text-slate-600 text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}