"use client";

import React, { useState, useEffect, useRef } from "react";
import Button from "./ui/Button";
import { Calendar, Monitor, BookOpen, PoundSterling } from "lucide-react";

export default function Hero({ onOpenModal }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 8,
    mins: 16,
    secs: 45,
  });
  
  const [isVisible, setIsVisible] = useState(false);
  const strokeRef = useRef(null);

  useEffect(() => {
    // Set target date: July 22, 2026
    const targetDate = new Date("July 22, 2026 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((difference / (1000 * 60)) % 60);
        const secs = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          days,
          hours,
          mins,
          secs,
        });
      }
    }, 1000);

    // Trigger animation after a short delay when component mounts
    const animationTimer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => {
      clearInterval(timer);
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <section className="hero min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 overflow-hidden relative">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Headline with Animated Brush Stroke Underline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white max-w-xl">
              <span className="relative inline-block">
                Give Your Child
                {/* Animated Brush Stroke SVG Underline */}
                <svg
                  className="absolute -bottom-1 left-0 w-full h-5"
                  viewBox="0 0 300 20"
                  preserveAspectRatio="none"
                  style={{ overflow: 'visible' }}
                >
                  {/* Rough Brush Stroke - Main Line */}
                  <path
                    d="M 5 12 C 25 4, 45 18, 65 8 C 85 -2, 105 16, 125 6 C 145 -4, 165 14, 185 10 C 205 6, 225 18, 245 8 C 265 -2, 285 14, 295 10"
                    fill="none"
                    stroke="#FBBF24"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-90"
                    style={{
                      filter: 'drop-shadow(0 2px 8px rgba(251, 191, 36, 0.4))',
                      strokeDasharray: '400',
                      strokeDashoffset: isVisible ? '0' : '400',
                      transition: 'stroke-dashoffset 1.8s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                  />
                  
                  {/* Rough Brush Stroke - Texture Line 1 */}
                  <path
                    d="M 10 14 C 30 6, 50 20, 70 10 C 90 0, 110 18, 130 8 C 150 -2, 170 16, 190 12 C 210 8, 230 20, 250 10 C 270 0, 290 16, 298 12"
                    fill="none"
                    stroke="#FBBF24"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-50"
                    style={{
                      strokeDasharray: '380',
                      strokeDashoffset: isVisible ? '0' : '380',
                      transition: 'stroke-dashoffset 2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
                    }}
                  />
                  
                  {/* Rough Brush Stroke - Splatter Effect */}
                  <path
                    d="M 20 16 C 40 8, 60 22, 80 12 C 100 2, 120 18, 140 8"
                    fill="none"
                    stroke="#FBBF24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-30"
                    style={{
                      strokeDasharray: '200',
                      strokeDashoffset: isVisible ? '0' : '200',
                      transition: 'stroke-dashoffset 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                    }}
                  />
                  
                  {/* Rough Brush Stroke - Additional Texture */}
                  <path
                    d="M 150 14 C 170 6, 190 20, 210 10 C 230 0, 250 16, 270 6"
                    fill="none"
                    stroke="#FBBF24"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-25"
                    style={{
                      strokeDasharray: '180',
                      strokeDashoffset: isVisible ? '0' : '180',
                      transition: 'stroke-dashoffset 2.4s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
                    }}
                  />
                </svg>
              </span>{" "}
              a Head Start Before School
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 font-medium leading-relaxed">
              Our 6-week online Summer Tuition Programme helps students strengthen their understanding, build confidence, and stay academically ahead before school resumes.
            </p>

            {/* Key Information Cards - Sharp Edges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white/10 backdrop-blur-sm rounded-none p-3 border border-white/15 shadow-sm">
                <Calendar className="w-5 h-5 text-[#FBBF24] mb-1" />
                <p className="text-xs text-blue-200 font-medium">Dates</p>
                <p className="text-sm text-white font-semibold">22nd Jul – 31st Aug</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-none p-3 border border-white/15 shadow-sm">
                <Monitor className="w-5 h-5 text-[#FFF] mb-1" />
                <p className="text-xs text-blue-200 font-medium">Delivery</p>
                <p className="text-sm text-white font-semibold">100% Online</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-none p-3 border border-white/15 shadow-sm">
                <BookOpen className="w-5 h-5 text-[#FBBF24] mb-1" />
                <p className="text-xs text-blue-200 font-medium">Subjects</p>
                <p className="text-sm text-white font-semibold leading-tight">Maths • English • Lit • Science</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-none p-3 border border-white/15 shadow-sm">
                <PoundSterling className="w-5 h-5 text-[#FBBF24] mb-1" />
                <p className="text-xs text-blue-200 font-medium">Price</p>
                <p className="text-sm text-white font-semibold">£25 per session</p>
              </div>
            </div>

            {/* CTA using the exact imported Button component with sharp edges */}
            <div className="hero-cta-wrap pt-2">
              <Button variant="accent" onClick={onOpenModal}>
                Book Your Child's Place{" "}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">
                  →
                </span>
              </Button>
            </div>
          </div>

          {/* Right Content - Teacher Image / Card */}
          <div className="hero-teacher relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">
              {/* Main Container - Sharp Edges */}
              <div className="aspect-[4/3] rounded-none bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-none bg-[#FBBF24]/20 border border-[#FBBF24]/30 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-5xl">🎓</span>
                    </div>
                    <p className="text-white font-bold">Expert UK Teachers</p>
                    <p className="text-blue-200 text-sm font-medium">Qualified & Experienced</p>
                  </div>
                </div>

                {/* Price Badge - Sharp Edges */}
                <div className="hero-price-badge absolute -top-3 -right-3 bg-white rounded-none px-4 py-3 shadow-lg border border-white/80 text-center min-w-[100px]">
                  <span className="block text-2xl font-black text-blue-700">
                    £25
                  </span>
                  <span className="text-xs text-slate-600 font-semibold">
                    per session
                  </span>
                </div>

                {/* Floating feature badges - Sharp Edges */}
                <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-sm rounded-none px-4 py-2.5 shadow-lg border border-white/25 flex items-center gap-2">
                  <span className="text-lg">⭐</span>
                  <span className="text-xs font-bold text-slate-900">
                    Small Classes
                  </span>
                </div>

                <div className="absolute top-1/2 -right-3 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-none px-3.5 py-2.5 shadow-lg border border-white/25 flex items-center gap-2">
                  <span className="text-lg">📚</span>
                  <span className="text-xs font-bold text-slate-900">
                    Recordings Included
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#FBBF24]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}