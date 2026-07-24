import React from 'react';
import SectionHeading from './ui/SectionHeading';
import Image from 'next/image';

export default function Testimonials() {
  const testimonialImages = [
    {
      src: "/t2.png",
      alt: "Parent Testimonial 1",
      aspect: "aspect-[10/3]"
    },
    {
      src: "/t1.png",
      alt: "Parent Testimonial 2",
      aspect: "aspect-[10/3]"
    },
    {
      src: "/t4.png",
      alt: "Parent Testimonial 3",
      aspect: "aspect-[13/4]"
    },
    {
      src: "/t3.png",
      alt: "Parent Testimonial 4",
      aspect: "aspect-[10/3]"
    }
  ];

  return (
    <section className="py-20 lg:py-24 max-w-7xl mx-auto px-5 md:px-8">
      <div className="bg-white p-6 sm:p-10 lg:p-14 rounded-none shadow-2xl border border-slate-200/80">
        <SectionHeading 
          eyebrow="Parent Feedback"
          title="Trusted by Parents Across the UK"
          subtitle="Read genuine experiences from families who have transformed their children's learning journey with us."
        />
        
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {testimonialImages.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-3 sm:p-4 rounded-none shadow-xl border border-slate-200/80 transition-all duration-300 hover:border-blue-500/50 relative w-full overflow-hidden flex justify-center"
            >
              <div className={`relative w-full ${item.aspect} bg-slate-100 max-w-[960px]`}>
                <Image 
                  src={item.src} 
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 960px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}