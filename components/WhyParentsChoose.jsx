import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { FaUserCheck, FaShield, FaClock, FaAward } from 'react-icons/fa6';

export default function WhyParentsChoose() {
  const reasons = [
    {
      icon: FaUserCheck,
      title: "Vetted UK tutors",
      description: "Every tutor is thoroughly vetted, DBS checked, and experienced in delivering high-impact online education."
    },
    {
      icon: FaShield,
      title: "Proven Track Record",
      description: "Thousands of students have improved their grades, boosted their confidence, and achieved academic success."
    },
    {
      icon: FaClock,
      title: "Flexible & Convenient",
      description: "High-quality tuition delivered straight to your home, saving travel time while keeping your summer schedule balanced."
    },
    {
      icon: FaAward,
      title: "Child-Centred Approach",
      description: "We focus on encouragement, clarity, and building genuine enthusiasm for learning rather than rote memorisation."
    }
  ];

  return (
    <section className="py-20 lg:py-24 max-w-7xl mx-auto px-5 md:px-8">
      <div className="bg-white p-6 sm:p-10 lg:p-14 rounded-none shadow-2xl border border-slate-200/80">
        <SectionHeading 
          eyebrow="The My Own Tutor Milton Keynes Difference"
          title="Why Parents Choose Us"
          subtitle="We combine educational excellence with a supportive, friendly approach that puts children first."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((item, index) => {
            const IconComponent = item.icon;
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
                    {item.title}
                  </h3>
                  <p className="text-slate-600 font-semibold text-sm leading-relaxed">
                    {item.description}
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