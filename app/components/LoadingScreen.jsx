"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-black to-slate-900 overflow-hidden">
      {/* Enhanced animated background orbs */}
      <div className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-r from-orange-700/50 via-red-600/40 to-amber-400/50 blur-[160px] animate-orb-float-1" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-500/40 via-rose-500/35 to-orange-500/45 blur-[140px] animate-orb-float-2" />
      <div className="absolute w-[550px] h-[550px] rounded-full bg-amber-400/30 blur-[120px] animate-orb-float-3" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[100px] animate-orb-float-4" />

      {/* Enhanced rotating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 border-2 border-orange-500/30 rounded-lg animate-spin-slow shadow-[0_0_30px_rgba(249,115,22,0.3)]" />
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-2 border-red-500/30 rounded-full animate-spin-reverse shadow-[0_0_30px_rgba(239,68,68,0.3)]" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 border-2 border-amber-400/25 rotate-45 animate-spin-slow" />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-orange-400/60 rounded-full animate-particle-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative flex flex-col items-center gap-10 splash-appear">
        {/* Enhanced animated logo/brand area */}
        <div className="relative">
          {/* Multiple pulsing rings */}
          <div className="absolute inset-0 -m-8 rounded-full border-2 border-orange-500/40 animate-pulse-ring" />
          <div className="absolute inset-0 -m-12 rounded-full border border-orange-500/20 animate-pulse-ring-delayed" />
          
          {/* Glow effect */}
          <div className="absolute inset-0 -m-16 rounded-full bg-gradient-to-r from-orange-500/10 via-red-500/10 to-amber-500/10 blur-2xl animate-pulse-glow" />
          
          {/* Brand stack */}
          <div className="text-[10px] md:text-xs tracking-[0.35em] text-gray-300 uppercase mb-3 brand-subtitle font-semibold">
            premium sneaker studio
          </div>

          <div className="flex flex-col items-center gap-3">
            <h1 className="text-6xl md:text-7xl font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-amber-500 leading-none brand-title-main drop-shadow-[0_0_30px_rgba(249,115,22,0.5)]">
              SNEAKR
            </h1>
            <span className="text-[9px] md:text-[10px] tracking-[0.38em] uppercase text-gray-300 brand-title-sub font-medium">
              limited edition lineup
            </span>
          </div>
        </div>

        {/* Enhanced loader section */}
        <div className="mt-6 flex flex-col items-center gap-6 w-full max-w-md px-8">
          {/* Progress bar */}
          <div className="w-full h-1.5 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30">
            <div
              className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-amber-500 rounded-full transition-all duration-300 ease-out relative overflow-hidden progress-bar-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
            </div>
          </div>

          {/* Percentage counter */}
          <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400 tabular-nums">
            {Math.min(Math.round(progress), 100)}%
          </div>

          {/* Modern rotating dots loader */}
          <div className="flex items-center gap-3 modern-dots-loader">
            <span className="loader-dot" />
            <span className="loader-dot loader-dot-delay-1" />
            <span className="loader-dot loader-dot-delay-2" />
            <span className="loader-dot loader-dot-delay-3" />
          </div>

          {/* Loading text */}
          <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-gray-300 animate-text-fade font-medium">
            preparing your experience
          </p>
        </div>
      </div>
    </div>
  );
}
