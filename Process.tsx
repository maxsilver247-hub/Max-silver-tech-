import type { ComponentType } from "react";
import { FlaskIcon, PhoneIcon, SearchIcon, WrenchIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

type Step = {
  icon: ComponentType<{ className?: string }>;
  number: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: PhoneIcon,
    number: "01",
    title: "Contact Us",
    description: "Tell us about your device problem — by phone, WhatsApp or our repair request form.",
  },
  {
    icon: SearchIcon,
    number: "02",
    title: "Device Diagnosis",
    description: "Our technician inspects your device and identifies the exact cause of the problem.",
  },
  {
    icon: WrenchIcon,
    number: "03",
    title: "Professional Repair",
    description: "We repair your device using quality tools, genuine parts and proven techniques.",
  },
  {
    icon: FlaskIcon,
    number: "04",
    title: "Test & Collect",
    description: "Your device is fully tested before it is returned to you — working like new again.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-royal-700/15 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-royal-800/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Repair Process"
          title={
            <>
              Simple, Transparent &amp; <span className="text-gradient">Stress-Free</span>
            </>
          }
          description="Getting your device fixed is easy. Follow our proven four-step process and we'll handle the rest."
        />

        <div className="relative mt-16">
          {/* Connector line */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-9 hidden h-px bg-linear-to-r from-transparent via-royal-400/40 to-transparent lg:block" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.number} delay={i * 130}>
                  <div className="group relative h-full rounded-3xl border border-white/10 bg-white/[0.03] p-7 text-center backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-royal-400/30 hover:bg-white/[0.05] hover:shadow-[0_24px_60px_-18px_rgba(59,84,230,0.45)]">
                    {/* Number watermark */}
                    <span className="pointer-events-none absolute right-5 top-4 font-display text-5xl font-bold text-white/[0.05] transition-colors duration-300 group-hover:text-royal-400/10">
                      {step.number}
                    </span>

                    <div className="relative mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center">
                      <span className="absolute inset-0 rounded-2xl bg-linear-to-br from-royal-500 to-royal-800 opacity-20 blur-lg transition-opacity duration-300 group-hover:opacity-45" />
                      <span className="relative flex h-full w-full items-center justify-center rounded-2xl border border-white/15 bg-ink-900 text-royal-300 shadow-lg shadow-royal-950/60 transition-transform duration-300 group-hover:scale-105">
                        <Icon className="h-7 w-7" />
                      </span>
                      <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-linear-to-br from-royal-400 to-royal-700 font-display text-[11px] font-bold text-white ring-2 ring-ink-950">
                        {step.number}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-lg font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
