import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { FaQuoteLeft, FaStar } from 'react-icons/fa6';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "My daughter went from dreading maths to actually enjoying it. The summer programme gave her the exact boost she needed before starting GCSE year.",
      author: "Sarah Jenkins",
      role: "Parent of Year 10 Student"
    },
    {
      quote: "Professional, well-structured, and incredibly engaging. The tutors know exactly how to keep children motivated during the summer holidays.",
      author: "David Thorne",
      role: "Parent of Year 8 Student"
    },
    {
      quote: "The progress reports were detailed and reassuring. My son started the autumn term feeling confident and ahead of his classmates.",
      author: "Aisha Patel",
      role: "Parent of Year 6 Student"
    }
  ];

  return (
    <section className="py-20 lg:py-24 max-w-7xl mx-auto px-5 md:px-8">
      <div className="bg-white p-6 sm:p-10 lg:p-14 rounded-none shadow-2xl border border-slate-200/80">
        <SectionHeading 
          eyebrow="Parent Feedback"
          title="Trusted by Parents Across the UK"
          subtitle="Read genuine experiences from families who have transformed their children's learning journey with us."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-8 rounded-none shadow-xl border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:border-blue-500/50"
            >
              <div>
                <div className="flex items-center gap-1 text-[#FBBF24] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <FaQuoteLeft className="w-8 h-8 text-[#FBBF24]/30 mb-3" />
                <p className="text-slate-600 font-semibold text-sm leading-relaxed mb-6">
                  "{item.quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <p className="font-black text-slate-900 text-base">{item.author}</p>
                <p className="text-xs font-semibold text-blue-700 mt-0.5">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}