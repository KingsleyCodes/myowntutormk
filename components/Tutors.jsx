import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { FaGraduationCap, FaAward, FaBookBookmark } from 'react-icons/fa6';

export default function Tutors() {
  const tutors = [
    {
      name: "Dr. James Harrison",
      role: "Lead Mathematics Tutor",
      bio: "Passionate mathematician with over 10 years of experience helping students master complex numerical concepts with ease.",
      qualifications: "PhD in Mathematics, University of Oxford",
      subjectFocus: "Advanced Arithmetic, Algebra & Problem Solving"
    },
    {
      name: "Emma Richardson",
      role: "Lead English Specialist",
      bio: "Dedicated educator specialising in creative writing development, grammar mastery, and inspiring a love for literature.",
      qualifications: "MA in English Literature, University of Cambridge",
      subjectFocus: "Creative Writing, Comprehension & Literature"
    },
    {
      name: "Marcus Chen",
      role: "Lead Science Educator",
      bio: "Dynamic science teacher committed to making physics, chemistry, and biology engaging and accessible for all students.",
      qualifications: "BSc Physics & PGCE Secondary Education",
      subjectFocus: "Biology, Chemistry, Physics & Practical Theory"
    }
  ];

  return (
    <section id="tutors" className="py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="p-6 sm:p-10 lg:p-14 rounded-none border border-slate-800 bg-slate-900/50 shadow-2xl">
          <SectionHeading 
            eyebrow="Expert Educators"
            title="Meet Our Expert Tutors"
            subtitle="Learn from qualified, experienced professionals dedicated to unlocking your child's full potential."
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {tutors.map((tutor, index) => (
              <div 
                key={index}
                className="bg-slate-900 p-6 sm:p-8 rounded-none shadow-xl border border-slate-800 flex flex-col justify-between transition-all duration-300 hover:border-[#FBBF24]/50"
              >
                <div>
                  <div className="w-12 h-12 rounded-none bg-[#FBBF24]/20 border border-[#FBBF24]/30 text-[#FBBF24] flex items-center justify-center mb-6">
                    <FaGraduationCap className="w-6 h-6 text-[#FBBF24]" />
                  </div>
                  
                  <h3 className="text-xl font-black text-white mb-1 tracking-tight">
                    {tutor.name}
                  </h3>
                  <p className="text-xs font-bold text-[#FBBF24] uppercase tracking-wide mb-4">
                    {tutor.role}
                  </p>
                  
                  <p className="text-slate-300 font-semibold text-sm leading-relaxed mb-6">
                    {tutor.bio}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-800">
                  <div className="flex items-start gap-2">
                    <FaAward className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-slate-400 leading-tight">
                      {tutor.qualifications}
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <FaBookBookmark className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <p className="text-xs font-semibold text-slate-300 leading-tight">
                      {tutor.subjectFocus}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}