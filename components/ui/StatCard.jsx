import React from 'react';

export default function StatCard({ number, label, description }) {
  return (
    <div className="bg-whiteCard p-8 rounded-[28px] shadow-soft border border-slate-100 text-center flex flex-col justify-center">
      <span className="text-4xl md:text-5xl font-extrabold text-primary mb-2 tracking-tight">{number}</span>
      <h3 className="text-lg font-bold text-slateText mb-1">{label}</h3>
      {description && <p className="text-sm text-lightText">{description}</p>}
    </div>
  );
}