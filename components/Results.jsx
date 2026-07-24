import React from 'react';
import SectionHeading from './ui/SectionHeading';
import StatCard from './ui/StatCard';

export default function Results() {
  const stats = [
    { number: "94%", label: "Grade Improvement", description: "Students show measurable academic improvement after our programmes." },
    { number: "98%", label: "Parent Satisfaction", description: "Families who would recommend our tuition to friends and colleagues." },
    { number: "85%", label: "Confidence Boost", description: "Reported increase in student self-belief and classroom participation." }
  ];

  return (
    <section className="py-24 lg:py-28 max-w-7xl mx-auto px-5 md:px-8">
      <div className="bg-whiteCard p-8 md:p-14 rounded-[36px] shadow-soft border border-slate-100">
        <SectionHeading 
          eyebrow="Proven Impact"
          title="Results That Speak for Themselves"
          subtitle="Our structured summer tuition delivers genuine academic growth and lasting confidence."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={index}
              number={stat.number}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}