import React from 'react';

export default function SubjectCard({ icon: Icon, title, description, keyTopics }) {
  return (
    <div className="bg-whiteCard p-8 rounded-[28px] shadow-soft border border-slate-100 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300">
      <div>
        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-slateText mb-3">{title}</h3>
        <p className="text-lightText mb-6">{description}</p>
      </div>
      {keyTopics && (
        <div className="border-t border-slate-100 pt-4 mt-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">Key Focus Areas:</span>
          <p className="text-sm font-medium text-slateText">{keyTopics}</p>
        </div>
      )}
    </div>
  );
}