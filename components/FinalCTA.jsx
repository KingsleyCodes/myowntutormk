import React from 'react';
import Button from './ui/Button';
import { FaWandSparkles, FaShield } from 'react-icons/fa6';

export default function FinalCTA({ onOpenModal }) {
  return (
    <section className="py-8 lg:py-12 bg-blue-900 text-white text-center relative overflow-hidden">
      {/* White Stripe Pattern Background */}
      <div className="absolute inset-0">
        {/* Diagonal White Stripes */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(255, 255, 255, 0.06) 40px,
            rgba(255, 255, 255, 0.06) 42px
          )`
        }}></div>
        
        {/* Diagonal White Stripes - Opposite Direction */}
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(255, 255, 255, 0.04) 40px,
            rgba(255, 255, 255, 0.04) 42px
          )`
        }}></div>
      </div>

      {/* Radial overlay for depth */}
      <div className="absolute inset-0" style={{
        background: `radial-gradient(circle at center, transparent 0%, rgba(30, 58, 138, 0.3) 100%)`
      }}></div>

      {/* Floating Orbs for 3D effect */}
      <div className="absolute top-5 right-5 w-24 h-24 bg-blue-400/20 rounded-full blur-2xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-5 left-5 w-32 h-32 bg-indigo-400/20 rounded-full blur-2xl animate-pulse delay-1000 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FBBF24]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-5 md:px-8 relative z-10">
        <div className="p-5 sm:p-6 lg:p-8 rounded-none border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl transform transition-all duration-300 hover:shadow-[0_20px_70px_-15px_rgba(59,130,246,0.5)]">
          <span className="inline-flex items-center gap-2 py-1 px-3 rounded-none text-[10px] font-bold tracking-wide uppercase bg-white/10 text-blue-200 border border-white/15 mb-4">
            <FaWandSparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
            <span>Limited Places Available</span>
          </span>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight mb-3">
            Give Your Child the Academic Advantage This Summer
          </h2>
          
          <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed mb-6 max-w-2xl mx-auto">
            Secure your child's place in our 6-week online summer tuition programme today and set them up for confidence and success.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-5">
            <Button variant="accent" onClick={onOpenModal} className="group rounded-none !px-6 !py-2.5 text-sm font-semibold bg-[#FBBF24] text-slate-900 hover:bg-amber-400 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0">
              Secure Your Child's Place Today{" "}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">
                →
              </span>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-xs text-blue-200 font-semibold">
            <FaShield className="w-4 h-4 text-[#FBBF24]" />
            <span>Quick, simple online booking. 100% satisfaction guarantee.</span>
          </div>
        </div>
      </div>
    </section>
  );
}