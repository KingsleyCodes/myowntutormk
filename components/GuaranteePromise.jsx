import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { FaShieldAlt, FaUserCheck, FaBan, FaStar } from 'react-icons/fa';

export default function GuaranteePromise() {
  const promises = [
    {
      icon: FaShieldAlt,
      title: "Results Guaranteed",
      description: "We stand firmly behind our teaching methodology and expert educators to deliver measurable academic progress and complete exam confidence."
    },
    {
      icon: FaUserCheck,
      title: "1-to-1 Dedicated Attention",
      description: "Before we assign any tutor, we match your child 1-to-1 with a specialised tutor tailored entirely to their individual academic pace and learning style."
    },
    {
      icon: FaBan,
      title: "Zero Group Calls",
      description: "No overcrowded classrooms or distracting group sessions. Every single session is strictly one child to one tutor for maximum focus and results."
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="p-6 sm:p-10 lg:p-14 rounded-none border border-slate-800 bg-slate-900/50 shadow-2xl">
          <SectionHeading 
            eyebrow="Our Commitment"
            title="Results Guaranteed"
            subtitle="Discover what makes our approach entirely different—delivering unmatched focus, dedicated mentoring, and true academic excellence."
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {promises.map((item, index) => {
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
                    
                    <h3 className="text-xl font-black text-white mb-4 tracking-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-300 font-semibold text-sm leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800 flex items-center gap-1.5 text-[#FBBF24]">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="text-xs font-bold text-slate-400 ml-2">100% Personalised</span>
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