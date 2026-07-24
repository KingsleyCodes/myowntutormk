"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "./ui/Button";
import { Calendar, Monitor, BookOpen, UserCheck } from "lucide-react";

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
    <section className="hero py-12 lg:py-16 flex items-center pt-24 lg:pt-28 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 overflow-hidden relative">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            {/* Headline with Animated Brush Stroke Underline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-tight text-white max-w-xl">
              <span className="relative inline-block">
                One-to-One
                {/* Animated Brush Stroke SVG Underline */}
                <svg
                  className="absolute -bottom-1 left-0 w-full h-4"
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
              Online Tutoring for Your Child
            </h1>

            <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed">
              Unlike crowded group classes, our 6-week summer programme delivers dedicated 1-to-1 online tuition tailored entirely to your child's pace, learning gaps, and academic goals.
            </p>

            {/* Key Information Cards - Sharp Edges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="bg-white/10 backdrop-blur-sm rounded-none p-2.5 border border-white/15 shadow-sm">
                <Calendar className="w-4 h-4 text-[#FBBF24] mb-1" />
                <p className="text-[10px] text-blue-200 font-medium uppercase tracking-wider">Dates</p>
                <p className="text-xs text-white font-semibold">22nd Jul – 31st Aug</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-none p-2.5 border border-white/15 shadow-sm">
                <Monitor className="w-4 h-4 text-[#FFF] mb-1" />
                <p className="text-[10px] text-blue-200 font-medium uppercase tracking-wider">Delivery</p>
                <p className="text-xs text-white font-semibold">100% Online</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-none p-2.5 border border-white/15 shadow-sm">
                <BookOpen className="w-4 h-4 text-[#FBBF24] mb-1" />
                <p className="text-[10px] text-blue-200 font-medium uppercase tracking-wider">Subjects</p>
                <p className="text-xs text-white font-semibold leading-tight">Maths • English • Science</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-none p-2.5 border border-white/15 shadow-sm">
                <UserCheck className="w-4 h-4 text-[#FBBF24] mb-1" />
                <p className="text-[10px] text-blue-200 font-medium uppercase tracking-wider">Format</p>
                <p className="text-xs text-white font-semibold">1-to-1 Attention</p>
              </div>
            </div>

            {/* CTA using the exact imported Button component with sharp edges */}
            <div className="hero-cta-wrap pt-1">
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
            <div className="relative w-full max-w-[440px]">
              {/* Main Container - Sharp Edges */}
              <div className="aspect-[16/10] rounded-none bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden relative flex items-center justify-center">
                <Image
                  src="/hero.webp"
                  alt="Expert UK Tutor Teaching Online"
                  fill
                  className="object-cover"
                  priority
                />

                
                

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-10 right-10 w-60 h-60 bg-[#FBBF24]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-5 left-5 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
}