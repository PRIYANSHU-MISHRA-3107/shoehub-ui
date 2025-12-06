export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-950 via-black to-slate-900 overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-orange-500/40 via-red-500/30 to-amber-500/40 blur-[140px] animate-orb-float-1" />
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-500/30 via-rose-500/25 to-orange-500/35 blur-[120px] animate-orb-float-2" />
      <div className="absolute w-[450px] h-[450px] rounded-full bg-amber-400/20 blur-[100px] animate-orb-float-3" />

      {/* Rotating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-orange-500/20 rounded-lg animate-spin-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-red-500/20 rounded-full animate-spin-reverse" />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-8 splash-appear">
        {/* Animated logo/brand area */}
        <div className="relative">
          {/* Pulsing ring behind text */}
          <div className="absolute inset-0 -m-8 rounded-full border-2 border-orange-500/30 animate-pulse-ring" />
          
          {/* Brand stack */}
          <div className="text-[10px] md:text-xs tracking-[0.35em] text-gray-400 uppercase mb-2 brand-subtitle">
            premium sneaker studio
          </div>

          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl md:text-6xl font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-amber-500 leading-none brand-title-main">
              SNEAKR
            </h1>
            <span className="text-[9px] md:text-[10px] tracking-[0.38em] uppercase text-gray-400 brand-title-sub">
              limited edition lineup
            </span>
          </div>
        </div>

        {/* Modern rotating dots loader */}
        <div className="mt-4 flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 modern-dots-loader">
            <span className="loader-dot" />
            <span className="loader-dot loader-dot-delay-1" />
            <span className="loader-dot loader-dot-delay-2" />
            <span className="loader-dot loader-dot-delay-3" />
          </div>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-gray-400 animate-text-fade">
            preparing your experience
          </p>
        </div>
      </div>
    </div>
  );
}
