import type { ReactNode } from "react";
import { cn } from "../utils/cn";
import { ZapIcon } from "./Icons";
import Reveal from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full border border-royal-400/25 bg-royal-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-royal-300",
          align === "center" ? "" : ""
        )}
      >
        <ZapIcon className="h-3.5 w-3.5" />
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
