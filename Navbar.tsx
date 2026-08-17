import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { CONTACT, NAV_LINKS, telLink } from "../data";
import { CloseIcon, LogoMark, MenuIcon, PhoneIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2.5" : "py-4 sm:py-5"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 sm:px-5",
            scrolled
              ? "glass shadow-[0_12px_44px_-12px_rgba(2,6,23,0.85)]"
              : "border border-transparent bg-transparent"
          )}
        >
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-royal-500 to-royal-800 shadow-lg shadow-royal-900/50 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105">
              <LogoMark className="h-5.5 w-5.5 text-silver-200" />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-silver-300 shadow-[0_0_12px_rgba(203,213,225,0.9)]" />
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

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={telLink(CONTACT.phone1Raw)}
              className="flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-royal-300">
                <PhoneIcon className="h-4 w-4" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
                  Call us now
                </span>
                <span>{CONTACT.phone1Display}</span>
              </span>
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-linear-to-r from-royal-500 to-royal-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-royal-900/50 ring-1 ring-white/20 transition-all duration-300 hover:shadow-royal-700/60 hover:brightness-110"
            >
              Book a Repair
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 lg:hidden",
            open ? "mt-2 max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="glass rounded-2xl p-4 shadow-[0_20px_60px_-15px_rgba(2,6,23,0.9)]">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-xl bg-linear-to-r from-royal-500 to-royal-700 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-royal-900/50"
              >
                Book a Repair
              </a>
              <a
                href={telLink(CONTACT.phone1Raw)}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200"
              >
                <PhoneIcon className="h-4 w-4 text-royal-300" />
                {CONTACT.phone1Display}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
