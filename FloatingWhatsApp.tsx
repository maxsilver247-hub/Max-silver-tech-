import { CONTACT, waLink } from "../data";
import { WhatsAppIcon } from "./Icons";

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink(CONTACT.whatsappNumber, "Hello Max-Silver Tech! I'd like to book a repair.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-xl border border-white/10 bg-ink-900/95 px-4 py-2 text-sm font-semibold text-white opacity-0 shadow-xl backdrop-blur transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Chat with us on WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inset-0 animate-ping-slow rounded-full bg-[#25D366]/50" />
        <span className="relative flex h-full w-full items-center justify-center rounded-full bg-linear-to-br from-[#25D366] to-[#128C7E] text-white shadow-[0_14px_40px_-8px_rgba(37,211,102,0.65)] ring-1 ring-white/25 transition-transform duration-300 group-hover:scale-110">
          <WhatsAppIcon className="h-6.5 w-6.5" />
        </span>
      </span>
    </a>
  );
}
