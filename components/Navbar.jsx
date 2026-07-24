"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./ui/Button"; // Or appropriate relative path based on where Navbar.jsx lives

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
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-sm shadow-md">
            M
          </div>

          <span className="text-lg md:text-xl font-bold tracking-tight text-slate-900">
            My Own Tutor
          </span>
        </a>

        {/* Universal Button Component */}
        <div>
          <Button variant="accent" onClick={onOpenModal}>
            Book Your Child's Place
          </Button>
        </div>
      </div>
    </header>
  );
}