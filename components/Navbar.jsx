"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./ui/Button";

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm border-b border-slate-200/50"
          : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex h-16 md:h-20 items-center justify-between px-5 md:px-8">
        {/* Logo with Image Tag */}
        <a href="/" className="flex items-center gap-2 group">
          {/* Mobile Logo (Visible only on small screens, hidden on md and up) */}
          <div className="relative w-20 h-12 shrink-0 block md:hidden">
            <Image
              src="/logo.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Logo (Visible only on md screens and up, hidden on mobile) */}
          <div className="relative w-20 h-20 shrink-0 hidden md:block">
            <Image
              src="/logo.png"
              alt=""
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>

        {/* Universal Button Component with compact mobile padding */}
        <div>
          <Button 
            variant="accent" 
            onClick={onOpenModal} 
            className="!px-3.5 !py-2 sm:!px-6 sm:!py-3 text-xs sm:text-sm font-bold shadow-md"
          >
            Book Your Child's Place
          </Button>
        </div>
      </div>
    </header>
  );
}