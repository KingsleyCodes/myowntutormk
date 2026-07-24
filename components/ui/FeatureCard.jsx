import React from 'react';

export default function FeatureCard({ icon: Icon, title, description, badge }) {
  return (
    <div className="bg-whiteCard p-8 rounded-[28px] shadow-soft border border-slate-100 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 relative overflow-hidden group">
      {badge && (
        <span className="absolute top-6 right-6 text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-primary">
          {badge}
        </span>
      )}
      {Icon && (
        <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="w-7 h-7" />
        </div>
      )}
      <h3 className="text-xl font-bold text-slateText mb-3">{title}</h3>
      <p className="text-lightText leading-relaxed">{description}</p>
    </div>
  );
}