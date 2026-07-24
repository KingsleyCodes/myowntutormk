import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { FaGraduationCap, FaAward, FaBookBookmark } from 'react-icons/fa6';

export default function Tutors() {
  const tutors = [
    {
      role: "Expert Mathematics Tutors",
      bio: "Our mathematics educators specialize in transforming foundational arithmetic and complex problem-solving into complete academic confidence.",
      qualifications: "DBS Checked & Top-Tier University Graduates",
      subjectFocus: "Number fluency, algebra, geometry & exam techniques"
    },
    {
      role: "Expert English Specialists",
      bio: "Dedicated professionals focused on elevating reading comprehension, creative writing flair, grammar precision, and analytical essay skills.",
      qualifications: "DBS Checked & Experienced English Educators",
      subjectFocus: "Creative writing, comprehension, grammar & literature"
    },
    {
      role: "Expert Science Educators",
      bio: "Dynamic science specialists committed to making Biology, Chemistry, and Physics engaging, clear, and fully accessible for every student.",
      qualifications: "DBS Checked & Specialized Science Instructors",
      subjectFocus: "Scientific inquiry, core concepts & practical theory"
    },
    {
      role: "Expert Computing Specialists",
      bio: "Forward-thinking technology mentors focused on developing digital literacy, computational thinking, and core programming foundations.",
      qualifications: "DBS Checked & Tech Industry Professionals",
      subjectFocus: "Algorithms, logic, coding fundamentals & safety"
    }
  ];

  return (
    <section id="tutors" className="py-20 lg:py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        <div className="p-6 sm:p-10 lg:p-14 rounded-none border border-slate-800 bg-slate-900/50 shadow-2xl">
          <SectionHeading 
            eyebrow="Expert Educators"
            title="Meet Our Expert Tutors"
            subtitle="Learn from qualified, experienced professionals dedicated to unlocking your child's full potential across our 4 core subjects."
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {tutors.map((tutor, index) => (
              <div 
                key={index}
                className="bg-slate-900 p-6 sm:p-8 rounded-none shadow-xl border border-slate-800 flex flex-col justify-between transition-all duration-300 hover:border-[#FBBF24]/50"
              >
                <div>
                  <div className="w-12 h-12 rounded-none bg-[#FBBF24]/20 border border-[#FBBF24]/30 text-[#FBBF24] flex items-center justify-center mb-6">
                    <FaGraduationCap className="w-6 h-6 text-[#FBBF24]" />
                  </div>
                  
                  <h3 className="text-xl font-black text-white mb-4 tracking-tight">
                    {tutor.role}
                  </h3>
                  
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