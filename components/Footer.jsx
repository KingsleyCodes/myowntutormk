import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white py-4 border-t border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Lambye" 
            width={100} 
            height={32} 
            className="h-8 w-auto object-contain"
            priority 
          />
        </a>
        
      </div>
    </footer>
  );
}