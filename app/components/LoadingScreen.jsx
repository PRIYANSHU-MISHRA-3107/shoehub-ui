export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Background glow */}
      <div className="absolute w-[480px] h-[480px] rounded-full bg-cyan-500/30 blur-[120px]" />
      <div className="absolute w-[420px] h-[420px] rounded-full bg-purple-500/25 blur-[120px] translate-x-20 translate-y-10" />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-6 splash-appear">
        {/* Brand stack */}
        <div className="text-[10px] md:text-xs tracking-[0.35em] text-gray-400 uppercase">
          premium sneaker studio
        </div>

        <div className="flex flex-col items-center gap-1">
          <h1 className="text-4xl md:text-5xl font-black tracking-[0.28em] text-white leading-none brand-title-main">
            SNEAKR
          </h1>
          <span className="text-[9px] md:text-[10px] tracking-[0.38em] uppercase text-gray-500 brand-title-sub">
            limited edition lineup
          </span>
        </div>

        {/* Modern bars loader */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="flex items-end gap-1.5 modern-loader">
            <span className="loader-bar-segment" />
            <span className="loader-bar-segment loader-bar-segment-delay-1" />
            <span className="loader-bar-segment loader-bar-segment-delay-2" />
          </div>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.35em] text-gray-400">
            preparing your experience
          </p>
        </div>
      </div>
    </div>
  );
}
