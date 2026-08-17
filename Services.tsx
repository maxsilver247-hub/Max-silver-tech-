import type { ComponentType } from "react";
import {
  ArrowRightIcon,
  CheckIcon,
  CodeIcon,
  LaptopIcon,
  SmartphoneIcon,
} from "./Icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

type Service = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  features: string[];
  iconBg: string;
  iconColor: string;
  glow: string;
  bar: string;
};

const services: Service[] = [
  {
    icon: SmartphoneIcon,
    title: "Phone Repairs",
    tagline: "Complete smartphone solutions for every brand",
    features: [
      "Screen replacement",
      "Charging problems",
      "Battery replacement",
      "Software issues",
      "Boot-loop problems",
      "General smartphone repairs",
    ],
    iconBg: "from-royal-400 to-royal-700",
    iconColor: "text-white",
    glow: "hover:shadow-[0_30px_70px_-20px_rgba(59,84,230,0.5)]",
    bar: "from-royal-400 via-royal-600 to-royal-800",
  },
  {
    icon: LaptopIcon,
    title: "Laptop Repairs",
    tagline: "Expert care for notebooks and desktop machines",
    features: [
      "Screen replacement",
      "Keyboard replacement",
      "Charging faults",
      "Windows/software problems",
      "Slow-performance troubleshooting",
      "Hardware repairs",
    ],
    iconBg: "from-silver-200 to-silver-500",
    iconColor: "text-ink-950",
    glow: "hover:shadow-[0_30px_70px_-20px_rgba(148,163,184,0.35)]",
    bar: "from-silver-200 via-silver-400 to-royal-600",
  },
  {
    icon: CodeIcon,
    title: "Software & System Solutions",
    tagline: "Get your device running fast and smooth again",
    features: [
      "Device troubleshooting",
      "Software installation",
      "System optimization",
      "General technical support",
    ],
    iconBg: "from-cyan-400 to-royal-700",
    iconColor: "text-white",
    glow: "hover:shadow-[0_30px_70px_-20px_rgba(34,211,238,0.4)]",
    bar: "from-cyan-400 via-royal-500 to-royal-800",
  },
];

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  const Icon = service.icon;
  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-white/20 sm:p-8 ${service.glow}`}
      >
        {/* Top gradient bar */}
        <div
          className={`absolute inset-x-0 top-0 h-[3px] bg-linear-to-r opacity-80 ${service.bar}`}
        />
        {/* Radial sheen */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-royal-500/15 blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-60" />

        <div className="flex items-start justify-between">
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br shadow-lg ${service.iconBg} ${service.iconColor} ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
          >
            <Icon className="h-7 w-7" />
          </span>
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            Repair
          </span>
        </div>

        <h3 className="mt-6 font-display text-xl font-bold text-white sm:text-2xl">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.tagline}</p>

        <ul className="mt-6 flex-1 space-y-3">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-royal-500/15 text-royal-300 ring-1 ring-royal-400/30">
                <CheckIcon className="h-3 w-3" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-royal-300 transition-all duration-300 hover:gap-3.5 hover:text-royal-200"
        >
          Request this service
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-royal-800/20 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title={
            <>
              Complete Repair Solutions for{" "}
              <span className="text-gradient">Every Device</span>
            </>
          }
          description="From cracked screens to slow systems, our certified technicians diagnose and repair a wide range of problems — using quality parts and precision tools."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}
