import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { FaCalculator, FaBookOpen, FaAtom, FaLaptopCode } from 'react-icons/fa6';

export default function Subjects() {
  const subjects = [
    {
      icon: FaCalculator,
      title: "Mathematics",
      description: "From foundational arithmetic to complex algebraic problem-solving, our maths sessions build logical thinking and complete exam confidence.",
      keyTopics: "Number fluency, algebra, geometry, data handling, and problem solving."
    },
    {
      icon: FaBookOpen,
      title: "English Language & Literature",
      description: "Enhance reading comprehension, creative writing flair, grammar precision, and analytical essay skills with expert guidance.",
      keyTopics: "Creative writing, comprehension, grammar, vocabulary, and literary analysis."
    },
    {
      icon: FaAtom,
      title: "Science (Combined & Triple)",
      description: "Unlock the wonders of Biology, Chemistry, and Physics through engaging explanations, practical theory, and structured exam technique.",
      keyTopics: "Scientific inquiry, key experiments, core concepts, and exam question breakdown."
    },
    {
      icon: FaLaptopCode,
      title: "Computing & Coding",
      description: "Develop fundamental digital literacy, computational thinking, and programming skills essential for modern academic success.",
      keyTopics: "Algorithms, logic, coding fundamentals, digital safety, and problem solving."
    }
  ];

  return (
    <section id="subjects" className="py-20 lg:py-24 max-w-7xl mx-auto px-5 md:px-8">
      <div className="bg-white p-6 sm:p-10 lg:p-14 rounded-none shadow-2xl border border-slate-200/80">
        <SectionHeading 
          eyebrow="Core Curriculum"
          title="Subjects Covered in the Programme"
          subtitle="Expertly structured tuition tailored to key academic stages and examination boards."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {subjects.map((subj, index) => {
            const IconComponent = subj.icon;
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
                    {subj.title}
                  </h3>
                  <p className="text-slate-600 font-semibold text-sm leading-relaxed mb-6">
                    {subj.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-1">Key Topics</p>
                  <p className="text-xs font-semibold text-slate-600 leading-relaxed">{subj.keyTopics}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}