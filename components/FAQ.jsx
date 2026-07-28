'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from './ui/SectionHeading';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "When does the Summer Programme run?",
      answer: "The programme runs from 22nd July to 31st August 2026. Six weeks across the school summer holidays. Sessions are booked flexibly around your family's schedule, so there is no fixed timetable you have to commit to upfront."
    },
    {
      question: "Are the lessons live or pre-recorded?",
      answer: "All tuition sessions are live, interactive online classes led by qualified UK tutors, allowing students to ask questions and participate in real-time."
    },
    {
      question: "What does a session actually look like?",
      answer: "Every session is a live, interactive 1-to-1 lesson between your child and their dedicated tutor, delivered entirely online. The tutor works through the topics your child needs help with, explains concepts clearly, answers questions in real time, and adjusts the pace to suit your child. It is personalised to your child specifically, not a group class or pre-recorded video."

    },
    {
      question: "What happens if my child misses a live session?",
      answer: "Sessions can be rescheduled with reasonable notice. Because the programme is hours-based rather than tied to a fixed timetable, missed sessions don't mean lost time, they are simply rebooked at a time that works."
    },
    {
      question: "How flexible is the scheduling?",
      answer: "Very. You are not locked into a fixed weekly slot. You can use your hours when it suits your family — four hours one week, none the next if you are away on holiday, then pick up again when you are back. The only requirement is that all hours are used within the six-week programme window."
    },
    {
      question: "Will my child have the same tutor throughout the programme?",
      answer: "Yes. Your child is matched with a dedicated tutor at the start and works with that same tutor for the full programme."
    },
    {
      question: "What happens in the first session?",
      answer: "The first session is a *Goal Mapping Session*. Your child's tutor sits down with them to understand where they are, what they want to achieve over the summer, and how they learn best. From that conversation, the tutor builds a personalised learning plan for the remaining sessions."
    },
     {
      question: "Do parents get to see how their child is progressing?",
      answer: "Yes — in two ways. After every session, the tutor writes a short report covering what was covered, how the student engaged, and any areas to focus on next. Parents can access these reports directly on the platform at any time. At the end of the programme, a comprehensive end-of-programme report is also produced, covering overall progress, topics covered, goals for September, and revision resources for the new school year."
    },
    {
      question: "Is there a certificate at the end?",
      answer: "Yes. Every student who completes the Summer Launchpad receives a personalised certificate of completion — a recognition of the commitment and progress made over the programme. It is a nice moment to mark the end of summer and the start of a new school year feeling prepared."
    },
    {
      question: "How do you match my child with the right tutor?",
      answer: "When you book, we ask about your child's year group, subjects, goals, and any specific needs or preferences. We use this to match them with the tutor best suited to their level and learning style." 
    },
    {
      question: "Is everything online?",
      answer: "Yes — all sessions are delivered 100% online via Zoom and Century. All you need is a device with a stable internet connection. Sessions work on a laptop, tablet, or desktop." 
    },
     {
      question: "We are going on holiday during the summer. Can we still do this?",
      answer: "Absolutely. The Flex-Time scheduling means your child only uses their hours when you are home. Let us know your holiday dates when you book and we will plan sessions around them. Going away for two weeks does not mean losing two weeks of the programme." 
    },
    {
      question: "What if I am not sure which package is right?",
      answer: "Reply to the booking form or message us directly and we will help you decide. Tell us about your child, their year group, their subjects, and what you are hoping to achieve over the summer, and we will recommend the right option." 
    },
      {
      question: "How do I book?",
      answer: "Fill in the online booking form on this page with your details and we will be in touch within 24 hours to confirm your child's place, discuss the right package, and match them with their tutor. There is no commitment required at the enquiry stage, just a conversation about what your child needs." 
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