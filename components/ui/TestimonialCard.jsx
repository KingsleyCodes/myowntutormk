import React from 'react';
import { Star } from 'lucide-react';

export default function TestimonialCard({ quote, author, role, rating = 5 }) {
  return (
    <div className="bg-whiteCard p-8 rounded-[28px] shadow-soft border border-slate-100 flex flex-col justify-between">
      <div>
        <div className="flex gap-1 mb-6">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-accent text-accent" />
          ))}
        </div>
        <p className="text-slateText italic leading-relaxed mb-6 font-medium">"{quote}"</p>
      </div>
      <div className="border-t border-slate-100 pt-4">
        <p className="font-bold text-slateText">{author}</p>
        <p className="text-xs text-lightText">{role}</p>
      </div>
    </div>
  );
}