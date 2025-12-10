import { IoLogoInstagram , IoLogoYoutube } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative mt-20 bg-gradient-to-b from-[#0b1119] via-[#06090f] to-black text-white overflow-hidden">
      {/* subtle glows */}
      <div className="pointer-events-none absolute -top-24 left-10 h-64 w-64 rounded-full bg-orange-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-72 w-72 rounded-full bg-cyan-500/18 blur-[140px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-14 md:px-10 lg:px-12">
        {/* top row */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-orange-300/80">
              sneaker studio
            </p>
            <h3 className="text-3xl font-black tracking-tight">
              Crafted for motion. Styled for the city.
            </h3>
            <p className="max-w-xl text-gray-300 leading-relaxed">
              Performance silhouettes with kinetic gradients and breathable
              builds. Designed to keep you light, fast, and unmistakable.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.22em] text-gray-400">
              <span className="rounded-full border border-white/10 px-4 py-2 backdrop-blur">
                air cushioning
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2 backdrop-blur">
                knit uppers
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2 backdrop-blur">
                street grip
              </span>
            </div>
          </div>

          {/* newsletter */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-orange-200">
              stay ahead
            </p>
            <h4 className="mt-2 text-xl font-semibold">Get drops & early access</h4>
            <p className="mt-3 text-sm text-gray-300">
              Sign up for exclusive colorways, member-only pricing, and first dibs on limited releases.
            </p>
            <form className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition focus:border-orange-400/70"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-5 py-3 text-sm font-semibold shadow-[0_12px_40px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_55px_rgba(249,115,22,0.45)]"
              >
                Notify me
              </button>
            </form>
          </div>
        </div>

        {/* link columns */}
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-200">
              shop
            </h5>
            <ul className="space-y-2 text-gray-300">
              {["New arrivals", "Men", "Women", "Kids", "Limited drops"].map((item) => (
                <li key={item} className="transition hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h5 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-200">
              support
            </h5>
            <ul className="space-y-2 text-gray-300">
              {["Orders & shipping", "Returns & exchanges", "Sizing guide", "Store locator", "FAQs"].map(
                (item) => (
                  <li key={item} className="transition hover:text-white">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-200">
              connect
            </h5>
            <div className="flex gap-3 text-lg text-gray-300">
              {[IoLogoInstagram, FaXTwitter , IoLogoYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur transition hover:-translate-y-0.5 hover:border-orange-400/70 hover:text-white"
                >
                  <Icon />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-300">
              Customer care: <span className="text-white">support@sneakr.studio</span>
            </p>
          </div>
        </div>

        {/* bottom row */}
        <div className="flex flex-col gap-3 border-t border-white/5 pt-6 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-white">
            <span className="text-sm font-black tracking-[0.24em]">SNEAKR</span>
            <span className="text-gray-500">|</span>
            <span className="text-gray-300">Future-forward footwear lab</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <span>© {new Date().getFullYear()} Sneakr Studio</span>
            <span className="hidden sm:block text-gray-600">•</span>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

