import React from "react";
import { CheckCircle2, BookOpen, Award, ShieldCheck } from "lucide-react";

export default function CurriculumAlignment() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-14 text-white shadow-xl relative">
          
          {/* Decorative background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#a3dcf3]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Heading & Intro */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a3dcf3]/10 border border-[#a3dcf3]/20 text-[#a3dcf3] text-xs sm:text-sm font-semibold tracking-wide uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Academic Excellence</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-white">
                Fully Aligned with the <span className="text-[#a3dcf3]">National Teaching Curriculum</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Every session your child receives is meticulously structured around the official UK national curriculum guidelines. We bridge learning gaps, reinforce classroom topics, and ensure they are thoroughly prepared for school assessments and exams.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-[#a3dcf3] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white">School Curriculum Standards</h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Directly matches what they learn in school classrooms.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-[#a3dcf3] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white">Targeted Exam Preparation</h3>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">Builds core competencies for SATs, GCSEs, and school tests.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Highlight Card */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-6 sm:p-8 rounded-2xl shadow-lg space-y-5">
                <div className="w-12 h-12 rounded-xl bg-[#a3dcf3]/20 flex items-center justify-center text-[#a3dcf3]">
                  <BookOpen className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Tailored 1-to-1 Progression
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Unlike standard school environments where students can fall behind, our dedicated online tutors adapt the curriculum to match your child's unique pace and learning style.
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center gap-3">
                  <Award className="w-5 h-5 text-[#a3dcf3] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200">
                    Experienced, vetted subject specialists
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}