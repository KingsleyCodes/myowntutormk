import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { FaVideo, FaFileLines, FaCircleCheck, FaMessage } from 'react-icons/fa6';

export default function WhatsIncluded() {
  const items = [
    {
      icon: FaVideo,
      title: "Live Interactive Lessons",
      description: "Engaging, small-group online lessons where students can ask questions in real-time and participate actively."
    },
    {
      icon: FaFileLines,
      title: "Comprehensive Study Resources",
      description: "Curated worksheets, revision guides, and practice papers designed specifically for summer acceleration."
    },
    {
      icon: FaCircleCheck,
      title: "End Of Program Report",
      description: "Regular formative checks to track understanding and ensure every child is keeping pace and mastering concepts."
    },
    {
      icon: FaMessage,
      title: "Dedicated Tutor Support",
      description: "Encouraging, approachable tutors available to clarify doubts and provide individual guidance."
    }
  ];

  return (
    <section id="included" className="py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="p-6 sm:p-10 lg:p-14 rounded-none border border-slate-800 bg-slate-900/50 shadow-2xl">
          <SectionHeading 
            eyebrow="Comprehensive Package"
            title="What’s Included in the 6-Week Programme"
            subtitle="Everything your child needs to stay engaged, motivated, and ahead of the curriculum."
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {items.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-slate-900 p-6 sm:p-8 rounded-none shadow-xl border border-slate-800 flex flex-col justify-between transition-all duration-300 hover:border-[#FBBF24]/50"
                >
                  <div>
                    <div className="w-12 h-12 rounded-none bg-[#FBBF24]/20 border border-[#FBBF24]/30 text-[#FBBF24] flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-[#FBBF24]" />
                    </div>
                    <h3 className="text-xl font-black text-white mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 font-semibold text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}