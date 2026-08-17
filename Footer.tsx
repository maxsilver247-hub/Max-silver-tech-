import { CONTACT, NAV_LINKS, telLink, waLink } from "../data";
import { GlobeIcon, LogoMark, PhoneIcon, WhatsAppIcon } from "./Icons";

const serviceLinks = [
  "Phone Repairs",
  "Laptop Repairs",
  "Software & System Solutions",
  "Device Diagnostics",
  "Hardware Upgrades",
  "Data Recovery",
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#03050b]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-royal-500/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-10">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-royal-500 to-royal-800 shadow-lg shadow-royal-900/50 ring-1 ring-white/20">
                <LogoMark className="h-5.5 w-5.5 text-silver-200" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[15px] font-bold tracking-wide text-white">
                  MAX-SILVER
                </span>
                <span className="text-gradient-silver font-display text-[13px] font-bold tracking-[0.42em]">
                  TECH
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Reliable technology solutions you can trust. Expert phone &amp; laptop repairs with
              quality parts and honest pricing.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={waLink(CONTACT.whatsappNumber, "Hello Max-Silver Tech!")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:text-emerald-300"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={telLink(CONTACT.phone1Raw)}
                aria-label="Call us"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-royal-400/40 hover:text-royal-300"
              >
                <PhoneIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={CONTACT.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our website"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-silver-400/40 hover:text-silver-200"
              >
                <GlobeIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-3 bg-royal-400/50 transition-all duration-300 group-hover:w-5 group-hover:bg-royal-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Our Services
            </h4>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    <span className="h-px w-3 bg-royal-400/50 transition-all duration-300 group-hover:w-5 group-hover:bg-royal-300" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Contact Us
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-slate-400">
              <li>
                <a
                  href={telLink(CONTACT.phone1Raw)}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0 text-royal-300" />
                  {CONTACT.phone1Display}
                </a>
              </li>
              <li>
                <a
                  href={telLink(CONTACT.phone2Raw)}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <PhoneIcon className="h-4 w-4 shrink-0 text-royal-300" />
                  {CONTACT.phone2Display}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <GlobeIcon className="h-4 w-4 shrink-0 text-royal-300" />
                  {CONTACT.website}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="h-4 w-4 shrink-0 rounded-full border border-royal-300/40 text-center text-[9px] font-bold leading-4 text-royal-300">
                  ⚡
                </span>
                {CONTACT.hours}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} MAX-SILVER TECH. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Reliable technology solutions you can trust.
          </p>
        </div>
      </div>
    </footer>
  );
}
