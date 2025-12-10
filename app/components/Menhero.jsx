// app/components/Menhero.jsx
import { GrUserManager } from "react-icons/gr";
import { IoMdCart } from "react-icons/io";

export default function ShoeLandingPage() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-black via-[#0b1119] to-black text-white">
      {/* Ambient glows + gradient sweep */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-orange-500/20 blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[560px] w-[560px] rounded-full bg-cyan-500/18 blur-[170px]" />
        <div className="absolute left-1/3 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber-400/12 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(248,113,113,0.05),transparent_30%),radial-gradient(circle_at_70%_80%,rgba(52,211,153,0.05),transparent_30%)] opacity-70" />
        <div className="absolute inset-0 animate-gradient-pan bg-[linear-gradient(120deg,rgba(255,255,255,0.06),rgba(249,115,22,0.08),rgba(255,255,255,0.04),rgba(56,189,248,0.07))] blur-3xl opacity-50" />
      </div>

      <div className="relative flex w-full flex-col gap-20 px-6 py-24 md:px-10 lg:px-12 xl:px-16">
        {/* Upper hero row full width */}
        <div className="grid w-full gap-12 xl:gap-16 lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col justify-center space-y-7">
            <p className="text-[11px] uppercase tracking-[0.4em] text-orange-300/80">
              drop // volume 03
            </p>
            <h1 className="text-4xl font-black leading-tight md:text-5xl xl:text-6xl">
              Power-forward sneakers with kinetic gradients and city-ready grip.
            </h1>
            <p className="max-w-3xl text-lg text-gray-200 leading-relaxed">
              Engineered plates for explosive takeoff, breathable knit for cool
              sessions, and luminous fades that pop under streetlights. Built to
              feel weightless, tuned to look fearless.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#shop"
                className="rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3 text-sm font-semibold shadow-[0_15px_55px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_70px_rgba(249,115,22,0.45)]"
              >
                Shop collection
              </a>
              <a
                href="#lookbook"
                className="rounded-full border border-white/15 px-7 py-3 text-sm font-semibold text-gray-100 backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-400/70 hover:text-white"
              >
                Lookbook
              </a>
            </div>

            <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {[
                { label: "Weight", value: "312 g" },
                { label: "Energy Return", value: "30%" },
                { label: "Cushion", value: "Air+Foam" },
                { label: "Grip", value: "Street / Court" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur animate-float-soft"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    {item.label}
                  </p>
                  <p className="text-lg font-semibold text-orange-100">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Product spotlight */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-full w-full max-w-[620px]">
              <div className="absolute -inset-10 rounded-[36px] bg-gradient-to-br from-blue-600/30 via-transparent to-orange-500/25 blur-3xl" />
              <div className="relative flex aspect-[5/6] w-full items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0f1724] via-[#0b1119] to-[#111827] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
                <div className="absolute inset-8 rounded-[26px] border border-white/10" />
                <div className="absolute -left-10 top-10 h-16 w-16 rounded-full bg-white/10 backdrop-blur" />
                <div className="absolute -right-12 bottom-16 h-20 w-20 rounded-full bg-orange-500/30 blur-2xl" />
                <div className="absolute left-6 top-6 rounded-full border border-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-gray-200">
                  limited
                </div>
                <img
                  src="/2.3.png"
                  alt="AeroVolt X sneaker"
                  className="relative z-10 w-[88%] max-w-[440px] -rotate-2 drop-shadow-[0_50px_120px_rgba(0,0,0,0.55)] transition duration-700 hover:rotate-0"
                />
                <div className="absolute right-6 top-6 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-right shadow-lg backdrop-blur">
                  <p className="text-3xl font-bold text-orange-300">$134</p>
                  <p className="text-xs uppercase tracking-[0.22em] text-gray-200">
                    AeroVolt X
                  </p>
                  <span className="mt-2 inline-block rounded-md bg-orange-500 px-2 py-1 text-[10px] font-semibold text-black">
                    exclusive
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-300 sm:text-base">
                {[
                  { title: "AeroVolt X", price: "$134", accent: "Hyper orange fade" },
                  { title: "PulseRunner", price: "$129", accent: "Rose neon blend" },
                ].map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_12px_45px_rgba(0,0,0,0.35)] backdrop-blur transition hover:-translate-y-1 hover:border-orange-500/60"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-white">{card.title}</p>
                      <span className="font-bold text-orange-400">{card.price}</span>
                    </div>
                    <p className="text-xs uppercase tracking-[0.18em] text-gray-400">
                      {card.accent}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature + assurance row */}
        <div
          id="shop"
          className="grid w-full gap-6 rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur lg:grid-cols-3"
        >
          {[
            {
              icon: <GrUserManager className="text-xl text-orange-400" />,
              title: "Fit-obsessed builds",
              desc: "Dialed-in lasts, supportive frames, and breathable mesh to lock you in without hotspots.",
            },
            {
              icon: <IoMdCart className="text-xl text-orange-400" />,
              title: "Transparent pricing",
              desc: "Premium materials without luxury markups. Pay for craft, not hype tax.",
            },
            {
              icon: <GrUserManager className="text-xl text-orange-400" />,
              title: "Quick dispatch",
              desc: "Ships in 24 hours with tracked delivery. Easy swaps if you need a different fit.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="space-y-3 rounded-2xl bg-black/35 p-5 transition hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_18px_50px_rgba(249,115,22,0.25)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Assurance badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase tracking-[0.25em] text-gray-400 xl:justify-between">
          <span className="rounded-full border border-white/10 px-4 py-2 backdrop-blur">
            breathable mesh knit
          </span>
          <span className="rounded-full border border-white/10 px-4 py-2 backdrop-blur">
            responsive midsole
          </span>
          <span className="rounded-full border border-white/10 px-4 py-2 backdrop-blur">
            24h dispatch
          </span>
          <span className="rounded-full border border-white/10 px-4 py-2 backdrop-blur">
            easy exchanges
          </span>
        </div>
      </div>
    </section>
  );
}
