import React from 'react';
import SectionHeading from './ui/SectionHeading';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Subjects",
      description: "Select the subjects and academic level that best match your child's needs for the upcoming school term."
    },
    {
      number: "02",
      title: "Complete Simple Enrolment",
      description: "Secure your child's place in minutes through our secure online booking system."
    },
    {
      number: "03",
      title: "Join Live Online Classes",
      description: "Access inspiring live tuition sessions from the comfort of your home throughout the 6-week summer period."
    },
    {
      number: "04",
      title: "Watch Confidence Soar",
      description: "Receive regular progress updates and watch your child return to school fully prepared to excel."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="bg-white p-6 sm:p-10 lg:p-14 rounded-none shadow-2xl border border-slate-200/80">
          <SectionHeading 
            eyebrow="Simple Process"
            title="How It Works"
            subtitle="Getting started with My Own Tutor is straightforward and hassle-free."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white p-6 sm:p-8 rounded-none shadow-xl border border-slate-200/80 relative group hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-none bg-[#FBBF24]/20 border border-[#FBBF24]/30 text-slate-900 flex items-center justify-center mb-6 font-black text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 font-semibold text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}