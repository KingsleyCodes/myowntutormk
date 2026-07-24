import React from "react";

export default function Button({
  children = (
    <>
      Book Your Child's Place{" "}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-2">
        →
      </span>
    </>
  ),
  variant = "accent",
  className = "",
  onClick,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all duration-300 active:scale-95 cursor-pointer rounded-none";

  const variants = {
    primary:
      "group !px-8 !py-4 text-base font-bold bg-[#FBBF24] text-slate-900 hover:bg-[#F59E0B] shadow-lg shadow-amber-400/20 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0",

    secondary:
      "bg-white text-blue-600 hover:bg-slate-50 border border-slate-200",

    accent:
      "group !px-8 !py-4 text-base font-bold bg-[#FBBF24] text-slate-900 hover:bg-[#F59E0B] shadow-lg shadow-amber-400/20 hover:shadow-xl transition-all duration-300 hover:scale-105 border-0",

    outlineWhite:
      "border-2 border-white/80 text-white hover:bg-white/10",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${
        variants[variant] || variants.accent
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}