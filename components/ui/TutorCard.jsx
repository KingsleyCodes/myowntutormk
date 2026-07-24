import React from 'react';

export default function TutorCard({ name, role, bio, image, qualifications }) {
  return (
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-[28px] border border-white/20 text-white flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4 mb-6">
          <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover border-2 border-white/30 shadow-md" />
          <div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-blue-200 text-sm font-medium">{role}</p>
          </div>
        </div>
        <p className="text-slate-100 text-sm leading-relaxed mb-6">{bio}</p>
      </div>
      <div className="border-t border-white/10 pt-4">
        <span className="text-xs font-semibold text-accent uppercase tracking-wider block mb-1">Qualifications</span>
        <p className="text-xs text-slate-200">{qualifications}</p>
      </div>
    </div>
  );
}