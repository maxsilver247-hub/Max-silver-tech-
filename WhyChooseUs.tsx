import type { ComponentType } from "react";
import { IMAGES } from "../data";
import {
  AwardIcon,
  BadgeCheckIcon,
  ClockIcon,
  ShieldCheckIcon,
  UsersIcon,
  WalletIcon,
  WrenchIcon,
} from "./Icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

type Feature = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: WrenchIcon,
    title: "Experienced Technicians",
    description: "Certified specialists with years of hands-on repair experience across all major brands.",
  },
  {
    icon: BadgeCheckIcon,
    title: "Quality Repair Service",
    description: "We use quality parts, precision tools and proven techniques on every single repair.",
  },
  {
    icon: ClockIcon,
    title: "Fast Turnaround",
    description: "Most common repairs are completed the same day, so you're never without your device for long.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Reliable Technical Solutions",
    description: "Every repair is fully tested and backed by a warranty for complete peace of mind.",
  },
  {
    icon: UsersIcon,
    title: "Customer-Focused Service",
    description: "Clear communication, honest advice and a friendly team that puts your needs first.",
  },
  {
    icon: WalletIcon,
    title: "Affordable & Transparent Pricing",
    description: "No hidden charges. You approve the price before we start any repair work.",
  },
];

const stats = [
  { value: "10+", label: "Years of experience" },
  { value: "5,000+", label: "Devices repaired" },
  { value: "98%", label: "Customer satisfaction" },
  { value: "24h", label: "Average turnaround" },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-royal-800/20 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Image collage */}
          <Reveal direction="right" className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-8 -z-10">
                <div className="h-full w-full rounded-[2.5rem] bg-royal-600/20 blur-[70px]" />
              </div>

              {/* Main image */}
              <div className="rounded-[1.75rem] bg-linear-to-br from-royal-400/50 via-white/10 to-transparent p-[1.5px]">
                <div className="overflow-hidden rounded-[1.65rem]">
                  <img
                    src={IMAGES.laptop}
                    alt="Technician repairing the internal components of a laptop"
                    className="aspect-[5/4] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Overlapping image */}
              <div className="absolute -bottom-10 -right-3 w-44 overflow-hidden rounded-2xl border border-white/15 bg-ink-900 shadow-[0_24px_60px_-15px_rgba(2,6,23,0.9)] sm:-right-8 sm:w-56">
                <img
                  src={IMAGES.phoneTools}
                  alt="Disassembled smartphone on a repair workbench with precision tools"
                  className="aspect-[4/4.4] w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Experience badge */}
              <div className="glass absolute -left-3 top-6 flex animate-float items-center gap-3.5 rounded-2xl p-4 pr-6 shadow-[0_18px_50px_-12px_rgba(2,6,23,0.85)] sm:-left-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-orange-500 text-ink-950 shadow-lg shadow-amber-500/30">
                  <AwardIcon className="h-6 w-6" />
                </span>
                <div className="leading-tight">
                  <p className="font-display text-2xl font-bold text-white">10+</p>
                  <p className="text-xs text-slate-400">Years of expertise</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Features */}
          <div>
            <SectionHeader
              align="left"
              eyebrow="Why Choose Us"
              title={
                <>
                  Why Choose <span className="text-gradient">Max-Silver Tech</span>?
                </>
              }
              description="We combine technical skill with honest service to deliver repairs that last — so you can rely on your devices every day."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <Reveal key={feature.title} delay={(i % 2) * 100 + Math.floor(i / 2) * 60}>
                    <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-royal-400/30 hover:bg-white/[0.05] sm:p-6">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-royal-500/90 to-royal-800 text-white shadow-lg shadow-royal-900/40 ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5.5 w-5.5" />
                      </span>
                      <h3 className="mt-4 font-display text-base font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {feature.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats band */}
        <Reveal delay={150}>
          <div className="glass mt-20 grid grid-cols-2 gap-y-10 rounded-3xl px-6 py-10 sm:px-10 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${i > 0 ? "lg:border-l lg:border-white/10" : ""}`}
              >
                <p className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
