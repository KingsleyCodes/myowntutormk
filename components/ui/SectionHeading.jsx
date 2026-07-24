import React from 'react';

export default function SectionHeading({ eyebrow, title, subtitle, centered = true, lightText = false }) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-16`}>
      {eyebrow && (
        <span className="inline-block py-1.5 px-4 rounded-full text-xs font-bold tracking-wider uppercase bg-primary/10 text-primary mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 ${lightText ? 'text-white' : 'text-slateText'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg md:text-xl leading-relaxed ${lightText ? 'text-slate-200' : 'text-lightText'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}