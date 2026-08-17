import { CONTACT, telLink, waLink } from "../data";
import { PhoneIcon, WhatsAppIcon, ZapIcon } from "./Icons";
import Reveal from "./Reveal";

export default function CTABanner() {
  return (
    <section className="relative py-10 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-linear-to-br from-royal-800 via-royal-700 to-royal-950 px-6 py-16 text-center shadow-[0_40px_120px_-30px_rgba(43,64,207,0.7)] ring-1 ring-white/15 sm:px-12 lg:py-20">
            {/* Decorative layers */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
              <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-royal-400/30 blur-[100px]" />
              <div className="absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-royal-500/25 blur-[110px]" />
              <div className="absolute right-12 top-10 hidden h-24 w-24 animate-float rounded-3xl border border-white/10 bg-white/5 backdrop-blur sm:flex sm:items-center sm:justify-center">
                <ZapIcon className="h-9 w-9 text-amber-300" />
              </div>
              <div className="absolute bottom-12 left-10 hidden h-20 w-20 animate-float-slow rounded-full border border-white/10 bg-white/5 backdrop-blur sm:block" />
            </div>

            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-silver-200 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Ready when you are
              </span>

              <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Your Device Has a Problem?{" "}
                <span className="text-gradient-silver">Let's Fix It.</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-royal-100/85 sm:text-lg">
                Contact Max-Silver Tech today for professional phone and laptop repair services.
                Fast response, honest pricing and quality workmanship — every time.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={telLink(CONTACT.phone1Raw)}
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 text-sm font-bold text-royal-900 shadow-[0_18px_50px_-12px_rgba(2,6,23,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-12px_rgba(2,6,23,0.7)] sm:w-auto"
                >
                  <PhoneIcon className="h-4.5 w-4.5 text-royal-700" />
                  Call Now
                </a>
                <a
                  href={waLink(CONTACT.whatsappNumber, "Hello Max-Silver Tech! I need help with my device.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-8 py-4 text-sm font-bold text-white shadow-[0_18px_50px_-12px_rgba(37,211,102,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
                >
                  <WhatsAppIcon className="h-4.5 w-4.5" />
                  WhatsApp Us
                </a>
              </div>

              <p className="mt-6 text-xs text-royal-200/70">
                ⚡ Response within minutes during business hours · {CONTACT.hours}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
