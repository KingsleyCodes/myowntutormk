import React from 'react';
import { Award, Users, BookOpen, Star } from 'lucide-react';

export default function TrustBar() {
  const stats = [
    { icon: Users, value: "10,000+", label: "Students Taught" },
    { icon: Star, value: "4.9 / 5", label: "Parent Satisfaction" },
    { icon: Award, value: "100%", label: "UK Qualified Tutors" },
    { icon: BookOpen, value: "6 Weeks", label: "Intensive Growth" }
  ];

  return (
    <section className="relative -mt-10 sm:-mt-12 z-20 max-w-7xl mx-auto px-5 md:px-8">
      <div className="bg-white p-5 sm:p-6 rounded-none shadow-2xl border border-slate-200/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="flex items-center gap-3.5">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-none bg-[#FBBF24]/20 border border-[#FBBF24]/30 text-slate-900 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-blue-700" />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">{stat.value}</h4>
                <p className="text-[11px] sm:text-xs text-slate-600 font-semibold">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}