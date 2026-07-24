import React from 'react';
import { FaCheckCircle, FaPhoneVolume } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa6';

export default function ThankYouPage() {
  const whatsappNumber = "+447577007223";
  const whatsappMessage = encodeURIComponent("Hello, I have just submitted my application for the tutoring programme and would like to connect.");
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`;

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
            Keep your phone nearby—our educational advisor will be in touch shortly to finalise your onboarding.
          </p>
        </div>

        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 font-black text-sm shadow-md transition-all rounded-none"
        >
          <FaWhatsapp className="w-5 h-5" />
          Contact on WhatsApp
        </a>
      </div>
    </main>
  );
}