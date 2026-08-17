import { useState, type FormEvent } from "react";
import { CONTACT, telLink, waLink } from "../data";
import {
  CheckIcon,
  ClockIcon,
  GlobeIcon,
  HeadsetIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./Icons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-royal-400/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-royal-500/25";

const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400";

type ContactLine = { text: string; href?: string };

const contactCards: {
  icon: typeof PhoneIcon;
  label: string;
  lines: ContactLine[];
  color: string;
  ring: string;
}[] = [
  {
    icon: PhoneIcon,
    label: "Call Us",
    lines: [
      { text: CONTACT.phone1Display, href: telLink(CONTACT.phone1Raw) },
      { text: CONTACT.phone2Display, href: telLink(CONTACT.phone2Raw) },
    ],
    color: "from-royal-400 to-royal-700",
    ring: "ring-royal-400/25",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    lines: [
      {
        text: CONTACT.phone1Display,
        href: waLink(CONTACT.whatsappNumber, "Hello Max-Silver Tech! I'd like to make an enquiry."),
      },
    ],
    color: "from-emerald-400 to-emerald-600",
    ring: "ring-emerald-400/25",
  },
  {
    icon: GlobeIcon,
    label: "Website",
    lines: [{ text: CONTACT.website, href: CONTACT.websiteUrl }],
    color: "from-silver-200 to-silver-500",
    ring: "ring-silver-400/25",
  },
  {
    icon: ClockIcon,
    label: "Business Hours",
    lines: [{ text: "Mon – Sat: 9:00 AM – 7:00 PM" }, { text: "Sunday: Closed" }],
    color: "from-cyan-400 to-royal-700",
    ring: "ring-cyan-400/25",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    device: "",
    problem: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof typeof form) => (value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const waText = `Hello Max-Silver Tech! I'd like to book a repair.%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0ADevice: ${encodeURIComponent(form.device)}%0AProblem: ${encodeURIComponent(form.problem)}%0AMessage: ${encodeURIComponent(form.message)}`;

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-royal-700/15 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title={
            <>
              Let's Get Your Device <span className="text-gradient">Fixed Today</span>
            </>
          }
          description="Reach out by phone, WhatsApp or send a repair request — our team will respond quickly with a solution."
        />

        <div className="mt-14 grid gap-10 lg:mt-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* Contact info */}
          <div className="space-y-4">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.label} delay={i * 90} direction="right">
                  <div className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]">
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br text-white shadow-lg ring-1 ${card.color} ${card.ring}`}
                    >
                      <Icon className="h-5.5 w-5.5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                        {card.label}
                      </p>
                      <div className="mt-0.5 flex flex-wrap items-center gap-x-3 gap-y-1">
                        {card.lines.map((line) =>
                          line.href ? (
                            <a
                              key={line.text}
                              href={line.href}
                              target={line.href.startsWith("http") ? "_blank" : undefined}
                              rel="noopener noreferrer"
                              className="truncate text-sm font-semibold text-white transition-colors hover:text-royal-300"
                            >
                              {line.text}
                            </a>
                          ) : (
                            <span key={line.text} className="text-sm font-medium text-slate-300">
                              {line.text}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}

            <Reveal delay={380} direction="right">
              <div className="relative overflow-hidden rounded-2xl border border-royal-400/25 bg-royal-500/10 p-5">
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-royal-400/20 blur-2xl" />
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-amber-400 to-orange-500 text-ink-950 shadow-lg shadow-amber-500/30">
                    <HeadsetIcon className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-white">We reply fast</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">
                      Send your repair request and we'll get back to you within minutes during
                      business hours — no long queues, no hassle.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal direction="left" delay={150}>
            <div className="glass relative overflow-hidden rounded-3xl p-6 shadow-[0_30px_90px_-25px_rgba(2,6,23,0.9)] sm:p-9">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-royal-400/60 to-transparent" />

              {submitted ? (
                <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                  <span className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-emerald-400 to-emerald-600 text-white shadow-[0_20px_60px_-15px_rgba(16,185,129,0.6)]">
                    <CheckIcon className="h-9 w-9" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-white">
                    Request Received!
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
                    Thank you, <span className="font-semibold text-white">{form.name || "friend"}</span>.
                    Our team will contact you shortly to confirm your repair. For an instant
                    response, send your request directly on WhatsApp.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`https://wa.me/${CONTACT.whatsappNumber}?text=${waText}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-all hover:brightness-110"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Send via WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", phone: "", device: "", problem: "", message: "" });
                      }}
                      className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => update("name")(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="0904 020 8282"
                        value={form.phone}
                        onChange={(e) => update("phone")(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="device" className={labelClass}>
                        Device Type
                      </label>
                      <select
                        id="device"
                        required
                        value={form.device}
                        onChange={(e) => update("device")(e.target.value)}
                        className={`${inputClass} bg-ink-900 [&>option]:bg-ink-900`}
                      >
                        <option value="" disabled>
                          Select device…
                        </option>
                        <option>Smartphone</option>
                        <option>Laptop</option>
                        <option>Tablet</option>
                        <option>Desktop</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="problem" className={labelClass}>
                        Repair Problem
                      </label>
                      <select
                        id="problem"
                        required
                        value={form.problem}
                        onChange={(e) => update("problem")(e.target.value)}
                        className={`${inputClass} bg-ink-900 [&>option]:bg-ink-900`}
                      >
                        <option value="" disabled>
                          Select problem…
                        </option>
                        <option>Screen Replacement</option>
                        <option>Battery Replacement</option>
                        <option>Charging Problem</option>
                        <option>Software Issue</option>
                        <option>Hardware Repair</option>
                        <option>Data Recovery</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Briefly describe the problem with your device…"
                      value={form.message}
                      onChange={(e) => update("message")(e.target.value)}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-linear-to-r from-royal-500 via-royal-600 to-royal-700 px-7 py-4 text-sm font-bold text-white shadow-[0_16px_44px_-12px_rgba(59,84,230,0.75)] ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_56px_-12px_rgba(59,84,230,0.9)]"
                  >
                    Submit Repair Request
                    <CheckIcon className="h-4 w-4 transition-transform duration-300 group-hover:scale-125" />
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    We'll respond quickly to confirm your repair. No hidden charges — ever.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
