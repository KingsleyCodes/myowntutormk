import React from 'react';
import Link from 'next/link';
import { FaCheckCircle, FaPhoneVolume } from 'react-icons/fa';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-5">
      <div className="max-w-md w-full text-center p-8 border border-slate-200 shadow-2xl rounded-none">
        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-none flex items-center justify-center mx-auto mb-6 border border-blue-100">
          <FaCheckCircle className="w-8 h-8" />
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight">
          Application Received!
        </h1>
        
        <p className="text-slate-600 font-semibold text-sm leading-relaxed mb-6">
          Thank you for securing your child's place. We have received your details and someone from our team will call you shortly.
        </p>

        <div className="bg-slate-50 border border-slate-200 p-4 mb-8 flex items-center gap-3 text-left">
          <div className="w-10 h-10 bg-[#FBBF24]/20 text-slate-900 flex items-center justify-center shrink-0 border border-[#FBBF24]/30">
            <FaPhoneVolume className="w-4 h-4 text-blue-700" />
          </div>
          <p className="text-xs font-bold text-slate-700 leading-tight">
            Keep your phone nearby—наш educational advisor will be in touch shortly to finalise your onboarding.
          </p>
        </div>

        <Link 
          href="/" 
          className="inline-block w-full bg-[#FBBF24] hover:bg-[#f5b31f] text-slate-900 py-4 font-black text-sm shadow-md transition-all rounded-none"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}