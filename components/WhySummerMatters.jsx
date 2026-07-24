import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { FaChartLine, FaBrain, FaBolt } from 'react-icons/fa6';

export default function WhySummerMatters() {
  const cards = [
    {
      icon: FaChartLine,
      title: "Preventing the Summer Learning Loss",
      description: "Studies show children can lose up to 2 months of academic progress during the long summer break. Our targeted programme keeps minds sharp and active."
    },
    {
      icon: FaBrain,
      title: "Building Deep Subject Mastery",
      description: "Instead of rushing through crowded school curriculums, children can focus on tricky topics, clarify past misunderstandings, and build rock-solid foundations."
    },
    {
      icon: FaBolt,
      title: "Entering September Full of Confidence",
      description: "Start the new academic year ahead of the curve. When children return to school knowing they already understand the material, anxiety vanishes and enthusiasm soars."
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-100/50 via-blue-50/30 to-slate-100/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionHeading 
          eyebrow="The Summer Advantage"
          title="Why This Summer Matters More Than Ever"
          subtitle="The long break is a critical window. Use it wisely to set your child up for lifelong academic success."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 sm:p-8 rounded-none shadow-xl border border-slate-200/80 flex flex-col justify-between transition-all duration-300 hover:border-blue-500/50"
              >
                <div>
                  <div className="w-12 h-12 rounded-none bg-[#FBBF24]/20 border border-[#FBBF24]/30 text-slate-900 flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 font-semibold text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}