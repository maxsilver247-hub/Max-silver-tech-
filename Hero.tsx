import { BRANDS, CONTACT, IMAGES, telLink } from "../data";
import { ArrowRightIcon, PhoneIcon, ShieldCheckIcon, StarIcon, ZapIcon } from "./Icons";
import Reveal from "./Reveal";

function BrandMarquee() {
  return (
    <div className="relative mt-16 overflow-hidden border-y border-white/5 bg-white/[0.02] py-7 lg:mt-24">
      <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">
        Trusted with leading device brands
      </p>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="font-display text-lg font-semibold tracking-wide text-slate-400/70 transition-colors hover:text-silver-200"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-10 sm:pt-36 lg:pt-44">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        <div className="absolute -left-48 -top-48 h-[36rem] w-[36rem] rounded-full bg-royal-700/25 blur-[130px]" />
        <div className="absolute -right-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-royal-500/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-silver-400/10 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-royal-400/25 bg-royal-500/10 px-4 py-2 text-xs font-semibold text-royal-200 backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping-slow rounded-full bg-royal-300" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-royal-300" />
                </span>
                Trusted Device Repair Specialists
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
                Expert Phone &amp; Laptop Repairs{" "}
                <span className="text-gradient">You Can Trust</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0">
                Fast, reliable and professional repair services for smartphones, laptops and other
                digital devices. Get your device working like new again.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="group relative inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-linear-to-r from-royal-500 via-royal-600 to-royal-700 px-7 py-4 text-sm font-semibold text-white shadow-[0_16px_44px_-12px_rgba(59,84,230,0.75)] ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_56px_-12px_rgba(59,84,230,0.9)] sm:w-auto"
                >
                  Book a Repair
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a
                  href={telLink(CONTACT.phone1Raw)}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-white/12 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 sm:w-auto"
                >
                  <PhoneIcon className="h-4 w-4 text-royal-300" />
                  Contact Us
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start">
                <div className="flex items-center gap-2.5">
                  <div className="flex gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-400">
                    <span className="font-semibold text-white">4.9/5</span> · 1,200+ reviews
                  </span>
                </div>
                <span className="hidden h-5 w-px bg-white/10 sm:block" />
                <p className="text-sm text-slate-400">
                  <span className="font-semibold text-white">5,000+</span> devices repaired
                </p>
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal direction="left" delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              {/* Glow + rotating ring */}
              <div className="absolute -inset-6 -z-10">
                <div className="h-full w-full rounded-full bg-royal-600/25 blur-[70px]" />
              </div>
              <div className="absolute -right-8 -top-8 -z-10 h-44 w-44 animate-spin-slow rounded-full border border-dashed border-royal-400/30" />
              <div className="absolute -bottom-6 -left-6 -z-10 h-28 w-28 rounded-full bg-royal-500/25 blur-2xl" />

              {/* Main image */}
              <div className="rounded-[1.75rem] bg-linear-to-br from-royal-400/50 via-white/10 to-transparent p-[1.5px] shadow-[0_30px_90px_-20px_rgba(2,6,23,0.9)]">
                <div className="overflow-hidden rounded-[1.65rem]">
                  <img
                    src={IMAGES.heroMain}
                    alt="Professional technician repairing a smartphone in a modern workshop"
                    className="aspect-[4/5] w-full object-cover sm:aspect-[5/5.4]"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Floating card: same-day service */}
              <div className="glass absolute -left-3 top-8 flex animate-float items-center gap-3 rounded-2xl p-3.5 pr-5 shadow-[0_18px_50px_-12px_rgba(2,6,23,0.8)] sm:-left-8">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-orange-500 text-ink-950 shadow-lg shadow-amber-500/30">
                  <ZapIcon className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-white">Same-Day Service</p>
                  <p className="text-xs text-slate-400">Most repairs done fast</p>
                </div>
              </div>

              {/* Floating card: rating */}
              <div className="glass absolute -bottom-6 right-2 flex animate-float-slow items-center gap-3 rounded-2xl p-3.5 pr-5 shadow-[0_18px_50px_-12px_rgba(2,6,23,0.8)] sm:-right-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-royal-400 to-royal-700 text-white shadow-lg shadow-royal-700/40">
                  <ShieldCheckIcon className="h-5 w-5" />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-white">Quality Guaranteed</p>
                  <p className="text-xs text-slate-400">90-day repair warranty</p>
                </div>
              </div>

              {/* Floating chip */}
              <div className="glass absolute -top-4 right-6 flex animate-float items-center gap-2 rounded-full px-4 py-2 shadow-[0_14px_40px_-10px_rgba(2,6,23,0.8)] [animation-delay:1.2s]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/90">
                  <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3 text-ink-950" stroke="currentColor" strokeWidth={3.2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <span className="text-xs font-semibold text-white">Device Fixed</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <BrandMarquee />
    </section>
  );
}
