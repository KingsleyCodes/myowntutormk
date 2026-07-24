"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-200/80 rounded-2xl bg-whiteCard overflow-hidden transition-all duration-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slateText text-lg focus:outline-none"
      >
        <span>{question}</span>
        <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-primary transition-transform duration-200 ${isOpen ? 'rotate-180 bg-primary text-white' : ''}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-lightText leading-relaxed border-t border-slate-100 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
}